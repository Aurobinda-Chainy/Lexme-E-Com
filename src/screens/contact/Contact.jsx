import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    queryType: "",
    fullName: "",

    countryCode: "+91",
    mobile: "",
    email: "",
    store: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert("Query submitted successfully");
  };

  return (
    <section className="p-6 space-y-12">
      <div>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h1>
        <p className="text-lg text-gray-600 mb-8">
          We’re here to help you with all your orders, returns, and product
          inquiries.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-700">
          <div>
            <h2 className="text-xl font-semibold mb-2">Address</h2>
            <p>
              Lexme Ecom Store HQ <br />
              Lorem ipsum dolor sit amet.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Call Us</h2>
            <p>Customer Care: +91 9205 010 100</p>
            <p>Support: +91-124 4921021</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Email</h2>
            <p>
              Support:{" "}
              <a href="mailto:support@ecomstore.com" className="text-blue-600">
                {" "}
                support@ecomstore.com
              </a>
            </p>

            <p>
              Feedback:{" "}
              <a href="mailto:feedback@ecomstore.com" className="text-blue-600">
                feedback@ecomstore.com
              </a>
            </p>
          </div>
        </div>
      </div>

      <section className="bg-gray-50">
        <div className="max-w-6xl mx-auto p-6">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Get in Touch With Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d957305.9993388058!2d85.794565!3d20.404461!3m2!1i1024!2i768!4f13.1!2m1!1sDCB321%2C%20DLF%20Cyber%20City%2C%20Technology%20Corridor%2C%20Patia%2C%20Bhubaneswar!5e0!3m2!1sen!2sus!4v1752917533510!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            </div>


            <form onSubmit={handleSubmit} className=" grid grid-cols-1 gap-4">
              <div>
                <label className="block mb-1 font-medium">Query Type *</label>
                <select
                  name="queryType"
                  value={form.queryType}
                  onChange={handleChange}
                  className="w-full border p-2 rouded"
                  required
                >
                  <option value="">Select</option>
                  <option value="order">Order Issue</option>
                  <option value="return">Return</option>
                  <option value="product">Product</option>
                  <option value="feedback">Feedback</option>
                </select>
              </div>

              <div>
                <label className="block mb-1 font-medium">Full Name *</label>
                <input
                  type="text"
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Phone Number *</label>
                <input
                  type="text"
                  name="mobile"
                  value={form.mobile}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                  required
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                  required
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Preferred Store</label>
                <select name="store" value={form.store} onChange={handleChange} className="w-full border p-2 rounded">
                    <option value="">Select a store</option>
                    <option value="bhubaneswar">Bhubaneswar Store</option>
                    <option value="mumbai">Mumbai Store</option>
                    <option value="delhi">Delhi Store</option>
                </select>
              </div>

              <div>
                <label className="block mb-1 font-medium">Message</label>
                <textarea name="message" rows="4" value={form.message} onChange={handleChange} className="w-full border p-2 rounded" placeholder="Write your query..."></textarea>
              </div>

              <div className="text-center">
                    <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
                        Submit
                    </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Contact;
