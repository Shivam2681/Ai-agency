"use client"
import React, { useState } from 'react';
import { Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

//   bg-[#1A1A2E]/80
// bg-gradient-to-b from-[#1D1E30]/80 to-black

  return (
    <nav className="sticky top-0 z-50 bg-[#1A1A2E]/80 backdrop-blur-sm ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Brain className="w-8 h-8 text-[#FF007A]" />
              <h1 className='text-white font-bold ml-2'>AI Automation Agency</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-[#E4E4E4] hover:text-[#FF007A] transition-colors">
              Home
            </a>
            <a href="/about" className="text-[#E4E4E4] hover:text-[#FF007A] transition-colors">
              About
            </a>
            <a href="/services" className="text-[#E4E4E4] hover:text-[#FF007A] transition-colors">
              Services
            </a>
            <a href="/pricing" className="text-[#E4E4E4] hover:text-[#FF007A] transition-colors">
              Pricing
            </a>
            <a href="/contact" className="text-[#E4E4E4] hover:text-[#FF007A] transition-colors">
              Contact
            </a>
            <Button className="bg-[#FF007A] hover:bg-[#FF007A]/90 hover:shadow-[0_0_15px_rgba(0,255,255,0.5)]">
              Get in Touch
            </Button>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-[#E4E4E4] hover:text-[#FF6BDA] transition-colors"
          >
            <div className="relative w-6 h-5">
              <span 
                className={`absolute w-6 h-0.5 bg-current transform transition-all duration-300 ease-in-out ${
                  isOpen ? 'rotate-45 translate-y-2.5' : 'translate-y-0'
                }`}
              />
              <span 
                className={`absolute w-6 h-0.5 bg-current transform transition-all duration-300 ease-in-out translate-y-2 ${
                  isOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span 
                className={`absolute w-6 h-0.5 bg-current transform transition-all duration-300 ease-in-out ${
                  isOpen ? '-rotate-45 translate-y-2.5' : 'translate-y-4'
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {/* bg-gradient-to-b from-[#121212] to-[#1A103D] */}
        <div
          className={`md:hidden absolute right-0 rounded-md bg-gradient-to-b from-[#1D1E30] to-black transition-all duration-300 ease-in-out ${
            isOpen 
              ? 'opacity-100 translate-y-0 mt-2' 
              : 'opacity-0 -translate-y-full h-0'
          }`}
        >
          <div className="px-4 pt-8 pb-6 space-y-6">
            <a 
              href="/" 
              className="block text-center text-xl font-bold text-[#E4E4E4] hover:text-[#FF6BDA] hover:underline decoration-2 underline-offset-4 transition-all"
            >
              Home
            </a>
            <a 
              href="/about" 
              className="block text-center text-xl font-bold text-[#E4E4E4] hover:text-[#FF6BDA] hover:underline decoration-2 underline-offset-4 transition-all"
            >
              About
            </a>
            <a 
              href="/services" 
              className="block text-center text-xl font-bold text-[#E4E4E4] hover:text-[#FF6BDA] hover:underline decoration-2 underline-offset-4 transition-all"
            >
              Services
            </a>
            <a 
              href="/pricing" 
              className="block text-center text-xl font-bold text-[#E4E4E4] hover:text-[#FF6BDA] hover:underline decoration-2 underline-offset-4 transition-all"
            >
              Pricing
            </a>
            <a 
              href="/contact" 
              className="block text-center text-xl font-bold text-[#E4E4E4] hover:text-[#FF6BDA] hover:underline decoration-2 underline-offset-4 transition-all"
            >
              Contact
            </a>
            <div className="pt-6">
              <Button className="w-full bg-gradient-to-r from-[#FF6BDA] to-[#6A4DFF] hover:shadow-[0_0_15px_rgba(255,107,218,0.5)] transition-all">
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MobileNav;