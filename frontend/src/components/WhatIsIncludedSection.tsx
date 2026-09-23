'use client';

import {
  ShieldCheck,
  Video,
  Bed,
  Car,
  MessageCircle,
  CalendarCheck,
  PlusCircle,
} from 'lucide-react';

export default function WhatIsIncludedSection() {
  const items = [
    {
      title: 'Clínica odontológica verificada',
      icon: <ShieldCheck className="w-5 h-5 text-[#0D9488]" />,
    },
    {
      title: 'Valoración virtual previa',
      icon: <Video className="w-5 h-5 text-[#C5A880]" />,
    },
    {
      title: 'Hotel de recuperación',
      icon: <Bed className="w-5 h-5 text-[#D4AF37]" />,
    },
    {
      title: 'Traslados aeropuerto–clínica–hotel',
      icon: <Car className="w-5 h-5 text-[#0D9488]" />,
    },
    {
      title: 'Acompañamiento por WhatsApp',
      icon: <MessageCircle className="w-5 h-5 text-[#C5A880]" />,
    },
    {
      title: 'Coordinación de controles',
      icon: <CalendarCheck className="w-5 h-5 text-[#D4AF37]" />,
    },
  ];

  return (
    <section id="que-incluye" className="py-20 md:py-28 bg-[#FAF9F6] border-y border-[#121316]/6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FDFCFB] border border-[#C5A880]/30 shadow-xs mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C5A880]"></span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1E2024]/90">
              Paquete integral
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#121316] tracking-tight mb-4">
            Todo en un solo precio
          </h2>
        </div>

        {/* 6 Grid Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-10">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-[#FDFCFB] border border-[#121316]/8 shadow-xs flex items-center gap-4 hover:border-[#C5A880]/40 transition-colors"
            >
              <div className="w-11 h-11 rounded-xl bg-[#FAF9F6] border border-[#121316]/6 flex items-center justify-center shrink-0">
                {item.icon}
              </div>
              <span className="font-serif text-base sm:text-lg font-bold text-[#121316]">
                {item.title}
              </span>
            </div>
          ))}
        </div>

        {/* Optional Services Note */}
        <div className="max-w-3xl mx-auto p-5 sm:p-6 rounded-2xl bg-[#FDFCFB] border border-[#121316]/8 shadow-xs flex items-center gap-3 text-center sm:text-left justify-center">
          <PlusCircle className="w-5 h-5 text-[#C5A880] shrink-0" />
          <p className="text-sm sm:text-base text-[#1E2024]/80 font-normal">
            Servicios opcionales: noches extra, acompañante y experiencias en Cali.
          </p>
        </div>
      </div>
    </section>
  );
}
