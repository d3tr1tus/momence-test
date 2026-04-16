export interface ExchangeRate {
  currency: string;
  code: string;
  rate: number;
  amount: number;
}

export interface ExchangeRatesResult {
  rates: Record<string, ExchangeRate>;
  date: string;
}
