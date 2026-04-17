import api from 'lib/axios';
import { ExchangeRatesResult } from 'types/exchange';
import { parseCnbRates } from 'utils/exchange-rate';

export const getExchangeRates = async (): Promise<ExchangeRatesResult> => {
  const { data } = await api.get<string>('/api/exchange-rates', {
    responseType: 'text',
  });
  return parseCnbRates(data);
};
