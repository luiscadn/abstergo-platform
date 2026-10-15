'use client';

import { useUtmTracking } from '@/hooks/useUtmTracking';
import { handleWhatsAppCtaClick } from '@/lib/pixel';
import {
  Music,
  Mountain,
  UtensilsCrossed,
  Sailboat,
  Church,
  Trees,
  MapPin,
  Info,
  MessageCircle,
} from 'lucide-react';

export default function ExperiencesSection() {
  const { buildWhatsAppUrl } = useUtmTracking();
  const whatsappHref = buildWhatsAppUrl(
    'Hola, vengo de la página de Abstergo y quiero saber qué experiencias turísticas puedo agregar a mi viaje.'
  );

  const experiences = [
    {
      title: 'Noche de salsa caleña',
      place: 'Cali',
      desc: 'Clase privada y salida a un salsódromo en la capital mundial de la salsa.',
      icon: <Music className="w-5 h-5 text-[#C5A880]" />,
    },
    {
      title: 'San Antonio y Cristo Rey',
      place: 'Cali',
      desc: 'Recorrido por el barrio colonial y el mirador con la mejor vista de la ciudad.',
      icon: <Mountain className="w-5 h-5 text-[#0D9488]" />,
    },
    {
      title: 'Ruta gastronómica vallecaucana',
      place: 'Cali',
      desc: 'Galería Alameda, frutas exóticas y platos típicos (cuando tu dieta lo permita).',
      icon: <UtensilsCrossed className="w-5 h-5 text-[#D4AF37]" />,
    },
    {
      title: 'Día en el Lago Calima',
      place: 'Valle del Cauca',
      desc: 'Paisaje de montaña, paseo en lancha y descanso a orillas del lago.',
      icon: <Sailboat className="w-5 h-5 text-[#0D9488]" />,
    },
    {
      title: 'Buga y la Basílica del Señor de los Milagros',
      place: 'Valle del Cauca',
      desc: 'Visita al centro histórico y al templo más visitado del suroccidente.',
      icon: <Church className="w-5 h-5 text-[#C5A880]" />,
    },
    {
      title: 'Jardín Botánico y naturaleza',
      place: 'Tuluá',
      desc: 'Jardín Botánico Juan María Céspedes y paisajes cafeteros del centro del Valle.',
      icon: <Trees className="w-5 h-5 text-[#D4AF37]" />,
    },
  ];

  return (
    <section id="experiencias" className="py-20 md:py-28 bg-[#121316] text-[#FDFCFB] relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-[520px] h-[520px] bg-[#C5A880]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[480px] h-[480px] bg-[#0D9488]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-[#C5A880]/30 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C5A880]"></span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FDFCFB]/90">
              Experiencias opcionales
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white">
            Conoce Cali y el Valle mientras te recuperas
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#FDFCFB]/70 font-normal leading-relaxed">
            Si quieres conocer la ciudad, armamos experiencias turísticas a tu medida, con transporte incluido y al ritmo que tu tratamiento permita.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-10">
          {experiences.map((exp) => (
            <div
              key={exp.title}
              className="p-6 sm:p-7 rounded-3xl bg-white/[0.04] border border-white/10 hover:border-[#C5A880]/50 hover:bg-white/[0.06] transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  {exp.icon}
                </div>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#C5A880]">
                  <MapPin className="w-3.5 h-3.5" />
                  {exp.place}
                </span>
              </div>
              <h3 className="font-serif text-xl font-bold text-white mb-2">{exp.title}</h3>
              <p className="text-sm text-[#FDFCFB]/70 leading-relaxed">{exp.desc}</p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center gap-5 p-5 sm:p-6 rounded-2xl bg-white/[0.04] border border-white/10">
          <div className="flex items-start gap-3 text-left">
            <Info className="w-5 h-5 text-[#C5A880] shrink-0 mt-0.5" />
            <p className="text-sm text-[#FDFCFB]/75 leading-relaxed">
              Programamos cada actividad según las indicaciones de tu odontólogo, para que disfrutes sin poner en riesgo tu recuperación.
            </p>
          </div>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            data-cta="experiencias"
            onClick={(e) => handleWhatsAppCtaClick(e, 'experiencias', 'patient')}
            className="shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#C5A880] text-[#121316] text-sm font-semibold hover:bg-[#D4AF37] transition-colors touch-target-min"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Armar mi itinerario</span>
          </a>
        </div>
      </div>
    </section>
  );
}
