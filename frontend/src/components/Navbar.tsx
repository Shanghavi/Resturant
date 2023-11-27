"use client";

import React, { useState } from "react";
import Menu from "./Menu";
import Link from "next/link";
import CartIcon from "./CartIcon";
import Image from "next/image";
import { usePathname } from "next/navigation";
import LogInForm from "./Auth/LogInForm";
import LoginFormModal from "./Auth/LogInFormModal";

const Navbar = () => {
  const [isLoginFormOpen, setIsLoginFormOpen] = useState(false);

  const openLoginForm = () => {
    setIsLoginFormOpen(true);
  };

  const closeLoginForm = () => {
    setIsLoginFormOpen(false);
  };

  const user = false;
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const getBackgroundStyle = () => {
    let backgroundStyle = {
      backgroundImage: "",
      backgroundColor: "",
      backgroundSize: "cover",
      backgroundPosition: "center",
    };
    let navText = "";

    switch (pathname) {
      case "/":
        backgroundStyle.backgroundColor = "rgb(255, 255,255)";
        navText = "Home";
        break;
      case "/menu":
        backgroundStyle.backgroundImage = "url(/menu.png)";
        navText = "View Our Menu";
        break;
      case "/about":
        backgroundStyle.backgroundImage = "url(/about.png)";
        navText = "Who We Are";
        break;
      case "/contact":
        backgroundStyle.backgroundImage = "url(/contact.png)";
        navText = "Get In Touch";
        break;
      case "/profile":
        backgroundStyle.backgroundImage = "url(/contact.png)";
        navText = "View Your Profile";
        break;
      case "/payment":
        backgroundStyle.backgroundImage = "url(/contact.png)";
        navText = "Make Payment";
        break;
      default:
        backgroundStyle.backgroundImage = "url(/images/default-bg.jpg)";
        break;
    }

    return { backgroundStyle, navText };
  };

  //const navStyle = getBackgroundStyle();
  const { backgroundStyle, navText } = getBackgroundStyle();

  return (
    <nav style={backgroundStyle} className="top-0 w-full z-[1000]">
      <div className={`md:h-${isHomePage ? "20" : "80"} lg:px-28 xl:px-20 `}>
        <div
          className={`text-${
            isHomePage ? "[#808080]" : "white"
          } p-4 flex items-center justify-between uppercase `}
        >
          {/* LOGO */}
          <div className="text-xl md:font-bold flex-1 md:text-left md:mb-18 ">
            <Link href="/">Food Zero</Link>
          </div>
          {/* MOBILE MENU */}
          <div className="md:hidden">
            <Menu />
          </div>
          {/* RIGHT LINKS */}
          <div className="hidden md:flex gap-20 items-center justify-end flex-2 mb-15 font-['Montserrat']   ">
            <Link href="/" className="hover:text-[#c22853] font-semibold">
              Home
            </Link>
            <Link href="/menu" className="hover:text-[#c22853] font-semibold">
              Menu
            </Link>
            <Link href="/about" className="hover:text-[#c22853] font-semibold">
              about-us
            </Link>
            <Link
              href="/contact"
              className="hover:text-[#c22853] font-semibold"
            >
              Contact-us
            </Link>
            <CartIcon />
            {!user ? (
              // Display login popup when "Login" is clicked
              <button
                onClick={openLoginForm}
                className="hover:text-[#c22853] font-semibold"
              >
                Login
              </button>
            ) : (
              <Link
                href="/profile"
                className="hover:text-[#c22853] font-semibold"
              >
                Profile
              </Link>
            )}
          </div>
          <div></div>
        </div>
        {!isHomePage && (
          <div className=" pt-20 text-white text-[60px] font-['Rufina'] font-semibold  ml-5 pb-10">
            {navText}
          </div>
        )}
      </div>
      {/* Render the LoginFormModal component */}
      <LoginFormModal isOpen={isLoginFormOpen} onClose={closeLoginForm} />
    </nav>
  );
};

export default Navbar;
