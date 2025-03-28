
import React from 'react';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import AnimatedSection from '../components/UI/AnimatedSection';
import { ArrowRight, Calendar, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

const offers = [
  {
    id: 1,
    title: "Summer Fruits Special",
    discount: "30% OFF",
    description: "Get up to 30% off on all seasonal summer fruits including mangoes, watermelons, and more.",
    image: "https://images.unsplash.com/photo-1519996529931-28324d5a630e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    validUntil: "June 30, 2023",
    code: "SUMMER30",
    category: "Fruits",
    color: "from-orange-500/20 to-yellow-500/20",
  },
  {
    id: 2,
    title: "Organic Week",
    discount: "25% OFF",
    description: "Enjoy 25% off on all organic products. Eat healthy, save more!",
    image: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    validUntil: "May 15, 2023",
    code: "ORGANIC25",
    category: "Organic",
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    id: 3,
    title: "Dairy Delight",
    discount: "Buy 2 Get 1 Free",
    description: "Buy any two dairy products and get the third one free. Applies to milk, cheese, and yogurt.",
    image: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    validUntil: "May 20, 2023",
    code: "DAIRY3FOR2",
    category: "Dairy",
    color: "from-blue-500/20 to-indigo-500/20",
  },
  {
    id: 4,
    title: "Weekend Special",
    discount: "Free Delivery",
    description: "Enjoy free delivery on all orders above $50 placed during the weekend.",
    image: "https://images.unsplash.com/photo-1506617420156-8e4536971650?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    validUntil: "Ongoing",
    category: "Delivery",
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    id: 5,
    title: "Fresh Bakery Discount",
    discount: "20% OFF",
    description: "Get 20% off on all freshly baked goods when you shop before noon.",
    image: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    validUntil: "May 31, 2023",
    code: "BAKERY20",
    category: "Bakery",
    color: "from-amber-500/20 to-yellow-500/20",
  },
];

const Offers = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="page-container">
          {/* Page Header */}
          <AnimatedSection animation="fade-in">
            <div className="mb-12 text-center">
              <h1 className="text-4xl font-bold mb-4">Special Offers & Discounts</h1>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Take advantage of our current promotions and special deals. Save big on your favorite products!
              </p>
            </div>
          </AnimatedSection>
          
          {/* Offers Grid */}
          <div className="grid gap-8 mt-8">
            {offers.map((offer, index) => (
              <AnimatedSection 
                key={offer.id} 
                animation="slide-in-bottom"
                delay={100 * index}
              >
                <div className={`rounded-xl overflow-hidden shadow-soft bg-white dark:bg-card`}>
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 relative">
                      <div className={`absolute inset-0 bg-gradient-to-br ${offer.color}`}></div>
                      <img 
                        src={offer.image} 
                        alt={offer.title}
                        className="w-full h-full object-cover aspect-[4/3] md:aspect-auto relative z-10 mix-blend-multiply"
                      />
                    </div>
                    
                    <div className="p-6 md:p-8 md:w-2/3 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                          <span className="px-3 py-1 rounded-full text-xs font-medium bg-secondary">
                            {offer.category}
                          </span>
                          {offer.validUntil && (
                            <div className="flex items-center text-muted-foreground text-sm">
                              <Calendar className="h-3.5 w-3.5 mr-1" />
                              Valid until: {offer.validUntil}
                            </div>
                          )}
                        </div>
                        
                        <h3 className="text-xl md:text-2xl font-bold mb-2">{offer.title}</h3>
                        <p className="text-primary font-bold text-lg md:text-xl mb-4">{offer.discount}</p>
                        <p className="text-muted-foreground mb-6">{offer.description}</p>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row items-center gap-4">
                        {offer.code && (
                          <div className="bg-secondary px-4 py-3 rounded-md flex items-center w-full sm:w-auto">
                            <Tag className="h-4 w-4 mr-2 text-primary" />
                            <span className="font-medium">Code: {offer.code}</span>
                          </div>
                        )}
                        
                        <Link
                          to="/products"
                          className="px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors flex items-center justify-center w-full sm:w-auto"
                        >
                          Shop Now
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Offers;
