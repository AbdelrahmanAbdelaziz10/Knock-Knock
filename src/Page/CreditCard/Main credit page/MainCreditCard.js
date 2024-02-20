import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import BookHead from '../../Booking/Main Booking/Book Head/BookHead'
import { FaRegCreditCard } from 'react-icons/fa'
import { SiVisa } from 'react-icons/si'
import { FaCircleExclamation } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import greenVisa from "../../../images/visagreen.png"
import redVisa from "../../../images/visared.png"

const MainCreditCard = () => {
  return (
    <div className="main_book main_card py-lg-3 py-md-2 pb-5">
      <Container className=" booking_container">
        <Row className="booking_row_main  justify-content-center">
          <Col
            xs={12}
            lg={7}
            md={10}
            sm={12}
            className="border main_col py-3 ps-lg-4"
          >
            <div className="">
              <div className="payment ">
                <h3 className='text-center'>Credit Cards</h3>
                <div className="create_pay mb-4">
                  <Row className="row">
                    <Col xs={9} lg={10} md={9} sm={9}>
                      <h6 className="credit">
                        <FaRegCreditCard className="create" />
                        <span>Credit / Debit Card</span>
                      </h6>
                    </Col>

                    <Col xs={3} lg={2} md={3} sm={3} className=''>
                      <SiVisa className="visa" />

                    </Col>
                  </Row>
                </div>

                <Row className="px-lg-4 justify-content-center">
                <h5>QNB BANK</h5>
                  <Col xs={8} md={7} lg={7} sm={8} className="mb-4">
                  <div className='visa_img'>
                  <img src={greenVisa} alt='' />
                  </div>
                  </Col>
                  <h5>CIB BANK</h5>
                  <Col xs={8} md={7} lg={7} sm={8} className="mb-4">
                  <div className='visa_img'>
                  <img src={redVisa} alt='' />
                  </div>
                  </Col>

                </Row>

              </div>
            </div>
            <div className="row">
              <Link to="/add_card" className="btn btn_next">
                Add New Card
              </Link>
            </div>
          </Col>
          {/* <Col xs={12} lg={5} md={4} sm={12} className="row ">
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
          </Col> */}
        </Row>
      </Container>
    </div> 
    )
}

export default MainCreditCard