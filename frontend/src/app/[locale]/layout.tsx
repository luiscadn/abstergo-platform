import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { Plus_Jakarta_Sans, Cormorant_Garamond } from 'next/font/google';
import type { Metadata, Viewport } from 'next';
import '@/app/globals.css';

const sansFont = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

const serifFont = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
  themeColor: '#FDFCFB',
};

export const metadata: Metadata = {
  title: 'Abstergo | Arquitectura Web de Alta Conversión para Medicina Estética & Clínicas de Lujo',
  description: 'Ingeniería y diseño web de alta gama para cirujanos plásticos, dermatólogos y clínicas estéticas de élite. Funnels optimizados para Meta Ads, triaje médico y turismo estético.',
  keywords: [
    'diseño web medicina estética',
    'marketing médicos cirujanos plásticos',
    'páginas web clínicas dermatológicas',
    'funnel conversión pacientes estética',
    'arquitectura web salud de lujo',
    'turismo médico Colombia',
    'Abstergo'
  ],
  authors: [{ name: 'Abstergo Studio' }],
  openGraph: {
    title: 'Abstergo | Arquitectura Web de Alta Conversión para Medicina Estética',
    description: 'Páginas web de alta gama que convierten seguidores en pacientes de procedimientos estéticos de alto ticket.',
    type: 'website',
    locale: 'es_ES',
    alternateLocale: 'en_US',
    siteName: 'Abstergo',
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${sansFont.variable} ${serifFont.variable}`}>
      <body className="bg-[#FDFCFB] text-[#121316] font-sans antialiased selection:bg-[#D4AF37]/20 selection:text-[#121316] min-h-dvh flex flex-col">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
