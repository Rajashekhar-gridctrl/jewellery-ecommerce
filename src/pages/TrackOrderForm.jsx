import React, { useState } from "react";

const TrackOrderForm = () => {
  const [method, setMethod] = useState("email");
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Tracking orders using ${method}: ${input}`);
  };

  return (
    <div className="max-w-md mt-10 mx-auto p-8 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6 font-lado">Track Your Order</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="block text-gray-700 font-semibold">Select Method</label>
        <select
          className="w-full p-3 border rounded-lg focus:outline-none"
          value={method}
          onChange={(e) => setMethod(e.target.value)}
        >
          <option value="email">Email ID</option>
          <option value="phone">Mobile Number</option>
        </select>

        {/* Dynamic Input Field */}
        <label className="block text-gray-700 font-semibold">
          Enter {method === "email" ? "Email ID" : "Mobile Number"}
        </label>
        <input
          type={method === "email" ? "email" : "tel"}
          placeholder={method === "email" ? "Enter your email ID" : "Enter your mobile number"}
          className="w-full p-3 border rounded-lg focus:outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          required
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full text-white px-6 py-2 rounded-lg text-lg font-semibold hover:bg-[#CFB484] bg-[#c2a675] text-gray-700  transition"
        >
          Find Orders
        </button>
      </form>
    </div>
  );
};

export default TrackOrderForm;