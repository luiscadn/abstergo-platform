'use client';

import { useUtmTracking } from '@/hooks/useUtmTracking';
import { handleWhatsAppCtaClick } from '@/lib/pixel';
import { Smile, Sparkles, Anchor, AlignCenter, Sun, Stethoscope, ArrowUpRight } from 'lucide-react';

export default function TreatmentsSection() {
  const { buildWhatsAppUrl } = useUtmTracking();

  const treatments = [
    {
      id: 'diseno-sonrisa',
      title: 'Diseño de sonrisa',
      desc: 'Carillas en resina o cerámica para una sonrisa armónica y natural.',
      icon: <Smile className="w-6 h-6 text-[#C5A880]" />,
    },
    {
      id: 'carillas',
      title: 'Carillas dentales',
      desc: 'Corrigen color, forma y tamaño de los dientes con mínimo desgaste.',
      icon: <Sparkles className="w-6 h-6 text-[#0D9488]" />,
    },
    {
      id: 'implantes',
      title: 'Implantes dentales',
      desc: 'Reemplazo fijo de dientes perdidos con resultados estables a largo plazo.',
      icon: <Anchor className="w-6 h-6 text-[#D4AF37]" />,
    },
    {
      id: 'ortodoncia',
      title: 'Ortodoncia y alineadores',
      desc: 'Brackets o alineadores invisibles, con seguimiento coordinado a distancia.',
      icon: <AlignCenter className="w-6 h-6 text-[#0D9488]" />,
    },
    {
      id: 'blanqueamiento',
      title: 'Blanqueamiento',
      desc: 'Aclaramiento dental profesional en consultorio, en una sola visita.',
      icon: <Sun className="w-6 h-6 text-[#D4AF37]" />,
    },
    {
      id: 'rehabilitacion',
      title: 'Rehabilitación oral',
      desc: 'Odontología integral para recuperar función y estética de tu boca.',
      icon: <Stethoscope className="w-6 h-6 text-[#C5A880]" />,
    },
  ];

  return (
    <section id="tratamientos" className="py-20 md:py-28 bg-[#FAF9F6] border-y border-[#121316]/6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FDFCFB] border border-[#C5A880]/30 shadow-xs mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C5A880]"></span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1E2024]/90">
              Tratamientos
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#121316] tracking-tight mb-4">
            ¿Qué quieres mejorar de tu sonrisa?
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#1E2024]/75 font-normal leading-relaxed">
            Realizados por odontólogos de nuestras clínicas aliadas en Cali y Tuluá.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {treatments.map((t) => (
            <a
              key={t.id}
              href={buildWhatsAppUrl(
                `Hola, vengo de la página de Abstergo y quiero cotizar ${t.title.toLowerCase()} en el Valle del Cauca.`
              )}
              target="_blank"
              rel="noopener noreferrer"
              data-cta={`tratamiento-${t.id}`}
              onClick={(e) => handleWhatsAppCtaClick(e, `tratamiento-${t.id}`, 'patient')}
              className="group p-6 sm:p-7 rounded-3xl bg-[#FDFCFB] border border-[#121316]/8 shadow-xs hover:border-[#C5A880]/60 hover:shadow-md transition-all duration-300 flex flex-col"
            >
              <div className="flex items-start justify-between mb-5">
                <div className="w-12 h-12 rounded-2xl bg-[#FAF9F6] border border-[#121316]/6 flex items-center justify-center">
                  {t.icon}
                </div>
                <ArrowUpRight className="w-5 h-5 text-[#121316]/30 group-hover:text-[#C5A880] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#121316] mb-2">{t.title}</h3>
              <p className="text-sm text-[#1E2024]/75 leading-relaxed flex-grow">{t.desc}</p>
              <span className="mt-5 text-xs font-semibold text-[#0D9488] group-hover:text-[#121316] transition-colors">
                Consultar por WhatsApp →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
