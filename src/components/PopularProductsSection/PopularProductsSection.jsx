import React, { useState } from "react";
import electronicsData from "../../data/electronicsData";
import bagsData from "../../data/bagsData";
import footwearData from "../../data/footwearData";
import beautyData from "../../data/beautyData";
import jewelryData from "../../data/jewelryData";
import ProductSlider from "./ProductSlider";

const PopularProductsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("Electronics");

  const categoryDataMap = {
    Electronics: electronicsData,
    Bags: bagsData,
    Footwear: footwearData,
    Beauty: beautyData,
    Jewelry: jewelryData,
  };

  return (
    <section className="bg-white py-8">
      <div className="container">
        <h2 className="text-[20px] font-[600] mb-2">Popular Products</h2>
        <p className="text-[14px] font-[500] mb-4">Do not miss the current offers until the end of March.</p>
        
        <ul className="flex flex-wrap gap-2 sm:gap-4 mb-4 overflow-x-auto sm:overflow-visible whitespace-nowrap">
          {Object.keys(categoryDataMap).map((category) => (
            <li
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`cursor-pointer font-semibold px-3 py-1 rounded transition-colors duration-200 ${
                selectedCategory === category ? "bg-[#ff5252] text-white" : "text-gray-600"
              }`}
            >
              {category}
            </li>
          ))}
        </ul>

        <ProductSlider products={categoryDataMap[selectedCategory]} />
      </div>
    </section>
  );
};

export default PopularProductsSection;
