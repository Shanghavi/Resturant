import React from "react";
import Image from "next/image";

const Feature: React.FC = () => {
  const Box: React.FC<{ title: string; description: string; imageUrl: string }> = ({
    title,
    description,
    imageUrl,
  }) => (
    <div className="flex flex-col items-center justify-center space-y-6">
      
      {/* <div className="w-40 h-40 md:w-56 md:h-56 relative rounded-full overflow-hidden"> */}
          <div className="w-40 h-40 md:w-46 md:h-46 relative ">
            <div className="w-40 h-40 md:w-46 md:h-46 absolute bg-[#C4C4C4] rounded-full" >
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="p-10"
        />
      </div>
      </div>
      <div className="text-center text-3xl lg:text-3xl  md:text-2xl font-bold font-rufina">{title}</div>
      <div className="text-center text-neutral-600 md:text-[18px] lg:text-xl text-xl font-normal font-lato">
        {description}
      </div>
    </div>
  );

  return (
    <div className="relative bg-white md:mt-10 lg:px-20 mt-10">
      <div className="py-10 px-4 md:px-10 bg-gray-200">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <Box
            title="Premium Quality"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu"
            imageUrl="/fish.png"
          />
          <Box
            title="Seasonal Vegetables"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu"
            imageUrl="/carrot.png"
          />
          <Box
            title="Fresh Fruit"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu"
            imageUrl="/lemon.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Feature;



