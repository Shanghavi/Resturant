"use client";


import React, { useState } from "react";
import Image from "next/image";
import LoginFormModal from "./LogInFormModal";

interface SignInFormProps {
  onClose: () => void;
}

const SignUpForm: React.FC<SignInFormProps> = ({ onClose }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [agree, setAgree] = useState(false);

  const toggleAgree = () => {
    setAgree(!agree);
  };
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const [isLoginFormOpen, setIsLoginFormOpen] = useState(false);

  const openLoginForm = () => {
    setIsLoginFormOpen(true);
  };

  const closeLoginForm = () => {
    setIsLoginFormOpen(false);
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
          <h2 className="text-4xl font-semibold text-gray-800">Create your account.</h2>
          <p className="text-gray-600 mt-2">
            Already have an account?{" "}
         
            <button onClick={openLoginForm} className="hover:text-[#9d2d3e] font-semibold">
                 Log In
                </button>
               {/* <span className="text-green-500 font-semibold">Sign Up</span> */}
          </p>
        </div>
        <form className="mt-6 ">
        <div className="mb-6 ">
              <label className="block text-gray-700 text-xl font-medium" htmlFor="fullName">
               Full Name <span className="text-orange-600">*</span>
              </label>
              <input
                className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 border rounded-lg focus:outline-none focus:border-green-500"
                type="text"
                id="fullName"
                placeholder="John Luther"
                required
              />
            </div>
        <div className="mb-6 ">
              <label className="block text-gray-700 text-xl font-medium" htmlFor="email">
                Email Address <span className="text-orange-600">*</span>
              </label>
              <input
                className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 border rounded-lg focus:outline-none focus:border-green-500"
                type="email"
                id="email"
                placeholder="John@gmail.com"
                required
              />
            </div>
            <div className="mb-6 ">
              <label className="block text-gray-700 text-xl font-medium" htmlFor="password">
                Password <span className="text-orange-600">*</span>
              </label>
              <div className="relative">
                <input
                  className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 border rounded-lg focus:outline-none focus:border-green-500"
                  type={passwordVisible ? "text" : "password"}
                  id="password"
                  placeholder="*********"
                  required
                />
                <button
                  type="button"
                  className="absolute top-4 right-4 text-gray-600 focus:outline-none"
                  onClick={togglePasswordVisibility}
                >
                  {passwordVisible ? (
                <i className="fas fa-eye-slash text-gray-500 hover:text-emerald-500"></i>
              ) : (
                <i className="fas fa-eye text-gray-500 hover:text-emerald-500"></i>
              )}
                </button>
                </div>
              </div>
              <div className="mb-6 flex items-center">
              <div
          className={`w-6 h-6 border border-green-500 rounded cursor-pointer relative ${
            agree ? 'bg-green-500' : 'bg-white'
          }`}
          onClick={toggleAgree}
        >
           {agree && (
            <i className="fa-solid fa-check" style={{ fontSize: '18px', width: '18px', height: '18px' }}></i>
            
          )}
        </div>
        <div className="ml-3 text-neutral-700 text-base font-normal font-['Poppins']">
          I agree to the terms and conditions
        </div>
   
          
            </div>
            <div className="mb-2">
              <button
                className="w-full px-6 py-2.5 text-white bg-gradient-to-r from-emerald-800 via-neutral-500 to-lime-300 rounded-lg font-semibold hover:bg-emerald-700 focus:outline-none focus:bg-emerald-700"
                type="submit"
              >
               Sign Up
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
  <LoginFormModal isOpen={isLoginFormOpen} onClose={closeLoginForm} />
</div>



  );
};

export default SignUpForm;
