'use client';

import { useUtmTracking } from '@/hooks/useUtmTracking';
import { handleWhatsAppCtaClick } from '@/lib/pixel';
import {
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  Building,
  Car,
  HeartHandshake,
} from 'lucide-react';

export default function HeroSection() {
  const { buildWhatsAppUrl } = useUtmTracking();
  const whatsappHref = buildWhatsAppUrl();

  const handleCtaClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    handleWhatsAppCtaClick(e, 'hero', 'patient');
  };

  return (
    <section className="relative min-h-[90dvh] pt-28 pb-16 md:pt-36 md:pb-24 flex flex-col justify-center overflow-hidden bg-[#FDFCFB]">
      {/* Warm Ambient Background Scrims */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[420px] bg-gradient-to-b from-[#C5A880]/15 via-[#0D9488]/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#C5A880]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Reassuring Trust Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF9F6] border border-[#C5A880]/30 shadow-xs mb-6">
            <ShieldCheck className="w-4 h-4 text-[#0D9488]" />
            <span className="text-xs font-semibold tracking-wide text-[#1E2024]/90">
              Coordinación integral de turismo dental en Cali
            </span>
          </div>

          {/* Magnetic H1 */}
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-[62px] font-bold text-[#121316] tracking-tight leading-[1.14] mb-6">
            Tu tratamiento dental en Cali, coordinado de principio a fin.
          </h1>

          {/* Reassuring Subtitle */}
          <p className="font-sans text-base sm:text-lg md:text-xl text-[#1E2024]/80 max-w-2xl mx-auto leading-relaxed mb-8 md:mb-10 font-normal">
            Clínica verificada, hotel de recuperación, traslados y acompañamiento por WhatsApp. Un solo precio cerrado, y respondemos por ti si algo sale mal.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-4">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              data-cta="hero"
              onClick={handleCtaClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#121316] text-[#FDFCFB] font-semibold text-sm sm:text-base tracking-wide shadow-md hover:bg-[#C5A880] hover:text-[#121316] hover:shadow-lg transition-all duration-300 touch-target-min group"
            >
              <MessageCircle className="w-5 h-5 text-[#D4AF37] group-hover:scale-110 transition-transform" />
              <span>Cotiza por WhatsApp</span>
              <ArrowRight className="w-4 h-4 opacity-70 group-hover:translate-x-0.5 transition-transform" />
            </a>

            <a
              href="#como-funciona"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#FAF9F6] text-[#121316] font-medium text-sm sm:text-base border border-[#121316]/12 hover:border-[#121316]/30 hover:bg-[#F3EFEA] transition-all duration-300 touch-target-min"
            >
              <span>Ver cómo funciona</span>
            </a>
          </div>

          {/* Microtexto bajo el CTA */}
          <p className="text-xs sm:text-sm text-[#1E2024]/65 mb-12">
            Para colombianos en EE.UU., España y el resto del mundo.
          </p>

          {/* 4 Pillars of Reassurance (No fake metrics) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full max-w-4xl text-left">
            <div className="p-4 sm:p-5 rounded-2xl bg-[#FAF9F6] border border-[#121316]/8 shadow-xs">
              <ShieldCheck className="w-5 h-5 text-[#0D9488] mb-2" />
              <div className="font-serif text-sm sm:text-base font-bold text-[#121316]">
                Clínica Verificada
              </div>
              <p className="text-xs text-[#1E2024]/70 mt-1 leading-snug">
                Habilitación y credenciales transparentes antes de reservar.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-[#FAF9F6] border border-[#121316]/8 shadow-xs">
              <Building className="w-5 h-5 text-[#C5A880] mb-2" />
              <div className="font-serif text-sm sm:text-base font-bold text-[#121316]">
                Hotel Seleccionado
              </div>
              <p className="text-xs text-[#1E2024]/70 mt-1 leading-snug">
                Alojamiento cómodo y adaptado a tu período de recuperación.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-[#FAF9F6] border border-[#121316]/8 shadow-xs">
              <Car className="w-5 h-5 text-[#D4AF37] mb-2" />
              <div className="font-serif text-sm sm:text-base font-bold text-[#121316]">
                Traslados Privados
              </div>
              <p className="text-xs text-[#1E2024]/70 mt-1 leading-snug">
                Recogida en aeropuerto, traslados a la clínica y al hotel.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-[#FAF9F6] border border-[#121316]/8 shadow-xs">
              <HeartHandshake className="w-5 h-5 text-[#0D9488] mb-2" />
              <div className="font-serif text-sm sm:text-base font-bold text-[#121316]">
                Respaldo Continuo
              </div>
              <p className="text-xs text-[#1E2024]/70 mt-1 leading-snug">
                Acompañamiento personal antes, durante y después del viaje.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
