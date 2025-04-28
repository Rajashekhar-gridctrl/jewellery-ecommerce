import React from "react";

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center mt-10 font-lato">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-[#CFB484] mb-6">Login</h1>

        {/* Email Field */}
        <label className="block text-[#CFB484] font-semibold">Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full p-3 border rounded-lg border-[#CFB484] focus:outline-none focus:ring-2 focus:ring-gray-500 mb-4"
        />

        {/* Password Field */}
        <label className="block text-[#CFB484] font-semibold">Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          className="w-full p-3 border rounded-lg border-[#CFB484] focus:outline-none focus:ring-2 focus:ring-gray-500 mb-4"
        />

        {/* Forgot Password Link */}
        <div className="text-right">
          <a href="#" className="text-gray-600 hover:text-[#CFB484] text-sm">Forgot your password?</a>
        </div>

        {/* Sign In Button */}
        <button className="w-full bg-[#CFB484] text-white px-6 py-2 rounded-lg text-lg font-semibold hover:bg-gray-900 transition mt-4">
          Sign In
        </button>

        {/* Create Account Link */}
        <div className="text-center mt-4">
          <p className="text-[#CFB484]">
            Don't have an account? <a href="#" className="text-gray-900 font-semibold">Create account</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;