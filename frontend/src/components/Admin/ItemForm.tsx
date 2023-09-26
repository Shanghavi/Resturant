"use client";

import Link from 'next/link';
import React, { ChangeEvent, useState } from 'react'

const ItemForm :React.FC = () => {
        const [formData, setFormData] = useState({
          itemNumber: '',
          itemName: '',
          itemImage: '',
          itemPrice: '',
          category: '',
        });
      

      
        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          const { name, value } = e.target;
          setFormData({
            ...formData,
            [name]: value,
          });
        };
      
        //image
       
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; // Get the selected file
    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const imageDataUrl = e.target?.result as string;
        setFormData({
          ...formData,
          itemImage: imageDataUrl,
        });
      };

      reader.readAsDataURL(file);
    }
  };
      
      
        const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
    
        };
    
  return (
    <div className="ml-64 p-8">
 <Link href="/menulist">
  <i className="fa-solid fa-circle-chevron-left" style={{color: "#6e123a",  fontSize: '3rem'}}></i>
  </Link>
      <div className="text-4xl font-bold text-center text-[#983551] font-['Rufina'] mb-4">Add Menu Item</div>
    
      <div className=" px-80 py-2 ">
       
        <form onSubmit={handleSubmit} className="p-4 ">
          <div className="mb-8">
            <label htmlFor="itemNumber" className="block text-gray-700 text-lg font-semibold">
             Item Number
            </label>
            <input
              type="text"
              id="itemNumber"
              name="itemNumber"
              value={formData.itemNumber}
              onChange={handleChange}
            //   placeholder="Your Full Name"
              className="w-full border border-gray-300 rounded-lg py-3 px-3 mt-1 focus:outline-none focus:ring-1 focus:ring-[#b34465] focus:border-[#b34465]"
              required
            />
          </div>
          <div className="mb-8">
            <label htmlFor="itemName" className="block text-gray-700 text-lg font-semibold">
              Item Name
            </label>
            <input
              type="text"
              id="itemName"
              name="itemName"
              value={formData.itemName}
              onChange={handleChange}
            //   placeholder="Your Email Address"
              className="w-full border border-gray-300 rounded-lg py-3 px-3 mt-1 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              required
            />
          </div>
          <div className="mb-8">
            <label htmlFor="itemName" className="block text-gray-700 text-lg font-semibold">
              Item Image
            </label>
            
            <input
          type="file"
          id="itemImage"
          name="itemImage"
          accept="image/*" // Allow only image files
          onChange={handleImageChange}
        //   className="w-full border border-gray-300 rounded-lg py-3 px-3 mt-1 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          className="block  w-full text-md  rounded-lg  border border-gray-300 rounded-normal cursor-pointer   focus:outline-none "
          required
        /> 

          </div>
          <div className="mb-8">
            <label htmlFor="itemName" className="block text-gray-700 text-lg font-semibold">
             Price
            </label>
            <input
              type="text"
              id="itemPrice"
              name="itemPrice"
              value={formData.itemPrice}
              onChange={handleChange}
            //   placeholder="Your Email Address"
              className="w-full border border-gray-300 rounded-lg py-3 px-3 mt-1 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              required
            />
          </div>
          <div className="mb-8">
            <label htmlFor="itemName" className="block text-gray-700 text-lg font-semibold">
             Category
            </label>
            <input
              type="text"
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
            //   placeholder="Your Email Address"
              className="w-full border border-gray-300 rounded-lg py-3 px-3 mt-1 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              required
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-[#983551] text-white uppercase py-2 px-36 mt-10 rounded-lg font-semibold font-['Pacifico'] hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
            Save
            </button>
          </div>
        </form>
      </div>
    </div>
 
  )
}

export default ItemForm;