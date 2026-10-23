/**
 * Utility functions for Vip Studio landing page business logic.
 */

export interface BusinessStatus {
  isOpen: boolean;
  message: string;
  nextSchedule: string;
}

export interface LeadFormData {
  name: string;
  phone: string;
  email?: string;
  interest: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

/**
 * Sanitizes phone numbers and generates a standard WhatsApp link
 */
export function buildWhatsAppLink(
  rawPhone: string = '055991141979',
  customMessage: string = 'Olá, gostaria de saber mais sobre o Vip Studio!'
): string {
  // Extract only digits
  let cleanDigits = rawPhone.replace(/\D/g, '');
  
  // If starts with leading 0 (e.g. 055991141979), strip leading 0 -> 55991141979
  if (cleanDigits.startsWith('0')) {
    cleanDigits = cleanDigits.replace(/^0+/, '');
  }

  // If length is 10 or 11 (e.g. 55991141979), add Brazilian country code (55)
  if (cleanDigits.length === 10 || cleanDigits.length === 11) {
    cleanDigits = '55' + cleanDigits;
  }
  
  const encodedText = encodeURIComponent(customMessage.trim());
  return `https://wa.me/${cleanDigits}?text=${encodedText}`;
}

/**
 * Checks if the studio is currently open based on Santa Maria - RS operating hours:
 * - Monday to Thursday: 07:00 – 21:00
 * - Friday: 06:00 – 18:00
 * - Saturday & Sunday: Closed
 * 
 * @param date optional Date instance (defaults to now)
 * @param timeZone optional timezone (defaults to America/Sao_Paulo)
 */
export function getStudioOpenStatus(
  date: Date = new Date(),
  timeZone: string = 'America/Sao_Paulo'
): BusinessStatus {
  try {
    // Format date in Santa Maria timezone
    const formatter = new Intl.DateTimeFormat('pt-BR', {
      timeZone,
      weekday: 'narrow', // 'seg.', 'ter.', etc or we use weekday number
      hour: 'numeric',
      minute: 'numeric',
      hour12: false,
    });
    
    // Extract day of week (0 = Sunday, 1 = Monday, ..., 6 = Saturday) and hour/minute
    const parts = formatter.formatToParts(date);
    let hour = 0;
    let minute = 0;
    for (const part of parts) {
      if (part.type === 'hour') hour = parseInt(part.value, 10);
      if (part.type === 'minute') minute = parseInt(part.value, 10);
    }

    // Determine weekday in target timezone
    const weekdayStr = new Intl.DateTimeFormat('en-US', {
      timeZone,
      weekday: 'short',
    }).format(date);

    const timeInMinutes = hour * 60 + minute;

    // Monday (Mon) to Thursday (Thu): 07:00 to 21:00 (420 to 1260 mins)
    if (['Mon', 'Tue', 'Wed', 'Thu'].includes(weekdayStr)) {
      const openMinutes = 7 * 60; // 07:00
      const closeMinutes = 21 * 60; // 21:00

      if (timeInMinutes >= openMinutes && timeInMinutes < closeMinutes) {
        return {
          isOpen: true,
          message: 'Aberto agora · Fecha às 21:00',
          nextSchedule: 'Segunda a Quinta: 07:00 – 21:00',
        };
      } else if (timeInMinutes < openMinutes) {
        return {
          isOpen: false,
          message: 'Fechado · Abre hoje às 07:00',
          nextSchedule: 'Segunda a Quinta: 07:00 – 21:00',
        };
      } else {
        return {
          isOpen: false,
          message: 'Fechado no momento',
          nextSchedule: weekdayStr === 'Thu' ? 'Sexta: 06:00 – 18:00' : 'Abre amanhã às 07:00',
        };
      }
    }

    // Friday (Fri): 06:00 to 18:00 (360 to 1080 mins)
    if (weekdayStr === 'Fri') {
      const openMinutes = 6 * 60; // 06:00
      const closeMinutes = 18 * 60; // 18:00

      if (timeInMinutes >= openMinutes && timeInMinutes < closeMinutes) {
        return {
          isOpen: true,
          message: 'Aberto agora · Fecha às 18:00',
          nextSchedule: 'Sexta: 06:00 – 18:00',
        };
      } else if (timeInMinutes < openMinutes) {
        return {
          isOpen: false,
          message: 'Fechado · Abre hoje às 06:00',
          nextSchedule: 'Sexta: 06:00 – 18:00',
        };
      } else {
        return {
          isOpen: false,
          message: 'Fechado no fim de semana',
          nextSchedule: 'Reabre segunda às 07:00',
        };
      }
    }

    // Weekend (Sat, Sun)
    return {
      isOpen: false,
      message: 'Fechado aos fins de semana',
      nextSchedule: 'Reabre segunda às 07:00',
    };
  } catch {
    return {
      isOpen: true,
      message: 'Seg–Qui: 07h–21h | Sex: 06h–18h',
      nextSchedule: 'R. Felipe de Oliveira, 460 - Centro',
    };
  }
}

/**
 * Validates the experimental class booking form
 */
export function validateLeadForm(data: LeadFormData): ValidationResult {
  const errors: Record<string, string> = {};

  if (!data.name || data.name.trim().length < 3) {
    errors.name = 'Por favor, informe seu nome completo (mínimo 3 caracteres).';
  }

  const phoneDigits = data.phone ? data.phone.replace(/\D/g, '') : '';
  if (phoneDigits.length < 10 || phoneDigits.length > 13) {
    errors.phone = 'Informe um WhatsApp válido com DDD (ex: 55 99114-1979).';
  }

  if (data.email && data.email.trim().length > 0) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email.trim())) {
      errors.email = 'Insira um e-mail válido ou deixe em branco.';
    }
  }

  if (!data.interest || data.interest.trim().length === 0) {
    errors.interest = 'Selecione seu principal objetivo de treino.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Formats a Brazilian telephone number for input mask
 */
export function formatPhoneMask(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 11);
  if (digits.length <= 2) {
    return digits.length ? `(${digits}` : '';
  }
  if (digits.length <= 6) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  }
  if (digits.length <= 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  }
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`;
}
