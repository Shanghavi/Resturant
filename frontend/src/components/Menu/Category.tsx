// components/CategoryNav.tsx
import React from 'react';

interface CategoryNavProps {
  categories: string[];
  selectedCategory: string | null;
  onSelectCategory: (category: string) => void;
}

const Category: React.FC<CategoryNavProps> = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className="flex gap-4">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`py-1 px-4 text-xl  ${
            selectedCategory === category ? ' text-[#BF4567]' : 'text-black'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Category;

// bg-[#BF4567]