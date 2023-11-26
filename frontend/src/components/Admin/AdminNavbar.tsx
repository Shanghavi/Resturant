"use client";
import React from "react";
import Link from "next/link";

import { usePathname } from "next/navigation";

const links = [
  { href: "/orders", text: "ORDERS" },
  { href: "/menulist", text: "MENU" },
  { href: "/feedback", text: "FEEDBACK" },
];

const AdminNavbar = () => {
  const pathname = usePathname();

  return (
    <div className="bg-[#70293D] text-white w-64 p-4 fixed h-screen overflow-y-auto">
      <h2 className="block text-center text-white text-4xl font-medium font-barlow mb-24">
        Food Zero
      </h2>
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          className={`block text-center text-white text-2xl font-medium font-barlow mb-14 hover:bg-gray-500  ${
            pathname === link.href ? "bg-gray-500" : ""
          }`}
        >
          {link.text}
        </Link>
      ))}
      <Link
        href="/logout"
        className="block text-center text-white text-2xl font-medium font-barlow mt-64 hover:bg-gray-500"
      >
        LOGOUT
      </Link>
    </div>
  );
};

export default AdminNavbar;
