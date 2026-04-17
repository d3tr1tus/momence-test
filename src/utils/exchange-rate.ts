import { ExchangeRate, ExchangeRatesResult } from 'types/exchange';

export const parseCnbRates = (text: string): ExchangeRatesResult => {
  const lines = text.trim().split('\n');
  const dateLine = lines[0];
  const date = dateLine.replace(/ #.*$/, '').trim();
  const rates: Record<string, ExchangeRate> = {};

  for (let i = 2; i < lines.length; i++) {
    const parts = lines[i].split('|');
    if (parts.length >= 5) {
      const country = parts[0];
      const currency = parts[1];
      const amount = parseInt(parts[2], 10);
      const code = parts[3];
      const rate = parseFloat(parts[4].replace(',', '.'));
      rates[code] = { country, currency, code, rate, amount };
    }
  }

  return { rates, date };
};
