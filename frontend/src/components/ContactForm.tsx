'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import { useUtmTracking } from '@/hooks/useUtmTracking';
import {
  MessageCircle,
  Send,
  CheckCircle2,
  Shield,
  Clock,
  Sparkles,
  ArrowRight,
  PhoneCall,
  Building2
} from 'lucide-react';

export default function ContactForm() {
  const t = useTranslations('Contact');
  const locale = useLocale();
  const { utmData, buildWhatsAppUrl } = useUtmTracking();

  const [formData, setFormData] = useState({
    doctorName: '',
    clinicName: '',
    city: '',
    contactInfo: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Prepare lead payload including UTM parameters
    const leadPayload = {
      ...formData,
      utm: utmData,
      submittedAt: new Date().toISOString(),
      locale,
    };

    console.log('[Abstergo Lead Captured]:', leadPayload);

    // Simulate swift submission (or webhook dispatch)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 600);
  };

  // Build tailored WhatsApp message with user input
  const tailoredWhatsAppMessage =
    locale === 'es'
      ? `Hola Abstergo. Soy ${formData.doctorName || 'un especialista'} de ${formData.clinicName || 'mi clínica'}. Deseo agendar la auditoría web de conversión.`
      : `Hello Abstergo. I am ${formData.doctorName || 'a practice director'} from ${formData.clinicName || 'our clinic'}. I would like to schedule the conversion web audit.`;

  const directWhatsAppHref = buildWhatsAppUrl(
    locale === 'es'
      ? 'Hola, deseo hablar con un arquitecto web de Abstergo para auditar el sitio de mi clínica estética.'
      : 'Hello, I would like to speak with an Abstergo web architect to audit our aesthetic clinic website.'
  );

  const successWhatsAppHref = buildWhatsAppUrl(tailoredWhatsAppMessage);

  return (
    <section id="contacto" className="py-20 md:py-32 bg-[#FDFCFB] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-[#C5A880]/10 via-[#0D9488]/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Value Proposition & Direct WhatsApp */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF9F6] border border-[#C5A880]/30 shadow-xs mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C5A880]"></span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1E2024]/90">
                  {t('badge')}
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#121316] tracking-tight leading-tight mb-4">
                {t('title')}
              </h2>
              <p className="font-sans text-base text-[#1E2024]/75 font-light leading-relaxed">
                {t('subtitle')}
              </p>
            </div>

            {/* Direct Express WhatsApp Box */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#FAF9F6] border border-[#121316]/6 ambient-shadow">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#0D9488] bg-[#0D9488]/10 px-2.5 py-1 rounded-full inline-block mb-3">
                {t('directWhatsApp.badge')}
              </span>
              <h3 className="font-serif text-xl font-bold text-[#121316] mb-2">
                {t('directWhatsApp.title')}
              </h3>
              <p className="text-xs sm:text-sm text-[#1E2024]/70 font-light leading-relaxed mb-6">
                {t('directWhatsApp.desc')}
              </p>
              <a
                href={directWhatsAppHref}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-full bg-[#0D9488] text-white font-semibold text-sm hover:bg-[#0B7A70] transition-colors shadow-md touch-target-min"
              >
                <MessageCircle className="w-5 h-5 text-white" />
                <span>{t('directWhatsApp.button')}</span>
              </a>
            </div>

            {/* Clinical Facility Standard Card */}
            <div className="relative rounded-2xl overflow-hidden border border-[#121316]/8 shadow-xs group">
              <div className="relative h-40 w-full bg-[#121316]/5">
                <Image
                  src="/images/ttt.webp"
                  alt="Suite de estética médica"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 450px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121316]/90 via-[#121316]/35 to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-full bg-[#FDFCFB]/90 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider text-[#121316] border border-white/40 flex items-center gap-1.5">
                    <Building2 className="w-3 h-3 text-[#C5A880]" />
                    <span>Consultorios & Clínicas Nivel 1, 2 y 3</span>
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <p className="text-xs font-serif font-bold leading-tight">
                    Auditoría de presencia web adaptada a tus instalaciones físicas y protocolos clínicos
                  </p>
                </div>
              </div>
            </div>

            {/* Response Time Guarantee */}
            <div className="flex items-center gap-3 text-xs text-[#1E2024]/65">
              <Clock className="w-4 h-4 text-[#C5A880] shrink-0" />
              <span>Respuesta garantizada en menos de 2 horas en horario laboral.</span>
            </div>
          </div>

          {/* Right Column: Lead Capture Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#FAF9F6] rounded-3xl border border-[#121316]/6 p-6 sm:p-10 ambient-shadow">
              {isSuccess ? (
                <div className="py-8 text-center space-y-5 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-[#0D9488]/15 text-[#0D9488] flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#121316]">
                    {t('form.successTitle')}
                  </h3>
                  <p className="text-sm text-[#1E2024]/75 max-w-md mx-auto leading-relaxed">
                    {t('form.successDesc')}
                  </p>
                  <div className="pt-4">
                    <a
                      href={successWhatsAppHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#121316] text-[#FDFCFB] font-semibold text-sm hover:bg-[#C5A880] transition-colors shadow-md touch-target-min"
                    >
                      <MessageCircle className="w-4 h-4 text-[#D4AF37]" />
                      <span>{t('form.successWhatsAppBtn')}</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-xs font-semibold text-[#121316] uppercase tracking-wider mb-2">
                      {t('form.doctorName')} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.doctorName}
                      onChange={(e) => setFormData({ ...formData, doctorName: e.target.value })}
                      placeholder={t('form.doctorNamePlaceholder')}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#FDFCFB] border border-[#121316]/10 text-sm text-[#121316] placeholder-[#1E2024]/40 focus:outline-none focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880] transition-all touch-target-min"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#121316] uppercase tracking-wider mb-2">
                      {t('form.clinicName')} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.clinicName}
                      onChange={(e) => setFormData({ ...formData, clinicName: e.target.value })}
                      placeholder={t('form.clinicNamePlaceholder')}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#FDFCFB] border border-[#121316]/10 text-sm text-[#121316] placeholder-[#1E2024]/40 focus:outline-none focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880] transition-all touch-target-min"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#121316] uppercase tracking-wider mb-2">
                        {t('form.city')} *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        placeholder={t('form.cityPlaceholder')}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#FDFCFB] border border-[#121316]/10 text-sm text-[#121316] placeholder-[#1E2024]/40 focus:outline-none focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880] transition-all touch-target-min"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#121316] uppercase tracking-wider mb-2">
                        {t('form.contactInfo')} *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.contactInfo}
                        onChange={(e) => setFormData({ ...formData, contactInfo: e.target.value })}
                        placeholder={t('form.contactInfoPlaceholder')}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#FDFCFB] border border-[#121316]/10 text-sm text-[#121316] placeholder-[#1E2024]/40 focus:outline-none focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880] transition-all touch-target-min"
                      />
                    </div>
                  </div>

                  <div className="pt-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 px-6 rounded-full bg-[#121316] text-[#FDFCFB] font-semibold text-sm tracking-wide shadow-md hover:bg-[#C5A880] transition-all duration-300 flex items-center justify-center gap-2.5 touch-target-min disabled:opacity-60 cursor-pointer"
                    >
                      <Send className="w-4 h-4 text-[#D4AF37]" />
                      <span>{isSubmitting ? t('form.submitting') : t('form.submit')}</span>
                    </button>
                  </div>

                  <div className="flex items-center gap-2 text-[11px] text-[#1E2024]/50 justify-center pt-2">
                    <Shield className="w-3.5 h-3.5 text-[#0D9488]" />
                    <span>{t('form.privacyNotice')}</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
