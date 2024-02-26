import React, { useContext, useEffect, useState } from "react";
import "./MainProductDetails.css";
import BodyDetails from "../Common Component/Deteils Com/BodyDetails";
import { Col, Container, Row } from "react-bootstrap";
import ProductSlider from "./ProductSlider";
import ProductHead from "./ProductHead";
import { IoAddOutline, IoRemoveOutline } from "react-icons/io5";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import useFetch from "../../hooks/useFetch";
import { ContextLang } from "../../App";

const MainProductDetails = () => {
  const productPrams = useParams();
  const { t, i18n } = useTranslation();
  const { data: product_id } = useFetch(
    `/api/v1/products/get-product-details?product_id=${productPrams.productId}`
  );
  const { selectedLanguage } = useContext(ContextLang);
  const [increase, setIncrease] = useState(0);
  const { data: day } = useFetch("/api/v1/days/get-all");

  const increseNumber = () => {
    setIncrease((prevIncrease) => prevIncrease + 1);
  };

  const decreseNumber = () => {
    if (increase > 0) setIncrease((prevIncrease) => prevIncrease - 1);
  };

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
                              <p className="btn btn_day action">
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
                      <input type="time" className="input_time" />
                    </div>
                  </div>
                </div>
              </div>
            </Row>
          </div>

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
                <span>
                {t("total_price")}
                </span>
                  {(product_id?.data?.price_after_discount * increase).toFixed(
                    2
                  )}{" "}
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
                <Link to="/cart_shop" className="btn btn-Add">
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
