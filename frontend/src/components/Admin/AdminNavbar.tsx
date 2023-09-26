// import React from 'react'

// const AdminNavbar = () => {
//   return (
//     <div>AdminNavbar</div>
//   )
// }

// export default AdminNavbar


// components/Sidebar.js

import React from 'react';
import Link from 'next/link';

const AdminNavbar = () => {
  return (
    <div className="bg-[#70293D] text-white w-64 p-4 fixed h-screen overflow-y-auto">
      <h2  className="block text-center text-white text-4xl font-medium font-barlow mb-24">Food Zero</h2>
      <Link href="/orders" className="block text-center text-white text-2xl font-medium font-barlow mb-14">
       ORDERS
      </Link>
      <Link href="/menulist" className="block text-center text-white text-2xl font-medium font-barlow mb-14">
        MENU
      </Link>
      <Link href="/feedback" className="block text-center text-white text-2xl font-medium font-barlow mb-64">
        FEEDBACK
      </Link>
      <Link href="/logout" className="block text-center text-white text-2xl font-medium font-barlow mb-8">
       LOGOUT
      </Link>
    </div>
  );
};

export default AdminNavbar;
