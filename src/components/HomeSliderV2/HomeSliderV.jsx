import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import {FashionBanner, IphoneBanner, } from "../../assets/assets"

const HomeSliderV =()=> {
  return (
   <Swiper
        loop={true}
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="homeSliderV2 smlBtn"
      >
        <SwiperSlide>
          <div className="item w-full rounded-md overflow-hidden relative">
            <img src={FashionBanner} className='w-full h-auto object-cover'/>

            <div className="info absolute top-0 -right-[100%] w-[50%] h-[100%] opacity-0 z-50 p-8 flex flex-col items-center justify-center transition-all duration-700">
                <h4 className='text-[18px] font-[500] w-full text-left mb-3'>Big Friday Sale</h4>
                <h2 className='text-[25px] font-[700] w-full'>Woman Solid Round Yellow T-Shirt</h2>
                <h3 className='flex items-center gap-3 text-[18px] font-[500] w-full text-left mt-3 mb-3'>Starting At Only
                     <span className='text-[#ff5252] text-[30px] font-[700]'>$59.00
                    </span></h3>

                    <div className='w-full'>
                        <button className='btn-org'>SHOP NOW</button>
                    </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="item">
            <img src={IphoneBanner} />

             <div className="info absolute top-0 -right-[100%] w-[50%] h-[100%] opacity-0 z-50 p-8 flex flex-col items-center justify-center transition-all duration-700">
                <h4 className='text-[18px] font-[500] w-full text-left mb-3'>Big Friday Sale</h4>
                <h2 className='text-[23px] font-[700] w-full'>Apple iPhone 13 128 GB, Pink</h2>
                <h3 className='flex items-center gap-3 text-[18px] font-[500] w-full text-left mt-3 mb-3'>Starting At Only
                     <span className='text-[#ff5252] text-[30px] font-[700]'>$283.83
                    </span></h3>

                    <div className='w-full'>
                        <button className='btn-org'>SHOP NOW</button>
                    </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
  )
}

export default HomeSliderV