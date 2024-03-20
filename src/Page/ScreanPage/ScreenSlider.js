import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import screen from '../../images/screan.png'
// Import Swiper core and required modules
import SwiperCore from 'swiper';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';

// Install Swiper modules
SwiperCore.use([Pagination, Autoplay, EffectFade]);

const ScreenSlider = () => {
  return (
    <div className='screen_slider my-2'>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 500, // Autoplay delay in milliseconds
          disableOnInteraction: false, // Autoplay will not be disabled after user interactions (swipes)
        }}
        loop={true} // Enable loop mode
        className="mySwiper"
      >
        <SwiperSlide className='swiper-slide'>
            <img src={screen} alt="" />
        </SwiperSlide>
        <SwiperSlide className='swiper-slide'>
            <img src={screen} alt="" />
        </SwiperSlide>
        <SwiperSlide className='swiper-slide'>
            <img src={screen} alt="" />
        </SwiperSlide>
        <SwiperSlide className='swiper-slide'>
            <img src={screen} alt="" />
        </SwiperSlide>
        <SwiperSlide className='swiper-slide'>
            <img src={screen} alt="" />
        </SwiperSlide>
        <SwiperSlide className='swiper-slide'>
            <img src={screen} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default ScreenSlider;
