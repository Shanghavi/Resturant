"use client";

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
// import axios from 'axios';

interface Menu {
  itemNumber: string;
  foodImage: string;
  name: string;
  price: number;
  category: string;
}

const MenuTable: React.FC = () => {
  const [data, setData] = useState<Menu[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');

//   useEffect(() => {
//      API to fetch data
//     axios
//       .get<Menu[]>('API')
//       .then((response) => {
//         setData(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);

// const filteredData = data.filter((item) =>
//   item.name.toLowerCase().includes(searchTerm.toLowerCase())
// );

  return (
    <div className="ml-64 p-8">
    <h1 className="text-center text-3xl font-bold mb-4">Menu</h1>
    {/* Search bar */}
    <div className="mb-4 flex items-center  justify-between">
    <label className="relative block">
    <i className="fa-solid fa-magnifying-glass absolute inset-y-0 left-0 flex items-center pl-2" ></i>
        <input
          type="text"
          placeholder="Search by Item Name"
          className="px-8 py-1 border border-gray-500 rounded"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        </label>
        
{/* Button */}
<Link href="/item">
<button className=" px-24 py-2 bg-gray-500  text-lg text-white hover:text-black font-semibold  rounded">
                Add New Item 
                </button>
                </Link>
      </div>


      {/* Table */}
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto border-collapse border border-gray-200">
        <thead className="text-xl" >
          <tr>
            <th className="border bg-gray-100">Item Number</th>
            <th className="border bg-gray-100">Food Image</th>
            <th className="border bg-gray-100">Name</th>
            <th className="border bg-gray-100">Price</th>
            <th className="border bg-gray-100">Category</th>
            <th className="border bg-gray-100">Delete</th>
          </tr>
        </thead>
        <tbody className="text-center" >
          {/* {filteredData.map((menu) => (
            <tr key={menu.itemNumber}> */}
            <tr>
              {/* <td className="border">{order.orderNumber}</td>
              <td className="border">{order.item}</td>
              <td className="border">{order.totalPayment}</td>
              <td className="border">{order.status}</td> */}
               <td className="border">001</td>
               <td className="border">Seafood Noodles</td>
              <td className="border">Seafood Noodles</td>
              <td className="border">12000</td>
              <td className="border">Dinner</td>
              <td className="border"><i className="fa-solid fa-trash"></i></td>
            </tr>
          {/* ))} */}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default MenuTable;
