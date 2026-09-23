'use client';

import { useUtmTracking } from '@/hooks/useUtmTracking';
import { handleWhatsAppCtaClick } from '@/lib/pixel';
import { MessageCircle, ArrowRight } from 'lucide-react';

export default function FinalCtaSection() {
  const { buildWhatsAppUrl } = useUtmTracking();
  const whatsappHref = buildWhatsAppUrl();

  const handleCtaClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    handleWhatsAppCtaClick(e, 'final', 'patient');
  };

  return (
    <section className="py-20 md:py-28 bg-[#121316] text-[#FDFCFB] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-[#C5A880]/15 via-[#0D9488]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-8 leading-tight text-white">
          Cuéntanos qué necesitas y te respondemos hoy.
        </h2>

        <div>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            data-cta="final"
            onClick={handleCtaClick}
            className="inline-flex items-center justify-center gap-3 px-8 py-4 sm:px-10 sm:py-5 rounded-full bg-[#C5A880] text-[#121316] font-bold text-base sm:text-lg hover:bg-[#D4AF37] transition-all duration-300 shadow-xl touch-target-min group cursor-pointer"
          >
            <MessageCircle className="w-6 h-6 text-[#121316] group-hover:scale-110 transition-transform" />
            <span>Escríbenos por WhatsApp</span>
            <ArrowRight className="w-5 h-5 text-[#121316] group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
