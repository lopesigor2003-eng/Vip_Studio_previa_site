import test from 'node:test';
import assert from 'node:assert/strict';
import {
  buildWhatsAppLink,
  getStudioOpenStatus,
  validateLeadForm,
  formatPhoneMask,
} from './fitness.ts';

test('buildWhatsAppLink formats standard WhatsApp URL with 55 country code and encoded message', () => {
  const link = buildWhatsAppLink('055991141979', 'Olá, gostaria de saber mais sobre o Vip Studio!');
  assert.ok(link.includes('wa.me/5555991141979'));
  assert.ok(link.includes('text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20Vip%20Studio!'));
});

test('buildWhatsAppLink handles already normalized 55 phone', () => {
  const link = buildWhatsAppLink('5555991141979');
  assert.ok(link.startsWith('https://wa.me/5555991141979'));
});

test('getStudioOpenStatus returns true for Monday at 10:00 AM Brazil time', () => {
  // Monday 2026-10-26 13:00 UTC = 10:00 AM in America/Sao_Paulo
  const mondayMorning = new Date('2026-10-26T13:00:00Z');
  const status = getStudioOpenStatus(mondayMorning, 'America/Sao_Paulo');
  assert.equal(status.isOpen, true);
  assert.ok(status.message.includes('Aberto'));
});

test('getStudioOpenStatus returns false for Sunday', () => {
  // Sunday 2026-10-25 15:00 UTC = 12:00 PM in America/Sao_Paulo
  const sundayNoon = new Date('2026-10-25T15:00:00Z');
  const status = getStudioOpenStatus(sundayNoon, 'America/Sao_Paulo');
  assert.equal(status.isOpen, false);
});

test('validateLeadForm rejects empty name and invalid phone', () => {
  const invalidResult = validateLeadForm({
    name: 'Jo',
    phone: '123',
    interest: '',
  });
  assert.equal(invalidResult.isValid, false);
  assert.ok(invalidResult.errors.name);
  assert.ok(invalidResult.errors.phone);
  assert.ok(invalidResult.errors.interest);
});

test('validateLeadForm approves valid data', () => {
  const validResult = validateLeadForm({
    name: 'Carlos Oliveira',
    phone: '55991141979',
    interest: 'Treino Personalizado',
    email: 'carlos@example.com',
  });
  assert.equal(validResult.isValid, true);
  assert.equal(Object.keys(validResult.errors).length, 0);
});

test('formatPhoneMask formats Brazilian telephone digits properly', () => {
  assert.equal(formatPhoneMask('55991141979'), '(55) 99114-1979');
  assert.equal(formatPhoneMask('55'), '(55');
  assert.equal(formatPhoneMask('559911'), '(55) 9911');
});
