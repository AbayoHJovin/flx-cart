
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import ProductGrid from '../components/Products/ProductGrid';
import CategoryFilter from '../components/Products/CategoryFilter';
import AnimatedSection from '../components/UI/AnimatedSection';
import { useLocation } from 'react-router-dom';
import { Search, SlidersHorizontal } from 'lucide-react';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Extract category from URL query parameters if present
    const params = new URLSearchParams(location.search);
    const categoryParam = params.get('category');
    if (categoryParam) {
      setActiveCategory(categoryParam);
    }
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="page-container">
          {/* Page Header */}
          <AnimatedSection animation="fade-in">
            <div className="mb-12">
              <h1 className="text-4xl font-bold mb-4">Our Products</h1>
              <p className="text-muted-foreground max-w-3xl">
                Explore our wide selection of fresh, high-quality groceries. From farm-fresh produce to artisanal goods, we've got everything you need.
              </p>
            </div>
          </AnimatedSection>
          
          {/* Search and Filters */}
          <AnimatedSection animation="fade-in" delay={100}>
            <div className="mb-8">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                {/* Search Input */}
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="w-full pl-10 pr-4 py-3 rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                
                {/* Filter Toggle (Mobile) */}
                <button
                  className="md:hidden px-4 py-3 border border-border rounded-md flex items-center justify-center"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <SlidersHorizontal className="h-5 w-5 mr-2" />
                  Filters
                </button>
              </div>
              
              {/* Mobile Filters */}
              <div className={`md:hidden ${showFilters ? 'block' : 'hidden'}`}>
                <CategoryFilter 
                  activeCategory={activeCategory} 
                  setActiveCategory={setActiveCategory} 
                />
              </div>
              
              {/* Desktop Filters */}
              <div className="hidden md:block">
                <CategoryFilter 
                  activeCategory={activeCategory} 
                  setActiveCategory={setActiveCategory} 
                />
              </div>
            </div>
          </AnimatedSection>
          
          {/* Products Grid */}
          <AnimatedSection animation="fade-in" delay={200}>
            <ProductGrid 
              category={activeCategory === 'all' ? undefined : activeCategory} 
            />
          </AnimatedSection>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Products;
