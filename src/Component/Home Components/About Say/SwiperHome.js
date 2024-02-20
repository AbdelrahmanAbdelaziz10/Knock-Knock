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
const SwiperHome = () => {
  return (
    <Swiper navigation={true} modules={[Navigation]}
    loopAddBlankSlides={true} className="mySwiper">
      <SwiperSlide>
        <div class="person">
          <div class="person_img">
            <img src={profile} alt="" />
          </div>
          <span>جيلينا ماركوفيتش</span>
        </div>
        <p>
          خدمة مدهشة ومريحة واحترافية، تمنيت أن لا تنتهي! يتمتع الموظفون بخبرة
          عالية ويقومون بواحدة من أفضل جلسات التدليك التي تلقيتها على الإطلاق!
        </p>
      </SwiperSlide>

      <SwiperSlide>
        <div class="person">
          <div class="person_img">
            <img src={profile} alt="" />
          </div>
          <span>جيلينا ماركوفيتش</span>
        </div>
        <p>
          خدمة مدهشة ومريحة واحترافية، تمنيت أن لا تنتهي! يتمتع الموظفون بخبرة
          عالية ويقومون بواحدة من أفضل جلسات التدليك التي تلقيتها على الإطلاق!
        </p>
      </SwiperSlide>
      <SwiperSlide>
        <div class="person">
          <div class="person_img">
            <img src={profile} alt="" />
          </div>
          <span>جيلينا ماركوفيتش</span>
        </div>
        <p>
          خدمة مدهشة ومريحة واحترافية، تمنيت أن لا تنتهي! يتمتع الموظفون بخبرة
          عالية ويقومون بواحدة من أفضل جلسات التدليك التي تلقيتها على الإطلاق!
        </p>
      </SwiperSlide>
      <SwiperSlide>
        <div class="person">
          <div class="person_img">
            <img src={profile} alt="" />
          </div>
          <span>جيلينا ماركوفيتش</span>
        </div>
        <p>
          خدمة مدهشة ومريحة واحترافية، تمنيت أن لا تنتهي! يتمتع الموظفون بخبرة
          عالية ويقومون بواحدة من أفضل جلسات التدليك التي تلقيتها على الإطلاق!
        </p>
      </SwiperSlide>

    </Swiper>
  );
};

export default SwiperHome;
