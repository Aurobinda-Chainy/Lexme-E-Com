import React from 'react'
import AboveFooter from './AboveFooter'
import { BsChatLeft } from "react-icons/bs";

const Footer =()=> {
  return (
    <>
    <footer className='bg-white text-gray-700 text-sm mt-8'>
    <AboveFooter/> <hr />

    <div className='container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-4 gap-6'>
        <div>
            <h4 className='font-semibold mb-3'>Contact us</h4>
            <p className='text-[12px]'>Lexme - Mega Super Stores</p>
            <p className='text-[12px]'>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
             <p className="mt-3 text-[12px]">sales@yourcompany.com</p>
          <p className="text-[#ff5252] font-semibold mt-1 text-l">(+91) 9876-543-210</p>

          <div className='flex items-center mt-3'>
                <BsChatLeft className='text-xl text-[#ff5252]'/>
                <span className="ml-2 font-semibold">Online Chat<br /><span className="font-semibold">Get Expert Help</span></span>
          </div>
        </div>

        <div>
        <h4 className='font-semibold mb-3'>Products</h4>
        <ul className='space-y-1'>
            <li>Prices drop</li>
            <li>New products</li>
            <li>Best sales</li>
            <li>Contact us</li>
            <li>Stores</li>
        </ul>
        </div>

        <div>
        <h4 className='font-semibold mb-3'>Our Company</h4>
        <ul className='space-y-1'>
            <li>Delivery</li>
            <li>Legal Notice</li>
            <li>Terms and conditions of use</li>
            <li>About us</li>
            <li>Secure payment</li>
        </ul>
        </div>

        <div >
            <h4 className='font-semibold mb-3'>Subscribe to newsletter</h4>
            <p className='mb-2 text-[12px]'>Subscribe to our latest newsletter to get news about special discounts.</p>
            <input type="email" placeholder="Your Email Address" className='w-full border px-2 py-1 mb-2 text-sm rounded' />
            <button className='bg-[#ff5252] text-white px-4 py-1 rounded text-sm'>SUBSCRIBE</button>
            <div className='flex items-center mt-2'>
                <input type="checkbox" className='mr-2'/>
                <p className='text-[12px]'>I agree to the terms and conditions and the privacy policy</p>
            </div>
        </div>
    </div>
    </footer>
    </>
  )
}

export default Footer