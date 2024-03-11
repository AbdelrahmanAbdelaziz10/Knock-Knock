import React, { useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ContextLang } from "../App";
import { Link, useNavigate } from "react-router-dom";
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
import { ServesRow } from "../Component/Home Components/AllServes/ServesRow";
import NavBar from "../Component/Common Component/NavBar/NavBar";
import Swal from "sweetalert2";
import axios from "axios";

const HomePageLogin = () => {
    const { t, i18n } = useTranslation();
    const { selectedLanguage, setSelectedLanguage } = useContext(ContextLang);
    const navigate=useNavigate()
    const handleChangeLanguage = (language) => {
      setSelectedLanguage(language);
      i18n.changeLanguage(language);
    };


    useEffect(()=>{
      window.scrollTo(0,0)
    },[])

    return (
      <div className="homepage">
        <NavBar />
        <HeaderHome />
        {/* <SwiperHeader /> */}
        <Serves />
        {/* <AllServes /> */}
        <WhyUs />
        <Sponsor />
        <AboutSay />
        <DownloadApp />
        <Footer />
      </div>
    );
  };
  

export default HomePageLogin