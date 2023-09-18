import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#802941] h-48 md:h-48 p-4 lg:px-20 xl:px-40 text-white flex-col ">
    <div className="flex items-center justify-between pb-8">
      <Link href="/" className="font-bold text-xl">Food Zero</Link>
 
     
  <ul role="list">
  <p className="text-xl">Contact</p>
  <li> Address : cdsvfbgnghgh</li>
  <li> Phone Number : 346475867</li>
  <li> Email : xsacsdcs@gmail.com </li>
</ul>

    </div>
    <div className="flex-grow border-t">
    <p className=" text-center mt-4">© All rights reserved.</p>
     </div>
    </div>
  );
};

export default Footer;