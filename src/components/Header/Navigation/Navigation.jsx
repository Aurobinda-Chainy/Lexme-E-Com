import React, { useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { RiMenuLine } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import { GoRocket } from "react-icons/go";
import CategoryPanel from "./CategoryPanel";

const navItems = [
  { name: "Home", link: "/" },
  { name: "Fashion", link: "/products/fashion" },
  { name: "Electronics", link: "/products/electronics" },
  { name: "Bags", link: "/products/bags" },
  { name: "Footwear", link: "/products/footwear" },
  { name: "Groceries", link: "/products/groceries" },
  { name: "Jewellery", link: "/products/jewellery" },
];

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const [showMobNav, setShowMobileNav] = useState(false);

  return (
    <>
      <nav className="bg-white shadow w-full">
        <div className="max-w-[1200px] w-[90%] mx-auto flex items-center justify-between py-2">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center gap-2 px-3 py-2 bg-white rounded-md text-black font-bold hover:bg-gray-100"
            >
              <HiMenuAlt1 className="text-[18px]" />
              <span>SHOP BY CATEGORIES</span>
              <IoIosArrowDown className="text-[16px]" />
            </button>
          </div>

          <div className="hidden md:flex flex-grow justify-center">
            <ul className="flex items-center gap-5">
              {navItems.map((item) => (
                <li key={item.name} className="list-none">
                  <Link
                    to={item.link}
                    className="text-[13px] font-[500] text-[rgba(0,0,0,0.8)] hover:text-[#ff5252] transition"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden md:flex">
            <p className="text-[13px] font-[500] flex items-center gap-2">
              <GoRocket className="text-[15px]" />
              Free International Delivery
            </p>
          </div>

          <div className="md:hidden">
            <button onClick={() => setShowMobileNav(!showMobNav)}>
               <RiMenuLine className="text-2xl" />
            </button>
          </div>
        </div>
      </nav>

        {open && (
          <div className="fixed inset-0 bg-black opacity-30 z-[150]"></div>
        )}      
      <CategoryPanel open={open} setOpen={setOpen} />

      {showMobNav && (
        <div className="md:hidden bg-white w-full shadow-md z-[100]">
          <ul className="flex flex-col items-start gap-1 px-5 py-3">
            {navItems.map((item) =>(
              <li key={item.name} className="w-full">
              <Link to={item.link} className="block text-[14px] py-2 border-b border-gray-100 w-full text-gray-800 hover:text-[#ff5252]"
              onClick={() => setShowMobileNav(false)}>
              {item.name}</Link>
            </li>
            ))}
            <li className="text-[13px] font-[500] py-2 text-gray-800 flex items-center gap-2">
              <GoRocket className="text-[15px]" />
              Free International Delivery
            </li>
          </ul>
        </div>
      )}
    </>
  );
};
export default Navigation;
