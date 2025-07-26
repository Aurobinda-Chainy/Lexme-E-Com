import React, { createContext, useContext, useState } from "react";

// Create the context
const WishlistContext = createContext();

// Custom hook for easier usage
export const useWishlist = () => useContext(WishlistContext);

// Provider component
export const WishlistProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState([]);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);

  // Add item to wishlist (no duplicates)
  const addToWishlist = (item) => {
    const exists = wishlistItems.find((i) => i.id === item.id);
    if (!exists) {
      setWishlistItems([...wishlistItems, item]);
    }
  };

  // Remove item from wishlist
  const removeFromWishlist = (itemId) => {
    const updatedWishlist = wishlistItems.filter((item) => item.id !== itemId);
    setWishlistItems(updatedWishlist);
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlistItems,
        addToWishlist,
        removeFromWishlist,
        isWishlistOpen,
        setIsWishlistOpen,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};
