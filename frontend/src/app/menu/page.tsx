
'use client';
import React, { useState } from 'react'
import RootLayout from '../RootLayout'
import Item from '@/components/Menu/MenuItem'
import MenuGrid from '@/components/Menu/MenuGrid';
import Category from '@/components/Menu/Category';

type CategoryNavProps = {
  name: string;
  price: number;
  available: number;
  imageUrl: string;
  category: string;
}[];


const menuItems:CategoryNavProps= [
  {
    name: 'Spicy seasoned seafood noodles',
    price: 2.29,
    available: 20,
    imageUrl: '/food.png',
    category:'dinner'
  },
  {
    name: 'Spicy seasoned seafood noodles',
    price: 2.29,
    available: 20,
    imageUrl: '/food.png',
    category:'dinner'
  },
  {
    name: 'Spicy seasoned seafood noodles',
    price: 2.29,
    available: 20,
    imageUrl: '/food.png',
    category:'breakfast'
  },
  {
    name: 'Spicy seasoned seafood noodles',
    price: 2.29,
    available: 20,
    imageUrl: '/food.png',
    category:'breakfast'
  },
  {
    name: 'Spicy seasoned seafood noodles',
    price: 2.29,
    available: 20,
    imageUrl: '/food.png',
    category:'lunch'
  },
  // Add more menu items as needed
];


const MenuPage: React.FC = () => {
  const categories = Array.from(new Set(menuItems.map((item) => item.category))); // Extract unique categories

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const filteredMenuItems = selectedCategory
    ? menuItems.filter((item) => item.category === selectedCategory)
    : menuItems;

  const handleCategorySelection = (category: string) => {
    setSelectedCategory(category === selectedCategory ? null : category);
  };

  return (
    <RootLayout>
      <div className="mb-20 mt-20">
        <div className="container mx-auto h-[65px] justify-center items-center  inline-flex">
          <Category
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={handleCategorySelection}
          />
        </div>
        <div className="container mx-auto  p-10 flex justify-center bg-gray-200">
          <MenuGrid menuItems={filteredMenuItems} />
        </div>
      </div>
    </RootLayout>
  );
}

export default MenuPage