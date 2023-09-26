"use client";

import React, { useState } from 'react'

const ProfileForm :React.FC = () => {
        const [formData, setFormData] = useState({
          fullName: '',
          email: '',
          newPassword: '',
          reenterPassword: '',
        });
      
        const [passwordVisibility, setPasswordVisibility] = useState(false);
        const [passwordsMatch, setPasswordsMatch] = useState(true);
      
        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          const { name, value } = e.target;
          setFormData({
            ...formData,
            [name]: value,
          });
        };
      
        const handleTogglePasswordVisibility = () => {
          setPasswordVisibility(!passwordVisibility);
        };
      
        const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
      
          if (formData.newPassword === formData.reenterPassword) {
            // Passwords match
            setPasswordsMatch(true);
            //  form submission
            console.log(formData);
          } else {
            // Passwords do not match
            setPasswordsMatch(false);
          }
        };
    
  return (
    <div className="bg-white min-h-screen flex items-center justify-center mt-10 mb-10">
      <div className="bg-gray-200 lg:px-60 lg:py-20 md:p-20 p-10">
          <div className="text-3xl font-bold text-center text-emerald-600 font-['Rufina'] ">Profile Settings</div>
       
        <form onSubmit={handleSubmit} className="p-4 ">
          <div className="mb-8">
            <label htmlFor="fullName" className="block text-gray-700 text-lg font-semibold">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Your Full Name"
              className="w-full border border-gray-300 rounded-lg py-3 px-3 mt-1 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              required
            />
          </div>
          <div className="mb-8">
            <label htmlFor="email" className="block text-gray-700 text-lg font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email Address"
              className="w-full border border-gray-300 rounded-lg py-3 px-3 mt-1 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              required
            />
          </div>
          <div className="mb-8 relative">
            <label htmlFor="newPassword" className="block text-gray-700 text-lg font-semibold">
              New Password
            </label>
            <input
              type={passwordVisibility ? 'text' : 'password'}
              id="newPassword"
              name="newPassword"
              value={formData.newPassword}
              onChange={handleChange}
              placeholder="New Password"
              className="w-full border border-gray-300 rounded-lg py-3 px-3 mt-1 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              required
            />
            <button
              type="button"
              onClick={handleTogglePasswordVisibility}
              className="absolute top-3/4 right-3 transform -translate-y-1/2"
            >
              {passwordVisibility ? (
                <i className="fas fa-eye-slash text-gray-500 hover:text-emerald-500"></i>
              ) : (
                <i className="fas fa-eye text-gray-500 hover:text-emerald-500"></i>
              )}
            </button>
          </div>
          <div className=" relative">
            <label htmlFor="reenterPassword" className="block text-gray-700 text-lg font-semibold">
              Re-enter Password
            </label>
            <input
    type={passwordVisibility ? 'text' : 'password'}
    id="reenterPassword"
    name="reenterPassword"
    value={formData.reenterPassword}
    onChange={handleChange}
    placeholder="Re-enter Password"
    className={`w-full border ${
      passwordsMatch ? 'border-gray-300' : 'border-red-500'
    } rounded-lg py-2 px-3 mt-1 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500`}
    required
  />
  <button
    type="button"
    onClick={handleTogglePasswordVisibility}
    className="absolute top-3/4 right-3 transform -translate-y-1/2"
  >
    {passwordVisibility ? (
      <i className="fas fa-eye-slash text-gray-500 hover:text-emerald-500"></i>
    ) : (
      <i className="fas fa-eye text-gray-500 hover:text-emerald-500"></i>
    )}
  </button>
</div>
{!passwordsMatch && (
  <div className="text-red-500 text-sm mt-1">Passwords do not match.</div>
)}
         
          <div className="text-center">
            <button
              type="submit"
              className="bg-red-700 text-white uppercase py-2 px-36 mt-10 rounded-lg font-semibold font-['Pacifico'] hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              Update Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ProfileForm