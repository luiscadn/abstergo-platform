'use client';

import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      question: '¿Abstergo es una clínica?',
      answer:
        'No. Somos coordinadores: la atención médica la presta la clínica aliada, y nosotros organizamos y respondemos por toda tu experiencia.',
    },
    {
      question: '¿Cómo sé que la clínica es confiable?',
      answer:
        'Te mostramos su habilitación y los datos del profesional antes de que pagues cualquier anticipo.',
    },
    {
      question: '¿Qué pasa si hay una complicación?',
      answer:
        'Coordinamos la atención con la clínica y te acompañamos hasta resolverla. [PENDIENTE: detalle de la cobertura de seguro cuando esté confirmada]',
    },
    {
      question: '¿Cómo pago?',
      answer:
        'Reservas con un anticipo y el resto según el plan que acordemos en tu cotización. [PENDIENTE: medios de pago]',
    },
    {
      question: '¿Puedo viajar con un acompañante?',
      answer:
        'Sí. Podemos incluir su alojamiento y traslados en el paquete.',
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#FDFCFB]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF9F6] border border-[#C5A880]/30 shadow-xs mb-4">
            <HelpCircle className="w-4 h-4 text-[#C5A880]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1E2024]/90">
              Respuestas claras
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#121316] tracking-tight mb-4">
            Preguntas frecuentes
          </h2>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            const buttonId = `faq-button-${idx}`;
            const regionId = `faq-region-${idx}`;

            return (
              <div
                key={idx}
                className="rounded-2xl border border-[#121316]/8 bg-[#FAF9F6] overflow-hidden transition-all duration-200"
              >
                <button
                  id={buttonId}
                  aria-expanded={isOpen}
                  aria-controls={regionId}
                  onClick={() => toggleAccordion(idx)}
                  className="w-full py-5 px-6 sm:px-7 text-left flex items-center justify-between gap-4 font-serif text-lg sm:text-xl font-bold text-[#121316] hover:text-[#C5A880] transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#C5A880] cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 text-[#C5A880] transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div
                    id={regionId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="px-6 pb-6 sm:px-7 sm:pb-7 text-sm sm:text-base text-[#1E2024]/80 font-normal leading-relaxed border-t border-[#121316]/6 pt-4 animate-in fade-in duration-200"
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
