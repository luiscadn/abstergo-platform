'use client';

import { CalendarCheck, Car, HeartHandshake } from 'lucide-react';

export default function HowItWorksSection() {
  const steps = [
    {
      number: '01',
      phase: 'Paso 1',
      title: 'Antes del viaje',
      desc: 'Valoración virtual con una clínica aliada y una cotización cerrada, todo incluido. Reservas con un anticipo.',
      icon: <CalendarCheck className="w-6 h-6 text-[#C5A880]" />,
    },
    {
      number: '02',
      phase: 'Paso 2',
      title: 'Durante tu estadía',
      desc: 'Te recogemos en el aeropuerto, te acompañamos a la clínica y te alojas en un hotel pensado para recuperarte.',
      icon: <Car className="w-6 h-6 text-[#0D9488]" />,
    },
    {
      number: '03',
      phase: 'Paso 3',
      title: 'Después',
      desc: 'Seguimiento diario por WhatsApp, controles coordinados y respaldo si algo no sale como esperabas.',
      icon: <HeartHandshake className="w-6 h-6 text-[#D4AF37]" />,
    },
  ];

  return (
    <section id="como-funciona" className="py-20 md:py-28 bg-[#FDFCFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF9F6] border border-[#C5A880]/30 shadow-xs mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C5A880]"></span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1E2024]/90">
              Paso a paso
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#121316] tracking-tight mb-4">
            Cómo funciona
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative p-7 sm:p-8 rounded-3xl bg-[#FAF9F6] border border-[#121316]/8 shadow-xs hover:border-[#C5A880]/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#FDFCFB] border border-[#121316]/6 flex items-center justify-center shadow-xs">
                    {step.icon}
                  </div>
                  <span className="font-serif text-2xl font-bold text-[#C5A880]/80">
                    {step.number}
                  </span>
                </div>

                <div className="text-[11px] uppercase tracking-wider font-semibold text-[#0D9488] mb-1.5">
                  {step.phase}
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#121316] mb-3">
                  {step.title}
                </h3>

                <p className="font-sans text-sm sm:text-base text-[#1E2024]/80 leading-relaxed font-normal">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
