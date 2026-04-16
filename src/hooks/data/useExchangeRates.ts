import { useQuery } from '@tanstack/react-query';
import { getExchangeRates } from 'api/exchange-rates';

export const useExchangeRates = () => {
  return useQuery({
    queryKey: ['exchange-rates'],
    queryFn: getExchangeRates,
    staleTime: 1000 * 60 * 60,
    refetchOnWindowFocus: false,
  });
};
