import { Routes, Route } from "react-router-dom";
import Home from "../screens/home/Home";
import Login from "../screens/login/Login";
import Register from "../screens/Register/Register";
import ProductListing from "../components/productListing/ProductListing";
import Contact from "../screens/contact/Contact";
import About from "../screens/about/About";
import Cart from "../screens/cart/Cart";
import CheckOut from "../components/checkOut/CheckOut";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/products/:category?" element={<ProductListing />} />
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/check-out" element={<CheckOut/>}/>
      </Routes>
    </>
  );
};

export default  AppRoutes;
