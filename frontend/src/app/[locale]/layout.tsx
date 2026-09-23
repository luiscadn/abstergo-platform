import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import Script from 'next/script';
import { routing } from '@/i18n/routing';
import { Plus_Jakarta_Sans, Cormorant_Garamond } from 'next/font/google';
import type { Metadata, Viewport } from 'next';
import { META_PIXEL_ID } from '@/lib/pixel';
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
  title: 'Abstergo · Tu tratamiento dental en Cali, coordinado',
  description:
    'Clínica verificada, hotel de recuperación, traslados y acompañamiento por WhatsApp. Un solo precio cerrado, y respondemos por ti si algo sale mal.',
  keywords: [
    'tratamiento dental cali',
    'diseño de sonrisa cali colombia',
    'implantes dentales cali',
    'carillas dentales cali',
    'turismo dental cali colombia',
    'abstergo turismo medico',
    'coordinacion dental cali'
  ],
  authors: [{ name: 'Abstergo' }],
  openGraph: {
    title: 'Abstergo · Tu tratamiento dental en Cali, coordinado',
    description:
      'Clínica verificada, hotel de recuperación, traslados y acompañamiento por WhatsApp. Un solo precio cerrado, y respondemos por ti si algo sale mal.',
    type: 'website',
    locale: 'es_CO',
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

  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale || 'es'} className={`${sansFont.variable} ${serifFont.variable}`}>
      <head>
        {/* Meta Pixel Standard Integration */}
        <Script id="meta-pixel-init" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${META_PIXEL_ID}');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
      </head>
      <body className="bg-[#FDFCFB] text-[#121316] font-sans antialiased selection:bg-[#C5A880]/20 selection:text-[#121316] min-h-dvh flex flex-col">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
