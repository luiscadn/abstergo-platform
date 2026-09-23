'use client';

import { useUtmTracking } from '@/hooks/useUtmTracking';
import { handleWhatsAppCtaClick } from '@/lib/pixel';
import AbstergoIcon from './AbstergoIcon';

export default function Footer() {
  const { buildClinicWhatsAppUrl } = useUtmTracking();
  const clinicWhatsAppHref = buildClinicWhatsAppUrl();

  const handleClinicCtaClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    handleWhatsAppCtaClick(e, 'clinica', 'clinic');
  };

  return (
    <footer className="w-full bg-[#121316] text-[#FAF9F6] pt-12 pb-24 md:pb-14 border-t border-[#121316]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10 text-center md:text-left">
          {/* Brand & Mission Line */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <AbstergoIcon variant="light" className="w-8 h-8 drop-shadow-xs" />
            <p className="font-serif text-base sm:text-lg font-semibold tracking-wide text-[#FAF9F6]">
              Abstergo · Coordinación de turismo médico · Cali, Colombia
            </p>
          </div>

          {/* Discreet Clinic Link (No B2B section on this page) */}
          <div>
            <a
              href={clinicWhatsAppHref}
              target="_blank"
              rel="noopener noreferrer"
              data-cta="clinica"
              onClick={handleClinicCtaClick}
              className="text-xs sm:text-sm text-[#C5A880] hover:text-[#D4AF37] underline underline-offset-4 transition-colors font-medium cursor-pointer"
            >
              ¿Eres una clínica? Trabaja con nosotros
            </a>
          </div>
        </div>

        {/* Bottom Rights Notice */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#FAF9F6]/50 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Abstergo. Todos los derechos reservados.</p>
          <p>Cali, Colombia</p>
        </div>
      </div>
    </footer>
  );
}
