'use client';

import { useTranslations } from 'next-intl';
import { Shield, Lock, Zap, CheckCircle2 } from 'lucide-react';

export default function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer className="w-full bg-[#121316] text-[#FAF9F6] pt-16 pb-24 md:pb-16 border-t border-[#121316]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-white/10">
          {/* Brand & Manifesto */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#FAF9F6] text-[#121316] flex items-center justify-center font-serif text-lg font-bold">
                A
              </div>
              <span className="font-serif text-xl tracking-[0.2em] font-semibold text-[#FAF9F6]">
                {t('brand')}
              </span>
            </div>
            <p className="font-sans text-xs sm:text-sm text-[#FAF9F6]/70 max-w-md font-light leading-relaxed">
              {t('desc')}
            </p>
            <div className="text-xs text-[#C5A880] font-medium pt-2">
              {t('city')}
            </div>
          </div>

          {/* Clinical Standards Checklist */}
          <div className="md:col-span-6 space-y-4">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-[#C5A880]">
              {t('standards')}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#FAF9F6]/80">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0D9488] shrink-0" />
                <span>{t('standardsList.0')}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0D9488] shrink-0" />
                <span>{t('standardsList.1')}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0D9488] shrink-0" />
                <span>{t('standardsList.2')}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0D9488] shrink-0" />
                <span>{t('standardsList.3')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FAF9F6]/50">
          <p>{t('copyright')}</p>
          <div className="flex items-center gap-6">
            <a href="#contacto" className="hover:text-[#FAF9F6] transition-colors">
              Auditoría Confidencial
            </a>
            <span className="inline-block w-1 h-1 rounded-full bg-white/20" />
          </div>
        </div>
      </div>
    </footer>
  );
}
