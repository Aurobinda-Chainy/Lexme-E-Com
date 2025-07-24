import React, { useState } from "react";
import { Link } from "react-router-dom";
import { loginPhoto } from "../../assets/assets";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email_id: "",
    password: "",
    confirmPassword: "",
  });

  const [feedback, setFeedback] = useState({ message: "", type: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setFeedback({ message: "Passwords do not match", type: "error" });
      return;
    }

    const dataToSend = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email_id: formData.email_id,
      password: formData.password,
      confirmPassword: formData.password,
      created_by: "frontend",
    };

    try {
      const res = await fetch("https://lexme-e-com-backend.vercel.app/api/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataToSend),
      });

      const result = await res.json();

      if (res.ok) {
        setFeedback({ message: "Registered Successfully!", type: "success" });
        setFormData({
          firstName: "",
          lastName: "",
          email_id: "",
          password: "",
          confirmPassword: "",
        });
      } else {
        setFeedback({
          message: result.message || result.error || "Registration failed",
          type: "error",
        });
      }
    } catch (error) {
      console.error(error);
      setFeedback({ message: "Server not responding", type: "error" });
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 px-4">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* Left side */}
        <div className="hidden md:block">
          <img
            src={loginPhoto}
            alt="Login"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right side - form */}
        <div className="p-8">
          <h2 className="text-2xl font-bold text-green-600 mb-4">Register</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="First Name"
                value={formData.firstName}
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
                className="w-1/2 border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <input
                type="text"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
                className="w-1/2 border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
            <input
              type="email"
              placeholder="Your Email"
              value={formData.email_id}
              onChange={(e) =>
                setFormData({ ...formData, email_id: e.target.value })
              }
              className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <div className="flex gap-4">
              <input
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                className="w-1/2 border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <input
                type="password"
                value={formData.confirmPassword}
                onChange={(e) =>
                  setFormData({ ...formData, confirmPassword: e.target.value })
                }
                placeholder="Confirm Password"
                className="w-1/2 border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
            <div className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <p className="text-sm text-gray-600">
                I agree to the{" "}
                <span className="text-green-600 underline">
                  Terms and Conditions
                </span>
              </p>
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
            >
              Register
            </button>
            {feedback.message && (
              <p
                className="text-center text-sm mt-2"
                style={{ color: feedback.type === "success" ? "green" : "red" }}
              >
                {feedback.message}
              </p>
            )}
          </form>
          <p className="text-sm text-center text-gray-600 mt-6">
            Already have an account?{" "}
            <Link to="/login" className="text-green-600 hover:underline">
              Login here{" "}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
