
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/products', label: 'Products' },
  { path: '/offers', label: 'Offers' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when location changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300',
        isScrolled
          ? 'glass py-3 shadow-soft'
          : 'bg-transparent py-5'
      )}
    >
      <div className="page-container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="relative z-50">
            <span className="text-xl font-bold font-heading gradient-text">FreshCart</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-primary',
                  location.pathname === link.path
                    ? 'text-primary'
                    : 'text-foreground/80'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Action Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-secondary transition-colors">
              <Search className="h-5 w-5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative z-50 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          {/* Mobile Menu */}
          <div
            className={cn(
              'fixed inset-0 bg-background/95 backdrop-blur-sm z-40 md:hidden transition-all duration-300 ease-in-out',
              mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
            )}
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8 p-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    'text-lg font-medium transition-colors',
                    location.pathname === link.path
                      ? 'text-primary'
                      : 'text-foreground/80'
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex items-center space-x-6 mt-6">
                <button className="p-2">
                  <Search className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
