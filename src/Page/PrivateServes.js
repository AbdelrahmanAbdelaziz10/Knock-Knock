import React from "react";
import NavBar from "../Component/Common Component/NavBar/NavBar";
import Footer from "../Component/Common Component/Footer/Footer";
import MainProduct from "../Component/Allproduct Component/MainProduct/MainProduct";
import Head from "../Component/Common Component/Head/Head";
import head from "../images/Rectangle 195.png";
import MainServes from "../Component/Provied Servies Com/Main Servies/MainServes";
import { i18n } from 'i18next';
import { useTranslation } from "react-i18next";
const PrivateServes = () => {
  const{t,i18n}=useTranslation()
  return (
    <div className="provide_serves">
      <NavBar />
      <Head img={head} page={t("home_category1")} title={t("home_category1")} />
      <MainServes />
      <Footer />
    </div>
  );
};

export default PrivateServes;
