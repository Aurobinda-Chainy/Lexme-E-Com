import React from "react";
import { LiaShippingFastSolid } from "react-icons/lia";
import { PiKeyReturnLight } from "react-icons/pi";
import { RiSecurePaymentLine } from "react-icons/ri";
import { LiaGiftSolid } from "react-icons/lia";
import { BiSupport } from "react-icons/bi";

function AboveFooter() {
  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-x-12 gap-y-6">
        <div className="flex flex-col items-center">
          <LiaShippingFastSolid className="text-3xl mb-2 text-gray-700 hover:text-[#ff5252]"/>
          <h3 className="font-semibold mt-1">Free Shipping</h3>
          <p className="text-sm text-gray-500">For all Orders Over $100</p>
        </div>
        <div className="flex flex-col items-center">
          <PiKeyReturnLight className="text-3xl mb-2 text-gray-700 hover:text-[#ff5252]"/>
           <h3 className="font-semibold mt-1">30 Days Returns</h3>
           <p className="text-sm text-gray-500">For an Exchange Product</p>
        </div>
        <div className="flex flex-col items-center">
          <RiSecurePaymentLine className="text-3xl mb-2 text-gray-700 hover:text-[#ff5252]"/>
          <h3 className="font-semibold mt-1">Secured Payment</h3>
          <p className="text-sm text-gray-500">Payment Cards Accepted</p>
        </div>
        <div className="flex flex-col items-center">
          <LiaGiftSolid className="text-3xl mb-2 text-gray-700 hover:text-[#ff5252]"/>
          <h3 className="font-semibold mt-1">Special Gifts</h3>
          <p className="text-sm text-gray-500">On First Product Order</p>
        </div>
        <div className="flex flex-col items-center">
          <BiSupport className="text-3xl mb-2 text-gray-700 hover:text-[#ff5252]"/>
          <h3 className="font-semibold mt-1">Support 24/7</h3>
          <p className="text-sm text-gray-500">Contact us Anytime</p>
        </div>
      </div>
    </section>
  );
}

export default AboveFooter;
