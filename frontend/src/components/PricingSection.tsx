'use client';

import { useUtmTracking } from '@/hooks/useUtmTracking';
import { handleWhatsAppCtaClick } from '@/lib/pixel';
import { MessageCircle, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function PricingSection() {
  const { buildWhatsAppUrl } = useUtmTracking();
  const whatsappHref = buildWhatsAppUrl();

  const handleCtaClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    handleWhatsAppCtaClick(e, 'precio', 'patient');
  };

  return (
    <section id="precio" className="py-20 md:py-28 bg-[#FAF9F6] border-y border-[#121316]/6">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FDFCFB] border border-[#C5A880]/30 shadow-xs mb-4">
          <span className="h-1.5 w-1.5 rounded-full bg-[#C5A880]"></span>
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1E2024]/90">
            Transparencia total
          </span>
        </div>

        {/* H2 con precio estimado para turismo dental */}
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#121316] tracking-tight mb-5 leading-tight">
          Diseño de sonrisa desde $1,400 USD
        </h2>

        {/* Texto exacto */}
        <p className="font-sans text-base sm:text-lg md:text-xl text-[#1E2024]/80 max-w-2xl mx-auto leading-relaxed mb-8 font-normal">
          Precio cerrado, sin sorpresas. Te enviamos la cotización completa por WhatsApp después de tu valoración virtual.
        </p>

        {/* Features Checklist */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-[#1E2024]/80 mb-10">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#0D9488]" />
            <span>Sin cobros ocultos al llegar</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#0D9488]" />
            <span>Valoración virtual previa</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#0D9488]" />
            <span>Cotización cerrada todo incluido</span>
          </div>
        </div>

        {/* CTA Button */}
        <div>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            data-cta="precio"
            onClick={handleCtaClick}
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#121316] text-[#FDFCFB] font-semibold text-sm sm:text-base tracking-wide shadow-md hover:bg-[#C5A880] hover:text-[#121316] transition-all duration-300 touch-target-min group cursor-pointer"
          >
            <MessageCircle className="w-5 h-5 text-[#D4AF37] group-hover:scale-110 transition-transform" />
            <span>Quiero mi cotización</span>
            <ArrowRight className="w-4 h-4 opacity-70 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
