import React from "react";
import "../cart.css";
import { Col, Container, Row } from "react-bootstrap";
import { ServesCard } from "../../Booking/Main Booking/BookingOne/ServesCard";
import serves from "../../../images/Rectangle 195.png";
import BookHead from "../../Booking/Main Booking/Book Head/BookHead";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
export const MainCartCom = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="main_book main_card py-lg-3 py-md-2 pb-5">
      <Container className=" booking_container">
        <Row className="booking_row_main ">
          <h2>{t("cart_title")}</h2>
          <Col xs={12} lg={7} md={7} sm={12} className="border main_col py-2">
            <div className="serves_col">
              <ServesCard
                img={serves}
                title={t("cart_h")}
                prag={t("cart_p")}
                price={"129"}
              />
              <ServesCard
                img={serves}
                title={t("cart_h")}
                prag={t("cart_p")}
                price={"129"}
              />
              <ServesCard
                img={serves}
                title={t("cart_h")}
                prag={t("cart_p")}
                price={"129"}
              />
              <ServesCard
                img={serves}
                title={t("cart_h")}
                prag={t("cart_p")}
                price={"129"}
              />
            </div>
            <div className="row">
              <Link to="/checkout" className="btn btn_next">
                {t("cart_btn")}
              </Link>
            </div>
          </Col>
          <Col xs={12} lg={5} md={4} sm={12} className="row ">
            <Col
              xs={12}
              lg={12}
              md={12}
              sm={12}
              className="border booking_details"
            >
              <h4>
              {t("booking_title")}
              </h4>
              <div className="row">
                <h6 className="col-lg-5 col-md-12">
                {t("booking_address")}
                </h6>
                <p className="col-lg-7 col-md-12">
                {t("booking_address_add")}

                </p>
              </div>
              <div className="row">
                <h6 className="col-lg-5">
                {t("booking_serves")}
                
                </h6>
                <p className="col-lg-7">
                {t("cart_h")}

                </p>
              </div>
              <div className="row d-flex">
                <h6 className="col-lg-5">
                {t("booking_phone")}
                </h6>
                <p className="serves_name col-lg-7">+20115269845</p>
              </div>
            </Col>
            <Col
              xs={12}
              lg={12}
              md={12}
              sm={12}
              className="border booking_details total"
            >
              <h4>
                {t("payment_title")}
              </h4>
              <div className="row">
                <Col xs={7} lg={7} md={6} sm={7}>
                  <h6 className=" ">{t("payment_total")}</h6>
                </Col>
                <Col xs={5} lg={5} md={6} sm={5}>
                  <p className=""> 20 {t("price")}</p>
                </Col>
              </div>
              <div className="row">
                <Col xs={7} lg={7} md={6} sm={7}>
                  <h6 className=" ">
                    {t("payment_delivery")}
                  </h6>
                </Col>
                <Col xs={5} lg={5} md={6} sm={5}>
                  <p className="">40 {t("price")} </p>
                </Col>
              </div>
              <div className="row">
                <Col xs={7} lg={7} md={6} sm={7}>
                  <h6 className=" ">
                    {t("payment_taps")}
                  </h6>
                </Col>
                <Col xs={5} lg={5} md={6} sm={5}>
                  <p className="">10 {t("price")}</p>
                </Col>
              </div>
              <div className="row price_total">
                <Col xs={7} lg={7} md={6} sm={7}>
                  <h6 className=" ">{t("order_total")}</h6>
                </Col>
                <Col xs={5} lg={5} md={6} sm={5}>
                  <p className="">30 {t("price")}</p>
                </Col>
              </div>
            </Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
