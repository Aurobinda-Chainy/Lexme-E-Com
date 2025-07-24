import React from "react";
import {useNavigate} from "react-router-dom";

const CheckOut = () => {
    const navigate = useNavigate();

    return(
        <div className="flex items-center justify-center min-h-[50vh] bg-gray-100 px-4 py-10">
            <div className="bg-gradient-to-br from pink-500 via-red-400 to-yellow-400 p-6 sm:p-8 lg:p-10 rounded-2xl shadow-2xl text-white w-full max-w-xl text-center">
                <h1 className="text-3xl font-bold mb-4">Thank You!</h1>
                <p>
                    Your order has been placed successfully. We appreciate your purchase!
                </p>

                <div className="flex justify-center gap-4 mt-4">
                    <button onClick={() => navigate("/")}
                        className="bg-white text-pink-600 font-semibold px-5 py-2 rounded-md shadow hover:bg-gray-200 transition duration-200">
                        Go Home
                    </button>
                    <button onClick={()=> navigate("/contact-us")}
                        className="bg-white text-pink-600 font-semibold px-5 py-2 rounded-md shadow hover:bg-gray-200 transition duration-200">
                        Feedback
                    </button>
                </div>
            </div>
        </div> 
    )
}

export default CheckOut;