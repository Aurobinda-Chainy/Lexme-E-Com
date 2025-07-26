import React from 'react';
import { useWishlist } from '../../screens/wishList/WishlistContext';
import { useCart } from '../../screens/cart/useCart';
import { useNavigate } from 'react-router-dom';
import { IoMdClose } from 'react-icons/io';
import { LiaTrashSolid } from 'react-icons/lia';
import { FaHeartBroken } from 'react-icons/fa';

const WishlistDrawer = () => {
  const navigate = useNavigate();
  const { wishlistItems, removeFromWishlist, isWishlistOpen, setIsWishlistOpen } = useWishlist();
  const { addToCart } = useCart();

  const closeDrawer = () => {
    setIsWishlistOpen(false);
  };

  const handleAddToCart = (item) => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert("Please log in to add to cart.");
      navigate("/login");
      return;
    }
    addToCart(item);
  };

  if (!isWishlistOpen) return null;

  return (
    <div className='fixed top-0 right-0 w-full max-w-sm h-full bg-white shadow-lg z-50 transition-transform duration-300 ease-in-out overflow-y-auto'>
      <div className='relative p-6 h-full'>
        <button onClick={closeDrawer} className='absolute top-4 right-4 text-gray-700 text-2xl'>
          <IoMdClose />
        </button>

        <h2 className='text-xl font-semibold mb-4'>Your Wishlist</h2>

        {wishlistItems.length === 0 ? (
          <div className="text-center text-gray-500 mt-10">
            <FaHeartBroken className="text-4xl mx-auto mb-2 text-red-300" />
            <p>Your wishlist is empty.</p>
          </div>
        ) : (
          <ul className='space-y-4'>
            {wishlistItems.map((item, index) => (
              <li key={index} className="border-b pb-2 flex justify-between items-start">
                <div className="flex-1">
                  <p className='font-medium'>{item.name}</p>
                  <p className="text-xs text-gray-500">{item.brand}</p>

                  <div className='flex items-center gap-2 mt-2'>
                    <button
                      onClick={() => handleAddToCart(item)}
                      className='text-xs border border-red-500 text-red-500 rounded px-2 py-1 hover:bg-red-500 hover:text-white transition'
                    >
                      Add to Cart
                    </button>
                    <button
                      onClick={() => removeFromWishlist(item.id)}
                      className='text-red-500 text-lg hover:text-red-700'
                      title="Remove from Wishlist"
                    >
                      <LiaTrashSolid />
                    </button>
                  </div>
                </div>
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-16 h-16 object-contain rounded"
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default WishlistDrawer;