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

export default function CreditSwiper() {
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
            <h5 className='mb-4'>BASIC PACKAGE </h5>
            <p className='descend mb-4'>AED 300</p>
            <h4 className='mb-3'>AED 279</h4>
            <p>Get <strong>AED 300</strong>  worth of knock knock credit for price of <strong>AED 279</strong> </p>
            <p>Earn <strong>8% More</strong> <br/>  Vaild for 30 days on all home services</p>
            <Link to="/checkout" className='btn btn_next' >Buy Now</Link>
        </SwiperSlide>
        <SwiperSlide>
            <h5 className='mb-4'>BASIC PACKAGE </h5>
            <p className='descend mb-4'>AED 300</p>
            <h4 className='mb-3'>AED 279</h4>
            <p>Get <strong>AED 300</strong>  worth of knock knock credit for price of <strong>AED 279</strong> </p>
            <p>Earn <strong>8% More</strong> <br/>  Vaild for 30 days on all home services</p>
            <Link to="/checkout" className='btn btn_next' >Buy Now</Link>
        </SwiperSlide>
        <SwiperSlide>
            <h5 className='mb-4'>BASIC PACKAGE </h5>
            <p className='descend mb-4'>AED 300</p>
            <h4 className='mb-3'>AED 279</h4>
            <p>Get <strong>AED 300</strong>  worth of knock knock credit for price of <strong>AED 279</strong> </p>
            <p>Earn <strong>8% More</strong> <br/>  Vaild for 30 days on all home services</p>
            <Link to="/checkout" className='btn btn_next' >Buy Now</Link>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
