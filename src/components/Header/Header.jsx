import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logo } from "../../assets/assets";
import { FaRegHeart, FaUserCircle } from "react-icons/fa";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { IoMdArrowDropdown } from "react-icons/io";
import Search from "../search/Search";
import Navigation from "./Navigation/Navigation";

import { useCart } from "../../screens/cart/useCart";
import CartDrawer from "../../screens/cart/CartDrawer";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const {isCartOpen, setIsCartOpen } = useCart();

  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("cartItems");
    setUser(null);
    setDropdownOpen(false);
    navigate("/login");
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className="bg-white header border-b-[1px] border-gray-120">
        {/* Top strip */}
        <div className="top-strip py-2 border-t border-b border-gray-120 w-full hidden md:block">
          <div className="max-w-[1200px] w-[90%] mx-auto flex items-center justify-between">
            <p className="text-[1em] font-[400]">
              Get up to 50% of new season styles, limited time only
            </p>
            <ul className="flex items-center gap-3">
              <li>
                <Link to="/about-us" className="text-[13px] link font-[500]">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="text-[13px] link font-[500]">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Main header */}
        <div
          className={`${
            scrolled ? "fixed top-0 shadow-md" : "sticky top-0"
          } z-50 bg-white w-full border-b border-gray-120`}
        >
          <div className="max-w-[1200px] w-[90%] mx-auto flex items-center justify-between gap-4 py-2">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/">
                <img
                  src={logo}
                  alt="Logo"
                  className="w-[140px] max-h-[60px] object-cover p-2"
                />
              </Link>
            </div>

            {/* Search Desktop */}
            <div className="hidden md:flex flex-[3]">
              <Search />
            </div>

            {/* Desktop icons */}
            <div className="hidden md:flex items-center gap-5">
              {user ? (
                <div className="relative">
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="flex items-center gap-1 text-sm font-medium"
                  >
                    <FaUserCircle className="text-xl" />
                    {user.firstName}
                    <IoMdArrowDropdown />
                  </button>

                  {dropdownOpen && (
                    <div className="absolute right-0 mt-2 w-44 bg-white border shadow-lg rounded-md z-50 py-2">
                      <Link
                        to="/orders"
                        className="block px-4 py-2 text-sm hover:bg-gray-100"
                      >
                        Orders
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <>
                  <Link to="/login" className="text-sm font-medium link">
                    Login
                  </Link>
                  <span className="text-sm">|</span>
                  <Link to="/register" className="text-sm font-medium link">
                    Register
                  </Link>
                </>
              )}
              <Link to="/wishlist">
                <FaRegHeart className="text-xl link" />
              </Link>
              <button onClick={() => setIsCartOpen(true)}>
                <PiShoppingCartSimpleBold className="text-xl link"/>
              </button>
            </div>

            {/* Mobile icons */}
            <div className="md:hidden flex items-center gap-3">
              {user && (
                <div className="relative">
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="text-xl"
                  >
                    <FaUserCircle />
                  </button>

                  {dropdownOpen && (
                    <div className="absolute right-0 mt-2 w-40 bg-white border shadow-md rounded-md z-50 py-2">
                      <p className="px-4 py-1 text-sm text-gray-700">
                        Hi, {user.firstName}
                      </p>
                      <Link
                        to="/orders"
                        className="block px-4 py-2 text-sm hover:bg-gray-100"
                      >
                        Orders
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              )}

              <Link to="/wishlist">
                <FaRegHeart className="text-xl link" />
              </Link>
               <button onClick={() => setIsCartOpen(true)}>
                <PiShoppingCartSimpleBold className="text-xl link"/>
              </button>

              <button onClick={toggleMenu}>
                {menuOpen ? (
                  <HiX className="text-3xl" />
                ) : (
                  <HiMenuAlt3 className="text-3xl" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          {menuOpen && (
            <div className="md:hidden bg-white px-6 py-4 shadow-lg space-y-3">
              <Search />
              {user ? (
                <>
                  <p className="text-sm font-medium">Hello! {user.firstName}</p>
                  <Link to="/orders" className="block text-sm font-medium link">
                    Orders
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block text-sm font-medium link"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" className="block text-sm font-medium link">
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="block text-sm font-medium link"
                  >
                    Register
                  </Link>
                </>
              )}
              <Link to="/about-us" className="block text-sm font-medium link">
                About Us
              </Link>
              <Link to="/contact-us" className="block text-sm font-medium link">
                Contact Us
              </Link>
            </div>
          )}
        </div>
      </header>

      <Navigation />
      {isCartOpen && <CartDrawer/>}
    </>
  );
};

export default Header;
