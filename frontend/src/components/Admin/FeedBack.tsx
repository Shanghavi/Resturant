"use client";

import React from "react";

const FeedBack: React.FC = () => {
  return (
    <div className="ml-64 p-8">
      <h1 className="text-center text-3xl font-bold mb-4">User Feedback</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-gray-200">
          <thead className="text-xl">
            <tr>
              <th className="border bg-gray-100">UserId</th>
              <th className="border bg-gray-100">Name</th>
              <th className="border bg-gray-100">Email</th>
              <th className="border bg-gray-100">Message</th>
            </tr>
          </thead>
          <tbody className="text-center">
            <tr>
              <td className="border">001</td>
              <td className="border">John</td>
              <td className="border">jo@gmail.com</td>
              <td className="border">Good service </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FeedBack;
