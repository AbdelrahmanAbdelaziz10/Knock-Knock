import React from "react";
import { Link } from "react-router-dom";
import "./Footr.css";
import googleplay from '../../../images/googleplay.png';
import appstore from '../../../images/appstore.png';
import { useTranslation } from "react-i18next";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Col, Container } from "react-bootstrap";

const Footer = () => {
    const { t, i18n } = useTranslation();

  return (
    <>
      <footer className="footer">
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
                <Link to="" className="footer_serves">
                {t("f-dubai")}
                </Link>
                <Link to="" className="footer_serves">
                {t("f-abuzabi")}
                </Link>
                <Link to="" className="footer_serves">
                {t("f-sharjah")}
                </Link>
                <Link to="" className="footer_serves">
                {t("f-agman")}
                </Link>
              </div>
            </Col>
            <Col xs={6} lg={3} md={4} sm={6} className="col-lg-3 col-md-4">
              <h6>
              {t("f-suid")}
              </h6>
              <div className="f_serves">
                <Link to="" className="footer_serves">
                {t("f-gda")}
                </Link>
                <Link to="" className="footer_serves">
                {t("f-reid")}
                </Link>
              </div>
            </Col>
            <Col xs={6} lg={3} md={2} sm={6} className="col-lg-3 col-md-2">
              <h6>
              {t("f-quter")}
              </h6>
              <div className="f_serves">
                <Link to="" className="footer_serves">
                  {t("f-doha")}
                </Link>
              </div>
            </Col>
          </div>
          <div className="line"></div>
          <div className="row py-4 justify-content-between ">
            <Col xs={12} lg={3} md={3} sm={12} className="col-lg-3 col-md-3">
              <div className="row">
                <Col xs={6} lg={6} md={6} sm={6} className="col-lg-6 col-md-6">
                  <Link href="">
                    <img src={googleplay} alt="google play" />
                  </Link>
                </Col>
                <Col xs={6} lg={6} md={6} sm={6} className="col-lg-6 col-md-6">
                  <Link href="">
                    <img src={appstore} alt="App Store" />
                  </Link>
                </Col>
              </div>
            </Col>
            <Col xs={8} lg={4} md={2} sm={8} className=" social_icon">
              <Link to="" className="fa-brand">
              <FaFacebook className="facebook"/>
              </Link>
              <Link to="" className="fa-brand">
              <FaTwitter className="twitter"/>
              </Link>
              <Link to="" className="fa-brand">
              <FaInstagram className="instagram"/>
              </Link>
            </Col>
            <Col xs={11} lg={4} md={5} sm={11} className="">
              <ul className="footer_list">
                <li>
                  <Link to="" className="list_li">
                  {t("f-terms")}
                  </Link>
                </li>
                <li>
                <Link to="" className="list_li">
                  {t("f-privacy")}
                  </Link>
                </li>
                <li>
                <Link to="" className="list_li">
                  {t("f-sitemap")}
                  </Link>
                </li>
                <li>
                <Link to="" className="list_li">
                  {t("f-career")}
                  </Link>
                </li>
              </ul>
            </Col>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
