export const WHATSAPP_PHONE =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '573214230372';

export const PATIENT_WHATSAPP_MESSAGE =
  'Hola, vengo de la página de Abstergo y quiero cotizar un tratamiento dental en Cali.';

export const CLINIC_WHATSAPP_MESSAGE =
  'Hola, tengo una clínica y quiero conocer la alianza con Abstergo.';

export interface UtmAttribution {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  fbclid?: string;
}

export function buildWhatsAppLink(
  message: string,
  attribution?: UtmAttribution,
  phoneOverride?: string
): string {
  const phone = phoneOverride || WHATSAPP_PHONE;
  let finalMessage = message.trim();

  if (attribution) {
    const parts: string[] = [];
    if (attribution.utm_source) parts.push(`src:${attribution.utm_source}`);
    if (attribution.utm_campaign) parts.push(`cmp:${attribution.utm_campaign}`);
    if (attribution.utm_content) parts.push(`cnt:${attribution.utm_content}`);
    if (attribution.fbclid) parts.push('fb:verified');

    if (parts.length > 0) {
      finalMessage += `\n\n[Ref: ${parts.join('|')}]`;
    }
  }

  return `https://wa.me/${phone}?text=${encodeURIComponent(finalMessage)}`;
}
