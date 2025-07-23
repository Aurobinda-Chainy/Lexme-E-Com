import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { slider2, slider3, slider4, slider5 } from '../../assets/assets';

const HomeSlider = () => {
  return (
     <Swiper
         loop={true}
        spaceBetween={20}
        centeredSlides={false}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="smlBtn rounded-xl overflow-hidden shadow bg-white"
      >
      <SwiperSlide  className="rounded-xl overflow-hidden">
         <img src={slider2} alt="slider_banner" className="w-full h-auto object-cover"/>
      </SwiperSlide>
      <SwiperSlide  className="rounded-xl overflow-hidden" >
         <img src={slider3} alt="slider_banner" className="w-full h-auto object-cover"/>
      </SwiperSlide>
      <SwiperSlide  className="rounded-xl overflow-hidden" >
         <img src={slider4} alt="slider_banner" className="w-full h-auto object-cover"/>
      </SwiperSlide>
      <SwiperSlide  className="rounded-xl overflow-hidden" >
         <img src={slider5} alt="slider_banner" className="w-full h-auto object-cover"/>
      </SwiperSlide>
    </Swiper>
  );
};

export default HomeSlider;
