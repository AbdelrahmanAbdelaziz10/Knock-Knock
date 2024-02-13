import React from "react";
import NavBar from "../Component/Common Component/NavBar/NavBar";
import Footer from "../Component/Common Component/Footer/Footer";
import MainProduct from "../Component/Allproduct Component/MainProduct/MainProduct";
import Head from "../Component/Common Component/Head/Head";
import head from "../images/Rectangle 195.png";
import MainServes from "../Component/Provied Servies Com/Main Servies/MainServes";
const PrivateServes = () => {
  return (
    <div className="provide_serves">
      <NavBar />
      <Head img={head} page={"Private Services"} title={"Private Services"} />
      <MainServes />
      <Footer />
    </div>
  );
};

export default PrivateServes;
