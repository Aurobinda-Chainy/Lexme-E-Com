import React from 'react';
import {CartContext} from "../cart/CartContext"
import { useCart } from '../../screens/cart/useCart';
import {IoMdClose} from 'react-icons/io';
import { LiaTrashSolid } from "react-icons/lia";
import { FiMinus } from "react-icons/fi";
import { GoPlus } from "react-icons/go";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";


const CartDrawer = () => {
    const { cartItems, setIsCartOpen, setCartItems,
        isCartOpen,
    } = useCart();

    const closeDrawer = () =>{
        setIsCartOpen(false);
    };

    const updateQuantity = (index, delta) =>{
        const updatedItems = [...cartItems];
        const newQty = updatedItems[index].quantity + delta;

        if(newQty > 0){
            updatedItems[index].quantity =newQty;
            setCartItems(updatedItems);
        }
    };

    const removeItem = (index) =>{
        const updatedItems = cartItems.filter((_,i) => i !== index);
        setCartItems(updatedItems);
    };

    const getTotal = () => 
        cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    if(!isCartOpen) return null;

    return(
        <div className='fixed top-0 right-0 w-full max-w-sm h-full bg-white shadow-lg z-50 transition-transform duration-300 ease-in-out overflow-y-auto'>
           

            <div className='relative p-6 h-full z-50'>
                <button onClick={closeDrawer} className='absolute top-4 right-4 text-gray-700 text-2xl'>
                    <IoMdClose/>
                </button>
                
                <h2 className='text-xl font-semibold mb-4'>Your Cart</h2>

                {cartItems.length === 0 ?(
                    <p className='text-gray-500'>Your cart is empty</p>
                ): (
                    <>
                        <ul className='space-y-4'>
                            {cartItems.map((item, index) => (
                                <li key={index} className="border-b pb-2 flex justify-between items-start">
                                   <div>
                                    <p className='font-medium'>{item.name}</p>
                                    <div className='flex items-center mt-1 space-x-2 gap-2'>
                                        <button onClick={() => updateQuantity(index, -1)} 
                                            className='px-2 py-1 bg-gray-200 rounded'>
                                            <FiMinus/>
                                        </button>

                                        <span>{item.quantity}</span>

                                        <button onClick={() => updateQuantity(index, 1)} 
                                            className='px-2 py-1 bg-gray-200 rounded'>
                                            <GoPlus />
                                        </button>

                                        <button onClick={()=> removeItem(index)} className='text-xl text-red-500 mt-1'>
                                        <LiaTrashSolid/>
                                        </button>
                                    </div>

                                   </div>
                                   <p className='font-semibold'>₹{item.price}</p>
                                </li>
                            ))}
                        </ul>

                        <div className='mt-6 border-t pt-4'>
                            <p className='text-lg font-bold flex justify-between'>
                                Total Amount: <span>₹{getTotal().toFixed(2)}</span>
                            </p>

                            <button className='mt-4 w-full bg-red-500 text-white py-white py-2 rounded hover:bg-red-600 flex items-center justify-center gap-2'>Check Out
                                <MdOutlineShoppingCartCheckout className='text-xl'/>
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default CartDrawer;