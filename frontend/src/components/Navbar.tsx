"use client";

// import React, { useState } from "react";
// import Menu from "./Menu";
// import Link from "next/link";
// import CartIcon from "./CartIcon";
// import Image from "next/image";
// import {  usePathname, useSearchParams } from 'next/navigation';
// import LogInForm from "./LogInForm";




// const Navbar = () => {

//   const [isLoginFormOpen, setIsLoginFormOpen] = useState(false);

//   const openLoginForm = () => {
//     setIsLoginFormOpen(true);
//   };

//   const closeLoginForm = () => {
//     setIsLoginFormOpen(false);
//   };

//   const user = false;
//   const pathname = usePathname();
//   const isHomePage = pathname === '/';

  

  
//   const getBackgroundStyle = () => {
//     let backgroundStyle = {
//       backgroundImage:'',
//       backgroundColor:'',
//       backgroundSize: 'cover', // Set the background size to cover the entire element
//       backgroundPosition: 'center', // Center the background image
      
//       /* Add any other background-related styles here */
//     };
//     let navText = '';

//   switch (pathname) {
//     case '/':
//       backgroundStyle.backgroundColor = 'rgb(255, 255,255)';
//       navText = 'Home'; 
//       break;
//     case '/menu':
//       backgroundStyle.backgroundImage = 'url(/menu.png)';
//       navText = 'View Our Menu'; 
//       break;
//     case '/about':
//       backgroundStyle.backgroundImage = 'url(/about.png)';
//       navText = 'Who We Are'; 
//       break;
//     case '/contact':
//       backgroundStyle.backgroundImage = 'url(/contact.png)';
//       navText = 'Get In Touch';  
//       break;
//       case '/profile':
//         backgroundStyle.backgroundImage = 'url(/contact.png)';
//         navText = 'View Your Profile';  
//         break;
//       case '/payment':
//         backgroundStyle.backgroundImage = 'url(/contact.png)';
//         navText = 'Make Payment';  
//         break;
//     default:
//       backgroundStyle.backgroundImage = 'url(/images/default-bg.jpg)';
//       break;
//   }

//   return {backgroundStyle,navText };
// };

// //const navStyle = getBackgroundStyle();
// const { backgroundStyle, navText } = getBackgroundStyle();


//   return (
//     <nav style={backgroundStyle}>
      
//       <div className={`md:h-${isHomePage ? '20' : '80'} lg:px-28 xl:px-20`}>
//     <div className={`text-${isHomePage ? '[#808080]' : 'white'} p-4 flex items-center justify-between uppercase `}>
//       {/* LOGO */}
//       <div className="text-xl md:font-bold flex-1 md:text-left md:mb-18 ">
//         <Link href="/">Food Zero</Link>
//       </div>
//       {/* MOBILE MENU */}
//       <div className="md:hidden">
//         <Menu />
//       </div>
//       {/* RIGHT LINKS */}
//       <div className="hidden md:flex gap-20 items-center justify-end flex-2 mb-15 font-['Montserrat']">
//       <Link href="/" className="hover:text-[#9d2d3e] font-semibold" >Home</Link>
//         <Link href="/menu" className="hover:text-[#9d2d3e] font-semibold">Menu</Link>
//         <Link href="/about" className="hover:text-[#9d2d3e] font-semibold">about-us</Link>
//         <Link href="/contact" className="hover:text-[#9d2d3e] font-semibold">Contact-us</Link>
//         <CartIcon />
//         {!user ? (
//           // Display login popup when "Login" is clicked
//           <button
//           onClick={openLoginForm}
//           className="hover:text-[#9d2d3e] font-semibold"
//         >
//           Login
//         </button>
//         ) : (
//           <Link href="/profile" className="hover:text-[#9d2d3e] font-semibold">Profile</Link>
//         )}
//       </div>
//       <div >
//         </div>
//         </div>
//         {!isHomePage&&
//         <div className=" pt-20 text-white text-[60px] font-['Rufina'] font-semibold  ml-5 pb-10" >
//         {navText}
//         </div>
// }
//     </div>
//      {/* Display the login form popup when isLoginFormOpen is true */}
//      {isLoginFormOpen && (
//         <div className="fixed inset-0 flex items-center justify-center z-50">
//           <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
//           <div className="w-full sm:w-2/3 max-w-4xl p-8 sm:p-12 bg-white rounded-lg shadow-lg relative">
//             <div className="text-center">
//               <h2 className="text-4xl font-semibold text-gray-800">
//                 Welcome back
//               </h2>
//               <p className="text-gray-600 mt-2">
//                 Dont have an account?{" "}
//                 <span className="text-green-500 font-semibold">Sign Up</span>
//               </p>
//             </div>
//             <LogInForm onClose={function (): void {
//               throw new Error("Function not implemented.");
//             } } /> {/* Display the Login Form component */}
//             <button onClick={closeLoginForm}>Close</button>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;






 
import React, { useState } from "react";
import Menu from "./Menu";
import Link from "next/link";
import CartIcon from "./CartIcon";
import Image from "next/image";
import { usePathname } from 'next/navigation'; // Only importing usePathname
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


  const user = false; // You can replace this with your user authentication logic
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
      backgroundStyle.backgroundImage = 'url(/about.png)';
      navText = 'Who We Are'; 
      break;
    case '/contact':
      backgroundStyle.backgroundImage = 'url(/contact.png)';
      navText = 'Get In Touch';  
      break;
      case '/profile':
        backgroundStyle.backgroundImage = 'url(/contact.png)';
        navText = 'View Your Profile';  
        break;
      case '/payment':
        backgroundStyle.backgroundImage = 'url(/contact.png)';
        navText = 'Make Payment';  
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
      <Link href="/" className="hover:text-[#9d2d3e] font-semibold" >Home</Link>
        <Link href="/menu" className="hover:text-[#9d2d3e] font-semibold">Menu</Link>
        <Link href="/about" className="hover:text-[#9d2d3e] font-semibold">about-us</Link>
        <Link href="/contact" className="hover:text-[#9d2d3e] font-semibold">Contact-us</Link>
        <CartIcon />
        {!user ? (
          // Display login popup when "Login" is clicked
          <button onClick={openLoginForm} className="hover:text-[#9d2d3e] font-semibold">
          Login
        </button>
        ) : (
          <Link href="/profile" className="hover:text-[#9d2d3e] font-semibold">Profile</Link>
        )}
      </div>
      <div >
        </div>
        </div>
        {!isHomePage&&
        <div className=" pt-20 text-white text-[60px] font-['Rufina'] font-semibold  ml-5 pb-10" >
        {navText}
        </div>
}
   
      </div>
       {/* Render the LoginFormModal component */}
       <LoginFormModal isOpen={isLoginFormOpen} onClose={closeLoginForm} />
    </nav>
  );
};

export default Navbar;

