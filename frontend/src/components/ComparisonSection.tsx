'use client';

import { useTranslations } from 'next-intl';
import { AlertCircle, CheckCircle2, XCircle, Sparkles, ArrowRight } from 'lucide-react';

export default function ComparisonSection() {
  const t = useTranslations('Comparison');

  const rows = [0, 1, 2, 3, 4].map((i) => ({
    criterion: t(`rows.${i}.criterion`),
    generic: t(`rows.${i}.generic`),
    abstergo: t(`rows.${i}.abstergo`),
  }));

  return (
    <section id="comparativa" className="py-20 md:py-32 bg-[#FDFCFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF9F6] border border-[#C5A880]/30 shadow-xs mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C5A880]"></span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1E2024]/90">
              {t('badge')}
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#121316] tracking-tight mb-4">
            {t('title')}
          </h2>
          <p className="font-sans text-base md:text-lg text-[#1E2024]/75 font-light leading-relaxed">
            {t('subtitle')}
          </p>
        </div>

        {/* Comparison Matrix Table */}
        <div className="rounded-3xl border border-[#121316]/6 bg-[#FAF9F6] p-4 sm:p-8 md:p-10 ambient-shadow">
          {/* Table Header (Desktop) */}
          <div className="hidden lg:grid lg:grid-cols-12 gap-6 pb-6 border-b border-[#121316]/8 font-serif text-sm font-bold text-[#121316]">
            <div className="col-span-4 uppercase tracking-wider text-[#1E2024]/60 text-xs font-sans">
              Parámetro de Conversión
            </div>
            <div className="col-span-4 text-red-800 flex items-center gap-2">
              <XCircle className="w-4 h-4 text-red-500" />
              <span>{t('genericCol')}</span>
            </div>
            <div className="col-span-4 text-[#0D9488] flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#0D9488]" />
              <span>{t('abstergoCol')}</span>
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-[#121316]/6">
            {rows.map((row, idx) => (
              <div
                key={idx}
                className="py-6 lg:py-7 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-start"
              >
                {/* Criterion Title */}
                <div className="lg:col-span-4">
                  <span className="text-xs font-bold text-[#C5A880] uppercase tracking-wider block mb-1 lg:hidden">
                    Parámetro {idx + 1}
                  </span>
                  <h3 className="font-serif text-base sm:text-lg font-bold text-[#121316]">
                    {row.criterion}
                  </h3>
                </div>

                {/* Generic WordPress Site */}
                <div className="lg:col-span-4 p-4 rounded-xl bg-red-50/50 border border-red-100 lg:bg-transparent lg:border-none lg:p-0">
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#1E2024]/75 leading-relaxed">
                    <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <span>{row.generic}</span>
                  </div>
                </div>

                {/* Abstergo Solution */}
                <div className="lg:col-span-4 p-4 rounded-xl bg-[#0D9488]/5 border border-[#0D9488]/20 lg:bg-transparent lg:border-none lg:p-0">
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#121316] font-medium leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-[#0D9488] shrink-0 mt-0.5" />
                    <span>{row.abstergo}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Summary Banner */}
          <div className="mt-8 pt-8 border-t border-[#121316]/8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-xs text-[#1E2024]/75">
              <Sparkles className="w-4 h-4 text-[#D4AF37] shrink-0" />
              <span>
                El 85% de tus pacientes te conocen por primera vez desde el navegador integrado de Instagram o Facebook.
              </span>
            </div>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#121316] hover:text-[#C5A880] transition-colors whitespace-nowrap"
            >
              <span>Auditar el sitio web de mi clínica</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
