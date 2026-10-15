'use client';

import { useUtmTracking } from '@/hooks/useUtmTracking';
import { handleWhatsAppCtaClick } from '@/lib/pixel';
import { Check, MessageCircle, ArrowRight, Sparkles, Bed, Car, Compass } from 'lucide-react';

interface Plan {
  id: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

export default function PlansSection() {
  const { buildWhatsAppUrl } = useUtmTracking();

  const plans: Plan[] = [
    {
      id: 'esencial',
      name: 'Plan Esencial',
      tagline: 'Tratamiento + hospedaje + traslados',
      description: 'Lo necesario para viajar tranquilo y concentrarte en tu tratamiento.',
      features: [
        'Tratamiento en clínica aliada verificada',
        'Valoración virtual antes del viaje',
        'Hospedaje en hotel de recuperación',
        'Traslados aeropuerto – hotel – clínica',
        'Acompañamiento por WhatsApp',
      ],
    },
    {
      id: 'confort',
      name: 'Plan Confort',
      tagline: 'Más comodidad durante toda tu estadía',
      description: 'Para quienes viajan con acompañante o quieren transporte a disposición.',
      features: [
        'Todo lo del Plan Esencial',
        'Hotel superior cerca de la clínica',
        'Transporte privado durante toda la estadía',
        'Hospedaje para un acompañante',
        'Coordinación de controles y citas',
        'City tour de bienvenida',
      ],
      highlighted: true,
    },
    {
      id: 'experiencia',
      name: 'Plan Experiencia Valle',
      tagline: 'Tratamiento + vacaciones',
      description: 'Aprovecha el viaje para conocer Cali y el Valle del Cauca.',
      features: [
        'Todo lo del Plan Confort',
        'Experiencias turísticas a tu elección',
        'Guía local en tus salidas',
        'Noches extra para descansar o pasear',
        'Itinerario adaptado a tu recuperación',
      ],
    },
  ];

  const pillars = [
    { icon: <Bed className="w-5 h-5 text-[#C5A880]" />, label: 'Hospedaje' },
    { icon: <Car className="w-5 h-5 text-[#0D9488]" />, label: 'Transporte' },
    { icon: <Compass className="w-5 h-5 text-[#D4AF37]" />, label: 'Experiencias turísticas' },
  ];

  return (
    <section id="planes" className="py-20 md:py-28 bg-[#FDFCFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF9F6] border border-[#C5A880]/30 shadow-xs mb-4">
            <Sparkles className="w-4 h-4 text-[#C5A880]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1E2024]/90">
              Planes a tu medida
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#121316] tracking-tight mb-4">
            Elige cómo quieres vivir tu viaje
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#1E2024]/75 font-normal leading-relaxed">
            Tenemos diferentes planes que incluyen hospedaje, transporte y, si lo deseas, experiencias turísticas para conocer la ciudad mientras te recuperas.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mt-7">
            {pillars.map((pillar) => (
              <div
                key={pillar.label}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FAF9F6] border border-[#121316]/8 text-xs sm:text-sm font-medium text-[#121316]"
              >
                {pillar.icon}
                <span>{pillar.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {plans.map((plan) => {
            const href = buildWhatsAppUrl(
              `Hola, vengo de la página de Abstergo y me interesa el ${plan.name} para mi tratamiento dental en el Valle del Cauca.`
            );
            const dark = plan.highlighted;

            return (
              <div
                key={plan.id}
                className={`relative p-7 sm:p-8 rounded-3xl flex flex-col border transition-all duration-300 ${
                  dark
                    ? 'bg-[#121316] text-[#FDFCFB] border-[#C5A880]/40 shadow-xl lg:-translate-y-3'
                    : 'bg-[#FAF9F6] text-[#121316] border-[#121316]/8 shadow-xs hover:border-[#C5A880]/50'
                }`}
              >
                {dark && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-[#C5A880] text-[#121316] text-[11px] font-bold uppercase tracking-[0.14em] whitespace-nowrap">
                    El más elegido
                  </span>
                )}

                <div className={`text-[11px] uppercase tracking-wider font-semibold mb-1.5 ${dark ? 'text-[#C5A880]' : 'text-[#0D9488]'}`}>
                  {plan.tagline}
                </div>
                <h3 className={`font-serif text-2xl sm:text-3xl font-bold mb-2 ${dark ? 'text-white' : 'text-[#121316]'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm leading-relaxed mb-6 ${dark ? 'text-[#FDFCFB]/70' : 'text-[#1E2024]/75'}`}>
                  {plan.description}
                </p>

                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm">
                      <Check className={`w-4 h-4 mt-0.5 shrink-0 ${dark ? 'text-[#C5A880]' : 'text-[#0D9488]'}`} />
                      <span className={dark ? 'text-[#FDFCFB]/90' : 'text-[#1E2024]/85'}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cta={`plan-${plan.id}`}
                  onClick={(e) => handleWhatsAppCtaClick(e, `plan-${plan.id}`, 'patient')}
                  className={`inline-flex items-center justify-center gap-2.5 w-full px-6 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 touch-target-min group ${
                    dark
                      ? 'bg-[#C5A880] text-[#121316] hover:bg-[#D4AF37]'
                      : 'bg-[#121316] text-[#FDFCFB] hover:bg-[#C5A880] hover:text-[#121316]'
                  }`}
                >
                  <MessageCircle className={`w-4 h-4 ${dark ? 'text-[#121316]' : 'text-[#D4AF37]'}`} />
                  <span>Cotizar este plan</span>
                  <ArrowRight className="w-4 h-4 opacity-70 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            );
          })}
        </div>

        <p className="text-center text-xs sm:text-sm text-[#1E2024]/60 mt-10 max-w-2xl mx-auto">
          El valor final depende del tratamiento, la ciudad y los días de estadía. Te enviamos una cotización cerrada por WhatsApp, sin cobros ocultos.
        </p>
      </div>
    </section>
  );
}
