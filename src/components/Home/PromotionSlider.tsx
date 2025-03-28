
import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../UI/AnimatedSection';

const promotions = [
  {
    id: 1,
    title: "Summer Fresh Deals",
    description: "Get up to 30% off on fresh summer fruits and vegetables.",
    image: "https://images.unsplash.com/photo-1519996529931-28324d5a630e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    link: "/offers",
    color: "from-orange-500/80 to-yellow-500/80",
  },
  {
    id: 2,
    title: "Organic Selection",
    description: "Discover our premium organic products at special prices.",
    image: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    link: "/offers",
    color: "from-primary/80 to-green-500/80",
  },
  {
    id: 3,
    title: "Weekend Special",
    description: "Shop for $100 and get free delivery on your weekend orders.",
    image: "https://images.unsplash.com/photo-1506617420156-8e4536971650?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    link: "/offers",
    color: "from-blue-500/80 to-indigo-500/80",
  },
];

const PromotionSlider = () => {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const next = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((prev) => (prev === promotions.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((prev) => (prev === 0 ? promotions.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      next();
    }, 5000);
    return () => clearTimeout(timer);
  }, [current]);

  return (
    <section className="section-padding">
      <div className="page-container">
        <AnimatedSection animation="fade-in">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Special Offers</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Take advantage of our current promotions and special deals
            </p>
          </div>
        </AnimatedSection>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl shadow-soft-lg">
            {promotions.map((promo, index) => (
              <div
                key={promo.id}
                className={`relative transition-all duration-500 ${
                  index === current ? "block" : "hidden"
                }`}
              >
                <div className="relative aspect-[21/9]">
                  <img
                    src={promo.image}
                    alt={promo.title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${promo.color} mix-blend-multiply opacity-60`}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>

                <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-16 text-white">
                  <h3 className="text-2xl md:text-4xl font-bold mb-4 drop-shadow-md">
                    {promo.title}
                  </h3>
                  <p className="text-base md:text-xl mb-6 max-w-md drop-shadow-md">
                    {promo.description}
                  </p>
                  <div>
                    <Link
                      to={promo.link}
                      className="inline-flex items-center px-6 py-3 bg-white text-foreground rounded-md font-medium hover:bg-opacity-90 transition-colors"
                    >
                      Shop Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-soft hover:bg-white transition-colors"
            aria-label="Previous promotion"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-soft hover:bg-white transition-colors"
            aria-label="Next promotion"
          >
            <ArrowRight className="h-5 w-5" />
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-4">
            {promotions.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-2 rounded-full mx-1 transition-all ${
                  index === current ? "w-8 bg-primary" : "w-2 bg-primary/30"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromotionSlider;
