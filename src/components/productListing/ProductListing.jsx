import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SideBar from "../sideBar/SideBar";
import ProductCard from "../PopularProductsSection/ProductCard";
import bagsData from "../../data/bagsData";
import beautyData from "../../data/beautyData";
import electronicsData from "../../data/electronicsData";
import fashionData from "../../data/fashionData";
import footwearData from "../../data/footwearData";
import groceriesData from "../../data/groceriesData";
import jewelryData from "../../data/jewelryData";

const allProducts = [
  ...bagsData,
  ...beautyData,
  ...electronicsData,
  ...fashionData,
  ...footwearData,
  ...groceriesData,
  ...jewelryData,
];

const ProductListing = () => {
  const { category } = useParams();
  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    if(category){
      const formatted = capitalize(category);
      setSelectedCategories([formatted]);
    }
  }, [category]);

  const filteredProducts = selectedCategories.length > 0
    ? allProducts.filter((product) => selectedCategories.includes(product.category))
    : allProducts;

  return (
    <section className="py-8">
      <div className="container mx-auto flex flex-col lg:flex-row gap-4 px-4">
        <div className="w-full lg:w-[25%]">
          <div className="sticky top-20 bg-white shadow rounded-md p-4">
            <SideBar
              selectedCategories={selectedCategories}
              setSelectedCategories={setSelectedCategories}
            />
          </div>
        </div>

        <div className="w-full lg:w-[75%]">
          <h2 className="text-lg sm:text-xl font-bold mb-4">
            There are {filteredProducts.length} products.
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

function capitalize(str){
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export default ProductListing;
