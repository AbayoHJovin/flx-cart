
import React from 'react';
import ProductCard from './ProductCard';
import AnimatedSection from '../UI/AnimatedSection';

// Sample product data
const sampleProducts = [
  {
    id: 1,
    name: "Organic Bananas",
    price: 1.99,
    image: "https://images.unsplash.com/photo-1603833665858-e61d17a86224?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80",
    category: "Fresh Fruits",
    isOrganic: true,
  },
  {
    id: 2,
    name: "Fresh Strawberries",
    price: 3.99,
    originalPrice: 4.99,
    image: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    category: "Fresh Fruits",
    isSale: true,
  },
  {
    id: 3,
    name: "Avocado",
    price: 2.49,
    image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    category: "Fresh Fruits",
    isOrganic: true,
  },
  {
    id: 4,
    name: "Red Bell Pepper",
    price: 1.29,
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    category: "Vegetables",
    isNew: true,
  },
  {
    id: 5,
    name: "Organic Spinach",
    price: 2.99,
    image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    category: "Vegetables",
    isOrganic: true,
  },
  {
    id: 6,
    name: "Free-Range Eggs",
    price: 4.99,
    originalPrice: 5.99,
    image: "https://images.unsplash.com/photo-1598965402377-f2e2b9a89dc2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    category: "Dairy & Eggs",
    isSale: true,
  },
  {
    id: 7,
    name: "Whole Milk",
    price: 3.49,
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    category: "Dairy & Eggs",
  },
  {
    id: 8,
    name: "Sourdough Bread",
    price: 4.49,
    image: "https://images.unsplash.com/photo-1585478259715-876a6a81fc98?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    category: "Bakery",
    isNew: true,
  },
];

interface ProductGridProps {
  title?: string;
  subtitle?: string;
  limit?: number;
  category?: string;
}

const ProductGrid = ({ title, subtitle, limit = 8, category }: ProductGridProps) => {
  const filteredProducts = category
    ? sampleProducts.filter(p => p.category === category)
    : sampleProducts;
    
  const displayProducts = filteredProducts.slice(0, limit);

  return (
    <div>
      {(title || subtitle) && (
        <div className="text-center mb-12">
          {title && <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>}
          {subtitle && (
            <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
          )}
        </div>
      )}

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {displayProducts.map((product, index) => (
          <AnimatedSection
            key={product.id}
            animation="fade-in"
            delay={50 * index}
          >
            <ProductCard product={product} />
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
