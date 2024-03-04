import React, { useContext } from "react";
import "./MainBook.css";
import { Card, Col, Container, Row } from "react-bootstrap";
import BookHead from "../Book Head/BookHead";
import { ServesCard } from "./ServesCard";
import serves from "../../../../images/Rectangle 195.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import PaymentSummary from "../../../Checkout/mainCheckout/PaymentSummary";
import BookingDetails from "../../../Checkout/mainCheckout/BookingDetails";
import { OrderDataContext } from "../../../../App";

const MainBook = () => {
  const { t, i18n } = useTranslation();
  const servesOrderData = JSON.parse(localStorage.getItem("servesOrderData"));
console.log(servesOrderData?.data)
  return (
    <div className="main_book main_card py-lg-3 py-md-2 pb-5">
      <Container className=" booking_container">
        <Row className="booking_row_main ">
        <div className="row">
        <Col xs={10} lg={10} md={10} sm={10} >
        <h2>
          {t("booking_title2")}
        </h2>
        </Col>
        <Col xs={2} lg={2} md={2} sm={2} >
        <button className="btn btn_cancelled">
        {t("order_cancelled")}
        </button>
        </Col>
        </div>
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
                img={servesOrderData?.data[0]?.service.image}
                title_ar={servesOrderData?.data[0]?.service?.name_ar}
                title_en={servesOrderData?.data[0]?.service?.name_en}
                description_ar={servesOrderData?.data[0]?.service?.description_ar}
                description_en={servesOrderData?.data[0]?.service?.description_en}
                price={servesOrderData?.data[0]?.service?.price}
              />
              
            </div>
          </Col>
          <Col xs={12} lg={5} md={4} sm={12} className="row ">
          <BookingDetails address={servesOrderData?.data[0]?.address}
          country={servesOrderData?.data[0]?.country} 
          name_ar={servesOrderData?.data[0]?.service?.name_ar}
          name_en={servesOrderData?.data[0]?.service?.name_en}
          />
            <PaymentSummary 
            subtotal={servesOrderData?.data[0]?.service?.price}
            grand_total={servesOrderData?.data[0]?.grand_total}
            />

          </Col>
        </Row>
      </Container>
    </div>

  );
};

export default MainBook;
