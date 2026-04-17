import { parseCnbRates } from 'utils/exchange-rate';

const SAMPLE_RESPONSE = `17 Apr 2025 #75
Country|Currency|Amount|Code|Rate
Australia|dollar|1|AUD|14.462
Brazil|real|1|BRL|4.159
Euro zone|euro|1|EUR|25.935
USA|dollar|1|USD|22.818`;

describe('parseCnbRates', () => {
  it('parses date from the first line', () => {
    const result = parseCnbRates(SAMPLE_RESPONSE);
    expect(result.date).toBe('17 Apr 2025');
  });

  it('parses all currency rates', () => {
    const result = parseCnbRates(SAMPLE_RESPONSE);
    expect(Object.keys(result.rates)).toEqual(['AUD', 'BRL', 'EUR', 'USD']);
  });

  it('parses rate details correctly', () => {
    const result = parseCnbRates(SAMPLE_RESPONSE);
    expect(result.rates['EUR']).toEqual({
      country: 'Euro zone',
      currency: 'euro',
      code: 'EUR',
      rate: 25.935,
      amount: 1,
    });
  });

  it('handles amount greater than 1', () => {
    const response = `17 Apr 2025 #75
Country|Currency|Amount|Code|Rate
Indonesia|rupiah|1000|IDR|1.500`;

    const result = parseCnbRates(response);
    expect(result.rates['IDR'].amount).toBe(1000);
  });

  it('returns empty rates for empty input', () => {
    const response = `17 Apr 2025 #75
Country|Currency|Amount|Code|Rate`;

    const result = parseCnbRates(response);
    expect(result.rates).toEqual({});
    expect(result.date).toBe('17 Apr 2025');
  });
});
