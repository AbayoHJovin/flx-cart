
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary/50 backdrop-blur-sm border-t border-border">
      <div className="page-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-16">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold font-heading">FreshCart</h3>
            <p className="text-muted-foreground">
              Bringing the freshest groceries to your doorstep with quality and convenience.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-secondary rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 bg-secondary rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 bg-secondary rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors flex items-center">
                  <ArrowRight className="h-3 w-3 mr-2" />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-muted-foreground hover:text-primary transition-colors flex items-center">
                  <ArrowRight className="h-3 w-3 mr-2" />
                  Products
                </Link>
              </li>
              <li>
                <Link to="/offers" className="text-muted-foreground hover:text-primary transition-colors flex items-center">
                  <ArrowRight className="h-3 w-3 mr-2" />
                  Offers
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors flex items-center">
                  <ArrowRight className="h-3 w-3 mr-2" />
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors flex items-center">
                  <ArrowRight className="h-3 w-3 mr-2" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  123 Grocery Lane, Market City, MC 12345
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-primary shrink-0" />
                <span className="text-muted-foreground">(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-primary shrink-0" />
                <span className="text-muted-foreground">contact@freshcart.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Subscribe</h3>
            <p className="text-muted-foreground">
              Get weekly updates, new products and special offers!
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-border py-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} FreshCart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
