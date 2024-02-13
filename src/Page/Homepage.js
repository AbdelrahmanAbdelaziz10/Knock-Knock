import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { ContextLang } from "../App";
import { Link } from "react-router-dom";
import Footer from "../Component/Common Component/Footer/Footer";
import DownloadApp from "../Component/Home Components/DownloadApp/DownloadApp";
import Sponsor from "../Component/Home Components/Sponsor/Sponsor";
import WhyUs from "../Component/Home Components/Why Us/WhyUs";
import { Serves } from "../Component/Home Components/Serves/Serves";
import NavBar from "../Component/Common Component/NavBar/NavBar";
import AllServes from "../Component/Home Components/AllServes/AllServes";
import HeaderHome from "../Component/Home Components/Header/HeaderHome";

const Homepage = () => {
  const { t, i18n } = useTranslation();
  const { selectedLanguage, setSelectedLanguage } = useContext(ContextLang);

  const handleChangeLanguage = (language) => {
    setSelectedLanguage(language);
    i18n.changeLanguage(language);
  };
  return (
    <div className="homepage">
      <NavBar />
      <HeaderHome />
      <AllServes />
      <Serves />
      <WhyUs />
      <Sponsor />
      <DownloadApp />
      <Footer />
    </div>
  );
};

export default Homepage;
