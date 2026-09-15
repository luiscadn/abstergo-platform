'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import { useUtmTracking } from '@/hooks/useUtmTracking';
import {
  ShieldCheck,
  Sparkles,
  Maximize2,
  X,
  ArrowRight,
  CheckCircle2,
  Building2,
  MessageCircle,
  Stethoscope
} from 'lucide-react';

interface SpaceItem {
  id: string;
  image: string;
  tag: string;
  title: string;
  desc: string;
  badge: string;
  specs: string[];
}

export default function ClinicSpacesSection() {
  const t = useTranslations('ClinicSpaces');
  const locale = useLocale();
  const { buildWhatsAppUrl } = useUtmTracking();
  const [selectedSpace, setSelectedSpace] = useState<SpaceItem | null>(null);

  const spaces: SpaceItem[] = [
    {
      id: 'consultorio-nivel1',
      image: '/images/consultorio-nivel1.webp',
      tag: t('spaces.0.tag'),
      title: t('spaces.0.title'),
      desc: t('spaces.0.desc'),
      badge: t('spaces.0.badge'),
      specs: [
        'Triaje Digital en Tablet Integrado',
        'Consentimiento Informado Electrónico',
        'Ambiente Minimalista Calmante',
        'Evaluación Anatómica Privada'
      ]
    },
    {
      id: 'clinica-nivel3',
      image: '/images/clinica-nivel3.webp',
      tag: t('spaces.1.tag'),
      title: t('spaces.1.title'),
      desc: t('spaces.1.desc'),
      badge: t('spaces.1.badge'),
      specs: [
        'Asepsia de Grado Quirúrgico',
        'Aparatología Láser & Microagujas',
        'Monitoreo Clínico Continuo',
        'Fotografía Clínica Estandarizada'
      ]
    },
    {
      id: 'ttt',
      image: '/images/ttt.webp',
      tag: t('spaces.2.tag'),
      title: t('spaces.2.title'),
      desc: t('spaces.2.desc'),
      badge: t('spaces.2.badge'),
      specs: [
        'Camilla Ergonómica Quirúrgica',
        'Iluminación Cálida Indirecta',
        'Suite de Armonización Facial',
        'Privacidad Total para Pacientes VIP'
      ]
    },
    {
      id: 'recepcion-clinica',
      image: '/images/recepcion-clinica.webp',
      tag: t('spaces.3.tag'),
      title: t('spaces.3.title'),
      desc: t('spaces.3.desc'),
      badge: t('spaces.3.badge'),
      specs: [
        'Concierge Bilingüe de Turismo Médico',
        'Sala de Espera Tipo Boutique Suiza',
        'Check-In Digital sin Esperas',
        'Coordinación Hotelera y de Traslados'
      ]
    }
  ];

  const whatsappHref = buildWhatsAppUrl(
    locale === 'es'
      ? 'Hola Abstergo, deseo cotizar una página web que refleje el nivel de lujo de mis instalaciones clínicas.'
      : 'Hello Abstergo, I would like to get a quote for a website that showcases our luxury clinical facilities.'
  );

  return (
    <section id="espacios" className="py-20 md:py-32 bg-[#FDFCFB] relative overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/3 -right-48 w-96 h-96 bg-[#C5A880]/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 -left-48 w-96 h-96 bg-[#0D9488]/8 rounded-full blur-3xl pointer-events-none -z-10" />

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

        {/* 4-Card Clinic Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mb-16">
          {spaces.map((space) => (
            <div
              key={space.id}
              className="group bg-[#FAF9F6] rounded-3xl border border-[#121316]/8 overflow-hidden ambient-shadow hover:border-[#C5A880]/60 transition-all duration-500 flex flex-col justify-between"
            >
              {/* Image Container with Zoom & Badge */}
              <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-[#121316]/5">
                <Image
                  src={space.image}
                  alt={space.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                {/* Subtle Gradient Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#121316]/80 via-[#121316]/20 to-transparent" />

                {/* Top Badge: Tier / Category */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1.5 rounded-full bg-[#FDFCFB]/95 backdrop-blur-md border border-[#121316]/10 text-[11px] font-semibold uppercase tracking-wider text-[#121316] shadow-sm flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-[#C5A880]" />
                    {space.tag}
                  </span>
                </div>

                {/* Enlarge Trigger Button */}
                <button
                  onClick={() => setSelectedSpace(space)}
                  aria-label={`Ver detalle de ${space.title}`}
                  className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-[#FDFCFB]/90 backdrop-blur-md text-[#121316] hover:bg-[#121316] hover:text-[#FDFCFB] flex items-center justify-center transition-all duration-300 shadow-md group/btn"
                >
                  <Maximize2 className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                </button>

                {/* Bottom Conversion Metric Highlight inside Image */}
                <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FDFCFB] bg-[#0D9488]/90 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 shadow-xs">
                    <Sparkles className="w-3.5 h-3.5 text-white" />
                    {space.badge}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between space-y-6">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#121316] mb-3 group-hover:text-[#C5A880] transition-colors">
                    {space.title}
                  </h3>
                  <p className="font-sans text-sm text-[#1E2024]/75 font-light leading-relaxed">
                    {space.desc}
                  </p>
                </div>

                {/* Medical Specs Pill List */}
                <div className="pt-4 border-t border-[#121316]/6">
                  <div className="text-[11px] uppercase tracking-wider font-semibold text-[#1E2024]/60 mb-3 flex items-center gap-1.5">
                    <Stethoscope className="w-3.5 h-3.5 text-[#0D9488]" />
                    Especificaciones Proyectadas en la Web
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {space.specs.map((spec, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-xs text-[#1E2024]/80 font-medium"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0D9488] shrink-0" />
                        <span className="truncate">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Strategic Call to Action Banner */}
        <div className="rounded-3xl bg-[#121316] text-[#FDFCFB] p-8 sm:p-12 relative overflow-hidden ambient-shadow flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Subtle gold glow inside banner */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#C5A880]/20 to-transparent rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-2xl space-y-3 text-center lg:text-left z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FDFCFB]/10 border border-[#C5A880]/40 text-xs text-[#C5A880] font-semibold tracking-wider uppercase">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
              Hospitalidad Médica Internacional
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white">
              ¿Tus fotos clínicas reflejan el verdadero nivel de tus instalaciones?
            </h3>
            <p className="text-sm sm:text-base text-[#FDFCFB]/75 font-light leading-relaxed">
              Enviamos a nuestro equipo de dirección de arte o curamos tu catálogo fotográfico existente para estructurar la galería web que los pacientes de alto ticket necesitan ver antes de agendar.
            </p>
          </div>

          <div className="z-10 shrink-0 w-full sm:w-auto">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#C5A880] text-[#121316] font-bold text-sm hover:bg-[#D4AF37] transition-all duration-300 shadow-lg group touch-target-min"
            >
              <MessageCircle className="w-5 h-5 text-[#121316]" />
              <span>Auditar Fotografía y Presencia Web</span>
              <ArrowRight className="w-4 h-4 text-[#121316] group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* Lightbox / Fullscreen Modal */}
      {selectedSpace && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-[#121316]/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setSelectedSpace(null)}
        >
          <div
            className="bg-[#FDFCFB] rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl border border-[#C5A880]/30 relative animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedSpace(null)}
              aria-label="Cerrar vista previa"
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-[#121316]/70 text-white hover:bg-[#121316] flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-80 sm:h-[420px] w-full bg-[#121316]">
              <Image
                src={selectedSpace.image}
                alt={selectedSpace.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 896px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121316]/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#C5A880] bg-[#121316]/60 px-3 py-1 rounded-full border border-[#C5A880]/40 backdrop-blur-sm">
                  {selectedSpace.tag}
                </span>
                <h4 className="font-serif text-2xl sm:text-3xl font-bold mt-2">
                  {selectedSpace.title}
                </h4>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-4">
              <p className="font-sans text-sm sm:text-base text-[#1E2024]/80 leading-relaxed font-light">
                {selectedSpace.desc}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {selectedSpace.specs.map((spec, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2.5 text-xs text-[#121316] font-medium bg-[#FAF9F6] p-3 rounded-xl border border-[#121316]/5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#0D9488] shrink-0" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  onClick={() => setSelectedSpace(null)}
                  className="px-6 py-2.5 rounded-full bg-[#121316] text-white text-xs font-semibold hover:bg-[#C5A880] transition-colors"
                >
                  Cerrar Vista
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
