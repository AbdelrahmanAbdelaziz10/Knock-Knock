import React from "react";
import "../cart.css";
import { Col, Container, Row } from "react-bootstrap";
import { ServesCard } from "../../Booking/Main Booking/BookingOne/ServesCard";
import serves from "../../../images/Rectangle 195.png";
import BookHead from "../../Booking/Main Booking/Book Head/BookHead";
import { Link } from "react-router-dom";
export const MainCartCom = () => {
  return (
    <div className="main_book main_card py-lg-3 py-md-2 pb-5">
      <Container className=" booking_container">
        <Row className="booking_row_main ">
          <h2>Your Cart Shopping</h2>
          <Col xs={12} lg={7} md={7} sm={12} className="border main_col py-2">
            <div className="serves_col">
              <ServesCard
                img={serves}
                title={"Handyman Book Hourly"}
                prag={
                  "ecure the services of our professional Handyman at a competitive rate, with additional material costs if required"
                }
                price={"129"}
              />
                            <ServesCard
                img={serves}
                title={"Handyman Book Hourly"}
                prag={
                  "ecure the services of our professional Handyman at a competitive rate, with additional material costs if required"
                }
                price={"129"}
              />
              <ServesCard
                img={serves}
                title={"Handyman Book Hourly"}
                prag={
                  "ecure the services of our professional Handyman at a competitive rate, with additional material costs if required"
                }
                price={"129"}
              />
              <ServesCard
                img={serves}
                title={"Handyman Book Hourly"}
                prag={
                  "ecure the services of our professional Handyman at a competitive rate, with additional material costs if required"
                }
                price={"129"}
              />
            </div>
            <div className="row">
              <Link to="/checkout" className="btn btn_next">
                Next
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
              <h4>Booking Details</h4>
              <div className="row">
                <h6 className="col-lg-5 col-md-12">Address:</h6>
                <p className="col-lg-7 col-md-12">
                  73 Financial Center Rd - Downtown Dubai - Dubai - United Arab
                  Emir
                </p>
              </div>
              <div className="row">
                <h6 className="col-lg-5">Serves:</h6>
                <p className="col-lg-7">Handyman & Maintenance</p>
              </div>
              <div className="row d-flex">
                <h6 className="col-lg-5">Phone:</h6>
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
              <h4>Payment Summary</h4>
              <div className="row">
                <Col xs={7} lg={7} md={6} sm={7}>
                  <h6 className=" ">sub Total:</h6>
                </Col>
                <Col xs={5} lg={5} md={6} sm={5}>
                  <p className=""> 20 AED</p>
                </Col>
              </div>
              <div className="row">
                <Col xs={7} lg={7} md={6} sm={7}>
                  <h6 className=" ">delivery fee:</h6>
                </Col>
                <Col xs={5} lg={5} md={6} sm={5}>
                  <p className="">40 AED </p>
                </Col>
              </div>
              <div className="row">
                <Col xs={7} lg={7} md={6} sm={7}>
                  <h6 className=" ">Tax:</h6>
                </Col>
                <Col xs={5} lg={5} md={6} sm={5}>
                  <p className="">10 AED</p>
                </Col>
              </div>
              <div className="row price_total">
                <Col xs={7} lg={7} md={6} sm={7}>
                  <h6 className=" ">Total:</h6>
                </Col>
                <Col xs={5} lg={5} md={6} sm={5}>
                  <p className="">30 AED</p>
                </Col>
              </div>
            </Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
