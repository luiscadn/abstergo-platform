'use client';

import { useUtmTracking } from '@/hooks/useUtmTracking';
import { handleWhatsAppCtaClick } from '@/lib/pixel';
import { MessageCircle } from 'lucide-react';

export default function MobileStickyCTA() {
  const { buildWhatsAppUrl } = useUtmTracking();
  const whatsappHref = buildWhatsAppUrl();

  const handleCtaClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    handleWhatsAppCtaClick(e, 'floating-mobile', 'patient');
  };

  return (
    <aside
      aria-label="Contacto por WhatsApp"
      className="md:hidden fixed bottom-5 right-5 z-50 pointer-events-auto"
    >
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        data-cta="floating-mobile"
        onClick={handleCtaClick}
        aria-label="Cotiza por WhatsApp"
        className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#121316] text-[#FDFCFB] shadow-2xl border border-white/20 hover:bg-[#C5A880] hover:text-[#121316] active:scale-95 transition-all duration-300 touch-target-min"
      >
        <span className="relative flex h-3 w-3 shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0D9488] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-[#0D9488]"></span>
        </span>
        <MessageCircle className="w-5 h-5 text-[#D4AF37]" />
        <span className="font-serif text-sm font-bold tracking-wide">
          Cotiza por WhatsApp
        </span>
      </a>
    </aside>
  );
}
