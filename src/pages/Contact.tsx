
import React from 'react';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import AnimatedSection from '../components/UI/AnimatedSection';
import { MapPin, Mail, Phone, MessageSquare, Clock, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="page-container">
          {/* Page Header */}
          <AnimatedSection animation="fade-in">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Have questions, feedback, or need assistance? We're here to help. Reach out to our friendly team.
              </p>
            </div>
          </AnimatedSection>
          
          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: <MapPin className="h-6 w-6 text-primary" />,
                title: "Visit Us",
                details: [
                  "123 Grocery Lane",
                  "Market City, MC 12345",
                  "United States"
                ]
              },
              {
                icon: <Phone className="h-6 w-6 text-primary" />,
                title: "Call Us",
                details: [
                  "+1 (123) 456-7890",
                  "+1 (123) 456-7891"
                ]
              },
              {
                icon: <Mail className="h-6 w-6 text-primary" />,
                title: "Email Us",
                details: [
                  "contact@freshcart.com",
                  "support@freshcart.com"
                ]
              }
            ].map((item, index) => (
              <AnimatedSection 
                key={index} 
                animation="slide-in-bottom" 
                delay={100 * index}
              >
                <div className="bg-white dark:bg-card rounded-xl shadow-soft p-6 text-center h-full">
                  <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <div className="text-muted-foreground">
                    {item.details.map((detail, idx) => (
                      <p key={idx} className="mb-1">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          
          {/* Contact Form and Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Contact Form */}
            <AnimatedSection animation="slide-in-left">
              <div className="bg-white dark:bg-card rounded-xl shadow-soft p-6 md:p-8">
                <div className="flex items-center mb-6">
                  <MessageSquare className="h-6 w-6 text-primary mr-3" />
                  <h2 className="text-2xl font-semibold">Send Us a Message</h2>
                </div>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-3 rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Your email"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-3 rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Subject"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-3 rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Your message"
                      required
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors flex items-center justify-center"
                  >
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </button>
                </form>
              </div>
            </AnimatedSection>
            
            {/* Store Information */}
            <AnimatedSection animation="slide-in-right">
              <div className="bg-white dark:bg-card rounded-xl shadow-soft p-6 md:p-8 h-full">
                <div className="flex items-center mb-6">
                  <Clock className="h-6 w-6 text-primary mr-3" />
                  <h2 className="text-2xl font-semibold">Store Hours</h2>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium text-lg mb-3">Opening Hours</h3>
                    <div className="space-y-2 text-muted-foreground">
                      <div className="flex justify-between">
                        <span>Monday - Friday</span>
                        <span>8:00 AM - 9:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday</span>
                        <span>9:00 AM - 7:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday</span>
                        <span>10:00 AM - 5:00 PM</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t border-border pt-6">
                    <h3 className="font-medium text-lg mb-3">Store Location</h3>
                    <div className="rounded-lg overflow-hidden h-64 bg-secondary">
                      <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1286.3395356153665!2d30.05867980038045!3d-1.943687397979174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca425bad95f0b%3A0x3acd1e34ee1be6a8!2s2000%20Supermarket!5e1!3m2!1sen!2srw!4v1740685142213!5m2!1sen!2srw"
                       width="600"
                        height="450"
                        style={{ border: 0 }} 
                        allowFullScreen={false} 
                         loading="lazy" 
                         referrerPolicy="no-referrer-when-downgrade"
                         title="Store Location"
                         ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
