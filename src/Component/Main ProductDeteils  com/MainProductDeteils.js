import React, { useContext, useEffect, useState } from "react";
import "./MainProductDetails.css";
import { Col, Container, Row } from "react-bootstrap";
import ProductSlider from "./ProductSlider";
import ProductHead from "./ProductHead";
import { IoAddOutline, IoRemoveOutline } from "react-icons/io5";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import useFetch from "../../hooks/useFetch";
import { ContextLang, ProductDetailsContext, ToggleContext } from "../../App";
import { FaCircleExclamation } from "react-icons/fa6";

const MainProductDetails = () => {
  const { t } = useTranslation();
  const { saveProductDetails,productDetails } = useContext(ProductDetailsContext);
  const { saveToggle,toggle } = useContext(ToggleContext);
  const { selectedLanguage } = useContext(ContextLang);
  const productPrams = useParams();
  const loginFormData = JSON.parse(localStorage.getItem('loginFormData'));
  const { data: day } = useFetch("/api/v1/days/get-all");
  const { data: setting } = useFetch("/api/v1/settings/get-all");
console.log(productPrams)
  const { data: product_id } = useFetch(`/api/v1/products/get-product-details?product_id=${productPrams.productId}`);

  const [shopingCost,setShopingCost]=useState(setting?.data?.shipping_cost)
  const [increase, setIncrease] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);
  const [selectedDayId, setSelectedDayId] = useState(null);
  const [timeValue, setTimeValue] = useState("");
  const [textValue, setTextValue] = useState("");

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
  const newGrandTotal = (+product_id?.data?.price_after_discount + (+setting?.data?.shipping_cost || 0)).toFixed(2);
  const grandTotalWithShipping = (newGrandTotal* increase).toFixed(2);
  // console.log(    
  //     "user_id:", loginFormData.id,
  //   "product_id:", productPrams.productId,
  //   "selected_day_id:", selectedDayId,
  //   "selected_time:", timeValue,
  //   "notes:", textValue,
  //   "product_quantities:", increase,
  //   "discount_amount:", product_id?.data?.discount,
  //   "price_after_discount:", product_id?.data?.price_after_discount,
  //   "grand_total:", grandTotalWithShipping
  //   );
    


  const addProduct = () => {
    setGrandTotal(grandTotalWithShipping);
    saveProductDetails({
      user_id: loginFormData.id,
      selected_day_id: selectedDayId,
      selected_time: timeValue,
      payment_method: "cash",
      notes: textValue,
      product_ids:JSON.stringify([productPrams.productId]),
      product_quantities:JSON.stringify([increase]),
      discount_amount: product_id?.data?.discount,
      price_after_discount: product_id?.data?.price_after_discount,
      grand_total: grandTotalWithShipping,
    });
    saveToggle(false);
    console.log(productDetails)
    console.log(toggle)

  };

  useEffect(() => {
    setGrandTotal(grandTotalWithShipping);
  }, [increase, product_id?.data?.price_after_discount]);


  return (
    <>
      <div className="main_product_details py-3">
        <Container>
        <div className="row">
            <ProductHead
              img={`https://dashboard.knock-knock.ae/${product_id?.data.image}`}
              page1={t("all_product_product")}
              page2_ar={product_id?.data?.name_ar}
              page2_en={product_id?.data?.name_en}

            />
            <ProductSlider />
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
                <Col xs={6} lg={6} md={6} sm={6}>
                  <h4>
                    {t("details_serves_price")}
                    <span> {product_id?.data?.price} $</span>
                  </h4>
                </Col>
                <Col xs={6} lg={6} md={6} sm={6}>
                  <h4>
                    {t("details_serves_discount")}
                    <span className="discount">
                      {product_id?.data?.discount}%
                    </span>
                  </h4>
                </Col>
              </div>
              <div className="time_date">
                <div className="delivery_date row mb-4">
                  <Col xs={11} lg={10} md={12} sm={11} className=" date_day">
                    <h5 className="my-2">{t("details_date")}</h5>
                    {day && (
                      <Row className="d-flex justify-content-between mt-4 ">
                        {day.data.map((day, idx) => {
                          return (
                            <Col
                              xs={3}
                              lg={1}
                              md={1}
                              sm={4}
                              className="d-flex day_booking"
                              key={day.id}
                            >
                              <p
                                className={`btn btn_day action ${
                                  selectedDayId === day.id ? "active" : ""
                                }`}
                                onClick={() => handleDayClick(day.id)}
                              >
                                {selectedLanguage === "en"
                                  ? day.name_en
                                  : day.name_ar}
                              </p>
                            </Col>
                          );
                        })}
                      </Row>
                    )}
                  </Col>
                  <div className="col-lg-12 col-md-6">
                    <h5>{t("details_time")}</h5>
                    <div className="time_input">
                    <input
                        type="time"
                        className="input_time"
                        value={timeValue}
                        onChange={handleTimeChange}
                      />                    </div>
                  </div>
                </div>
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
              <Col xs={6} lg={3} md={4} sm={6} className="col-lg-3 col-md-4">
                <button className="btn decincrease" onClick={decreseNumber}>
                  <IoRemoveOutline className="remove" />
                </button>
                <span>{increase}</span>
                <button className="btn increase" onClick={increseNumber}>
                  <IoAddOutline className="add" />
                </button>
              </Col>
              <Col
                xs={6}
                lg={5}
                md={5}
                sm={6}
                className="col-lg-5 col-md-5 mt-2"
              >
                <button className=" total_price mt-2">
                  <span>{t("total_price")}</span>
                  {grandTotal}
                  {t("price")}
                </button>
              </Col>
              <Col
                xs={12}
                lg={4}
                md={3}
                sm={12}
                className="col-lg-4 col-md-3 mt-3 "
              >
                <Link onClick={addProduct} to='/location' className="btn btn-Add">
                  {t("details_btn")}
                </Link>
              </Col>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default MainProductDetails;