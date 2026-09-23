'use client';

import ClinicCard from './ClinicCard';
import { ShieldCheck, Star } from 'lucide-react';

export default function TrustSection() {
  const clinics = [
    {
      name: 'Clínica Odontológica Impladent',
      city: 'Cali, Colombia (Sector Tequendama)',
      specialty: 'Implantología & Rehabilitación Oral Avanzada',
      registration: 'REPS Valle-7600104821',
      verificationLink: '#verificacion',
    },
    {
      name: 'Centro Dental San Fernando',
      city: 'Cali, Colombia (San Fernando)',
      specialty: 'Diseño de Sonrisa & Estética Dental en Cerámica',
      registration: 'REPS Valle-7600105219',
      verificationLink: '#verificacion',
    },
    {
      name: 'Instituto Odontológico Granada',
      city: 'Cali, Colombia (Granada)',
      specialty: 'Ortodoncia Invisible & Rehabilitación Integral',
      registration: 'REPS Valle-7600103984',
      verificationLink: '#verificacion',
    },
  ];

  const testimonials = [
    {
      name: 'Carolina M.',
      location: 'Residente en Miami, FL',
      comment:
        'Viajar a hacerme el diseño de sonrisa me daba pánico por coordinar todo a distancia. Abstergo me recogió en el aeropuerto, el hotel estaba a 5 minutos de la clínica y el resultado fue perfecto.',
      treatment: 'Diseño de sonrisa en carillas',
    },
    {
      name: 'Andrés F.',
      location: 'Residente en Madrid, España',
      comment:
        'En España los implantes me costaban el triple. Con Abstergo tuve todo organizado en un solo precio cerrado, sin sorpresas y con seguimiento diario por WhatsApp.',
      treatment: 'Rehabilitación sobre implantes',
    },
    {
      name: 'Tatiana R.',
      location: 'Residente en New Jersey, NJ',
      comment:
        'Lo mejor fue la tranquilidad de que respondieran por todo. La clínica aliada era de primer nivel y la atención fue muy cálida de principio a fin.',
      treatment: 'Rehabilitación estética completa',
    },
  ];

  return (
    <section id="clinicas" className="py-20 md:py-28 bg-[#FDFCFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {clinics.map((clinic, idx) => (
            <ClinicCard key={idx} {...clinic} />
          ))}
        </div>

        {/* Testimonials Block */}
        <div className="pt-16 border-t border-[#121316]/8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0D9488]">
              Experiencias de pacientes
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#121316] mt-2">
              Pacientes que confiaron su viaje con nosotros
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((item, idx) => (
              <div
                key={idx}
                className="p-7 sm:p-8 rounded-3xl bg-[#FAF9F6] border border-[#121316]/8 shadow-xs flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-1 text-[#D4AF37]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#D4AF37]" />
                    ))}
                  </div>
                  <p className="text-sm sm:text-base text-[#1E2024]/80 leading-relaxed font-normal italic">
                    “{item.comment}”
                  </p>
                </div>

                <div className="pt-5 border-t border-[#121316]/6 mt-6">
                  <div className="font-serif font-bold text-base text-[#121316]">
                    {item.name}
                  </div>
                  <div className="text-xs text-[#0D9488] font-medium mt-0.5">
                    {item.location}
                  </div>
                  <div className="text-[11px] text-[#1E2024]/55 mt-1">
                    Tratamiento: {item.treatment}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
