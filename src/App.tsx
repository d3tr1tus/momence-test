import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/theme';
import { GlobalStyle } from 'theme/GlobalStyle';
import CurrencyConverter from 'context/currency-converter/CurrencyConverter';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <CurrencyConverter />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
