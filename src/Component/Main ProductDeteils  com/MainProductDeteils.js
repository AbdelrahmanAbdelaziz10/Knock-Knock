import React, { useContext, useEffect, useState } from "react";
import "./MainProductDetails.css";
import { Alert, Card, Col, Container, Row } from "react-bootstrap";
import ProductSlider from "./ProductSlider";
import ProductHead from "./ProductHead";
import { IoAddOutline, IoRemoveOutline } from "react-icons/io5";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import useFetch from "../../hooks/useFetch";
import { ContextLang, ProductDetailsContext, ToggleContext } from "../../App";
import { FaCircleExclamation } from "react-icons/fa6";
import { CartCountContext } from "../../Context/CartCountContext";
import Swal from "sweetalert2";
import { FaHome } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";

const MainProductDetails = () => {
  const { t } = useTranslation();
  const { saveProductDetails, productDetails } = useContext(
    ProductDetailsContext
  );
  const { saveToggle, toggle } = useContext(ToggleContext);
  const { selectedLanguage } = useContext(ContextLang);
  const productPrams = useParams();
  const navigate = useNavigate();
  const loginFormData = JSON.parse(localStorage.getItem("loginFormData"));
  const { data: day } = useFetch("/api/v1/days/get-all");
  const { data: setting } = useFetch("/api/v1/settings/get-all");
  // console.log(productPrams)
  const { data: product_id } = useFetch(
    `/api/v1/products/get-product-details?product_id=${productPrams.productId}`
  );
  const { count, setCount } = useContext(CartCountContext);

  const [shopingCost, setShopingCost] = useState(setting?.data?.shipping_cost);
  const [increase, setIncrease] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);
  const [selectedDayId, setSelectedDayId] = useState(null);
  const [timeValue, setTimeValue] = useState("");
  const [textValue, setTextValue] = useState("");
  const [refactorError, setRefactorError] = useState("");

  const increseNumber = () => {
    setIncrease((prevIncrease) => prevIncrease + 1);
  };

  const decreseNumber = () => {
    if (increase > 0) setIncrease((prevIncrease) => prevIncrease - 1);
  };

  const handleDayClick = (dayId) => {
    setSelectedDayId(dayId);
  };

  const handleTimeChange = (e) => {
    setTimeValue(e.target.value);
  };
  const newGrandTotal = (
    +product_id?.data?.price_after_discount +
    (+setting?.data?.shipping_cost || 0)
  ).toFixed(2);
  const grandTotalWithShipping = (newGrandTotal * increase).toFixed(2);

  const addToCart = () => {
    const oldCartItems = JSON.parse(localStorage.getItem("all-cart-items"));
    let obj = { ...product_id?.data, quantity: 1 };
    if (oldCartItems) {
      let isAddedBefore = oldCartItems?.find(
        (item) => item.id === product_id?.data.id
      );
      if (isAddedBefore) {
        Swal.fire({
          title: "This Product is already Added to Cart",
        });
        // alert('This Product is already Added to Cart');
        return;
      }else {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500
        });
        navigate("/")
      }
      localStorage.setItem(
        "all-cart-items",
        JSON.stringify([...oldCartItems, obj])
      );
      setCount(count + 1);
    } else {
      localStorage.setItem("all-cart-items", JSON.stringify([obj]));
      setCount(count + 1);
    }
  };

  const addProduct = () => {
    if (increase === 0) {
      // Handle validation error, e.g., show an alert
      setRefactorError("Please select a Amount of product you need");
      return;
    } else {
      setGrandTotal(grandTotalWithShipping);
      saveProductDetails({
        user_id: loginFormData.id,
        selected_day_id: selectedDayId,
        selected_time: timeValue,
        notes: textValue,
      });
      saveToggle(false);
      navigate("/location");
    }
  };

  useEffect(() => {
    setGrandTotal(grandTotalWithShipping);
  }, [increase, product_id?.data?.price_after_discount]);

  return (
    <>
      {/* <div className="main_product_details py-3">
        <Container>
          <div className="row">
            <ProductHead
              img={`https://dashboard.knock-knock.ae/${product_id?.data?.image}`}
              page1={t("all_product_product")}
              page2_ar={product_id?.data?.name_ar}
              page2_en={product_id?.data?.name_en}

            />
          </div>

          <div className="body_details my-4">
            <Row>
              <div className="description">
                <h4>
                  {selectedLanguage === "en"
                    ? product_id?.data?.name_en
                    : product_id?.data?.name_ar}
                </h4>
                {selectedLanguage === "en" ? (
                  <p
                    dangerouslySetInnerHTML={{
                      __html: product_id?.data?.description_en,
                    }}
                  />
                ) : (
                  <p
                    dangerouslySetInnerHTML={{
                      __html: product_id?.data?.description_ar,
                    }}
                  />
                )}
              </div>
              <div className="stock mb-3">
                <h4 className="mb-3">
                  {t("details_avilable")}
                  <span>{product_id?.data?.quantity}</span>
                </h4>
                <h4>
                  {t("details_sku")} <span>{product_id?.data?.code}</span>
                </h4>
              </div>
              <div className="price_serves stock mb-2 row">
                <Col xs={6} lg={4} md={4} sm={6}>
                  <h4>
                    {t("details_serves_price")}
                    <span> {product_id?.data?.price} $</span>
                  </h4>
                </Col>
                <Col xs={6} lg={4} md={4} sm={6}>
                  <h4>
                    {t("details_serves_discount")}
                    <span className="discount">
                      {product_id?.data?.discount}%
                    </span>
                  </h4>
                </Col>
                <Col xs={10} lg={4} md={4} sm={10}>
                  <h4>
                    {t("details_serves_shopping")}
                    <span className="">
                      {setting?.data?.shipping_cost} </span><span>{t("price")}
                    </span>
                  </h4>
                </Col>
              </div>

            </Row>
          </div>
          <Row>
            <Col xs={12} lg={6} md={6} sm={12}>
              <div className="nots mb-4">
                <FaCircleExclamation className="icon" />
                <p>{t("serves_details_massage")}</p>
              </div>
            </Col>
            <Col xs={12} lg={6} md={6} sm={12}>
              <div className="nots nots_add mb-4">
                <p>{t("details_nots_p")}</p>
                <input
                  type="text"
                  className=" form-control input_nots"
                  placeholder={t("details_nots_placeholder")}
                  value={textValue}
                  onChange={(e) => setTextValue(e.target.value)}
                />
              </div>
            </Col>
          </Row>
          <div className="row time_date">
            <div className="col-lg-12 row justify-content-center add_btn ">
              <Col
                xs={12}
                lg={9}
                md={9}
                sm={12}
                className="col-lg-4 col-md-3 mt-3 "
              >
                <button onClick={addToCart} className="btn btn-Add">
                  {t("details_btn")}
                </button>
              </Col>
              {refactorError && (
                <Alert className="Alert" variant="danger">{refactorError} </Alert>
              )}
            </div>
          </div>
        </Container>
      </div> */}
      <div className="main_product_details pb-5 pt-3">
        <Container>
        <Row >
        <div className='row product_header  mb-4 justify-content-center'>
<div className='head_title'>
<Link to="/" className=''>
<FaHome className='home_icon'/>
</Link> 
<Link to="" className='page1'> 
<MdKeyboardArrowRight className='home_icon'/>  {t("all_product_product")}
</Link> 
{selectedLanguage==="en"?(<span> <MdKeyboardArrowRight className='home_icon'/>  {product_id?.data?.name_en}</span>):
(<span> <MdKeyboardArrowRight className='home_icon'/>  {product_id?.data?.name_ar}</span>)}



</div>

</div>
        </Row>
          <Row className="justify-content-center">
            <Col xs={11} lg={11} md={12} sm={11} className="">
              <Card className="row card_details ">
              <Row>
              <Col xs={12} lg={4} md={4} sm={12} className="">
                  <div className="product_img">
                    <img
                      src={`https://dashboard.knock-knock.ae/${product_id?.data?.image}`}
                      alt=""
                    />
                  </div>
                </Col>
                <Col xs={12} lg={8} md={8} sm={12} className="row details_row">
                  <div className="details">
                    <p>Product</p>
                    <h4 className="product_name">
                      {selectedLanguage === "en"
                        ? product_id?.data?.name_en
                        : product_id?.data?.name_ar}
                    </h4>
                    {selectedLanguage === "en" ? (
                  <p
                    dangerouslySetInnerHTML={{
                      __html: product_id?.data?.description_en,
                    }}
                  />
                ) : (
                  <p
                    dangerouslySetInnerHTML={{
                      __html: product_id?.data?.description_ar,
                    }}
                  />
                )}
              </div>
              <div className="stock mb-2 d-flex">
              <h4 className="">
                  {t("details_sku")} <span>{product_id?.data?.code}</span>
                </h4>
                <h4 className="mb-3 sku">
                  {t("details_avilable")}
                  <span>{product_id?.data?.quantity}</span>
                </h4>

              </div>
              <div className="price_serves stock mb-3 row">
                <Col xs={12} lg={4} md={6} sm={12}>
                  <h4>
                    {t("details_serves_price")}
                    <span> {product_id?.data?.price} $</span>
                  </h4>
                </Col>
                <Col xs={12} lg={3} md={6} sm={12}>
                  <h4>
                    {t("details_serves_discount")}
                    <span className="discount">
                      {product_id?.data?.discount}%
                    </span>
                  </h4>
                </Col>
                <Col xs={10} lg={5} md={11} sm={10}>
                  <h4>
                    {t("details_serves_shopping")}
                    <span className="">
                      {setting?.data?.shipping_cost} </span><span>{t("price")}
                    </span>
                  </h4>
                  
                </Col>          
                  </div>

                </Col>
                
              </Row>
              <Row>
              <Row className="nots_row">
              <Col xs={0} lg={4} md={0} sm={0}>
              </Col>
            <Col xs={12} lg={4} md={6} sm={12}>
              <div className="nots mb-4">
                <FaCircleExclamation className="icon" />
                <p>{t("serves_details_massage")}</p>
              </div>
            </Col>
            <Col xs={12} lg={4} md={6} sm={12}>
              <div className="nots nots_add mb-4">
                <p>{t("details_nots_p")}</p>
                <input
                  type="text"
                  className=" form-control input_nots"
                  placeholder={t("details_nots_placeholder")}
                  value={textValue}
                  onChange={(e) => setTextValue(e.target.value)}
                />
              </div>
            </Col>
          </Row>
          <div className="row time_date">
            <div className="col-lg-12 row justify-content-center add_btn ">
              <Col
                xs={12}
                lg={9}
                md={9}
                sm={12}
                className="col-lg-4 col-md-3 mt-3 "
              >
                <button onClick={()=>{addToCart()}} className="btn btn-Add">
                  {t("details_btn")}
                </button>
              </Col>
              {refactorError && (
                <Alert className="Alert" variant="danger">{refactorError} </Alert>
              )}
            </div>
          </div>
              </Row>
              

              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default MainProductDetails;
