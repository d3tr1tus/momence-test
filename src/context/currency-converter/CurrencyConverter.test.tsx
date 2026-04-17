import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/theme';
import CurrencyConverter from 'context/currency-converter/CurrencyConverter';
import * as exchangeRatesApi from 'api/exchange-rates';

jest.mock('api/exchange-rates');

const mockRates = {
  date: '17 Apr 2025',
  rates: {
    EUR: {
      country: 'Euro zone',
      currency: 'euro',
      code: 'EUR',
      rate: 25.935,
      amount: 1,
    },
    USD: {
      country: 'USA',
      currency: 'dollar',
      code: 'USD',
      rate: 22.818,
      amount: 1,
    },
  },
};

const renderWithProviders = (ui: React.ReactElement) => {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false } },
  });
  return render(
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>{ui}</ThemeProvider>
    </QueryClientProvider>,
  );
};

beforeEach(() => {
  (exchangeRatesApi.getExchangeRates as jest.Mock).mockResolvedValue(mockRates);
});

describe('CurrencyConverter', () => {
  it('renders heading and input', async () => {
    renderWithProviders(<CurrencyConverter />);
    expect(screen.getByText('Currency Converter')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter amount')).toBeInTheDocument();
  });

  it('renders currency pills after data loads', async () => {
    renderWithProviders(<CurrencyConverter />);
    await screen.findByText('EUR');
    expect(screen.getByText('USD')).toBeInTheDocument();
  });

  it('computes correct conversion result for EUR', async () => {
    renderWithProviders(<CurrencyConverter />);
    await screen.findByText('EUR');

    fireEvent.click(screen.getByText('Convert'));

    await screen.findByText('38,56');
    expect(screen.getByText('1000 CZK =')).toBeInTheDocument();
  });

  it('computes correct conversion result for USD', async () => {
    renderWithProviders(<CurrencyConverter />);
    await screen.findByText('USD');

    fireEvent.click(screen.getByText('USD'));

    await screen.findByText('43,83');
  });

  it('converts on Enter key in amount input', async () => {
    renderWithProviders(<CurrencyConverter />);
    await screen.findByText('EUR');

    const input = screen.getByPlaceholderText('Enter amount');
    fireEvent.keyDown(input, { key: 'Enter' });

    await screen.findByText('38,56');
  });

  it('shows exchange rate info after conversion', async () => {
    renderWithProviders(<CurrencyConverter />);
    await screen.findByText('EUR');

    fireEvent.click(screen.getByText('Convert'));

    await screen.findByText(/1 CZK = 0\.03856/);
  });

  it('converts with custom amount', async () => {
    renderWithProviders(<CurrencyConverter />);
    await screen.findByText('EUR');

    const input = screen.getByPlaceholderText(
      'Enter amount',
    ) as HTMLInputElement;
    await userEvent.clear(input);
    await userEvent.type(input, '500');

    fireEvent.click(screen.getByText('Convert'));

    await screen.findByText('19,28');
  });

  it('does not convert with empty amount', async () => {
    renderWithProviders(<CurrencyConverter />);
    await screen.findByText('EUR');

    const input = screen.getByPlaceholderText(
      'Enter amount',
    ) as HTMLInputElement;
    await userEvent.clear(input);

    fireEvent.click(screen.getByText('Convert'));

    expect(screen.queryByText(/CZK =/)).not.toBeInTheDocument();
  });

  it('does not convert with non-numeric amount', async () => {
    renderWithProviders(<CurrencyConverter />);
    await screen.findByText('EUR');

    const input = screen.getByPlaceholderText(
      'Enter amount',
    ) as HTMLInputElement;
    await userEvent.clear(input);
    await userEvent.type(input, 'abc');

    fireEvent.click(screen.getByText('Convert'));

    expect(screen.queryByText(/CZK =/)).not.toBeInTheDocument();
  });

  it('shows error message when API fails', async () => {
    (exchangeRatesApi.getExchangeRates as jest.Mock).mockRejectedValue(
      new Error('Network error'),
    );
    renderWithProviders(<CurrencyConverter />);

    await screen.findByText('Failed to load exchange rates');
  });

  it('displays rate date from API', async () => {
    renderWithProviders(<CurrencyConverter />);

    await screen.findByText(/17\.04\.2025/);
  });
});
