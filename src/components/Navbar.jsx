"use client"

import { useEffect, useState } from 'react';

// Add scroll effect and smooth scrolling
const useScrollEffects = () => {
  const [activeSection, setActiveSection] = useState('hero');
  
  useEffect(() => {
    const nav = document.getElementById('nav');
    const sections = ['hero', 'services', 'case-studies', 'pricing', 'contact'];
    
    const handleScroll = () => {
      if (nav) {
        if (window.scrollY > 50) {
          nav.classList.add('scrolled');
        } else {
          nav.classList.remove('scrolled');
        }
      }
      
      // Detect active section
      const scrollPosition = window.scrollY + 100;
      
      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };
    
    // Add smooth scroll for anchor links
    const handleSmoothScroll = (e) => {
      const href = e.currentTarget.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          const navHeight = nav ? nav.offsetHeight : 72;
          const targetPosition = target.offsetTop - navHeight;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    };
    
    // Add event listeners
    window.addEventListener('scroll', handleScroll);
    
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(anchor => {
      anchor.addEventListener('click', handleSmoothScroll);
    });
    
    // Initial check
    handleScroll();
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      anchorLinks.forEach(anchor => {
        anchor.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, []);
  
  return activeSection;
};

// Add scroll styles
const scrollStyles = `
  .nav {
    transition: all 0.3s ease;
  }
  .nav.scrolled {
    box-shadow: 0 2px 12px rgba(26, 26, 26, 0.08);
  }
`;

if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = scrollStyles;
  document.head.appendChild(styleSheet);
}

export default function Navbar() {
  const activeSection = useScrollEffects();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white px-4 py-2 rounded-md shadow-lg z-50">
        Skip to main content
      </a>
      
      <nav id="nav" className="nav fixed top-0 left-0 right-0 h-[72px] z-1000 bg-white border-b border-[rgba(74,74,74,0.12)]">
        <div className="container h-full flex items-center justify-between">
          <a href="#" className="text-2xl font-bold text-[#1a1a1a] flex items-center gap-1">
            TechNest
            <span className="text-[#FF6B35] text-3xl leading-none">•</span>
          </a>
          
          <ul className="hidden md:flex items-center gap-8 list-none">
            <li>
              <a 
                href="#hero" 
                className={`text-[#4a4a4a] font-medium text-base hover:text-[#FF6B35] hover:scale-105 transition-all duration-200 relative pb-1 ${
                  activeSection === 'hero' ? 'border-b-2 border-[#FF6B35] text-[#FF6B35]' : ''
                }`}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#services" 
                className={`text-[#4a4a4a] font-medium text-base hover:text-[#FF6B35] hover:scale-105 transition-all duration-200 relative pb-1 ${
                  activeSection === 'services' ? 'border-b-2 border-[#FF6B35] text-[#FF6B35]' : ''
                }`}
              >
                Services
              </a>
            </li>
            <li>
              <a 
                href="#case-studies" 
                className={`text-[#4a4a4a] font-medium text-base hover:text-[#FF6B35] hover:scale-105 transition-all duration-200 relative pb-1 ${
                  activeSection === 'case-studies' ? 'border-b-2 border-[#FF6B35] text-[#FF6B35]' : ''
                }`}
              >
                Case Studies
              </a>
            </li>
            <li>
              <a 
                href="#pricing" 
                className={`text-[#4a4a4a] font-medium text-base hover:text-[#FF6B35] hover:scale-105 transition-all duration-200 relative pb-1 ${
                  activeSection === 'pricing' ? 'border-b-2 border-[#FF6B35] text-[#FF6B35]' : ''
                }`}
              >
                Pricing
              </a>
            </li>
            <li>
              <a 
                href="#blog" 
                className="text-[#4a4a4a] font-medium text-base hover:text-[#FF6B35] hover:scale-105 transition-all duration-200 relative pb-1"
              >
                Blog
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                className={`text-[#4a4a4a] font-medium text-base hover:text-[#FF6B35] hover:scale-105 transition-all duration-200 relative pb-1 ${
                  activeSection === 'contact' ? 'border-b-2 border-[#FF6B35] text-[#FF6B35]' : ''
                }`}
              >
                Contact
              </a>
            </li>
          </ul>
          
          <div className="flex items-center gap-4">
            <a 
              href="#contact" 
              className="hidden md:inline-flex items-center gap-2 px-6 py-3.5 bg-linear-to-r from-[#FF6B35] to-[#FF8C42] text-white rounded-2xl font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 hover:scale-105 transition-all duration-200"
            >
              Get Proposal
            </a>
            
            <button 
              onClick={() => setIsDrawerOpen(!isDrawerOpen)}
              className="md:hidden flex flex-col gap-1 p-2"
              aria-label="Toggle menu"
            >
              <span className={`w-6 h-0.5 bg-[#1a1a1a] transition-all duration-300 ${isDrawerOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-[#1a1a1a] transition-all duration-300 ${isDrawerOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-[#1a1a1a] transition-all duration-300 ${isDrawerOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </button>
          </div>
        </div>
      </nav>
      
      {/* Mobile Drawer */}
      <div className={`fixed inset-0 z-999 md:hidden transition-all duration-300 ${isDrawerOpen ? 'visible' : 'invisible'}`}>
        <div 
          className={`absolute inset-0 bg-black transition-opacity duration-300 ${isDrawerOpen ? 'opacity-50' : 'opacity-0'}`}
          onClick={() => setIsDrawerOpen(false)}
        ></div>
        <div className={`absolute top-0 right-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ${isDrawerOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="p-6">
            <div className="flex justify-between items-center mb-8">
              <span className="text-xl font-bold text-[#1a1a1a]">Menu</span>
              <button 
                onClick={() => setIsDrawerOpen(false)}
                className="p-2"
                aria-label="Close menu"
              >
                <span className="w-6 h-0.5 bg-[#1a1a1a] rotate-45 absolute"></span>
                <span className="w-6 h-0.5 bg-[#1a1a1a] -rotate-45"></span>
              </button>
            </div>
            
            <ul className="space-y-6">
              <li>
                <a 
                  href="#hero" 
                  onClick={() => setIsDrawerOpen(false)}
                  className={`block text-lg font-medium hover:text-[#FF6B35] transition-colors ${activeSection === 'hero' ? 'text-[#FF6B35]' : 'text-[#4a4a4a]'}`}
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  onClick={() => setIsDrawerOpen(false)}
                  className={`block text-lg font-medium hover:text-[#FF6B35] transition-colors ${activeSection === 'services' ? 'text-[#FF6B35]' : 'text-[#4a4a4a]'}`}
                >
                  Services
                </a>
              </li>
              <li>
                <a 
                  href="#case-studies" 
                  onClick={() => setIsDrawerOpen(false)}
                  className={`block text-lg font-medium hover:text-[#FF6B35] transition-colors ${activeSection === 'case-studies' ? 'text-[#FF6B35]' : 'text-[#4a4a4a]'}`}
                >
                  Case Studies
                </a>
              </li>
              <li>
                <a 
                  href="#pricing" 
                  onClick={() => setIsDrawerOpen(false)}
                  className={`block text-lg font-medium hover:text-[#FF6B35] transition-colors ${activeSection === 'pricing' ? 'text-[#FF6B35]' : 'text-[#4a4a4a]'}`}
                >
                  Pricing
                </a>
              </li>
              <li>
                <a 
                  href="#blog" 
                  onClick={() => setIsDrawerOpen(false)}
                  className="block text-lg font-medium text-[#4a4a4a] hover:text-[#FF6B35] transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  onClick={() => setIsDrawerOpen(false)}
                  className={`block text-lg font-medium hover:text-[#FF6B35] transition-colors ${activeSection === 'contact' ? 'text-[#FF6B35]' : 'text-[#4a4a4a]'}`}
                >
                  Contact
                </a>
              </li>
            </ul>
            
            <div className="mt-8">
              <a 
                href="#contact" 
                onClick={() => setIsDrawerOpen(false)}
                className="block w-full text-center px-6 py-3.5 bg-linear-to-r from-[#FF6B35] to-[#FF8C42] text-white rounded-2xl font-semibold shadow-md"
              >
                Get Proposal
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}