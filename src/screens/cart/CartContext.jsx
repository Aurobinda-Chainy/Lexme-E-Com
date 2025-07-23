import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const [cartItems, setCartItems] = useState(()=>{
    try{
        const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
    }catch(err){
      console.error("Error parsing cartItems from localStorage:",err);
      localStorage.removeItem("cartItems");
      return[];
    }
    
  });


  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);
  

  const [isCartOpen, setIsCartOpen] = useState(false);
  

  const addToCart = async (product) => {
    const token = localStorage.getItem("token");

    if(!token){
      alert("Please login first to add items to cart.");
      return;
    }

    try {
      const res = await fetch('http://localhost:5000/api/users/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({
          items: [
            {
              productId: product.id,
              name: product.name,
              price: Number(product.price.replace(/[^0-9.-]+/g,"")),
              quantity: 1,
            },
          ],
        }),
      });

      let responseBody = null;

      try {
        const text = await res.text(); // safely read the raw response
        responseBody = text ? JSON.parse(text) : {}; // parse if not empty
      } catch (err) {
        console.warn("Could not parse JSON response:", err);
      }

      if (!res.ok) {
        console.error('Failed to add item to cart:', responseBody || res.statusText);
        return;
      }

      console.log('Item added to cart successfully');

      if (responseBody?.cart?.items) {
        setCartItems(responseBody.cart.items);
        setIsCartOpen(true);
      } else {
        console.warn("No cart data returned from server.");
      }

    } catch (err) {
      console.error('Network error:', err);
    }
  };

  return (
    <CartContext.Provider value={{ cartItems,setCartItems, addToCart, isCartOpen, setIsCartOpen }}>
      {children}
    </CartContext.Provider>
  );
};
