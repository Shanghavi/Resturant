import Image from 'next/image'
import React from 'react'

const Header = () => {
   return (

<div className="relative ">
  {/* IMAGE BACKGROUND */}
  <div
    className="w-full h-[60vh] lg:h-[80vh] md:h-[80vh]  bg-cover bg-center "
    style={{
      backgroundImage: 'url("/header.jpg")',
    }}
  ></div>

  {/* TEXT AND BUTTON CONTAINER */}
  <div className="absolute inset-0 flex flex-col items-center justify-center text-white font-bold p-8 md:p-12 lg:p-16 lg:mb-40 ">
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-[Rufina] leading-[1.2] text-center text-[#9d2d3e] mb-5">Healthy Eating is an important part of lifestyle</h1>
    <p className="text-lg md:text-2xl lg:text-3xl font-[Lato] leading-[1.5] tracking-wide text-center text-[#9d2d3e]">Lorem ipsum dolor sit amet, consecteturadipiscing elit. <br/> Neque congue arcu</p>
    <button className="bg-white text-[#9d2d3e] text-lg md:text-xl lg:text-2xl font-semibold font-[Poppins] py-3 px-8 md:py-4 md:px-12  rounded-[10px] hover:bg-[#9d2d3e] hover:text-white  mt-8 md:mt-12 lg:mt-10">Order Now</button>
  </div>
</div>


  )
}

 export default Header