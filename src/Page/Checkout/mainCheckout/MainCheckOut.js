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

export const MainCheckOut = () => {
  return (
    <div className="main_book py-lg-3 py-md-2 pb-5">
      <Container className=" booking_container">
        <Row className="booking_row_main ">
          <BookHead stepnum={3} title={"Check Out"} />
          <Col
            xs={12}
            lg={7}
            md={8}
            sm={12}
            className="border main_col py-3 ps-lg-4"
          >
            <div className="serves_col">
              <div className="payment ">
                <h4>Payment Method</h4>
                <div className="create_pay mb-4">
                  <Row className="row">
                    <Col xs={9} lg={10} md={7} sm={9}>
                      <h6 className="credit">
                        <FaRegCreditCard className="create" />
                        <span>Credit / Debit Card</span>
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
                      placeholder="Card Number"
                    />
                  </Col>
                  <Col xs={12} md={6} lg={6} sm={12} className="mb-4">
                    <input
                      type="number"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Date(MM/YY)"
                    />
                  </Col>
                  <Col xs={12} md={6} lg={6} sm={12} className="mb-4">
                    <input
                      type="number"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="CVV Number"
                    />
                  </Col>
                </Row>
                <Row>
                  <div className="nots mb-4">
                    <FaCircleExclamation className="icon" />
                    <p>
                      The session amount will be reserved on your card. You will
                      only be charged once the session is completed.
                    </p>
                    <span className=" btn-details">Details</span>
                  </div>
                </Row>
                <Row>
                  <h4>Add a voucher code or Justlife credit</h4>
                  <Col xs={6} md={4} lg={4} sm={6} className="mb-2">
                    <input
                      type="number"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Voucher Code"
                    />
                  </Col>
                </Row>
              </div>
            </div>
            <div className="row">
              <Link to="/" className="btn btn_next">
                Complete
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
              <div className="row">
                <h6 className="col-lg-5">Serves Details:</h6>
                <div className="col-lg-7 d-block">
                  <p className="serves_name">1x Handyman Book Hourly</p>
                  <p className="serves_name">1x Handyman Book Hourly</p>
                  <p className="serves_name">1x Handyman Book Hourly</p>
                  <p className="serves_name">1x Handyman Book Hourly</p>
                </div>
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
                <Col xs={7} lg={7} md={5} sm={7}>
                  <h6 className=" ">Total:</h6>
                </Col>
                <Col xs={5} lg={5} md={7} sm={5}>
                  <p className="">AED 165.00</p>
                </Col>
              </div>
            </Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
