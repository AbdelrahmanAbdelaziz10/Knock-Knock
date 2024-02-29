import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { CgProfile } from "react-icons/cg";
import { TiThMenu } from "react-icons/ti";
import Logo from "../../../images/Logo.png";
import { useTranslation } from "react-i18next";
import { ContextLang } from "../../../App";
import googleplay from "../../../images/googleplay.png";
import appstore from "../../../images/appstore.png";
import { FaQuestionCircle } from "react-icons/fa";
import { Col } from "react-bootstrap";
import { IoPersonCircleSharp } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaCreditCard } from "react-icons/fa";
import { TbGiftCard } from "react-icons/tb";
import { LiaHandsHelpingSolid } from "react-icons/lia";
import { MdOutlineSettings } from "react-icons/md";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { MdPolicy } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";

const NavBar = () => {
  const { t, i18n } = useTranslation();
  const { selectedLanguage, setSelectedLanguage } = useContext(ContextLang);
  const [test, setTest] = useState(false);
  const [test2, setTest2] = useState(false);

  const togglleDrowpDown = () => {
    if (test === true) {
      setTest(false);
    } else {
      setTest(true);
      setTest2(false);
    }
  };
  const togglleSinAndLogin = () => {
    if (test2 === true) {
      setTest2(false);
    } else {
      setTest2(true);
      setTest(false);
    }
  };
  const handleChangeLanguage = (language) => {
    setSelectedLanguage(language);
    i18n.changeLanguage(language);
  };
  const clearLocalStorage = () => {
    localStorage.removeItem("loginFormData");
  };
  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container">
          <Link className="navbar-brand" to="/home">
            <img src={Logo} alt="Logo" />
          </Link>
          <div className="d-flex form" role="search">
            {selectedLanguage === "ar" ? (
              <button
                className="btn btn-lang"
                onClick={(e) => handleChangeLanguage("en")}
              >
                English
              </button>
            ) : (
              <button
                className="btn btn-lang"
                onClick={(e) => handleChangeLanguage("ar")}
              >
                العربية
              </button>
            )}

            <button
              className="btn btn-menu"
              type="button"
              onClick={() => togglleSinAndLogin()}
            >
              <TiThMenu className="fa-solid fa-bars mt-1" />
              <CgProfile className="fa-solid fa-user" />
            </button>
          </div>
        </div>
      </nav>

      <div
        className={test2 === true ? "display-block dropmenu login_deopmenu" : "dropmenu"}
        id="country"
      >
        <Link to="/profile" className="row row_hover border pt-2 mb-3">
          <Col xs={3} lg={1} md={3} sm={3} className="col-lg-2">
            <div className="login_flag">
            <IoPersonCircleSharp />
            </div>
          </Col>
          <Col xs={9} lg={10} md={9} sm={9} className="col-lg-10 country_name">
            <p> {t("profile")}</p>
          </Col>
        </Link>
        <Link to="/addaddress" className="row row_hover border pt-2 mb-3">
          <Col xs={3} lg={1} md={3} sm={3} className="col-lg-2">
            <div className="login_flag">
            <FaLocationDot />
            </div>
          </Col>
          <Col xs={9} lg={10} md={9} sm={9} className="col-lg-10 country_name">
            <p> {t("Address")}</p>
          </Col>
        </Link>
        <Link to="/credits" className="row row_hover border pt-2 mb-3">
          <Col xs={3} lg={1} md={3} sm={3} className="col-lg-2">
            <div className="login_flag">
            <FaCreditCard />
            </div>
          </Col>
          <Col xs={9} lg={10} md={9} sm={9} className="col-lg-10 country_name">
            <p> {t("Payment_Methods")}</p>
          </Col>
        </Link>
        <Link to="/send_gift" className="row row_hover border pt-2 mb-3">
          <Col xs={3} lg={1} md={3} sm={3} className="col-lg-2">
            <div className="login_flag">
            <TbGiftCard />
            </div>
          </Col>
          <Col xs={9} lg={10} md={9} sm={9} className="col-lg-10 country_name">
            <p> {t("Gift_Card")}</p>
          </Col>
        </Link>
        
        <Link to="/your-order" className="row row_hover border pt-2 mb-3">
          <Col xs={3} lg={1} md={3} sm={3} className="col-lg-2">
            <div className="login_flag">
            <FaCalendarAlt />
            </div>
          </Col>
          <Col xs={9} lg={10} md={9} sm={9} className="col-lg-10 country_name">
            <p> {t("Booking")}</p>
          </Col>
        </Link>
        <Link to="/contact" className="row row_hover border pt-2 mb-3">
          <Col xs={3} lg={1} md={3} sm={3} className="col-lg-2">
            <div className="login_flag">
            <LiaHandsHelpingSolid />
            </div>
          </Col>
          <Col xs={9} lg={10} md={9} sm={9} className="col-lg-10 country_name">
            <p> {t("Get_Help")}</p>
          </Col>
        </Link>
        <Link to='/privacy_policy' className="row row_hover border pt-2 mb-3">
          <Col xs={3} lg={1} md={3} sm={3} className="col-lg-2">
            <div className="login_flag">
            <MdPolicy />
            </div>
          </Col>
          <Col xs={9} lg={10} md={9} sm={9} className="col-lg-10 country_name">
            <p> {t("policy")}</p>
          </Col>
        </Link>
        <Link to="/" className="row row_hover border pt-2 mb-3" onClick={clearLocalStorage}>
          <Col xs={3} lg={1} md={3} sm={3} className="col-lg-2">
            <div className="login_flag">
            <RiLogoutCircleRLine />
            </div>
          </Col>
          <Col xs={9} lg={10} md={9} sm={9} className="col-lg-10 country_name" >
            <p className="log_out"> {t("Log_Out")}</p>
          </Col>
        </Link>
      </div>
    </>
  );
};

export default NavBar;
