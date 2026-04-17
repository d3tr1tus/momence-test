import React, { useState, useMemo } from 'react';
import { useExchangeRates } from 'hooks/data/useExchangeRates';
import Card from 'components/Card/Card';
import Badge from 'components/Badge/Badge';
import Typography from 'components/Typography/Typography';
import Input from 'components/Input/Input';
import Button from 'components/Button/Button';
import Pill from 'components/Pill/Pill';
import * as S from 'context/currency-converter/style';
import dayjs from 'dayjs';

const CurrencyConverter: React.FC = () => {
  const [amount, setAmount] = useState('1000');
  const [currency, setCurrency] = useState('EUR');
  const [converted, setConverted] = useState<{
    result: number;
    rate: number;
    amount: string;
  } | null>(null);

  const { data, isLoading, error } = useExchangeRates();

  const formattedResult = useMemo(() => {
    if (!converted) return null;
    return converted.result.toLocaleString('cs-CS', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }, [converted]);

  const handleConvert = (overrideCurrency?: string) => {
    const activeCurrency = overrideCurrency ?? currency;
    if (!data || !amount) return;
    const rateInfo = data.rates[activeCurrency];
    if (!rateInfo) return;

    const czk = parseFloat(amount.replace(/\s/g, ''));
    if (isNaN(czk)) return;

    const result = (czk / rateInfo.rate) * rateInfo.amount;
    setConverted({
      result,
      rate: rateInfo.rate / rateInfo.amount,
      amount: amount,
    });
  };

  const handleSetCurrencyAndConvert = (newCurrency: string) => {
    setCurrency(newCurrency);
    handleConvert(newCurrency);
  };

  return (
    <S.Page>
      <Card>
        <S.Header>
          <Badge css="margin-bottom: 1rem;">CZK</Badge>
          <Typography variant="h1" gutterBottom="0.25rem">
            Currency Converter
          </Typography>
          <Typography variant="subtitle">
            Convert Czech Koruna to world currencies
          </Typography>
        </S.Header>

        <S.Field>
          <Typography variant="label" gutterBottom="0.5rem">
            Amount
          </Typography>
          <Input
            type="text"
            inputMode="decimal"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleConvert()}
            suffix="CZK"
          />
        </S.Field>

        <S.Field>
          <Typography variant="label" gutterBottom="0.5rem">
            Convert to
          </Typography>
          <S.PillGrid>
            {Object.entries(data?.rates || {}).map(([code, rate]) => (
              <Pill
                key={code}
                active={currency === code}
                onClick={() => handleSetCurrencyAndConvert(code)}
                css="flex-direction: column; gap: 0;"
              >
                {code}
                <S.PillCurrencyName>{rate.currency}</S.PillCurrencyName>
              </Pill>
            ))}
          </S.PillGrid>
        </S.Field>

        <S.Field>
          <Button
            fullWidth
            onClick={() => handleConvert()}
            disabled={isLoading || !amount}
          >
            {isLoading ? 'Loading rates...' : 'Convert'}
          </Button>
        </S.Field>

        {converted && formattedResult && (
          <S.ResultArea>
            <Typography variant="body" gutterBottom="0.5rem">
              {converted.amount} CZK =
            </Typography>
            <S.ResultValue>
              <Typography variant="display">{formattedResult}</Typography>
              <Typography variant="displaySub">{currency}</Typography>
            </S.ResultValue>
            <Typography variant="body" color="#A69E94">
              1 CZK = {(1 / converted.rate).toFixed(5)} {currency}
            </Typography>
          </S.ResultArea>
        )}

        {error && (
          <S.ResultArea>
            <Typography variant="body">
              Failed to load exchange rates
            </Typography>
          </S.ResultArea>
        )}

        {data && (
          <Typography variant="caption" align="center" gutterBottom="0">
            Rates updated {dayjs(data.date).format('DD.MM.YYYY')} &middot;
            Source: CNB
          </Typography>
        )}
      </Card>
    </S.Page>
  );
};

export default CurrencyConverter;
