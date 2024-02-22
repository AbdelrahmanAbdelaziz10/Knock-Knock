import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './creditswiper.css';

// import required modules
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function CreditSwiper() {
  const { t, i18n } = useTranslation();

  return (
    <>
      <Swiper
        slidesPerView={1.7}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <h5 className='mb-4'>{t("buy_bacge_h")} </h5>
            <p className='descend mb-4'>{t("price")} 300</p>
            <h4 className='mb-3'>{t("price")} 279</h4>
            <p>{t("buy_bacge_p1")} </p>
            
            <p>{t("buy_bacge_p2.1")} <br/>{t("buy_bacge_p2.2")}  </p>
            <Link to="/checkout" className='btn btn_next' >{t("buy_bacge_btn")}</Link>
        </SwiperSlide>
        <SwiperSlide>
            <h5 className='mb-4'>{t("buy_bacge_h")} </h5>
            <p className='descend mb-4'>{t("price")} 300</p>
            <h4 className='mb-3'>{t("price")} 279</h4>
            <p>{t("buy_bacge_p1")} </p>
            
            <p>{t("buy_bacge_p2.1")} <br/>{t("buy_bacge_p2.2")}  </p>
            <Link to="/checkout" className='btn btn_next' >{t("buy_bacge_btn")}</Link>
        </SwiperSlide>
        <SwiperSlide>
            <h5 className='mb-4'>{t("buy_bacge_h")} </h5>
            <p className='descend mb-4'>{t("price")} 300</p>
            <h4 className='mb-3'>{t("price")} 279</h4>
            <p>{t("buy_bacge_p1")} </p>
            
            <p>{t("buy_bacge_p2.1")} <br/>{t("buy_bacge_p2.2")}  </p>
            <Link to="/checkout" className='btn btn_next' >{t("buy_bacge_btn")}</Link>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
