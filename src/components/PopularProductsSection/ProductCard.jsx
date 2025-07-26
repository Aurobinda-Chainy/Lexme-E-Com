import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { MdZoomOutMap } from "react-icons/md";
import {useCart} from "../../screens/cart/useCart"
import { useWishlist } from "../../screens/wishList/WishlistContext";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const {addToCart} = useCart();
  const { wishlistItems, addToWishlist, removeFromWishlist} = useWishlist();

  const handleAddToCart = () =>{
    const token = localStorage.getItem('token');

    if(!token){
      alert("Please Log In to add to cart.")
      navigate("/login");
      return;
    }
   addToCart(product);
  };

  const handleCheckOut = () =>{
    const token = localStorage.getItem('token');

    if(!token){
      alert("Please Log In to Buy.")
      navigate("/login");
      return;
    }
    navigate("/check-out");
  };

  const isInWishlist = wishlistItems.some(item => item.id === product.id);

  const toggeleWithlist = () => {
    if(isInWishlist){
      removeFromWishlist(product.id);
    }else{
      addToWishlist(product);
    }
  };

  return (
    <div className="bg-white rounded shadow-lg p-2">
      <Link to={`/product/${product.id}`}>
        <div className="relative group">
          <img
            src={product.img}
            alt={product.name}
            className="w-full h-[220px] object-contain rounded bg-white p-5 transform transition duration-300 ease-in-out group-hover:scale-105"
          />
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
            {product.discount}
          </span>

          <div className="actions absolute top-[-200px] right-[5px] z-10 flex items-center gap-2 flex-col w-[50px] transition-all duration-300 group-hover:top-[15px] opacity-0 group-hover:opacity-100">
            <button className="w-[35px] h-[35px] rounded-full bg-white hover:bg-[#ff5252] hover:text-white shadow flex items-center justify-center cursor-pointer"
            >
              <MdZoomOutMap className="text-[18px] text-black hover:text-white" />
            </button>
            <button className="w-[35px] h-[35px] rounded-full bg-white hover:bg-[#ff5252] hover:text-white shadow flex items-center justify-center cursor-pointer"
            onClick={(e) =>{
              e.preventDefault();
              e.stopPropagation();
               toggeleWithlist();
            }
             } 
            title={isInWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
            
            >
              {isInWishlist? (
                <FaHeart className="text-[18px] text-red-500"/>
              ) : (
                  <FaRegHeart className="text-[18px] text-black hover:text-white" />
              )}
            </button>
          </div>
        </div>
        <h4 className="text-sm mt-2 font-semibold hover:text-[#f22] transition">
          {product.brand}
        </h4>
        <p className="text-xs text-gray-500 hover:text-[#f22] transition">
          {product.name}
        </p>
        <div className="flex items-center gap-1 text-yellow-500 text-xs mt-1">
          {"★".repeat(product.rating)}
        </div>
        <div className="flex items-center justify-between gap-2 mt-1">
          <span className="text-gray-400 line-through text-xs">
            {product.oldPrice}
          </span>
          <span className="text-red-600 font-semibold">{product.price}</span>
        </div>
      </Link>

      <div className="mt-2 flex gap-2">
        <button className="w-1/2 border border-red-500 text-red-500 text-xs font-semibold py-1 rounded cursor-pointer hover:bg-red-500 hover:text-white transition"
        onClick={handleAddToCart} >
          ADD TO CART
        </button>
        <button className="w-1/2 border border-red-500 text-red-500 text-xs font-semibold py-1 rounded cursor-pointer hover:bg-red-500 hover:text-white transition"
        onClick={handleCheckOut}>
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
