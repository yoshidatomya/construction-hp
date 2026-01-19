import React, { useState, useEffect } from 'react';
import { cn } from '../utils/cn';
import { Button } from './ui/Button';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'ホーム', href: '/#hero' },
    { name: '会社概要', href: '/#about' },
    { name: '事業内容', href: '/#services' },
    { name: '強み', href: '/#strengths' },
    { name: '実績', href: '/#gallery' },
    { name: '採用情報', href: '/recruit' }, // Added Recruit as it's common
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3 md:py-4' : 'bg-transparent py-4 md:py-6'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="block">
              <img src="/assets/logo.png" alt="Kengumi LLC" className="h-14 md:h-20 w-auto object-contain" />
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-corporate-accent",
                  isScrolled ? "text-corporate-dark" : "text-white/90"
                )}
              >
                {link.name}
              </a>
            ))}
            <a href="/#contact">
              <Button variant={isScrolled ? "primary" : "primary"} size="sm" className="ml-4">
                <Phone className="w-4 h-4 mr-2" />
                お問い合わせ
              </Button>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn("p-2", isScrolled ? "text-corporate-black" : "text-white")}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-4 text-base font-medium text-corporate-dark hover:bg-gray-50 hover:text-corporate-accent border-b border-gray-100"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4">
                <a href="/#contact" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button fullWidth>お問い合わせ</Button>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
