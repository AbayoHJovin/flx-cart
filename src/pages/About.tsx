
import React from 'react';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import AnimatedSection from '../components/UI/AnimatedSection';
import { CheckCircle2, Users, Award, Clock } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-16">
        {/* Hero Section */}
        <section className="bg-secondary/30 py-16 md:py-24">
          <div className="page-container">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <AnimatedSection animation="fade-in" className="flex-1">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  About <span className="gradient-text">FreshCart</span>
                </h1>
                <p className="text-muted-foreground text-lg mb-6">
                  We're on a mission to make fresh, quality groceries accessible to everyone. At FreshCart, we believe that everyone deserves access to fresh, nutritious food at affordable prices.
                </p>
                <p className="text-muted-foreground text-lg">
                  Our journey began in 2010 with a simple idea: to create a better way to shop for groceries. Today, we're proud to serve thousands of customers, providing them with the freshest produce, dairy, meats, and pantry essentials.
                </p>
              </AnimatedSection>
              
              <AnimatedSection animation="fade-in" delay={200} className="flex-1">
                <div className="rounded-2xl overflow-hidden shadow-soft-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1588964895597-cfccd6e2dbf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
                    alt="About FreshCart" 
                    className="w-full h-full object-cover aspect-[4/3]"
                  />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
        
        {/* Our Mission */}
        <section className="py-16 md:py-24">
          <div className="page-container">
            <AnimatedSection animation="fade-in">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission</h2>
                <p className="text-muted-foreground max-w-3xl mx-auto">
                  We're committed to providing the freshest, highest-quality groceries while supporting local farmers and producers.
                </p>
              </div>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <CheckCircle2 className="h-8 w-8 text-primary" />,
                  title: "Quality Assurance",
                  description: "We carefully select only the freshest and highest quality products to ensure satisfaction with every purchase.",
                },
                {
                  icon: <Users className="h-8 w-8 text-primary" />,
                  title: "Community Support",
                  description: "We partner with local farmers and producers to support our community and provide the freshest products possible.",
                },
                {
                  icon: <Award className="h-8 w-8 text-primary" />,
                  title: "Sustainability",
                  description: "We're committed to sustainable practices, from reducing packaging waste to supporting eco-friendly farming methods.",
                },
              ].map((item, index) => (
                <AnimatedSection 
                  key={index} 
                  animation="slide-in-bottom"
                  delay={100 * index}
                >
                  <div className="bg-white dark:bg-card rounded-xl p-6 shadow-soft h-full">
                    <div className="mb-4">{item.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
        
        {/* Our Story */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="page-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection animation="slide-in-left">
                <img 
                  src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
                  alt="Our Story" 
                  className="rounded-2xl shadow-soft-lg w-full h-full object-cover aspect-[4/3]"
                />
              </AnimatedSection>
              
              <AnimatedSection animation="slide-in-right">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
                <p className="text-muted-foreground mb-4">
                  FreshCart began with a simple observation: grocery shopping was often stressful, time-consuming, and didn't always result in the freshest products.
                </p>
                <p className="text-muted-foreground mb-4">
                  Our founder, Jane Smith, wanted to create a better experience. In 2010, she started FreshCart with just a small selection of locally-sourced produce and a commitment to quality.
                </p>
                <p className="text-muted-foreground mb-4">
                  Over the years, we've grown to offer a complete selection of grocery items, but our core values remain the same: fresh, quality products, exceptional service, and supporting our local community.
                </p>
                <p className="text-muted-foreground">
                  Today, FreshCart serves thousands of customers, but we still maintain the personal touch and attention to quality that defined us from day one.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="py-16 md:py-24">
          <div className="page-container">
            <AnimatedSection animation="fade-in">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
                <p className="text-muted-foreground max-w-3xl mx-auto">
                  The dedicated professionals behind FreshCart, committed to bringing you the best grocery shopping experience
                </p>
              </div>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "Jane Smith",
                  role: "Founder & CEO",
                  image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
                },
                {
                  name: "John Doe",
                  role: "Head of Operations",
                  image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
                },
                {
                  name: "Emily Johnson",
                  role: "Quality Assurance",
                  image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
                },
                {
                  name: "Michael Chen",
                  role: "Head of Sourcing",
                  image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
                },
              ].map((member, index) => (
                <AnimatedSection 
                  key={index} 
                  animation="fade-in"
                  delay={100 * index}
                >
                  <div className="bg-white dark:bg-card rounded-xl shadow-soft overflow-hidden">
                    <div className="aspect-square overflow-hidden">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <div className="p-4 text-center">
                      <h3 className="font-semibold text-lg">{member.name}</h3>
                      <p className="text-muted-foreground">{member.role}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
        
        {/* Store Hours */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="page-container">
            <div className="max-w-4xl mx-auto">
              <AnimatedSection animation="fade-in">
                <div className="text-center mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Store Hours</h2>
                  <p className="text-muted-foreground">
                    Visit us in-store or shop online anytime
                  </p>
                </div>
              </AnimatedSection>
              
              <AnimatedSection animation="scale-in" delay={100}>
                <div className="bg-white dark:bg-card rounded-xl shadow-soft p-8">
                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-primary mt-1 shrink-0" />
                    <div className="flex-1">
                      <h3 className="font-semibold text-xl mb-4">Opening Hours</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="font-medium">Weekdays</p>
                          <p className="text-muted-foreground">Monday - Friday: 8:00 AM - 9:00 PM</p>
                        </div>
                        <div>
                          <p className="font-medium">Weekends</p>
                          <p className="text-muted-foreground">Saturday - Sunday: 9:00 AM - 7:00 PM</p>
                        </div>
                      </div>
                      <div className="mt-4 pt-4 border-t border-border">
                        <p className="font-medium">Holidays</p>
                        <p className="text-muted-foreground">Hours may vary on holidays. Please check our social media channels for updates.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
