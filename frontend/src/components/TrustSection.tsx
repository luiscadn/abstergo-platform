'use client';

import ClinicCard from './ClinicCard';
import { ShieldCheck, MessageSquareQuote } from 'lucide-react';

export default function TrustSection() {
  const clinics = [
    {
      name: '[PENDIENTE: nombre de la clínica aliada 1]',
      city: 'Cali, Colombia',
      specialty: '[PENDIENTE: especialidad odontológica clínica 1]',
      registration: '[PENDIENTE: registro de habilitación clínica 1]',
      verificationLink: '[PENDIENTE: enlace de verificación clínica 1]',
    },
    {
      name: '[PENDIENTE: nombre de la clínica aliada 2]',
      city: 'Cali, Colombia',
      specialty: '[PENDIENTE: especialidad odontológica clínica 2]',
      registration: '[PENDIENTE: registro de habilitación clínica 2]',
      verificationLink: '[PENDIENTE: enlace de verificación clínica 2]',
    },
    {
      name: '[PENDIENTE: nombre de la clínica aliada 3]',
      city: 'Cali, Colombia',
      specialty: '[PENDIENTE: especialidad odontológica clínica 3]',
      registration: '[PENDIENTE: registro de habilitación clínica 3]',
      verificationLink: '[PENDIENTE: enlace de verificación clínica 3]',
    },
  ];

  return (
    <section id="clinicas" className="py-20 md:py-28 bg-[#FDFCFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF9F6] border border-[#C5A880]/30 shadow-xs mb-4">
            <ShieldCheck className="w-4 h-4 text-[#0D9488]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1E2024]/90">
              Confianza y Transparencia
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#121316] tracking-tight mb-4">
            Clínicas que puedes verificar
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#1E2024]/75 font-normal leading-relaxed">
            Solo trabajamos con clínicas habilitadas. Te mostramos sus credenciales antes de que decidas.
          </p>
        </div>

        {/* 3 Clinic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {clinics.map((clinic, idx) => (
            <ClinicCard key={idx} {...clinic} />
          ))}
        </div>

        {/* Testimonials Block (Explicit marker, no fake reviews) */}
        <div className="max-w-3xl mx-auto p-6 sm:p-8 rounded-3xl bg-[#FAF9F6] border border-dashed border-[#121316]/15 text-center">
          <div className="w-10 h-10 rounded-full bg-[#FDFCFB] border border-[#121316]/8 flex items-center justify-center mx-auto mb-3 text-[#C5A880]">
            <MessageSquareQuote className="w-5 h-5" />
          </div>
          <p className="text-xs sm:text-sm font-mono text-[#1E2024]/60">
            [PENDIENTE: testimonios reales de pacientes]
          </p>
        </div>
      </div>
    </section>
  );
}
