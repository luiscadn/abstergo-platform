'use client';

import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname } from '@/navigation';
import { useUtmTracking } from '@/hooks/useUtmTracking';
import { MessageCircle, Menu, X, ArrowUpRight, ShieldCheck } from 'lucide-react';
import AbstergoIcon from './AbstergoIcon';

export default function Navbar() {
  const t = useTranslations('Navbar');
  const locale = useLocale();
  const pathname = usePathname();
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

  const whatsappMessage =
    locale === 'es'
      ? 'Hola equipo de Abstergo. Deseo agendar una auditoría web estratégica para mi clínica estética.'
      : 'Hello Abstergo team. I would like to schedule a strategic web audit for my aesthetic clinic.';

  const whatsappHref = buildWhatsAppUrl(whatsappMessage);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FDFCFB]/90 backdrop-blur-md shadow-[0_4px_24px_rgba(18,19,22,0.04)] border-b border-[#121316]/5 py-3'
          : 'bg-[#FDFCFB]/60 backdrop-blur-xs py-4 md:py-5 border-b border-[#121316]/3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Monogram & Name */}
        <a
          href="#"
          className="flex items-center gap-2.5 group cursor-pointer"
          aria-label="Abstergo Home"
        >
          <AbstergoIcon className="w-9 h-9 group-hover:scale-105 transition-transform duration-300 drop-shadow-xs" />
          <div className="flex flex-col">
            <span className="font-serif text-xl tracking-[0.18em] font-semibold text-[#121316] leading-none">
              {t('brand')}
            </span>
            <span className="text-[9px] font-sans tracking-[0.24em] text-[#C5A880] uppercase mt-0.5 font-medium">
              {t('tagline')}
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-10 text-[13px] xl:text-sm font-medium text-[#1E2024]/75">
          <a
            href="#espacios"
            className="hover:text-[#121316] transition-colors py-1.5"
          >
            {t('links.spaces')}
          </a>
          <a
            href="#comparativa"
            className="hover:text-[#121316] transition-colors py-1.5"
          >
            {t('links.comparison')}
          </a>
          <a
            href="#capacidades"
            className="hover:text-[#121316] transition-colors py-1.5"
          >
            {t('links.features')}
          </a>
        </nav>

        {/* Right CTA Area: Lang Switcher & Direct WhatsApp Action Button */}
        <div className="hidden lg:flex items-center gap-3.5 xl:gap-4 shrink-0">
          {/* Language Switcher */}
          <div className="flex items-center bg-[#FAF9F6] border border-[#121316]/6 rounded-full p-0.5 text-xs font-medium">
            <Link
              href={pathname}
              locale="es"
              className={`px-2.5 py-1 rounded-full transition-all ${
                locale === 'es'
                  ? 'bg-[#121316] text-[#FDFCFB] shadow-xs font-semibold'
                  : 'text-[#1E2024]/70 hover:text-[#121316]'
              }`}
            >
              ES
            </Link>
            <Link
              href={pathname}
              locale="en"
              className={`px-2.5 py-1 rounded-full transition-all ${
                locale === 'en'
                  ? 'bg-[#121316] text-[#FDFCFB] shadow-xs font-semibold'
                  : 'text-[#1E2024]/70 hover:text-[#121316]'
              }`}
            >
              EN
            </Link>
          </div>

          {/* Direct WhatsApp CTA Button */}
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#121316] text-[#FDFCFB] text-xs font-semibold tracking-wide hover:bg-[#C5A880] transition-all duration-300 shadow-sm touch-target-min"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>{t('cta')}</span>
            <ArrowUpRight className="w-3 h-3 opacity-60" />
          </a>
        </div>

        {/* Mobile Hamburger & Lang Switcher */}
        <div className="flex items-center gap-2 lg:hidden">
          {/* Mobile Language Switcher */}
          <div className="flex items-center bg-[#FAF9F6] border border-[#121316]/8 rounded-full p-0.5 text-xs font-semibold">
            <Link
              href={pathname}
              locale="es"
              className={`px-2 py-0.5 rounded-full text-[11px] ${
                locale === 'es' ? 'bg-[#121316] text-[#FDFCFB]' : 'text-[#1E2024]/70'
              }`}
            >
              ES
            </Link>
            <Link
              href={pathname}
              locale="en"
              className={`px-2 py-0.5 rounded-full text-[11px] ${
                locale === 'en' ? 'bg-[#121316] text-[#FDFCFB]' : 'text-[#1E2024]/70'
              }`}
            >
              EN
            </Link>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-[#121316] hover:bg-[#FAF9F6] transition-colors touch-target-min flex items-center justify-center"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FDFCFB] border-b border-[#121316]/10 px-5 pt-3 pb-6 space-y-4 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-3 font-medium text-[#121316]">
            <a
              href="#espacios"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-3 rounded-lg hover:bg-[#FAF9F6] transition-colors"
            >
              {t('links.spaces')}
            </a>
            <a
              href="#comparativa"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-3 rounded-lg hover:bg-[#FAF9F6] transition-colors"
            >
              {t('links.comparison')}
            </a>
            <a
              href="#capacidades"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-3 rounded-lg hover:bg-[#FAF9F6] transition-colors"
            >
              {t('links.features')}
            </a>
            <a
              href="#contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-3 rounded-lg hover:bg-[#FAF9F6] transition-colors"
            >
              {t('links.contact')}
            </a>
          </div>

          <div className="pt-3 border-t border-[#121316]/8">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2.5 w-full py-3.5 px-4 rounded-xl bg-[#121316] text-[#FDFCFB] font-semibold text-sm shadow-md hover:bg-[#C5A880] transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#D4AF37]" />
              <span>{t('cta')}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
