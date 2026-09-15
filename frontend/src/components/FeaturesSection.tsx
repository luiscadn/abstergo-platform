'use client';

import { useTranslations } from 'next-intl';
import {
  MessageSquare,
  FileCheck2,
  Gauge,
  Globe2,
  Image,
  CalendarCheck,
  ArrowUpRight,
  ShieldCheck
} from 'lucide-react';

export default function FeaturesSection() {
  const t = useTranslations('Features');

  const icons = [
    <MessageSquare key="0" className="w-6 h-6 text-[#0D9488]" />,
    <FileCheck2 key="1" className="w-6 h-6 text-[#C5A880]" />,
    <Gauge key="2" className="w-6 h-6 text-[#D4AF37]" />,
    <Globe2 key="3" className="w-6 h-6 text-[#0D9488]" />,
    <Image key="4" className="w-6 h-6 text-[#C5A880]" />,
    <CalendarCheck key="5" className="w-6 h-6 text-[#121316]" />,
  ];

  const features = [0, 1, 2, 3, 4, 5].map((i) => ({
    title: t(`items.${i}.title`),
    desc: t(`items.${i}.desc`),
    tag: t(`items.${i}.tag`),
    icon: icons[i],
  }));

  return (
    <section id="capacidades" className="py-20 md:py-32 bg-[#FAF9F6] border-y border-[#121316]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FDFCFB] border border-[#C5A880]/30 shadow-xs mb-4">
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

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#FDFCFB] rounded-3xl border border-[#121316]/6 p-8 ambient-shadow hover:border-[#C5A880]/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#FAF9F6] border border-[#121316]/6 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {item.icon}
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-[#FAF9F6] border border-[#121316]/5 text-[#1E2024]/70">
                    {item.tag}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-[#121316] mb-3 group-hover:text-[#C5A880] transition-colors">
                  {item.title}
                </h3>

                <p className="font-sans text-sm text-[#1E2024]/75 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#121316]/4 flex items-center justify-between text-xs font-semibold text-[#121316]">
                <span className="text-[11px] text-[#1E2024]/50">Módulo Estándar</span>
                <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#C5A880]" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Security & Health Compliance Note */}
        <div className="mt-12 p-6 rounded-2xl bg-[#FDFCFB] border border-[#121316]/6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#1E2024]/70 max-w-4xl mx-auto">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-[#0D9488] shrink-0" />
            <span>
              Arquitectura desarrollada cumpliendo con normativas de protección de datos de pacientes, consentimiento de fotografía clínica y cifrado de extremo a extremo.
            </span>
          </div>
          <span className="font-bold text-[#121316] uppercase tracking-wider text-[10px] shrink-0 bg-[#FAF9F6] px-3 py-1.5 rounded-full border border-[#121316]/5">
            Grado Quirúrgico
          </span>
        </div>
      </div>
    </section>
  );
}
