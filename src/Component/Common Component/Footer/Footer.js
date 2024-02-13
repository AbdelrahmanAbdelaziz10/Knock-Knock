import React from "react";
import { Link } from "react-router-dom";
import "./Footr.css";
import googleplay from '../../../images/googleplay.png';
import appstore from '../../../images/appstore.png';
import { useTranslation } from "react-i18next";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
    const { t, i18n } = useTranslation();

  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row mb-3 py-3 justify-content-between">
            <h6>{t("f-serves")}</h6>
            <div className="f_serves">
              <Link to="" className="footer_serves">
              {t("f-serves1")}
              </Link>
              <Link to="" className="footer_serves">
              {t("f-serves2")}
              </Link>
              <Link to="" className="footer_serves">
              {t("f-serves3")}
              </Link>
              <Link to="" className="footer_serves">
              {t("f-serves4")}
              </Link>
              <Link to="" className="footer_serves">
              {t("f-serves5")}
              </Link>
              <Link to="" className="footer_serves">
              {t("f-serves6")}
              </Link>
              <Link to="" className="footer_serves">
              {t("f-serves7")}
              </Link>
              <Link to="" className="footer_serves">
              {t("f-serves8")}
              </Link>
              <Link to="" className="footer_serves">
              {t("f-serves9")}
              </Link>
              <Link to="" className="footer_serves">
              {t("f-serves10")}
              </Link>
            </div>
          </div>
          <div className="row mb-3 py-3">
            <div className="col-lg-4">
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
            </div>
            <div className="col-lg-3">
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
            </div>
            <div className="col-lg-3">
              <h6>
              {t("f-quter")}
              </h6>
              <div className="f_serves">
                <Link to="" className="footer_serves">
                  {t("f-doha")}
                </Link>
              </div>
            </div>
          </div>
          <div className="line"></div>
          <div className="row py-4 justify-content-between ">
            <div className="col-lg-3">
              <div className="row">
                <div className="col-lg-6">
                  <Link href="">
                    <img src={googleplay} alt="google play" />
                  </Link>
                </div>
                <div className="col-lg-6">
                  <Link href="">
                    <img src={appstore} alt="App Store" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 social_icon">
              <Link to="" className="fa-brand">
              <FaFacebook className="facebook"/>
              </Link>
              <Link to="" className="fa-brand">
              <FaTwitter className="twitter"/>
              </Link>
              <Link to="" className="fa-brand">
              <FaInstagram className="instagram"/>
              </Link>
            </div>
            <div className="col-lg-4">
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
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
