import Image from 'next/image'
import React from 'react'

const Story = () => {
  return (


<div className="mt-20 mb-40">
<div className="py-14 px-4 md:px-14 bg-[#f2f2f2]">
<div className="mx-auto flex flex-col md:flex-row md:items-center md:gap-8">
  <div className="md:w-3/4 ">
    <h1 className="text-[#9d2d3e] text-center text-[45px]  md:text-[50px] font-bold font-['lato'] leading-[1.2]  mb-3">
      Our Story
    </h1>
    <div className="text-neutral-600 text-base md:text-lg font-normal font-['Lato'] leading-[1.4] tracking-wide  text-left">
      {/* Your story content goes here */}
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet. 
      Turpis egestas ultricies purus auctor tincidunt lacus nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Purus lorem id penatibus imperdiet. Turpis egestas ultricies purus auctor tincidunt lacus nunc. Lorem ipsum dolor sit 
      amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet. Turpis egestas ultricies purus auctor tincidunt
       lacus nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet. Turpis egestas
      
    </div>
  </div>
  <div className="md:w-1/4 mx-auto mt-6 md:mt-0">
    <Image
      src={"/story.png"}
      alt="Your Alt Text"
      width={1092}
      height={656}
      className="w-full"
    />
  </div>
</div>
</div>


{/* chef */}

<div className="mt-28">
<div className="py-14 px-4 md:px-14 bg-[#f2f2f2]">
  <div className="mx-auto flex flex-col md:flex-row md:items-center md:gap-8">
    <div className="md:w-1/4 mx-auto mt-6 md:mt-0">
      <Image
        src={"/chef.png"}
        alt="Your Alt Text"
        width={726}
        height={861}
        className="w-full"
      />
    </div>
    <div className="md:w-3/4">
      <h1 className="text-[#9d2d3e] text-center text-[45px]  md:text-[50px] font-bold font-['lato'] leading-[1.2]  mb-3">
      Restuarant Manager
      </h1>
      <h3 className="text-[#9d2d3e] text-center text-[25px]  md:text-[35px] font-normal font-['Rufina'] leading-[1.2]  mb-3">
      Carson Hugn
      </h3>
      
      <div className="text-neutral-600 text-base md:text-lg font-normal font-['Lato'] leading-[1.4] tracking-wide  text-left">
        {/* Your story content goes here */}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet. 
        Turpis egestas ultricies purus auctor tincidunt lacus nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Purus lorem id penatibus imperdiet. Turpis egestas ultricies purus auctor tincidunt lacus nunc. Lorem ipsum dolor sit 
        amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet. Turpis egestas ultricies purus auctor tincidunt
         lacus nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet. Turpis egestas
      </div>
    </div>
  </div>
</div>
</div>
</div>
  )
}

export default Story




