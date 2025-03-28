
import React from 'react';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import Hero from '../components/Home/Hero';
import SearchBar from '../components/Home/SearchBar';
import FeaturedCategories from '../components/Home/FeaturedCategories';
import PromotionSlider from '../components/Home/PromotionSlider';
import ProductGrid from '../components/Products/ProductGrid';
import AnimatedSection from '../components/UI/AnimatedSection';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />
        
        {/* Search Bar */}
        <div className="py-8 bg-background">
          <SearchBar />
        </div>
        
        {/* Categories Section */}
        <FeaturedCategories />
        
        {/* Promotions Section */}
        <PromotionSlider />
        
        {/* Featured Products Section */}
        <section className="section-padding">
          <div className="page-container">
            <AnimatedSection animation="fade-in">
              <ProductGrid 
                title="Featured Products" 
                subtitle="Our handpicked selection of quality products for you" 
                limit={8}
              />
              
              <div className="flex justify-center mt-12">
                <Link
                  to="/products"
                  className="px-6 py-3 bg-secondary text-secondary-foreground rounded-md font-medium hover:bg-secondary/80 transition-all flex items-center"
                >
                  View All Products
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="section-padding bg-secondary/30">
          <div className="page-container">
            <AnimatedSection animation="fade-in">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  We're committed to providing the best shopping experience with quality products and excellent service
                </p>
              </div>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: "🛒",
                  title: "Easy Shopping",
                  description: "Browse and shop for groceries from the comfort of your home.",
                },
                {
                  icon: "🚚",
                  title: "Fast Delivery",
                  description: "Get your groceries delivered to your doorstep in no time.",
                },
                {
                  icon: "🍀",
                  title: "Fresh Products",
                  description: "We source only the freshest produce for our customers.",
                },
                {
                  icon: "💯",
                  title: "Quality Guarantee",
                  description: "We stand behind the quality of every product we sell.",
                },
              ].map((feature, index) => (
                <AnimatedSection
                  key={index}
                  animation="slide-in-bottom"
                  delay={100 * index}
                >
                  <div className="bg-white dark:bg-card rounded-xl p-6 shadow-soft text-center h-full">
                    <div className="h-14 w-14 rounded-full bg-primary/10 text-2xl flex items-center justify-center mx-auto mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
        
        {/* Newsletter Section */}
        <section className="section-padding">
          <div className="page-container">
            <div className="bg-primary/10 rounded-2xl p-8 md:p-12">
              <div className="max-w-3xl mx-auto text-center">
                <AnimatedSection animation="fade-in">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    Subscribe to Our Newsletter
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Stay updated with our latest offers, recipes and tips
                  </p>
                  
                  <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="flex-1 px-4 py-3 rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    />
                    <button
                      type="submit"
                      className="px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors whitespace-nowrap"
                    >
                      Subscribe
                    </button>
                  </form>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
