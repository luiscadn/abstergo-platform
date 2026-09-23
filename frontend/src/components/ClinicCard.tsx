'use client';

import { Building2, MapPin, FileCheck, ExternalLink, Stethoscope } from 'lucide-react';

export interface ClinicCardProps {
  name: string;
  city: string;
  specialty: string;
  registration: string;
  verificationLink: string;
}

export default function ClinicCard({
  name,
  city,
  specialty,
  registration,
  verificationLink,
}: ClinicCardProps) {
  return (
    <div className="p-6 sm:p-7 rounded-3xl bg-[#FAF9F6] border border-[#121316]/8 shadow-xs flex flex-col justify-between hover:border-[#C5A880]/50 transition-all duration-300">
      <div className="space-y-4">
        {/* Header with Icon */}
        <div className="flex items-start justify-between gap-3">
          <div className="w-12 h-12 rounded-2xl bg-[#FDFCFB] border border-[#121316]/6 flex items-center justify-center text-[#C5A880] shadow-xs">
            <Building2 className="w-6 h-6" />
          </div>
          <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#0D9488] bg-[#0D9488]/10 px-2.5 py-1 rounded-full">
            <FileCheck className="w-3.5 h-3.5" />
            Habilitación en Salud
          </span>
        </div>

        {/* Clinic Name & City */}
        <div>
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#121316] mb-1">
            {name}
          </h3>
          <div className="flex items-center gap-1.5 text-xs text-[#1E2024]/60">
            <MapPin className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>{city}</span>
          </div>
        </div>

        {/* Specialty */}
        <div className="pt-2 border-t border-[#121316]/6 space-y-2 text-xs sm:text-sm text-[#1E2024]/80">
          <div className="flex items-center gap-2">
            <Stethoscope className="w-4 h-4 text-[#0D9488] shrink-0" />
            <span className="font-medium">{specialty}</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-[#1E2024]/65">
            <FileCheck className="w-4 h-4 text-[#C5A880] shrink-0" />
            <span>Registro: <strong className="text-[#121316] font-semibold">{registration}</strong></span>
          </div>
        </div>
      </div>

      {/* Verification Link */}
      <div className="mt-6 pt-4 border-t border-[#121316]/6">
        <a
          href={verificationLink.startsWith('http') ? verificationLink : '#'}
          target={verificationLink.startsWith('http') ? '_blank' : undefined}
          rel={verificationLink.startsWith('http') ? 'noopener noreferrer' : undefined}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#121316] hover:text-[#C5A880] transition-colors group cursor-pointer"
        >
          <span>Verificar habilitación oficial</span>
          <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </a>
      </div>
    </div>
  );
}
