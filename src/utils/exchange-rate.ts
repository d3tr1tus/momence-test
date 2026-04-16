import { ExchangeRate, ExchangeRatesResult } from '../types/exchange';

export const parseCnbRates = (text: string): ExchangeRatesResult => {
  const lines: string[] = text.trim().split('\n');
  const dateLine: string = lines[0];
  const date: string = dateLine.replace(/ #.*$/, '').trim();
  const rates: Record<string, ExchangeRate> = {};

  for (let i = 2; i < lines.length; i++) {
    const parts: string[] = lines[i].split('|');
    if (parts.length >= 5) {
      const currency: string = parts[0];
      const amount: number = parseInt(parts[2], 10);
      const code: string = parts[3];
      const rate: number = parseFloat(parts[4].replace(',', '.'));
      rates[code] = { currency, code, rate, amount };
    }
  }

  return { rates, date };
};
