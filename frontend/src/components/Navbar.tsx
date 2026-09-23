'use client';

import { useState, useEffect } from 'react';
import { useUtmTracking } from '@/hooks/useUtmTracking';
import { handleWhatsAppCtaClick } from '@/lib/pixel';
import { MessageCircle, Menu, X, ArrowUpRight } from 'lucide-react';
import AbstergoIcon from './AbstergoIcon';

export default function Navbar() {
  const { buildWhatsAppUrl } = useUtmTracking();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappHref = buildWhatsAppUrl();

  const handleCtaClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    handleWhatsAppCtaClick(e, 'navbar', 'patient');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FDFCFB]/95 backdrop-blur-md shadow-[0_4px_24px_rgba(18,19,22,0.05)] border-b border-[#121316]/5 py-3'
          : 'bg-[#FDFCFB]/80 backdrop-blur-xs py-4 md:py-5 border-b border-[#121316]/4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Monogram & Name */}
        <a
          href="#"
          className="flex items-center gap-2.5 group cursor-pointer"
          aria-label="Abstergo Inicio"
        >
          <AbstergoIcon className="w-8 h-8 sm:w-9 sm:h-9 group-hover:scale-105 transition-transform duration-300 drop-shadow-xs" />
          <div className="flex flex-col">
            <span className="font-serif text-lg sm:text-xl tracking-[0.16em] font-semibold text-[#121316] leading-none">
              ABSTERGO
            </span>
            <span className="text-[9px] font-sans tracking-[0.2em] text-[#C5A880] uppercase mt-0.5 font-medium">
              Turismo Médico · Cali
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden lg:flex items-center gap-7 xl:gap-9 text-[13px] xl:text-sm font-medium text-[#1E2024]/80"
          aria-label="Navegación principal"
        >
          <a
            href="#como-funciona"
            className="hover:text-[#121316] transition-colors py-1.5"
          >
            Cómo funciona
          </a>
          <a
            href="#que-incluye"
            className="hover:text-[#121316] transition-colors py-1.5"
          >
            Qué incluye
          </a>
          <a
            href="#clinicas"
            className="hover:text-[#121316] transition-colors py-1.5"
          >
            Clínicas aliadas
          </a>
          <a
            href="#precio"
            className="hover:text-[#121316] transition-colors py-1.5"
          >
            Precio
          </a>
          <a
            href="#faq"
            className="hover:text-[#121316] transition-colors py-1.5"
          >
            Preguntas frecuentes
          </a>
        </nav>

        {/* Desktop WhatsApp Action Button */}
        <div className="hidden lg:flex items-center gap-3.5 shrink-0">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            data-cta="navbar"
            onClick={handleCtaClick}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#121316] text-[#FDFCFB] text-xs font-semibold tracking-wide hover:bg-[#C5A880] hover:text-[#121316] transition-all duration-300 shadow-sm touch-target-min"
          >
            <MessageCircle className="w-4 h-4 text-[#D4AF37]" />
            <span>Cotiza por WhatsApp</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl text-[#121316] hover:bg-[#FAF9F6] border border-[#121316]/8 transition-colors touch-target-min flex items-center justify-center"
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FDFCFB] border-b border-[#121316]/10 px-5 pt-3 pb-6 space-y-4 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-2 font-medium text-[#121316]">
            <a
              href="#como-funciona"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-3 rounded-lg hover:bg-[#FAF9F6] transition-colors"
            >
              Cómo funciona
            </a>
            <a
              href="#que-incluye"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-3 rounded-lg hover:bg-[#FAF9F6] transition-colors"
            >
              Qué incluye
            </a>
            <a
              href="#clinicas"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-3 rounded-lg hover:bg-[#FAF9F6] transition-colors"
            >
              Clínicas aliadas
            </a>
            <a
              href="#precio"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-3 rounded-lg hover:bg-[#FAF9F6] transition-colors"
            >
              Precio
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-3 rounded-lg hover:bg-[#FAF9F6] transition-colors"
            >
              Preguntas frecuentes
            </a>
          </nav>

          <div className="pt-3 border-t border-[#121316]/8">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              data-cta="navbar-mobile"
              onClick={(e) => {
                handleCtaClick(e);
                setMobileMenuOpen(false);
              }}
              className="flex items-center justify-center gap-2.5 w-full py-3.5 px-4 rounded-full bg-[#121316] text-[#FDFCFB] font-semibold text-sm shadow-md hover:bg-[#C5A880] hover:text-[#121316] transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#D4AF37]" />
              <span>Cotiza por WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
