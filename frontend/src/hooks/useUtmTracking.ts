'use client';

import { useState, useCallback } from 'react';
import {
  buildWhatsAppLink,
  PATIENT_WHATSAPP_MESSAGE,
  CLINIC_WHATSAPP_MESSAGE,
  UtmAttribution,
} from '@/config/whatsapp';

const STORAGE_KEY = 'abstergo_utm_tracking';

function readInitialUtmData(): UtmAttribution {
  if (typeof window === 'undefined') return {};
  try {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    const parsed: UtmAttribution = stored ? JSON.parse(stored) : {};

    const params = new URLSearchParams(window.location.search);
    const keys: (keyof UtmAttribution)[] = [
      'utm_source',
      'utm_medium',
      'utm_campaign',
      'utm_content',
      'utm_term',
      'fbclid',
    ];

    let hasNew = false;
    keys.forEach((key) => {
      const val = params.get(key);
      if (val && parsed[key] !== val) {
        parsed[key] = val;
        hasNew = true;
      }
    });

    if (!parsed.utm_source && document.referrer) {
      if (document.referrer.includes('instagram.com')) {
        parsed.utm_source = 'instagram_inapp';
        hasNew = true;
      } else if (document.referrer.includes('facebook.com')) {
        parsed.utm_source = 'facebook_inapp';
        hasNew = true;
      }
    }

    if (hasNew) {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(parsed));
    }

    return parsed;
  } catch (e) {
    console.warn('Failed to parse UTM parameters', e);
    return {};
  }
}

export function useUtmTracking() {
  const [utmData] = useState<UtmAttribution>(readInitialUtmData);

  const buildWhatsAppUrl = useCallback(
    (customMessage?: string, customPhone?: string) => {
      const message = customMessage || PATIENT_WHATSAPP_MESSAGE;
      return buildWhatsAppLink(message, utmData, customPhone);
    },
    [utmData]
  );

  const buildClinicWhatsAppUrl = useCallback(
    (customPhone?: string) => {
      return buildWhatsAppLink(CLINIC_WHATSAPP_MESSAGE, utmData, customPhone);
    },
    [utmData]
  );

  return {
    utmData,
    buildWhatsAppUrl,
    buildClinicWhatsAppUrl,
  };
}
