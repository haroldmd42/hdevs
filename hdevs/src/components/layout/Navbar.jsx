import React, { useState, useEffect } from 'react';
import { Menu, X, MessageSquare } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Sobre Mí', href: '#sobre-mi' },
    { name: 'Skills', href: '#skills' },
    { name: 'Proyectos', href: '#proyectos' },
    { name: 'Estudios', href: '#estudios' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#1E2023]/90 backdrop-blur-md border-b border-[#5A6068]/30 shadow-lg shadow-black/20 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#inicio"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Ir a inicio"
          >
            <div className="relative">
              <img
                src={`${process.env.PUBLIC_URL}/img/logo.png`}
                alt="HDevs Logo"
                className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-[#F7F7F5] flex items-center">
                Harold<span className="text-[#FF6B4A]">.</span>DEV
              </span>
              <span className="text-[10px] tracking-wider text-[#D8DADD]/70 font-mono -mt-1 uppercase">
                Software Dev &amp; QA
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-[#2B2D31]/80 px-4 py-1.5 rounded-full border border-[#5A6068]/30 shadow-inner">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 rounded-full text-sm font-medium text-[#D8DADD] hover:text-[#F7F7F5] hover:bg-[#5A6068]/30 transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action & Socials */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://github.com/haroldmd42"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg text-[#D8DADD] hover:text-[#FF6B4A] hover:bg-[#2B2D31] border border-transparent hover:border-[#5A6068]/40 transition-colors"
              aria-label="Perfil de GitHub"
            >
              <i className="fa-brands fa-github text-lg" />
            </a>
            <a
              href="https://www.linkedin.com/in/yan-harold-mu%C3%B1oz-dominguez-44a2a6b9/"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg text-[#D8DADD] hover:text-[#FF6B4A] hover:bg-[#2B2D31] border border-transparent hover:border-[#5A6068]/40 transition-colors"
              aria-label="Perfil de LinkedIn"
            >
              <i className="fa-brands fa-linkedin text-lg" />
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-[#FF6B4A] hover:bg-[#E85837] text-white shadow-md shadow-[#FF6B4A]/25 transition-all duration-200 hover:scale-105"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Contáctame</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <a
              href="#contacto"
              className="px-3 py-1.5 rounded-full text-xs font-semibold bg-[#FF6B4A] text-white"
            >
              Contacto
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-[#D8DADD] hover:text-white bg-[#2B2D31] border border-[#5A6068]/40 focus:outline-none"
              aria-label="Abrir menú"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#2B2D31] border-b border-[#5A6068]/40 px-4 pt-3 pb-6 space-y-2 mt-2 shadow-xl animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-[#F7F7F5] hover:bg-[#5A6068]/30 hover:text-[#FF6B4A] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-[#5A6068]/30 flex items-center gap-3">
            <a
              href="https://github.com/haroldmd42"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-[#D8DADD] bg-[#1E2023] border border-[#5A6068]/30"
            >
              <i className="fa-brands fa-github text-sm" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/yan-harold-mu%C3%B1oz-dominguez-44a2a6b9/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-[#D8DADD] bg-[#1E2023] border border-[#5A6068]/30"
            >
              <i className="fa-brands fa-linkedin text-sm" /> LinkedIn
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
