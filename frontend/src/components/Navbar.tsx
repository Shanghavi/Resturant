"use client";

import React from "react";
import Menu from "./Menu";
import Link from "next/link";
import CartIcon from "./CartIcon";
import Image from "next/image";
import {  usePathname, useSearchParams } from 'next/navigation';


const Navbar = () => {
  const user = false;
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const getBackgroundStyle = () => {
    let backgroundStyle = {
      backgroundImage:'',
      backgroundColor:'',
      backgroundSize: 'cover', // Set the background size to cover the entire element
      backgroundPosition: 'center', // Center the background image
      
      /* Add any other background-related styles here */
    };
    let navText = '';

  switch (pathname) {
    case '/':
      backgroundStyle.backgroundColor = 'rgb(255, 255,255)';
      navText = 'Home'; 
      break;
    case '/menu':
      backgroundStyle.backgroundImage = 'url(/menu.png)';
      navText = 'View Our Menu'; 
      break;
    case '/about':
      backgroundStyle.backgroundImage = 'url(/contact.png)';
      navText = 'Who We Are'; 
      break;
    case '/contact':
      backgroundStyle.backgroundColor = 'rgb(255, 0, 0)'; // Red background color
      break;
    default:
      backgroundStyle.backgroundImage = 'url(/images/default-bg.jpg)';
      break;
  }

  return {backgroundStyle,navText };
};

//const navStyle = getBackgroundStyle();
const { backgroundStyle, navText } = getBackgroundStyle();


  return (
    <nav style={backgroundStyle}>
      
      <div className={`md:h-${isHomePage ? '20' : '80'} lg:px-28 xl:px-20`}>
    <div className={`text-${isHomePage ? '[#808080]' : 'white'} p-4 flex items-center justify-between uppercase `}>
      {/* LOGO */}
      <div className="text-xl md:font-bold flex-1 md:text-left md:mb-18 ">
        <Link href="/">Food Zero</Link>
      </div>
      {/* MOBILE MENU */}
      <div className="md:hidden">
        <Menu />
      </div>
      {/* RIGHT LINKS */}
      <div className="hidden md:flex gap-20 items-center justify-end flex-2 mb-15 font-['Montserrat']">
      <Link href="/">Home</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/about">about-us</Link>
        <Link href="/contact">Contact-us</Link>
        <CartIcon />
        {!user ? (
          <Link href="/login">Login</Link>
        ) : (
          <Link href="/profile">Profile</Link>
        )}
      </div>
      <div >
        </div>
        </div>
        {!isHomePage&&
        <div className=" pt-20 text-white text-[60px] font-['Rufina'] font-semibold  ml-5 " >
        {navText}
        </div>
}
    </div>
    
    </nav>
  );
};

export default Navbar;






 

