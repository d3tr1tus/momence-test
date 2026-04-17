# Momence test - Currency Converter

A React application that converts Czech Koruna (CZK) to world currencies using live exchange rates from the Czech National Bank (CNB).

## Features

- Real-time exchange rates from the CNB daily fixing
- Convert CZK to multiple currencies (EUR, USD, GBP, etc.)
- Quick currency selection via pill buttons
- Responsive design optimized for mobile and desktop
- Keyboard support (Enter to convert)

## Tech Stack

- React 19 with TypeScript
- styled-components v6 with ThemeProvider
- TanStack React Query v5
- Yarn

## Getting Started

### Prerequisites

- Node.js (v16+)
- Yarn

### Installation

```bash
yarn install
```

### Development

```bash
yarn start
```

Runs the app at [http://localhost:3000](http://localhost:3000). The development proxy forwards `/api/exchange-rates` to the CNB API automatically.

### Production Build

```bash
yarn build
```

### Running Tests

```bash
yarn test
```

### Linting

```bash
yarn lint
yarn lint:fix
```

## Deployment

The app is configured for Vercel. The `vercel.json` rewrites `/api/exchange-rates` to the CNB API in production, eliminating the need for a separate backend server.

## Project Structure

```
src/
  api/                  API layer (exchange rate fetching)
  components/           Reusable UI components (Badge, Button, Card, Input, Pill, Typography)
  context/              Feature modules (currency-converter)
  hooks/data/           Data fetching hooks (React Query)
  lib/                  Configured library instances (axios)
  theme/                Global theme, styled-components type augmentation
  types/                Shared type definitions
  utils/                Utility functions (CNB rate parser)
```
