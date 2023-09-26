"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CartIcon from "./CartIcon";

const links = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "Menu", url: "/menu" },
  { id: 3, title: "about-us", url: "/about" },
  { id: 4, title: "contact-us", url: "/contact" },
];

const Menu = () => {
  const [open, setOpen] = useState(false);

  // TEMPORARY
  const user = false;
  return (
    <div>
      {/* LONG WAY */}
      {/* {!open ? (
        <Image
          src="/open.png"
          alt=""
          width={20}
          height={20}
          onClick={() => setOpen(true)}
        />
      ) : (
        <Image
          src="/close.png"
          alt=""
          width={20}
          height={20}
          onClick={() => setOpen(false)}
        />
      )} */}
      
      {/* SHORTCUT */}
      <div className="cursor-pointer" onClick={() => setOpen(!open)}>
        {open ? (
        <i className="fa-solid fa-circle-xmark" style={{ fontSize: '26px', width: '26px', height: '26px' }}></i>
        ) : (
          <i className="fa-solid fa-bars" style={{ fontSize: '26px', width: '26px', height: '26px' }}></i>
        )}
      </div>
      {open && (
        <div className="bg-[#9d2d3e] text-white absolute left-0 top-24 w-full h-[calc(100vh-6rem)] flex flex-col gap-8 items-center justify-center text-3xl z-10">
          {links.map((item) => (
            <Link href={item.url} key={item.id} onClick={() => setOpen(false)}>
              {item.title}
            </Link>
          ))}

          {/* LONG WAY */}
          {/* {!user ? (
            <Link href="/login" onClick={() => setOpen(false)}>
              Login
            </Link>
          ) : (
            <Link href="/orders" onClick={() => setOpen(false)}>
              Orders
            </Link>
          )} */}

          {/* SHORTCUT */}
          <Link
            href={user ? "/profile" : "login"}
            onClick={() => setOpen(false)}
          >
            {user ? "profile" : "Login"}
          </Link>
          <Link href="/cart" onClick={() => setOpen(false)}>
            <CartIcon />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Menu;