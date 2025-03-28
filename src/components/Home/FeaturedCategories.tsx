
import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../UI/AnimatedSection';

const categories = [
  {
    id: 1,
    name: 'Fresh Fruits',
    image: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
    color: 'from-orange-500/20 to-yellow-500/20',
  },
  {
    id: 2,
    name: 'Vegetables',
    image: 'https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
    color: 'from-green-500/20 to-emerald-500/20',
  },
  {
    id: 3,
    name: 'Dairy & Eggs',
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
    color: 'from-blue-500/20 to-indigo-500/20',
  },
  {
    id: 4,
    name: 'Bakery',
    image: 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
    color: 'from-amber-500/20 to-yellow-500/20',
  },
  {
    id: 5,
    name: 'Meat & Seafood',
    image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
    color: 'from-red-500/20 to-rose-500/20',
  },
  {
    id: 6,
    name: 'Organic',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
    color: 'from-primary/20 to-green-500/20',
  },
];

const FeaturedCategories = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="page-container">
        <AnimatedSection animation="fade-in">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Shop by Category</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our wide selection of fresh, high-quality products across multiple categories
            </p>
          </div>
        </AnimatedSection>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category, index) => (
            <AnimatedSection 
              key={category.id} 
              animation="scale-in" 
              delay={100 * index} 
              className="flex flex-col"
            >
              <Link 
                to={`/products?category=${category.name}`}
                className="hover-scale group h-full"
              >
                <div className="bg-white dark:bg-card rounded-2xl shadow-soft overflow-hidden flex flex-col h-full">
                  <div className={`bg-gradient-to-br ${category.color} p-6 aspect-square relative overflow-hidden`}>
                    <img 
                      src={category.image} 
                      alt={category.name}
                      className="absolute inset-0 w-full h-full object-cover rounded-t-xl transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-medium text-sm md:text-base">{category.name}</h3>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
