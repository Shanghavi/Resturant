import Image from 'next/image'
import React from 'react'

const Chef = () => {
  return (

    <div className="relative bg-white mt-10 lg:p-20">
<div className="py-10 px-4 md:px-10 bg-gray-200">
  <div className="mx-auto flex flex-col md:flex-row md:items-center md:gap-8">
    <div className="md:w-1/2 mx-auto mt-6 md:mt-0">
      <Image
        src={"/headchef.jpg"}
        alt="Your Alt Text"
        width={5760}
        height={3840}
        className="w-full"
      />
    </div>
    <div className="md:w-3/4">
      <h1 className="text-black text-left text-[30px]  md:text-[50px] font-bold font-['lato'] leading-[1.2]  mb-3">
      Excellent cook
      </h1>
      <div className="text-neutral-600 text-base md:text-lg font-normal font-['Lato'] leading-[1.4] tracking-wide  text-left">
    
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet. 
        Turpis egestas ultricies purus auctor tincidunt lacus nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Purus lorem id penatibus imperdiet.
      </div>
    
    </div>
   
  </div>
</div>
</div>
  )
}

export default Chef