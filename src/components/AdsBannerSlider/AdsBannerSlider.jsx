import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import Banner from "../BannerBox/Banner";
import { ban1, ban2, ban3, ban4, ban5, ban6 } from "../../assets/assets";

const AdsBannerSlider = () => {
  return (
    <div className="py-5 w-full">
      <Swiper
         breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
        className="smlBtn"
      >
        <SwiperSlide>
          <Banner img={ban1} link={'/'}/>
        </SwiperSlide>
        <SwiperSlide>
          <Banner img={ban2} link={'/'} />
        </SwiperSlide>
        <SwiperSlide>
          <Banner img={ban3} link={'/'} />
        </SwiperSlide>
        <SwiperSlide>
          <Banner img={ban4} link={'/'} />
        </SwiperSlide>
        <SwiperSlide>
          <Banner img={ban5} link={'/'} />
        </SwiperSlide>
        <SwiperSlide>
          <Banner img={ban6} link={'/'} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default AdsBannerSlider;
