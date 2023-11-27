"use client";

import Image from 'next/image';
import React, { useState } from 'react'

const ContactForm = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
      });
    
      const [submitted, setSubmitted] = useState(false);
    
      const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        setSubmitted(true);
      };

  return (
  


    // <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center mt-10 ">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto mt-20 mb-40">
    {/* Left Side: Form */}
    <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-[#b12d52] text-center mb-8">
        We&apos;d love to hear your feedback.
      </h1>
      {submitted ? (
        <div className="text-[#93314c] text-xl font-semibold mb-6 text-center">
          Thank you for your feedback!
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
           
          <div className="mb-6">
            {/* <label htmlFor="name" className="block text-neutral-600 text-xl font-normal mb-2">
              Your Name
            </label> */}
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full py-2 pl-4 pr-10 text-neutral-600 text-normal bg-white border border-black rounded-lg focus:outline-none focus:border-[#b12d52]"
              placeholder="Your name"
              required
            />
          </div>

          <div className="mb-6">
            {/* <label htmlFor="email" className="block text-neutral-600 text-xl font-normal mb-2">
              Your Email
            </label> */}
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full py-2 pl-4 pr-10 text-neutral-600 text-normal bg-white border border-black rounded-lg focus:outline-none focus:border-[#b12d52]"
              placeholder="Your email"
              required
            />
          </div>

          <div className="mb-6">
            {/* <label htmlFor="message" className="block text-neutral-600 text-xl font-normal mb-2">
              Type Your Message
            </label> */}
            <textarea
              id="message"
              name="message"
            //   rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full py-2 px-4 pt-4 text-neutral-600 text-normal bg-white border border-black rounded-lg focus:outline-none focus:border-[#b12d52] resize-none"
              placeholder="Type your message"
              required
            ></textarea>
          </div>

        
          <button className="w-full py-3 text-lg text-white bg-[#b12d52] rounded-lg font-bold hover:bg-emerald-700 focus:outline-none focus:bg-emerald-700">
            Send Message
          </button>
        </form>
      )}
    </div>

    {/* Right Side: Image */}
    <div className="hidden sm:hidden md:block relative rounded-lg overflow-hidden">
          <Image
            src="/contactpage.jpg" 
            alt="Image Description"
            width={700} 
            height={700} 
          />
        </div>
  </div>
// </div>

  )
}

export default ContactForm