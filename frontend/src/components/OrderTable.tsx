"use client";

import React, { useEffect, useState } from 'react';
// import axios from 'axios';

interface Order {
  orderNumber: string;
  item: string;
  totalPayment: number;
  status: string;
}

const OrderTable: React.FC = () => {
  const [data, setData] = useState<Order[]>([]);

//   useEffect(() => {
//     // Replace api
//     axios
//       .get<Order[]>('YOUR_API_ENDPOINT')
//       .then((response) => {
//         setData(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);
const [selectedStatus, setSelectedStatus] = useState('Pending');

const handleStatusChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
  setSelectedStatus(e.target.value);
};
  return (
    <div className="ml-64 p-8">
    <h1 className="text-center text-3xl font-bold mb-4">Orders</h1>
    <div className="overflow-x-auto">
    <div className="max-h-80 overflow-y-auto">
      <table className="min-w-full table-auto border-collapse border border-gray-200">
        <thead className="text-xl" >
          <tr>
            <th className="border bg-gray-100">Order Number</th>
            <th className="border bg-gray-100">Item</th>
            <th className="border bg-gray-100">Total Payment</th>
            <th className="border bg-gray-100">Status</th>
          </tr>
        </thead>
        <tbody className="text-center" >
          {/* {data.map((order) => (
            <tr key={order.orderNumber}> */}
            <tr>
              {/* <td className="border">{order.orderNumber}</td>
              <td className="border">{order.item}</td>
              <td className="border">{order.totalPayment}</td>
              <td className="border">{order.status}</td> */}
               <td className="border">001</td>
              <td className="border">Seafood Noodles</td>
              <td className="border">12000</td>
              <td className="border">
                <select
                  value={selectedStatus}
                  onChange={handleStatusChange}
                  className="bg-white border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring focus:gray-600"
                >
                  <option value="Pending">Pending</option>
                  <option value="Preparing">Preparing</option>
                  <option value="Completed">Completed</option>
                </select>
              </td>
            </tr>
          {/* ))} */}
        </tbody>
      </table>
      </div>
    </div>
    </div>
  );
};

export default OrderTable;
