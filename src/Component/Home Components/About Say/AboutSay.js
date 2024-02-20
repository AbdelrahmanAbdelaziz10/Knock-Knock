import React from 'react'
import './AboutSay.css'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { SwiperSlide } from 'swiper/react';
import Swiper from 'swiper';
import SwiperHome from './SwiperHome';

const AboutSay = () => {
  return (
    <section class="aboutsay py-5">
        <div class="container">
            <div class="row text-center mb-3">
                <h3>
                    ماذا يقول المستخدمون عن جست لايف
                </h3>
                <p>
                    تم تقييم جست لايف 4.8 من 5 بناءً على 962 تقييماً منذ شهر أغسطس 2022.
                </p>
            </div>
            <div class="row">
            <SwiperHome />
            </div>
        </div>
    </section>
  )
}

export default AboutSay