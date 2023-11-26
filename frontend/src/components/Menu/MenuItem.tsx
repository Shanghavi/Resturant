// components/MenuItem.tsx
import Image from 'next/image';

export interface MenuItemProps {
  name: string;
  price: number;
  available: number;
  imageUrl: string;
  category:string;
}

const MenuItem: React.FC<MenuItemProps> = ({ name, price, available, imageUrl }) => {
  return (
    <div className="w-60 h-100 relative bg-white shadow-lg rounded-lg p-4 text-center">
       <div className="flex flex-col items-center">
    <Image src={imageUrl} alt="Image " width={200} height={132} />

    <div className="mt-2">
      <div className="text-black text-md font-semibold">{name}</div>
      <div className="text-black text-md font-normal">${price.toFixed(2)}</div>
     
    </div>

    <button className="w-full mt-4 py-2 bg-[#BF4567] text-white text-sm font-semibold rounded-lg hover:bg-[#A13855] transition duration-300">
      Order Now
    </button>
  </div>
  </div>
  );
};

export default MenuItem;
