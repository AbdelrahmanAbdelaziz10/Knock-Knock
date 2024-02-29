import React from "react";
import "./MainBook.css";
import { Card, Col, Container, Row } from "react-bootstrap";
import BookHead from "../Book Head/BookHead";
import { ServesCard } from "./ServesCard";
import serves from "../../../../images/Rectangle 195.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import PaymentSummary from "../../../Checkout/mainCheckout/PaymentSummary";
import BookingDetails from "../../../Checkout/mainCheckout/BookingDetails";

const MainBook = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="main_book main_card py-lg-3 py-md-2 pb-5">
      <Container className=" booking_container">
        <Row className="booking_row_main ">
        <h2>
          {t("booking_title2")}
        </h2>
          {/* <BookHead stepnum={1} title={"Serves Details"} /> */}
          <Col
            xs={12}
            lg={7}
            md={8}
            sm={12}
            className="border main_col serves_col py-2"
          >
            <div className="">
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

export default MainBook;
