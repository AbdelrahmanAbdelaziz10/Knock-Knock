import React from "react";
import "./MainCheckOut.css";
import { Col, Container, Row } from "react-bootstrap";
import BookHead from "../../Booking/Main Booking/Book Head/BookHead";
import { ServesCard } from "../../Booking/Main Booking/BookingOne/ServesCard";
import serves from "../../../images/Rectangle 195.svg";
import { Link } from "react-router-dom";
import { FaRegCreditCard } from "react-icons/fa";
import { SiVisa } from "react-icons/si";
import { FaCircleExclamation } from "react-icons/fa6";
import "../../../Component/Main ProductDeteils  com/MainProductDetails.css";
import { i18n } from "i18next";
import { useTranslation } from "react-i18next";
import PaymentSummary from "./PaymentSummary";
import BookingDetails from "./BookingDetails";

export const MainCheckOut = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="main_book py-lg-3 py-md-2 pb-5">
      <Container className=" booking_container">
        <Row className="booking_row_main ">
          {/* <BookHead stepnum={3} title={"Check Out"} /> */}
          <Col
            xs={12}
            lg={7}
            md={8}
            sm={12}
            className="border main_col py-3 ps-lg-4"
          >
            <div className="">
              <div className="payment ">
                <div className="payment_title d-flex">
                  <h4> {t("check_title")}</h4>
                  <Link to="/credit_card" className="change_card">
                    <span className="">{t("check_change")}</span>
                  </Link>
                </div>

                <div className="create_pay mb-4">
                  <Row className="row">
                    <Col xs={9} lg={10} md={7} sm={9}>
                      <h6 className="credit">
                        <FaRegCreditCard className="create" />
                        <span>{t("add_card_visa")}</span>
                      </h6>
                    </Col>
                    <Col xs={3} lg={1} md={5} sm={3}>
                      <SiVisa className="visa" />
                    </Col>
                  </Row>
                </div>

                <Row className="px-lg-4">
                  <Col xs={12} md={12} lg={12} sm={12} className="mb-4">
                    <input
                      type="number"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder={t("add_card_placeholder_card")}
                    />
                  </Col>
                  <Col xs={12} md={6} lg={6} sm={12} className="mb-4">
                    <input
                      type="number"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder={t("add_card_placeholder_date")}
                    />
                  </Col>
                  <Col xs={12} md={6} lg={6} sm={12} className="mb-4">
                    <input
                      type="number"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder={t("add_card_placeholder_cvv")}
                    />
                  </Col>
                </Row>
                <Row>
                  <div className="nots mb-4">
                    <FaCircleExclamation className="icon" />
                    <p>{t("add_card_massage")}</p>
                    <span className=" btn-details">
                      {t("all_product_product_btn")}
                    </span>
                  </div>
                </Row>
                <Row>
                  <h4>
                    {t("check_code_title")}
                  </h4>
                  <Col xs={6} md={4} lg={4} sm={6} className="mb-2">
                    <input
                      type="number"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder={t("check_place_code")}
                    />
                  </Col>
                </Row>
              </div>
            </div>
            <div className="row">
              <Link to="/home" className="btn btn_next">
                Complete
              </Link>
            </div>
          </Col>
          <Col xs={12} lg={5} md={4} sm={12} className="row ">
          <BookingDetails />
            <PaymentSummary />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
