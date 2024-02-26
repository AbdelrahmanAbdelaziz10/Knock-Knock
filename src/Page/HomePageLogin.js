import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { ContextLang } from "../App";
import { Link } from "react-router-dom";
import Footer from "../Component/Common Component/Footer/Footer";
import DownloadApp from "../Component/Home Components/DownloadApp/DownloadApp";
import Sponsor from "../Component/Home Components/Sponsor/Sponsor";
import WhyUs from "../Component/Home Components/Why Us/WhyUs";
import AllServes from "../Component/Home Components/AllServes/AllServes";
import HeaderHome from "../Component/Home Components/Header/HeaderHome";
import { Serves } from './../Component/Home Components/Serves/Serves';
import AboutSay from "../Component/Home Components/About Say/AboutSay";
import { SwiperHeader } from "../Component/Home Components/Header/SwiperHeader";
import NavBarLogin from "../Component/Common Component/NavBar/NavCarLogin";

const HomePageLogin = () => {
    const { t, i18n } = useTranslation();
    const { selectedLanguage, setSelectedLanguage } = useContext(ContextLang);
  
    const handleChangeLanguage = (language) => {
      setSelectedLanguage(language);
      i18n.changeLanguage(language);
    };
    return (
      <div className="homepage">
        <NavBarLogin />
        <HeaderHome />
        {/* <SwiperHeader /> */}
        {/* <AllServes /> */}
        <Serves />
        <WhyUs />
        <Sponsor />
        <AboutSay />
        <DownloadApp />
        <Footer />
      </div>
    );
  };
  

export default HomePageLogin