
import React from 'react';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from '../UI/AnimatedSection';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none -z-10" />
      
      <div className="page-container">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <AnimatedSection animation="fade-in">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                Fresh Produce Daily
              </span>
            </AnimatedSection>
            
            <AnimatedSection animation="slide-in-bottom" delay={100}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Fresh <span className="gradient-text">Groceries</span> Delivered to Your Doorstep
              </h1>
            </AnimatedSection>
            
            <AnimatedSection animation="slide-in-bottom" delay={200}>
              <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto lg:mx-0">
                Experience the convenience of fresh, locally-sourced groceries delivered straight to your door, ensuring quality and freshness with every order.
              </p>
            </AnimatedSection>
            
            <AnimatedSection animation="slide-in-bottom" delay={300}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link 
                  to="/products" 
                  className="px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-all hover:shadow-md flex items-center justify-center"
                >
                  Shop Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link 
                  to="/about" 
                  className="px-6 py-3 bg-secondary text-secondary-foreground rounded-md font-medium hover:bg-secondary/80 transition-all flex items-center justify-center"
                >
                  Learn More
                </Link>
              </div>
            </AnimatedSection>
          </div>
          
          {/* Hero Image */}
          <AnimatedSection animation="fade-in" delay={200} className="flex-1">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-soft-lg aspect-[4/3]">
                <img 
                  src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" 
                  alt="Fresh groceries" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* Floating Elements */}
              <div className="glass absolute -top-6 -right-6 sm:top-12 sm:-right-10 p-4 rounded-lg shadow-soft animate-float hidden sm:block">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    🥗
                  </div>
                  <div className="ml-3">
                    <p className="font-medium text-sm">Organic Produce</p>
                    <p className="text-xs text-muted-foreground">Farm Fresh</p>
                  </div>
                </div>
              </div>
              
              <div className="glass absolute -bottom-6 -left-6 sm:bottom-12 sm:-left-10 p-4 rounded-lg shadow-soft animate-float animation-delay-1000 hidden sm:block">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    🚚
                  </div>
                  <div className="ml-3">
                    <p className="font-medium text-sm">Fast Delivery</p>
                    <p className="text-xs text-muted-foreground">Same day</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Hero;
