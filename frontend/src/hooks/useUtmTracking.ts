'use client';

import { useEffect, useState, useCallback } from 'react';

export interface UtmData {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  fbclid?: string;
}

const STORAGE_KEY = 'abstergo_utm_tracking';
const DEFAULT_WHATSAPP_NUMBER = '573214230372'; // Default agency contact line

export function useUtmTracking() {
  const [utmData, setUtmData] = useState<UtmData>({});

  useEffect(() => {
    try {
      // 1. Check existing stored UTMs
      const stored = sessionStorage.getItem(STORAGE_KEY);
      let parsed: UtmData = stored ? JSON.parse(stored) : {};

      // 2. Inspect current URL search params
      if (typeof window !== 'undefined') {
        const params = new URLSearchParams(window.location.search);
        let updated = false;

        const keys: (keyof UtmData)[] = [
          'utm_source',
          'utm_medium',
          'utm_campaign',
          'utm_content',
          'utm_term',
          'fbclid',
        ];

        keys.forEach((key) => {
          const val = params.get(key);
          if (val) {
            parsed[key] = val;
            updated = true;
          }
        });

        // If referrer comes from Instagram or Facebook and no utm_source was given
        if (!parsed.utm_source && document.referrer) {
          if (document.referrer.includes('instagram.com')) {
            parsed.utm_source = 'instagram_inapp';
            updated = true;
          } else if (document.referrer.includes('facebook.com')) {
            parsed.utm_source = 'facebook_inapp';
            updated = true;
          }
        }

        if (updated || stored) {
          sessionStorage.setItem(STORAGE_KEY, JSON.stringify(parsed));
        }

        setUtmData(parsed);
      }
    } catch (e) {
      console.warn('Failed to parse or persist UTM parameters', e);
    }
  }, []);

  const buildWhatsAppUrl = useCallback(
    (baseMessage: string, customPhone?: string) => {
      const phone = customPhone || DEFAULT_WHATSAPP_NUMBER;
      let finalMessage = baseMessage.trim();

      // Append subtle attribution code if UTMs exist
      const attributionParts: string[] = [];
      if (utmData.utm_source) attributionParts.push(`src:${utmData.utm_source}`);
      if (utmData.utm_campaign) attributionParts.push(`cmp:${utmData.utm_campaign}`);
      if (utmData.utm_content) attributionParts.push(`cnt:${utmData.utm_content}`);
      if (utmData.fbclid) attributionParts.push(`fb:verified`);

      if (attributionParts.length > 0) {
        finalMessage += `\n\n[Ref: ${attributionParts.join('|')}]`;
      }

      return `https://wa.me/${phone}?text=${encodeURIComponent(finalMessage)}`;
    },
    [utmData]
  );

  return {
    utmData,
    buildWhatsAppUrl,
  };
}
