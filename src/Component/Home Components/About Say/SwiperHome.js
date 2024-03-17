import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

import "./AboutSay.css";
import profile from "../../../images/profile-pc.webp"
import { useTranslation } from "react-i18next";
const SwiperHome = () => {
  const {t,i18n} = useTranslation()

  return (
    <Swiper navigation={true} modules={[Navigation]}
    loopAddBlankSlides={true} className="mySwiper">

<SwiperSlide>
        <div className="person">
          <div className="person_img">
            <img src={profile} alt="" />
          </div>
          <span>{t("home_say_username")} </span>
        </div>
        <p>
        {t("home_say_p2")}
        </p>
      </SwiperSlide>


      <SwiperSlide>
        <div className="person">
          <div className="person_img">
            <img src={profile} alt="" />
          </div>
          <span>{t("home_say_username")} </span>
        </div>
        <p>
        {t("home_say_p2")}
        </p>
      </SwiperSlide>

      <SwiperSlide>
        <div className="person">
          <div className="person_img">
            <img src={profile} alt="" />
          </div>
          <span>{t("home_say_username")} </span>
        </div>
        <p>
        {t("home_say_p2")}
        </p>
      </SwiperSlide>

      <SwiperSlide>
        <div className="person">
          <div className="person_img">
            <img src={profile} alt="" />
          </div>
          <span>{t("home_say_username")} </span>
        </div>
        <p>
        {t("home_say_p2")}
        </p>
      </SwiperSlide>

    </Swiper>
  );
};

export default SwiperHome;
