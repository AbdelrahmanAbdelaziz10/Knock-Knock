import React from "react";
import "./MainBook.css";
import { Card, Col, Container, Row } from "react-bootstrap";
import BookHead from "../Book Head/BookHead";
import { ServesCard } from "./ServesCard";
import serves from "../../../../images/Rectangle 195.png";
import { Link } from "react-router-dom";

const MainBook = () => {
  return (
    <div className="main_book py-3 pb-5">
      <Container>
        <Row className="justify-content-between">
          <BookHead stepnum={1} title={"Serves Details"}/>
          <Col xs={12} lg={7} md={6} sm={12} className="border main_col py-3">
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
            </div>
            <div className="row">
              <Link to="/booking_step2" className="btn btn_next" >Next</Link>
            </div>
          </Col>
          <Col xs={12} lg={5} md={6} sm={12} className="row">
            <Col
              xs={12}
              lg={12}
              md={12}
              sm={12}
              className="border booking_details"
            >
              <h4>Booking Details</h4>
              <div className="row">
                <h6 className="col-lg-5">Address:</h6>
                <p className="col-lg-7">
                  73 Financial Center Rd - Downtown Dubai - Dubai - United Arab
                  Emir
                </p>
                </div>
                <div className="row">
                <h6 className="col-lg-5">Serves:</h6>
                <p className="col-lg-7">
                Handyman & Maintenance
                </p>
                </div>
                <div className="row">
                <h6 className="col-lg-5">Serves Details:</h6>
                <p className="col-lg-7">
                <span className="serves_name">1x Handyman Book Hourly</span>&
                  <span className="serves_name">1x Handyman Book Hourly</span>&
                  <span className="serves_name">1x Handyman Book Hourly</span>&
                  <span className="serves_name">1x Handyman Book Hourly</span>
                </p>
                </div>
            </Col>
            <Col xs={12} lg={12} md={12} sm={12} className="border booking_details total">
            <h4>Payment Summary</h4>
              <div className="row">
                <h6 className="col-lg-8">Total:</h6>
                <p className="col-lg-4">
                AED 165.00
                </p>
                </div>
            </Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MainBook;
