import React from "react";
import HomeSlider from "./HomeSlider";
import HomeCatSlider from "../../components/CatSlider/HomeCatSlider";
import { LiaShippingFastSolid } from "react-icons/lia";
import AdsBannerSlider from "../../components/AdsBannerSlider/AdsBannerSlider";
import PopularProductsSection from "../../components/PopularProductsSection/PopularProductsSection";
import BestSellingBrands from "../../components/BestSellingBrands/BestSellingBrands";
import HomeSliderV from "../../components/HomeSliderV2/HomeSliderV";
import BannerV from "../../components/BannerBox/BannerV";
import { BannerV2, BannerV2iPhone } from "../../assets/assets";

const Home = () => {
    return(
        <>
            <div className="p-6 space-y-12">
           <HomeSlider/> 
           <HomeCatSlider/>

           <PopularProductsSection/>

           <section className="py-10 bg-white">
                
                    <div className="w-[90%] max-w-6xl mx-auto py-3 px-4 border-2 border-[#ff5252] flex flex-col md:flex-row gap-4 md:gap-0 items-center justify-between rounded-md mb-7 text-center md:text-left">
                       <div className="col1 flex items-center gap-3 md:gap-4">
                        <LiaShippingFastSolid className="text-[40px] md:text-[50px]"/>
                        <span className="text-[18px] md:text-[20px] font-[600]">FREE SHIPPING</span>
                        </div>

                        <div className="col2">
                         <p className="mb-0 text-[15px] md:text-[16px] font-[500]">Free Delivery Now on Your First Order and over $200</p>
                        </div>

                       <p className="font-bold text-[16px] md:text-[20px]">- Only $200*</p>
                    </div>
                    <div className="container mx-auto px-4">
                    <AdsBannerSlider/>
                </div>
           </section>

          <section className="py-6">
            <div className="container mx-auto flex flex-col lg:flex-row gap-5">
                 <div className="part1 w-full lg:w-[70%]">
                    <HomeSliderV/>
                 </div>

                 <div className="part2 w-full lg:w-[30%] flex flex-row items-center justify-between lg:flex-col gap-5">
                    <BannerV info="right" image={BannerV2}
                    title="Buy Men's Footwear with low price"
                    price="$129.00" 
                     link="/products/mens-footwear"/>
                    
                    <BannerV info="left" image={BannerV2iPhone}
                    title="Apple iPhone 12 128 GB, Black"
                     price="$213.83" link="/products/iphone-12"/>
                 </div>
            </div>
          </section>

           <BestSellingBrands/>
           
           </div>
        </>
    )
}

export default Home;