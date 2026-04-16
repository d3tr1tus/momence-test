import api from 'lib/axios';
import { ExchangeRatesResult } from 'types/exchange';
import { parseCnbRates } from 'utils/exchange-rate';

const CNB_URL =
  'https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt';

const PROXY_URL = `https://corsproxy.io/?url=${encodeURIComponent(CNB_URL)}`;

export const getExchangeRates = async (): Promise<ExchangeRatesResult> => {
  const { data } = await api.get<string>(PROXY_URL, {
    responseType: 'text',
  });
  return parseCnbRates(data);
};
