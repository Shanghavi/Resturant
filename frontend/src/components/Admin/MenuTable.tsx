"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const MenuTable: React.FC = () => {
  return (
    <div className="ml-64 p-8">
      <h1 className="text-center text-3xl font-bold mb-4">Menu</h1>
      {/* Search bar */}
      <div className="mb-4 flex items-center  justify-between">
        <label className="relative block">
          <i className="fa-solid fa-magnifying-glass absolute inset-y-0 left-0 flex items-center pl-2"></i>
          <input
            type="text"
            placeholder="Search by Item Name"
            className="px-8 py-1 border border-gray-500 rounded"
          />
        </label>

        {/* Button */}
        <Link href="/item">
          <button className=" px-24 py-2 bg-gray-500  text-lg text-white  hover:bg-[#983551] font-semibold  rounded">
            Add New Item
          </button>
        </Link>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-gray-200">
          <thead className="text-xl">
            <tr>
              <th className="border bg-gray-100">Item Number</th>
              <th className="border bg-gray-100">Name</th>
              <th className="border bg-gray-100">Image</th>
              <th className="border bg-gray-100">Price</th>
              <th className="border bg-gray-100">Category</th>
              <th className="border bg-gray-100">Delete</th>
            </tr>
          </thead>
          <tbody className="text-center ">
            <tr>
              <td className="border">001</td>
              <td className="border">Seafood Noodles</td>
              <td className="border flex justify-center items-center">
                <Image src="/story.png" alt="" width={200} height={200} />
              </td>
              <td className="border">12000</td>
              <td className="border">Dinner</td>

              <td className="border">
                <i className="fa-solid fa-trash"></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MenuTable;
