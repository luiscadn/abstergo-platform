export const META_PIXEL_ID =
  process.env.NEXT_PUBLIC_META_PIXEL_ID || '{{META_PIXEL_ID}}';

declare global {
  interface Window {
    fbq?: (
      action: 'track' | 'trackCustom' | 'init',
      eventName: string,
      params?: Record<string, unknown>
    ) => void;
    _fbq?: unknown;
  }
}

export function trackMetaEvent(
  eventName: string,
  params?: Record<string, unknown>
): void {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    try {
      window.fbq('track', eventName, params);
    } catch (err) {
      console.warn('[Meta Pixel] Error tracking event:', err);
    }
  } else {
    if (process.env.NODE_ENV === 'development') {
      console.log(`[Meta Pixel Mock] fbq('track', '${eventName}')`, params);
    }
  }
}

export function trackMetaCustomEvent(
  eventName: string,
  params?: Record<string, unknown>
): void {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    try {
      window.fbq('trackCustom', eventName, params);
    } catch (err) {
      console.warn('[Meta Pixel] Error tracking custom event:', err);
    }
  } else {
    if (process.env.NODE_ENV === 'development') {
      console.log(`[Meta Pixel Mock] fbq('trackCustom', '${eventName}')`, params);
    }
  }
}

export function handleWhatsAppCtaClick(
  e: React.MouseEvent<HTMLAnchorElement>,
  ctaId: string,
  type: 'patient' | 'clinic' = 'patient'
): void {
  if (type === 'patient') {
    trackMetaEvent('Contact', { cta: ctaId, category: 'patient_inquiry' });
  } else {
    trackMetaCustomEvent('ClinicContact', { cta: ctaId, category: 'clinic_partnership' });
  }

  // Allow native link navigation to wa.me with target="_blank"
  // If the browser opens in new tab/app, the event is synchronously queued in fbq
}
