'use client';

import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import { useUtmTracking } from '@/hooks/useUtmTracking';
import {
  MessageCircle,
  ArrowRight,
  Shield,
  Zap,
  CheckCircle2,
  TrendingUp,
  Sparkles,
  Award,
  Smartphone,
  Building2
} from 'lucide-react';

export default function HeroSection() {
  const t = useTranslations('Hero');
  const locale = useLocale();
  const { buildWhatsAppUrl } = useUtmTracking();

  const whatsappMessage =
    locale === 'es'
      ? 'Hola, vi la propuesta de Abstergo y me gustaría solicitar una auditoría de conversión para nuestra clínica estética.'
      : 'Hello, I saw Abstergo and would like to request a conversion audit for our aesthetic practice.';

  const whatsappHref = buildWhatsAppUrl(whatsappMessage);

  return (
    <section className="relative min-h-dvh pt-28 pb-16 md:pt-36 md:pb-24 flex flex-col justify-center overflow-hidden bg-[#FDFCFB]">
      {/* High-Definition Luxury Architectural Background */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* High-definition aesthetic clinic visual, attenuated for editorial luxury */}
        <Image
          src="/images/luxury-consultorio.jpg"
          alt="Instalaciones de medicina estética y cirugía plástica de alta gama"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-25 md:opacity-30 mix-blend-multiply scale-[1.02]"
        />

        {/* Luxury Vignette & Multilayer Scrims for Flawless Typography Legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FDFCFB] via-[#FDFCFB]/70 to-[#FDFCFB]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#FDFCFB]/92 via-[#FDFCFB]/65 to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[380px] bg-gradient-to-b from-[#C5A880]/15 via-transparent to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Magnetic Headline */}
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-[64px] font-bold text-[#121316] tracking-tight leading-[1.12] mb-6 pt-2 md:pt-4">
            {t('title')}
          </h1>

          {/* Authoritative Subtitle */}
          <p className="font-sans text-base sm:text-lg md:text-xl text-[#1E2024]/80 max-w-2xl mx-auto leading-relaxed mb-8 md:mb-10 font-light">
            {t('subtitle')}
          </p>

          {/* Dual Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-10 md:mb-14">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#121316] text-[#FDFCFB] font-semibold text-sm sm:text-base tracking-wide shadow-md hover:bg-[#C5A880] hover:shadow-lg transition-all duration-300 touch-target-min group"
            >
              <MessageCircle className="w-5 h-5 text-[#D4AF37] group-hover:scale-110 transition-transform" />
              <span>{t('ctaWhatsApp')}</span>
              <ArrowRight className="w-4 h-4 opacity-70 group-hover:translate-x-0.5 transition-transform" />
            </a>

            <a
              href="#espacios"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#FAF9F6] text-[#121316] font-medium text-sm sm:text-base border border-[#121316]/10 hover:border-[#121316]/30 hover:bg-[#F8F9FA] transition-all duration-300 touch-target-min"
            >
              <span>{t('ctaPortfolio')}</span>
            </a>
          </div>

          {/* Trust Note */}
          <div className="flex items-center gap-2 text-xs text-[#1E2024]/60 mb-12">
            <Shield className="w-3.5 h-3.5 text-[#0D9488]" />
            <span>{t('trustNote')}</span>
          </div>

          {/* Micro-Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 w-full max-w-4xl text-left">
            <div className="p-4 md:p-5 rounded-2xl bg-[#FAF9F6] border border-[#121316]/6 shadow-xs hover:border-[#C5A880]/40 transition-colors">
              <div className="flex items-center gap-2 mb-1">
                <TrendingUp className="w-4 h-4 text-[#0D9488]" />
                <span className="font-serif text-2xl md:text-3xl font-bold text-[#121316]">
                  {t('metrics.metric1.value')}
                </span>
              </div>
              <p className="text-xs font-semibold text-[#121316]">
                {t('metrics.metric1.label')}
              </p>
              <p className="text-[11px] text-[#1E2024]/60 mt-0.5">
                {t('metrics.metric1.detail')}
              </p>
            </div>

            <div className="p-4 md:p-5 rounded-2xl bg-[#FAF9F6] border border-[#121316]/6 shadow-xs hover:border-[#C5A880]/40 transition-colors">
              <div className="flex items-center gap-2 mb-1">
                <Zap className="w-4 h-4 text-[#D4AF37]" />
                <span className="font-serif text-2xl md:text-3xl font-bold text-[#121316]">
                  {t('metrics.metric2.value')}
                </span>
              </div>
              <p className="text-xs font-semibold text-[#121316]">
                {t('metrics.metric2.label')}
              </p>
              <p className="text-[11px] text-[#1E2024]/60 mt-0.5">
                {t('metrics.metric2.detail')}
              </p>
            </div>

            <div className="p-4 md:p-5 rounded-2xl bg-[#FAF9F6] border border-[#121316]/6 shadow-xs hover:border-[#C5A880]/40 transition-colors">
              <div className="flex items-center gap-2 mb-1">
                <CheckCircle2 className="w-4 h-4 text-[#0D9488]" />
                <span className="font-serif text-2xl md:text-3xl font-bold text-[#121316]">
                  {t('metrics.metric3.value')}
                </span>
              </div>
              <p className="text-xs font-semibold text-[#121316]">
                {t('metrics.metric3.label')}
              </p>
              <p className="text-[11px] text-[#1E2024]/60 mt-0.5">
                {t('metrics.metric3.detail')}
              </p>
            </div>

            <div className="p-4 md:p-5 rounded-2xl bg-[#FAF9F6] border border-[#121316]/6 shadow-xs hover:border-[#C5A880]/40 transition-colors">
              <div className="flex items-center gap-2 mb-1">
                <Award className="w-4 h-4 text-[#C5A880]" />
                <span className="font-serif text-2xl md:text-3xl font-bold text-[#121316]">
                  {t('metrics.metric4.value')}
                </span>
              </div>
              <p className="text-xs font-semibold text-[#121316]">
                {t('metrics.metric4.label')}
              </p>
              <p className="text-[11px] text-[#1E2024]/60 mt-0.5">
                {t('metrics.metric4.detail')}
              </p>
            </div>
          </div>

          {/* Visual Showcase Preview of Real Clinical Suites */}
          <div className="mt-14 md:mt-16 w-full max-w-5xl">
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C5A880]"></span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#1E2024]/70">
                Arquitectura Web Implementada en Instalaciones de Alta Complejidad
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Card 1 */}
              <div className="group relative rounded-2xl overflow-hidden border border-[#121316]/8 shadow-xs bg-[#FAF9F6]">
                <div className="relative h-48 sm:h-52 w-full">
                  <Image
                    src="/images/consultorio-nivel1.webp"
                    alt="Consultorio Nivel 1"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, 33vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121316]/85 via-[#121316]/20 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full bg-[#FDFCFB]/90 backdrop-blur-md text-[9px] font-bold uppercase tracking-wider text-[#121316] border border-white/40 shadow-xs flex items-center gap-1">
                      <Building2 className="w-3 h-3 text-[#C5A880]" />
                      Nivel 1 • Consulta Médica
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 text-left text-white">
                    <h4 className="font-serif font-bold text-sm leading-tight">Consultorio de Triaje & Valoración</h4>
                    <p className="text-[10px] text-white/75 mt-0.5">Captación y diagnóstico guiado</p>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="group relative rounded-2xl overflow-hidden border border-[#121316]/8 shadow-xs bg-[#FAF9F6]">
                <div className="relative h-48 sm:h-52 w-full">
                  <Image
                    src="/images/clinica-nivel3.webp"
                    alt="Cabina Nivel 3"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, 33vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121316]/85 via-[#121316]/20 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full bg-[#FDFCFB]/90 backdrop-blur-md text-[9px] font-bold uppercase tracking-wider text-[#121316] border border-white/40 shadow-xs flex items-center gap-1">
                      <Building2 className="w-3 h-3 text-[#C5A880]" />
                      Nivel 3 • Procedimientos
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 text-left text-white">
                    <h4 className="font-serif font-bold text-sm leading-tight">Cabina Dermatológica & Láser</h4>
                    <p className="text-[10px] text-white/75 mt-0.5">Asepsia de grado quirúrgico</p>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="group relative rounded-2xl overflow-hidden border border-[#121316]/8 shadow-xs bg-[#FAF9F6]">
                <div className="relative h-48 sm:h-52 w-full">
                  <Image
                    src="/images/ttt.webp"
                    alt="Suite Estética de Lujo"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, 33vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121316]/85 via-[#121316]/20 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full bg-[#FDFCFB]/90 backdrop-blur-md text-[9px] font-bold uppercase tracking-wider text-[#121316] border border-white/40 shadow-xs flex items-center gap-1">
                      <Building2 className="w-3 h-3 text-[#C5A880]" />
                      High-End • Luxury Suite
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 text-left text-white">
                    <h4 className="font-serif font-bold text-sm leading-tight">Suite de Armonización & Spa</h4>
                    <p className="text-[10px] text-white/75 mt-0.5">Tickets de $3,000 - $8,000 USD</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
