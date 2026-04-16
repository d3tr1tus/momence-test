# Momence Test

## Tech Stack

- **Framework:** React 19 with TypeScript (Create React App)
- **Styling:** styled-components v6 with ThemeProvider
- **Data Fetching:** TanStack React Query v5
- **Package Manager:** Yarn

## Commands

- `yarn start` — Start dev server
- `yarn build` — Production build
- `yarn test` — Run tests

## Conventions

- Functional components only
- styled-components for all styling (no CSS files)
- TypeScript strict mode enabled
- **Global theme** with primary/secondary colors via ThemeProvider — all colors reference theme tokens, never hardcoded
- **Styles in separate files** — each component's styled-components live in a `style.ts` file next to the component
- **Structure by context** — group files by feature/domain, not by type (e.g. `src/currency-converter/` not `src/components/` + `src/hooks/`)
- **Use rem units** — all sizing (font-size, padding, margin, radii, gaps, etc.) in `rem`, not `px`. Exception: borders stay in `px` (too small for rem)
- **Arrow functions everywhere** — all functions (components, helpers, handlers, hooks) use arrow function syntax with explicit strict types
- **Component template** — every `.tsx` component follows this structure:
  ```tsx
  import React from 'react';

  const ComponentName: React.FC = () => {
    return <></>;
  };

  export default ComponentName;
  ```

## References

- [styled-components LLM reference](https://styled-components.com/llms.txt)
