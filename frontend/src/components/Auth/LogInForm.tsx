"use client";


import React, { useState } from "react";
import Image from "next/image";
import SignUpFormModal from "./SignUpFormModel";

interface LogInFormProps {
  onClose: () => void;
}

const LogInForm: React.FC<LogInFormProps> = ({ onClose }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const [isSignupFormOpen, setIsSignupFormOpen] = useState(false);

  const openSignupForm = () => {
    setIsSignupFormOpen(true);
  };

  const closeSignupForm = () => {
    setIsSignupFormOpen(false);
  };

  return (

<div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-50 bg-black">
  <div className="w-full  flex">
    {/* Left side: Form */}
    <div className="w-full  flex items-center justify-center">
      <div className=" p-8 sm:p-20 bg-white rounded-lg shadow-lg relative">
        {/* Close icon */}
        <button
          className="absolute top-2 right-4 text-gray-600 focus:outline-none"
          onClick={onClose}
        >
          <i className="fa fa-times text-xxl"></i>
        </button>

        <div className="text-center">
          <h2 className="text-4xl font-semibold text-gray-800">Welcome back</h2>
          <p className="text-gray-700 mt-2">
            Dont have an account?{" "}
         
            <button onClick={openSignupForm} className="hover:text-[#9d2d3e] font-semibold">
                 Sign Up
                </button>
               {/* <span className="text-green-500 font-semibold">Sign Up</span> */}
          </p>
        </div>
        <form className="mt-6 ">
        <div className="mb-6 ">
              <label className="block text-gray-700 text-xl font-medium" htmlFor="email">
                Email address <span className="text-orange-600">*</span>
              </label>
              <input
                className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 border rounded-lg focus:outline-none focus:border-[#93314c]"
                type="email"
                id="email"
                placeholder="example@gmail.com"
                required
              />
            </div>
            <div className="mb-6 ">
              <label className="block text-gray-700 text-xl font-medium" htmlFor="password">
                Password <span className="text-orange-600">*</span>
              </label>
              <div className="relative">
                <input
                  className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 border rounded-lg focus:outline-none focus:border-[#93314c]"
                  type={passwordVisible ? "text" : "password"}
                  id="password"
                  placeholder="*************"
                  required
                />
                <button
                  type="button"
                  className="absolute top-4 right-4 text-gray-600 focus:outline-none"
                  onClick={togglePasswordVisibility}
                >
                  {passwordVisible ? (
                <i className="fas fa-eye-slash text-gray-500 hover:text-[#93314c]"></i>
              ) : (
                <i className="fas fa-eye text-gray-500 hover:text-[#93314c]"></i>
              )}
                </button>

              </div>
              <div className="mt-2 text-gray-700 text-base">
                <a href="#" className="text-[#b12d52] hover:underline">
                  Forgotten password?
                </a>
              </div>
            </div>
            <div className="mb-2">
              <button
                className="w-full px-6 py-2.5 text-white bg-[#93314c] rounded-lg font-semibold hover:bg-gray-500 focus:outline-none focus:bg-emerald-700"
                type="submit"
              >
                Log In
              </button>
            </div>
        </form>
      </div>
    </div>

    {/* Right side: Image */}
    {/* <div className="hidden sm:block w-1/3">
      <div className="h-full flex items-center justify-center">
        <Image
          src="/login.png"
          alt="Placeholder Image"
          width={400}
          height={400}
        />
      </div>
    </div> */}
  </div>
  <SignUpFormModal isOpen={isSignupFormOpen} onClose={closeSignupForm} />
</div>



  );
};

export default LogInForm;
