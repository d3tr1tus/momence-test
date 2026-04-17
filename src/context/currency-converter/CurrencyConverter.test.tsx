import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
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

  it('converts on button click', async () => {
    renderWithProviders(<CurrencyConverter />);
    await screen.findByText('EUR');

    fireEvent.click(screen.getByText('Convert'));

    await waitFor(() => {
      expect(screen.getAllByText(/CZK/).length).toBeGreaterThan(2);
    });
  });

  it('converts on Enter key in amount input', async () => {
    renderWithProviders(<CurrencyConverter />);
    await screen.findByText('EUR');

    const input = screen.getByPlaceholderText('Enter amount');
    fireEvent.keyDown(input, { key: 'Enter' });

    await waitFor(() => {
      expect(screen.getAllByText(/CZK/).length).toBeGreaterThan(2);
    });
  });

  it('switches currency on pill click and converts', async () => {
    renderWithProviders(<CurrencyConverter />);
    await screen.findByText('USD');

    fireEvent.click(screen.getByText('USD'));

    await waitFor(() => {
      expect(screen.getAllByText(/CZK/).length).toBeGreaterThan(2);
    });
  });

  it('shows error message when API fails', async () => {
    (exchangeRatesApi.getExchangeRates as jest.Mock).mockRejectedValue(
      new Error('Network error'),
    );
    renderWithProviders(<CurrencyConverter />);

    await waitFor(() => {
      expect(
        screen.getByText('Failed to load exchange rates'),
      ).toBeInTheDocument();
    });
  });

  it('updates amount input value', async () => {
    renderWithProviders(<CurrencyConverter />);
    const input = screen.getByPlaceholderText(
      'Enter amount',
    ) as HTMLInputElement;

    await userEvent.clear(input);
    await userEvent.type(input, '500');

    expect(input.value).toBe('500');
  });
});
