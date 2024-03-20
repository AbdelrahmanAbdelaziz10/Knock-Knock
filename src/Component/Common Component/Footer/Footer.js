import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Footr.css";
import googleplay from '../../../images/googleplay.png';
import appstore from '../../../images/appstore.png';
import { useTranslation } from "react-i18next";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Col, Container, Row } from "react-bootstrap";
import Logo from '../../../images/Logo.png'
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
    const { t, i18n } = useTranslation();
    const navigate=useNavigate()
  return (
    <>
      {/* <footer className="footer">
        <Container>
          <div className=" mb-3 py-3  ">
            <h6>{t("f-serves")}</h6>
            <div className="f_serves">
              <span  className="footer_serves">
              {t("f-serves1")}
              </span>
              <span  className="footer_serves">
              {t("f-serves2")}
              </span>
              <span  className="footer_serves">
              {t("f-serves3")}
              </span>
              <span  className="footer_serves">
              {t("f-serves4")}
              </span>
              <span  className="footer_serves">
              {t("f-serves5")}
              </span>
              <span  className="footer_serves">
              {t("f-serves6")}
              </span>
              <span  className="footer_serves">
              {t("f-serves7")}
              </span>
              <span  className="footer_serves">
              {t("f-serves8")}
              </span>
              <span  className="footer_serves">
              {t("f-serves9")}
              </span>
              <span  className="footer_serves">
              {t("f-serves10")}
              </span>
            </div>
          </div>
          <div className="row mb-3 py-3">
            <Col xs={12} lg={4} md={6} sm={12} className="col-lg-4 col-md-6">
              <h6>
              {t("f-uae")}
              </h6>
              <div className="f_serves">
                <span to="" className="footer_serves">
                {t("f-dubai")}
                </span>
                <span to="" className="footer_serves">
                {t("f-abuzabi")}
                </span>
                <span to="" className="footer_serves">
                {t("f-sharjah")}
                </span>
                <span to="" className="footer_serves">
                {t("f-agman")}
                </span>
              </div>
            </Col>
            <Col xs={6} lg={3} md={4} sm={6} className="col-lg-3 col-md-4">
              <h6>
              {t("f-suid")}
              </h6>
              <div className="f_serves">
                <span to="" className="footer_serves">
                {t("f-gda")}
                </span>
                <span to="" className="footer_serves">
                {t("f-reid")}
                </span>
              </div>
            </Col>
            <Col xs={6} lg={3} md={2} sm={6} className="col-lg-3 col-md-2">
              <h6>
              {t("f-quter")}
              </h6>
              <div className="f_serves">
                <span to="" className="footer_serves">
                  {t("f-doha")}
                </span>
              </div>
            </Col>
          </div>
          <div className="line"></div>
          <div className="row py-4 justify-content-between ">
            <Col xs={12} lg={3} md={3} sm={12} className="col-lg-3 col-md-3">
              <div className="row">
                <Col xs={6} lg={6} md={6} sm={6} className="col-lg-6 col-md-6">
                  <span href="">
                    <img src={googleplay} alt="google play" />
                  </span>
                </Col>
                <Col xs={6} lg={6} md={6} sm={6} className="col-lg-6 col-md-6">
                  <span href="">
                    <img src={appstore} alt="App Store" />
                  </span>
                </Col>
              </div>
            </Col>
            <Col xs={8} lg={4} md={2} sm={8} className=" social_icon">
              <span to="" className="fa-brand">
              <FaFacebook className="facebook"/>
              </span>
              <span to="" className="fa-brand">
              <FaTwitter className="twitter"/>
              </span>
              <span to="" className="fa-brand">
              <FaInstagram className="instagram"/>
              </span>
            </Col>
            <Col xs={11} lg={4} md={5} sm={11} className="">
              <ul className="footer_list">
                <li>
                  <span to="" className="list_li">
                  {t("f-terms")}
                  </span>
                </li>
                <li>
                <span to="" className="list_li">
                  {t("f-privacy")}
                  </span>
                </li>
                <li>
                <span to="" className="list_li">
                  {t("f-sitemap")}
                  </span>
                </li>
                <li>
                <span to="" className="list_li">
                  {t("f-career")}
                  </span>
                </li>
              </ul>
            </Col>
          </div>
        </Container>
      </footer> */}
      <footer className="footer">
        <Container>
          <Row className="py-4">
            <Col xs={12} lg={4} md={6} sm={12}>
            <div className="footer_img">
              <img src={Logo} alt="" />
            </div>
            <div className="footer_text">
            <p>
            {t("home_download_p")}  
            </p>
            </div>
            </Col>
            <Col xs={12} lg={4} md={6} sm={12}>
            <div className="footer_list">
            <h5>{t("pages")}</h5>
              <ul className="f_list">
                <li>
                <Link className="list_link" to="/">
                {t("home")}
                </Link>
                  </li>
                <li>
                <Link className="list_link" to="/product">
                 {t("f-allProduct")}
                 </Link>
                  </li>
                <li>
                <Link className="list_link" to="/product_order">
                 {t("Booking_Product")}
                 </Link>
                 </li>
                 <li>
                <Link className="list_link" to="/serves">
                {t("f-allserves")}
                 </Link>
                 </li>
                 <li>
                <Link className="list_link" to="/your-order">
                {t("Booking")}
                 </Link>
                 </li>
              </ul>
            </div>
              </Col>
              <Col xs={12} lg={4} md={6} sm={12}>
              <div className="footer_contact">
              <h5> {t("f_contact_h")} </h5>
              <p><span> <FaPhoneAlt /> </span>  +966 59 333 4444 </p>
              <p> <span><FaLocationDot /> </span>  {t("Contact_address")} </p>
              <button className="btn btn_contact" onClick={()=>navigate("/contact")} > {t("contact")}</button>
              </div>
              
              </Col>
          </Row>
          <div className="line row" />
          <div className="row justify-content-center align-item-center min_footer">
            <Col xs={6} lg={6} md={6} sm={6} className="">
              <p className="text-center" >© 2024. All Rights Reserved.</p>
            </Col>

          </div>

        </Container>

      </footer>
    </>
  );
};

export default Footer;
