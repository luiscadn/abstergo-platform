'use client';

import { useTranslations, useLocale } from 'next-intl';
import { useUtmTracking } from '@/hooks/useUtmTracking';
import { MessageCircle, ArrowUpRight } from 'lucide-react';

export default function MobileStickyCTA() {
  const t = useTranslations('StickyMobile');
  const locale = useLocale();
  const { buildWhatsAppUrl } = useUtmTracking();

  const whatsappMessage =
    locale === 'es'
      ? 'Hola, quiero consultar por WhatsApp sobre una auditoría web para mi clínica estética.'
      : 'Hello, I want to inquire via WhatsApp regarding a web audit for my aesthetic practice.';

  const whatsappHref = buildWhatsAppUrl(whatsappMessage);

  return (
    <aside
      aria-label="Contacto rápido para móviles"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] bg-gradient-to-t from-[#FDFCFB] via-[#FDFCFB]/95 to-transparent pointer-events-none"
    >
      <div className="max-w-md mx-auto pointer-events-auto">
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between gap-3 w-full py-3.5 px-5 rounded-2xl bg-[#121316] text-[#FDFCFB] shadow-2xl border border-white/10 hover:bg-[#C5A880] transition-all duration-300 touch-target-min active:scale-[0.98]"
        >
          {/* Status and Text */}
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0D9488] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#0D9488]"></span>
            </span>
            <div className="flex flex-col text-left">
              <span className="font-serif text-sm font-bold tracking-wide leading-tight text-white">
                {t('cta')}
              </span>
              <span className="text-[10px] text-[#C5A880] font-sans">
                {t('subtext')}
              </span>
            </div>
          </div>

          {/* Action Icon */}
          <div className="flex items-center gap-1 bg-white/10 px-3 py-1.5 rounded-xl text-xs font-semibold text-[#D4AF37]">
            <MessageCircle className="w-4 h-4 text-[#D4AF37]" />
            <ArrowUpRight className="w-3.5 h-3.5 text-white/70" />
          </div>
        </a>
      </div>
    </aside>
  );
}
