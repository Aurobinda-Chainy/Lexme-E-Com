import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import ProductCard from "./ProductCard";


const ProductSlider = ({ products }) => {
  return (
    <Swiper
      spaceBetween={10}
      navigation={true}
      modules={[Navigation]}
      className="smlBtn"
      breakpoints={{
        320:{
          slidesPerView:1.2,
        },

        480:{
          slidePerView: 2,
        },
        768:{
          slidesPerView:3,
        },
        1024:{
          slidesPerView:4,
        },
        1280:{
          slidesPerView:5,
        }
      }}
    >
      {products.map((product) => (
        <SwiperSlide key={product.id}>
          <ProductCard product={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProductSlider;
