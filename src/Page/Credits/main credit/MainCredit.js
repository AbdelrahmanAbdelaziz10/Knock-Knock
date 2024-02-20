import React, { useContext } from "react";
import "../credit.css";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { ContextLang } from "../../../App";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import bocket from "../../../images/bocket.png";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { TbGiftCard } from "react-icons/tb";
import { IoWalletSharp } from "react-icons/io5";

export const MainCredit = () => {
  const { t, i18n } = useTranslation();
  const { selectedLanguage, setSelectedLanguage } = useContext(ContextLang);

  return (
    <div className="main_address main_credit py-4 mb-3">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} lg={6} md={10} sm={12} className="">
            <Card className="address_card">
              <div className="row d-flex credit_transition">
              <Col xs={1} lg={1} md={1} sm={1}>
                  <Link to="/">
                    {selectedLanguage === "ar" ? (
                      <FaArrowRight className=" arrow_icon arrow_icon_ar" />
                    ) : (
                      <FaArrowLeft className="arrow_icon arrow_icon_en" />
                    )}
                  </Link>
                </Col>
                <Col xs={10} lg={9} md={10} sm={10} className="">
                  <h4 className="text-center">Available Credits </h4>
                </Col>

                <div className="row justify-content-start px-5">
                  <Col xs={8} lg={9} md={8} sm={8} className="total_credit ">
                    <h5>Total Credit</h5>
                    <p>AED 0.00</p>
                    {selectedLanguage === "en" ? (
                      <Link to="" className="Link">
                        See Transactions
                        <IoIosArrowForward className="transaction_arrow" />
                      </Link>
                    ) : (
                      <Link to="" className="Link">
                        See Transactions
                        <IoIosArrowBack className="transaction_arrow" />
                      </Link>
                    )}
                  </Col>
                  <Col xs={4} lg={3} md={4} sm={4} className="credit_img">
                    <img src={bocket} alt="" />
                  </Col>
                </div>
              </div>
              <Row className="justify-content-center">
                <Col
                  xs={10}
                  lg={9}
                  md={10}
                  sm={10}
                  className=" text-center buy_credit card"
                >
                  <p>
                    Select a package that suits you best and earn
                    <strong> up to 18%</strong>
                    on all services
                  </p>
                  <Link to="/buy-credit" className="btn btn_credit">Buy Credit</Link>
                </Col>
              </Row>

              <Row className="justify-content-center ">
                <Col
                  xs={10}
                  lg={9}
                  md={10}
                  sm={10}
                  className=" send_gift"
                >
                <Link to="/send_gift" className="d-flex">
                <TbGiftCard className="gift_credit" />
                  <p>Send a Gift Card</p>
                </Link>

                </Col>
                <Col
                  xs={10}
                  lg={9}
                  md={10}
                  sm={10}
                  className="wallet "
                >
                                <h5>
                Available Credits
                </h5>
                <div className="d-flex justify-content-center mt-5">
                <IoWalletSharp className="wallet_icon"/>
                <p> $0</p>
                </div>
                </Col>

              </Row>
              
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
