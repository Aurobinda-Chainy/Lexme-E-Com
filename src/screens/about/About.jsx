import React from "react";
import { FaBoxOpen, FaTruck, FaUsers, FaBullseye, FaGlobe } from "react-icons/fa";
import { TbShoppingBagCheck } from "react-icons/tb";

import {AboutUsBan} from "../../assets/assets"

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6 space-y-12">
     
      <div className="relative h-[300px] sm:h-[400px] overflow-hidden flex items-center justify-start">
        <img
          src={AboutUsBan}
          alt="E-commerce Banner"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="relative z-10 left-6 bg-white/30 backdrop-blur-md rounded-lg px-4 py-3 sm:px-6 sm:py-4 ml-4 sm-ml-8 max-w-[90%] shadow-lg text-black">
          <h1 className="text-xl sm:text-3xl md:text-4xl font-bold">Welcome to Lexme Store</h1>
          <p className="text-sm sm:text-base md:text-lg mt-1 sm:mt-2">Your one-stop destination for quality, value, and convenience</p>
        </div>
      </div>

      
      <div className="max-w-7xl mx-auto py-2 px-4 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-red-50 p-6 rounded shadow text-center">
          <FaUsers className="text-3xl mx-auto text-red-600" />
          <p className="text-2xl font-semibold">1M+</p>
          <p className="text-gray-600 mt-1 text-sm">Happy Customers</p>
        </div>

        <div className="bg-yellow-50 p-6 rounded shadow text-center">
          <FaBoxOpen className="text-3xl mx-auto text-yellow-600" />
          <p className="text-2xl font-bold mt-2">20K+</p>
          <p className="text-gray-600 text-sm">Products Available</p>
        </div>

        <div className="bg-blue-50 p-6 rounded shadow text-center">
          <FaTruck className="text-3xl mx-auto text-blue-600" />
          <p className="text-2xl font-bold mt-2">24H</p>
          <p className="text-gray-600 text-sm">Fast Delivery</p>
        </div>

        <div className="bg-purple-50 p-6 rounded shadow text-center">
          <TbShoppingBagCheck className="text-3xl mx-auto text-purple-600" />
          <p className="text-2xl font-bold mt-2">100+</p>
          <p className="text-gray-600 text-sm">Trusted Brands</p>
        </div>
      </div>

      
      <div className="max-w-5xl mx-auto px-4 py-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">About Us</h2>
        <p className="text-gray-700 leading-7">
          <strong>Lexme Store</strong> is a modern eCommerce platform committed to delivering the best online shopping experience. With a wide range of categories—from fashion and electronics to groceries and lifestyle—we aim to be your trusted source for all your daily needs.
          <br /><br />
          Founded with the mission of bringing premium products at affordable prices, Lexme Store serves millions of customers across India. Our platform blends advanced technology, secure payment options, and efficient logistics to ensure smooth and reliable shopping from click to delivery.
          <br /><br />
          At Lexme, customer satisfaction is at the heart of everything we do. With a dedicated team, a constantly growing product lineup, and top-rated customer service, we are redefining convenience, one order at a time.
        </p>
      </div>

      
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="bg-white rounded-xl shadow-md p-8 text-center border border-purple-100 hover:shadow-lg transition duration-300">
            <FaBullseye className="text-5xl mx-auto text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold text-purple-600 mb-2">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              To become the most customer-centric eCommerce platform in India—where people can find and discover anything they want to buy, effortlessly.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8 text-center border border-purple-100 hover:shadow-lg transition duration-300">
            <FaGlobe className="text-5xl mx-auto text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold text-purple-600 mb-2">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              To deliver top-quality products at great value through a seamless online shopping experience, driven by innovation and powered by technology.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default About;
