'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import {
  Sparkles,
  ArrowUpRight,
  CheckCircle,
  ExternalLink,
  ChevronRight,
  Sliders,
  Smartphone,
  Check,
  X,
  Building2,
  Camera
} from 'lucide-react';

export default function PortfolioShowcase() {
  const t = useTranslations('Portfolio');
  const [sliderPosition, setSliderPosition] = useState(50);
  const [activeTab, setActiveTab] = useState<'dr-arteaga' | 'letoile' | 'aura'>('dr-arteaga');

  const cases = [
    {
      id: 'dr-arteaga',
      doctor: t('items.0.doctor'),
      specialty: t('items.0.specialty'),
      location: t('items.0.location'),
      impact: t('items.0.impact'),
      metric: t('items.0.metric'),
      description: t('items.0.description'),
      tags: ['Cirugía Facial', 'Rinoplastia', 'Turismo Médico'],
      image: '/images/consultorio-nivel1.webp',
      facilityName: 'Consultorio VIP de Triaje & Valoración',
      facilityTier: 'Nivel 1 • Consulta Médica',
      mockupHeader: 'Dr. Arteaga Plastic Surgery',
      stats: [
        { label: 'Tiempo de Carga Móvil', value: '0.8s' },
        { label: 'Conversión en Instagram', value: '6.4%' },
        { label: 'Filtro Pre-Quirúrgico', value: '100% Activo' }
      ]
    },
    {
      id: 'letoile',
      doctor: t('items.1.doctor'),
      specialty: t('items.1.specialty'),
      location: t('items.1.location'),
      impact: t('items.1.impact'),
      metric: t('items.1.metric'),
      description: t('items.1.description'),
      tags: ['Dermatología Clínica', 'Láser CO2', 'Triaje Guiado'],
      image: '/images/clinica-nivel3.webp',
      facilityName: 'Cabina Especializada de Dermatología & Láser',
      facilityTier: 'Nivel 3 • Procedimientos',
      mockupHeader: "L'Étoile Dermatology Hub",
      stats: [
        { label: 'Tiempo de Carga Móvil', value: '0.7s' },
        { label: 'Asistencia a Citas', value: '97.6%' },
        { label: 'ROI en Meta Ads', value: '4.2x' }
      ]
    },
    {
      id: 'aura',
      doctor: t('items.2.doctor'),
      specialty: t('items.2.specialty'),
      location: t('items.2.location'),
      impact: t('items.2.impact'),
      metric: t('items.2.metric'),
      description: t('items.2.description'),
      tags: ['Armonización', 'Bioestimuladores', 'Conserjería VIP'],
      image: '/images/ttt.webp',
      facilityName: 'Suite Privada de Armonización & Spa Médico',
      facilityTier: 'High-End • Luxury Suite',
      mockupHeader: 'Aura Institute Medellín',
      stats: [
        { label: 'Tiempo de Carga Móvil', value: '0.9s' },
        { label: 'Ticket Promedio', value: '+35%' },
        { label: 'Agendamiento WhatsApp', value: 'Instantáneo' }
      ]
    }
  ];

  const currentCase = cases.find((c) => c.id === activeTab) || cases[0];

  return (
    <section id="casos" className="py-20 md:py-32 bg-[#FAF9F6] border-y border-[#121316]/5">
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

        {/* Case Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-12">
          {cases.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveTab(c.id as any)}
              className={`px-5 py-3 rounded-full text-xs md:text-sm font-medium transition-all duration-300 touch-target-min flex items-center gap-2 ${
                activeTab === c.id
                  ? 'bg-[#121316] text-[#FDFCFB] shadow-sm'
                  : 'bg-[#FDFCFB] text-[#1E2024]/70 hover:text-[#121316] border border-[#121316]/6'
              }`}
            >
              <span>{c.doctor}</span>
              <span className={`text-[10px] px-2 py-0.5 rounded-full ${activeTab === c.id ? 'bg-[#C5A880] text-[#121316]' : 'bg-[#FAF9F6] text-[#1E2024]/60'}`}>
                {c.location.split('&')[0].trim()}
              </span>
            </button>
          ))}
        </div>

        {/* Active Case Spotlight Card */}
        <div className="bg-[#FDFCFB] rounded-3xl border border-[#121316]/6 p-6 sm:p-8 md:p-12 ambient-shadow mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex flex-wrap gap-2">
                {currentCase.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-md bg-[#FAF9F6] border border-[#121316]/5 text-xs text-[#1E2024]/80 font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#121316] mb-2">
                  {currentCase.doctor}
                </h3>
                <p className="text-sm font-medium text-[#C5A880] tracking-wide">
                  {currentCase.specialty} • {currentCase.location}
                </p>
              </div>

              <p className="font-sans text-base text-[#1E2024]/80 leading-relaxed font-light">
                {currentCase.description}
              </p>

              {/* Verified Impact Highlight */}
              <div className="p-4 rounded-2xl bg-[#FAF9F6] border-l-4 border-l-[#0D9488] border border-[#121316]/5">
                <div className="text-xs font-semibold text-[#0D9488] uppercase tracking-wider mb-1">
                  Resultado Clínico Validado
                </div>
                <div className="text-lg font-bold text-[#121316]">
                  {currentCase.impact}
                </div>
                <div className="text-xs text-[#1E2024]/70 mt-0.5">
                  {currentCase.metric}
                </div>
              </div>

              {/* Verified Clinical Facility Photo Preview */}
              <div className="relative rounded-2xl overflow-hidden border border-[#121316]/8 shadow-xs group/facility">
                <div className="relative h-44 w-full bg-[#121316]/5">
                  <Image
                    src={currentCase.image}
                    alt={currentCase.facilityName}
                    fill
                    className="object-cover group-hover/facility:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121316]/85 via-[#121316]/20 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full bg-[#FDFCFB]/95 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider text-[#121316] border border-white/40 shadow-xs flex items-center gap-1.5">
                      <Building2 className="w-3 h-3 text-[#C5A880]" />
                      {currentCase.facilityTier}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <div className="text-sm font-bold font-serif">{currentCase.facilityName}</div>
                    <div className="text-[11px] text-white/80 mt-0.5 flex items-center gap-1.5">
                      <CheckCircle className="w-3.5 h-3.5 text-[#0D9488]" />
                      <span>Instalaciones integradas en la arquitectura web</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                {currentCase.stats.map((stat, i) => (
                  <div key={i} className="p-3 rounded-xl bg-[#FAF9F6] text-center border border-[#121316]/4">
                    <div className="font-serif text-lg font-bold text-[#121316]">{stat.value}</div>
                    <div className="text-[10px] text-[#1E2024]/60 font-medium mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Device Simulation Mockup */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="w-full max-w-[340px] sm:max-w-[380px] rounded-[36px] bg-[#121316] p-3 shadow-2xl border border-[#121316]/20">
                {/* Mobile Screen Shell */}
                <div className="relative rounded-[28px] bg-[#FDFCFB] overflow-hidden border border-[#121316]/10 min-h-[540px] flex flex-col justify-between p-4 text-[#121316]">
                  {/* Fake Top Bar */}
                  <div>
                    <div className="flex justify-between items-center pb-2.5 border-b border-[#121316]/5 text-xs">
                      <span className="font-serif font-bold text-xs tracking-wider truncate mr-2">{currentCase.mockupHeader}</span>
                      <span className="flex items-center gap-1 text-[10px] font-semibold text-[#0D9488] shrink-0">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#0D9488] animate-pulse"></span>
                        Citas Abiertas
                      </span>
                    </div>

                    {/* Clinic Mini Header Banner */}
                    <div className="relative h-24 w-full rounded-xl overflow-hidden mt-3 border border-[#121316]/8 shadow-xs">
                      <Image
                        src={currentCase.image}
                        alt={currentCase.facilityName}
                        fill
                        className="object-cover"
                        sizes="340px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#121316]/80 via-transparent to-transparent" />
                      <div className="absolute bottom-2 left-2.5 right-2.5 flex justify-between items-end text-white">
                        <span className="text-[11px] font-semibold truncate">{currentCase.doctor}</span>
                        <span className="text-[9px] bg-[#C5A880] text-[#121316] font-bold px-2 py-0.5 rounded shadow-xs">
                          {currentCase.location.split('&')[0].trim()}
                        </span>
                      </div>
                    </div>

                    {/* Patient Triage Simulation Card */}
                    <div className="mt-3 p-3 rounded-xl bg-[#FAF9F6] border border-[#121316]/6">
                      <div className="text-[10px] font-semibold text-[#1E2024] uppercase tracking-wider mb-1.5">
                        Paso 1 de 2: Procedimiento de Interés
                      </div>
                      <div className="space-y-1.5">
                        <div className="p-2 rounded-lg bg-[#FDFCFB] border border-[#C5A880] text-xs font-medium flex items-center justify-between shadow-xs">
                          <span className="truncate">{currentCase.specialty.split('&')[0]}</span>
                          <Check className="w-3.5 h-3.5 text-[#0D9488] shrink-0" />
                        </div>
                        <div className="p-2 rounded-lg bg-[#FDFCFB] border border-[#121316]/5 text-xs text-[#1E2024]/60 flex items-center justify-between">
                          <span>Triaje Fotográfico Confidencial</span>
                          <span className="text-[9px] text-[#C5A880] font-bold">Activo</span>
                        </div>
                      </div>
                    </div>

                    {/* Verified Clinical Facilities Card */}
                    <div className="mt-2.5 p-2.5 rounded-xl bg-[#FAF9F6] border border-[#121316]/6">
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-[10px] font-semibold text-[#1E2024]">Instalaciones del Consultorio</span>
                        <span className="text-[9px] text-[#0D9488] font-bold">Certificado</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="relative h-14 rounded-lg overflow-hidden border border-[#121316]/10">
                          <Image src="/images/consultorio-nivel1.webp" alt="Consulta" fill className="object-cover" sizes="120px" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-1">
                            <span className="text-[9px] text-white font-medium">Consulta VIP</span>
                          </div>
                        </div>
                        <div className="relative h-14 rounded-lg overflow-hidden border border-[#121316]/10">
                          <Image src="/images/clinica-nivel3.webp" alt="Procedimiento" fill className="object-cover" sizes="120px" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-1">
                            <span className="text-[9px] text-white font-medium">Cabina Quirúrgica</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Simulated Thumb CTA Button */}
                  <div className="pt-3 border-t border-[#121316]/5">
                    <button className="w-full py-2.5 px-4 rounded-xl bg-[#121316] text-[#FDFCFB] text-xs font-bold flex items-center justify-center gap-2 shadow-md">
                      <span>Agendar por WhatsApp en 1 Clic</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#D4AF37]" />
                    </button>
                    <p className="text-center text-[9px] text-[#1E2024]/50 mt-1">
                      Respuesta coordinada en horario de consulta
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Before vs After Comparison Demonstration */}
        <div className="bg-[#FDFCFB] rounded-3xl border border-[#121316]/6 p-6 sm:p-8 md:p-10 ambient-shadow">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-semibold text-[#C5A880] uppercase tracking-wider block mb-1">
              {t('interactivePreview.title')}
            </span>
            <p className="text-sm text-[#1E2024]/75 font-light">
              {t('interactivePreview.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Generic WordPress Site */}
            <div className="p-6 rounded-2xl bg-[#FAF9F6] border border-red-200/60 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-red-700 bg-red-50 px-3 py-1 rounded-full border border-red-200">
                    <X className="w-3.5 h-3.5" />
                    {t('interactivePreview.beforeLabel')}
                  </span>
                  <span className="text-xs font-mono text-red-600 font-semibold">Carga: 7.8s</span>
                </div>
                <p className="text-sm text-[#1E2024]/80 leading-relaxed mb-4 font-light">
                  {t('interactivePreview.beforeDesc')}
                </p>
              </div>

              <div className="space-y-2 pt-4 border-t border-red-200/40 text-xs text-[#1E2024]/70">
                <div className="flex items-center gap-2 text-red-600">
                  <X className="w-3.5 h-3.5 shrink-0" />
                  <span>El 73% de usuarios abandona en Instagram</span>
                </div>
                <div className="flex items-center gap-2 text-red-600">
                  <X className="w-3.5 h-3.5 shrink-0" />
                  <span>Mensajes de WhatsApp sin filtro de presupuesto</span>
                </div>
              </div>
            </div>

            {/* Abstergo Clinical Architecture */}
            <div className="p-6 rounded-2xl bg-[#FAF9F6] border border-[#0D9488]/40 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0D9488] bg-[#0D9488]/10 px-3 py-1 rounded-full border border-[#0D9488]/20">
                    <Check className="w-3.5 h-3.5" />
                    {t('interactivePreview.afterLabel')}
                  </span>
                  <span className="text-xs font-mono text-[#0D9488] font-semibold">Carga: 0.8s</span>
                </div>
                <p className="text-sm text-[#1E2024]/90 leading-relaxed mb-4 font-normal">
                  {t('interactivePreview.afterDesc')}
                </p>
              </div>

              <div className="space-y-2 pt-4 border-t border-[#0D9488]/20 text-xs text-[#1E2024]/80">
                <div className="flex items-center gap-2 text-[#0D9488]">
                  <Check className="w-3.5 h-3.5 shrink-0" />
                  <span>Retención del 94% en tráfico Meta Ads</span>
                </div>
                <div className="flex items-center gap-2 text-[#0D9488]">
                  <Check className="w-3.5 h-3.5 shrink-0" />
                  <span>Paciente calificado con tratamiento y presupuesto</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
