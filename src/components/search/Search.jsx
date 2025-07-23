import React from "react";
import "../search/Style.css";
import { IoIosSearch } from "react-icons/io";

const Search = () => {
  return (
    <div className='searchBox w-full h-[50px] bg-[#e5e5e5] rounded-[5px] relative'>
  <input 
    type="text" 
    name="search"
    id="search"
    placeholder='Search for products...'
    className='w-full h-full focus:outline-none bg-inherit px-3 text-[15px] pl-4 pr-10 placeholder:text-gray-600'
  />

  <button className="!absolute top-[5px] right-[5px] z-50 w-[35px] !min-w-[35px] h-[35px] !rounded-full cursor-pointer !text-black">
    <IoIosSearch className="text-[#2a2a2a] text-[22px]"/>
  </button>
</div>
  );
};

export default Search;
