
import React from 'react';

interface CategoryFilterProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'Fresh Fruits', name: 'Fresh Fruits' },
  { id: 'Vegetables', name: 'Vegetables' },
  { id: 'Dairy & Eggs', name: 'Dairy & Eggs' },
  { id: 'Bakery', name: 'Bakery' },
  { id: 'Meat & Seafood', name: 'Meat & Seafood' },
  { id: 'Organic', name: 'Organic' },
];

const CategoryFilter = ({ activeCategory, setActiveCategory }: CategoryFilterProps) => {
  return (
    <div className="mb-8">
      <h3 className="font-medium mb-3">Categories</h3>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-4 py-2 rounded-full text-sm transition-all ${
              activeCategory === category.id
                ? 'bg-primary text-primary-foreground'
                : 'bg-secondary hover:bg-secondary/80 text-foreground'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
