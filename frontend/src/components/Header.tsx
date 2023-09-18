import Image from 'next/image'
import React from 'react'

const Header = () => {
   return (
    <div>

  
   <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)]  lg:flex-row bg-[#9d2d3e]">
      {/* TEXT CONTAINER */}
      <div className="flex-1 flex items-center justify-center flex-col gap-8 text-red-500 font-bold">
      <div className="justify-start items-start gap-[50px] inline-flex">
        <div className="self-stretch text-white text-[50px] font-bold font-['Rufina'] leading-[70px]">Healthy Eating is important<br/> part of lifestyle
        <div className="w-[500px] text-white text-2xl font-normal font-['Lato'] leading-[40px] tracking-wide">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu</div>
     </div>
    </div>
        <button className="bg-white text-[#9d2d3e] text-[20px] font-semibold font-['Poppins'] py-3 px-24 rounded-[25px] ">Order Now</button>
      </div>
      {/* IMAGE CONTAINER */}
      <div className="w-full flex-1 relative">
        <Image
          src="/header.jpg"
          alt=""
          fill
          className="object-cover"
        />
      </div>
    </div>
</div>
  )
}

 export default Header