import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { CgProfile } from "react-icons/cg";
import { TiThMenu } from "react-icons/ti";
import Logo from "../../../images/Logo.png";
import country from "../../../images/Flag_of_the_United_Arab_Emirates 1.png";
import { useTranslation } from "react-i18next";
import { ContextLang } from "../../../App";
const NavBar = () => {
  const { t, i18n } = useTranslation();
  const { selectedLanguage, setSelectedLanguage } = useContext(ContextLang);

  
  const handleChangeLanguage = (language) => {
    setSelectedLanguage(language);
    i18n.changeLanguage(language);
  };
  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container">
          <Link className="navbar-brand" to="/">
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
              className="btn btn-flag"
              onclick="toggleDropdown2()"
              type="button"
            >
              <img src={country} alt="Flag" />
            </button>
            <button
              className="btn btn-menu"
              onclick="toggleDropdown()"
              type="button"
            >
            <TiThMenu className="fa-solid fa-bars mt-1" />
            <CgProfile className="fa-solid fa-user"/>
              {/* <i className="fa-solid fa-bars mt-2"></i>
              <i className="fa-solid fa-user"></i> */}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
