import React, { useState, useEffect } from 'react';

interface HeaderProps {
  onOpenConsultation: () => void;
  activeSection: string;
}

export default function Header({ onOpenConsultation, activeSection }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'trai-nghiem', label: 'Giới thiệu' },
    { id: 'chien-luoc', label: 'Khác biệt' },
    { id: 'studio', label: 'Dịch vụ' },
    { id: 'di-san', label: 'Dự án' },
    { id: 'tu-van', label: 'Liên hệ' }
  ];

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of fixed header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-20 py-4 transition-all duration-300 border-b ${
      isScrolled ? 'glass-nav border-white/10 shadow-lg py-3' : 'bg-transparent border-white/5'
    }`}>
      {/* Brand Logo Container */}
      <div className="flex items-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <img 
          alt="TAT Media & Events logo" 
          className="h-10 md:h-12 lg:h-14 w-auto object-contain py-0.5" 
          src="/assets/logo-new-light.png"
        />
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-8 lg:gap-12">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`font-display font-bold text-xs tracking-[0.15em] uppercase pb-1 transition-all duration-300 relative ${
                isActive 
                  ? 'text-secondary border-b-2 border-secondary' 
                  : 'text-white/70 hover:text-white hover:border-b-2 hover:border-white/20'
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </nav>

      {/* Action Button & Mobile Trigger */}
      <div className="flex items-center gap-4">
        <button 
          onClick={onOpenConsultation}
          className="group bg-secondary hover:bg-secondary-light text-white pl-6 pr-2 py-2 rounded-full font-sans font-bold text-xs tracking-[0.1em] uppercase transition-premium flex items-center gap-3 cursor-pointer active:scale-95 shadow-lg border-0"
        >
          <span>Tư vấn</span>
          <span className="w-6 h-6 rounded-full bg-white/10 group-hover:bg-white/20 flex items-center justify-center transition-colors">
            <svg className="w-2.5 h-2.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
        </button>

        {/* Mobile Hamburger */}
        <button 
          className="md:hidden text-white hover:text-secondary focus:outline-none p-1"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
            ) : (
              <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-primary/95 backdrop-blur-md border-b border-white/10 flex flex-col p-6 gap-4 md:hidden">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-left font-display font-bold text-sm tracking-[0.15em] uppercase py-2 border-b border-white/5 ${
                activeSection === item.id ? 'text-secondary' : 'text-white/80'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
