
import React from "react";

const Footer = () => {
  return (
<footer className="bg-[#9d2d3e] text-white">
<div className="container mx-auto py-8 px-8">
  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 text-center">
    <div>
      <h1 className="text-[40px] font-bold ">Food Zero</h1>
    </div>
    
    <div>
      <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
      <div className="flex space-x-6 justify-center">
    <a href="https://www.facebook.com" className="text-xl "><i className="fab fa-facebook"></i></a>
<a href="https://twitter.com" className="text-xl"><i className="fab fa-twitter"></i></a>
<a href="https://www.instagram.com" className="text-xl"><i className="fab fa-instagram"></i></a>

      </div>
    </div>
    <div>
      <h2 className="text-2xl font-bold mb-4">Contact</h2>
      <address className="text-base lg:text-left md:text-center lg:ml-20 ">
        Address: Road 12, Peace Avenue, Ado, Ekiti<br />
        Phone: +2349061504648<br />
        Email: oluwadamilolafaj@gmail.com
      </address>
    </div>
 
  </div>
  <div className="text-center mt-8">
    <p>&copy; 2023 Food Zero. All rights reserved.</p>
  </div>
</div>
</footer>




  );
};

export default Footer;









