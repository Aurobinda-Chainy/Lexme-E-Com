// Category slider
import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { FreeMode, Navigation, Scrollbar } from "swiper/modules";
import {
  homeCat1,
  homeCat2,
  homeCat3,
  homeCat4,
  homeCat5,
  homeCat6,
  homeCat7,
  homeCat8,
  homeCat9,
  homeCat10,
} from "../../assets/assets";
import { Link } from "react-router-dom";

function HomeCatSlider() {
  return (
    <>
      <div className="homeCatSlider">
        <div className="flex justify-between items-center bg-gray-100 rounded-xl px-8 py-6 shadow-sm">
          <div>
            <h2 className="text-xl font-semibold mb-1">Shopping made easy</h2>
            <p className="text-gray-600 text-sm">
              Enjoy reliability, secure deliveries and hassle-free returns.
            </p>
          </div>
          <button className="bg-black text-white font-semibold px-6 py-2.5 rounded-full hover:bg-gray-800 transition whitespace-nowrap">
            Start now
          </button>
        </div>
      </div>
      <div className="homeCatSlider">
        <h2 className="font-bold mb-3 text-base">Browse By Categories</h2>
        <Swiper
          spaceBetween={10}
          freeMode={true}
          navigation={true}
          
          modules={[Navigation, FreeMode]}
          className="smlBtn"
          breakpoints={{
            320: {
              slidesPerView: 3.2,
            },
            480: {
              slidesPerView: 4,
            },
            640: {
              slidesPerView: 5,
            },
            768: {
              slidesPerView: 6,
            },
            1024: {
              slidesPerView: 7,
            },
          }}
        >
           {[
      { img: homeCat1, label: "Electronics" },
      { img: homeCat2, label: "Bags" },
      { img: homeCat3, label: "Fashion" },
      { img: homeCat4, label: "Footwear" },
      { img: homeCat5, label: "Perfumes" },
      { img: homeCat6, label: "Groceries" },
      { img: homeCat7, label: "Furnitures" },
      { img: homeCat8, label: "Goggles" },
      { img: homeCat9, label: "Books" },
      { img: homeCat10, label: "Appliances" },
    ].map((cat, index) => (
      <SwiperSlide key={index}>
        <Link to="/">
          <div className="flex flex-col items-center">
            <div className="w-30 h-30 rounded-full bg-white shadow flex items-center justify-center">
              <img
                src={cat.img}
                alt={cat.label}
                className="w-20 h-20 object-contain transition duration-300 hover:scale-105"
              />
            </div>
            <h3 className="mt-1 text-sm font-medium text-center">{cat.label}</h3>
          </div>
        </Link>
      </SwiperSlide>
    ))}
        </Swiper>
      </div>
    </>
  );
}

export default HomeCatSlider;
