import React , {useState} from "react";
import {Link, useNavigate } from "react-router-dom";
import {loginPhoto} from "../../assets/assets"


const Login = () =>{
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const [ feedback, setFeedback] = useState({ message: "", type: ""});
    const navigate = useNavigate();

const handleLogin = async(e) => {
        e.preventDefault();

        try {
        const res =  await fetch(
  `${import.meta.env.VITE_API_URL}/api/users/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email_id: email, password }),
        });

        const contentType = res.headers.get("content-type");

        if (contentType && contentType.includes("application/json")) {
            const data = await res.json();

            if (res.ok) {
                setFeedback({ message: data.message || "Login Successful!", type: "success" });
                
                localStorage.setItem("token", data.token);
                localStorage.setItem("user", JSON.stringify(data.user));

                console.log("Token saved:", localStorage.getItem("token"));

                setTimeout(() => {
                    navigate("/");
                    window.location.reload();
                }, 1500);
            } else {
                setFeedback({ message: data.message || "Login failed.", type: "error" });
            }
        } else {
            const errorText = await res.text();
            console.error("Login failed (not JSON):", errorText);
            setFeedback({ message: "Login failed: Unexpected server response", type: "error" });
        }

    } catch (err) {
        console.error("Login error:", err);
        setFeedback({ message: "Server Error", type: "error" });
    }
    };
    return(
       <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">
            <div className="hidden md:block">
                <img src={loginPhoto} alt="Login" className="w-full h-full object-cover"/>
            </div>

            <div className="p-8">
                <h2 className="text-3xl font-bold text-green-600 mb-2">Welcome Back</h2>
                <p className="text-gray-500 mb-6">Login to continue Shopping</p>
                
                <form className="space-y-4" onSubmit={handleLogin}>
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">Email</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Your Email" className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-400"/>
                    </div>

                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">Password</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your Password" className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-400"/>
                    </div>

                    <div>
                        <Link to="/forget-password" className="text-sm text-green-600 hover:underline">Forget Password?</Link>
                    </div>

                    <button type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">Login</button>
                </form>

                <p className={`text-center text-sm mt-2 ${
                    feedback.type === "success" ? "text-green-600" : "text-red-600"
                }`}>
                    {feedback.message}
                </p>

                <p className="text-sm text-center text-gray-600 mt-6">
                     Don’t have an account?{" "}
                     <Link to="/register" className="text-green-600 hover:underline">
                Register here </Link>
                </p>
            </div>
        </div>
       </div>
    )


}

export default Login