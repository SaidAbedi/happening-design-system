# @my-scope/design-system

Platform-agnostic design tokens and theme adapters for React web and React Native applications.

## Features

- **Single Package**: One npm package with subpath exports for tokens, web, and native
- **Platform-Agnostic Tokens**: Semantic tokens that work across platforms
- **Type-Safe**: Full TypeScript support with exported types
- **Tree-Shakeable**: Import only what you need
- **ESM + CJS**: Dual module format support

## Installation

```bash
npm install @my-scope/design-system
# or
yarn add @my-scope/design-system
# or
pnpm add @my-scope/design-system
```

## Package Structure

```
@my-scope/design-system
├── /tokens  → Platform-agnostic design tokens
├── /web     → Web theme adapter (rem units, CSS variables)
└── /native  → React Native theme adapter (numeric values)
```

## Quick Start

### React Web App

```tsx
import { createWebTheme, generateCSSVariablesString } from '@my-scope/design-system/web';

// Create theme
const theme = createWebTheme({ mode: 'light' });

// Use with styled-components
import styled from 'styled-components';

const Button = styled.button`
  background: ${theme.colors.brand.primary};
  color: ${theme.colors.text.inverse};
  padding: ${theme.spacing.sm} ${theme.spacing.lg};
  border-radius: ${theme.radii.md};
  font-size: ${theme.typography.sizes.md};
  font-weight: ${theme.typography.weights.medium};
  border: none;
  cursor: pointer;

  &:hover {
    background: ${theme.colors.brand.primaryHover};
  }
`;

// Or use CSS custom properties
const cssVariables = generateCSSVariablesString(theme);
// Inject into your global styles
```

### React Native App

```tsx
import { createNativeTheme } from '@my-scope/design-system/native';
import { Platform, StyleSheet, View, Text } from 'react-native';

// Create theme with platform detection
const theme = createNativeTheme({
  mode: 'light',
  platform: Platform.OS as 'ios' | 'android',
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background.primary,
    padding: theme.spacing.lg,
    borderRadius: theme.radii.lg,
  },
  title: {
    ...theme.typography.textStyles.heading.h1,
    color: theme.colors.text.primary,
  },
  body: {
    ...theme.typography.textStyles.body.medium,
    color: theme.colors.text.secondary,
  },
});

function Card() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello</Text>
      <Text style={styles.body}>Welcome to the app</Text>
    </View>
  );
}
```

### Using Raw Tokens

For shared logic or custom adapters, import tokens directly:

```tsx
import { colors, spacing, textStyles } from '@my-scope/design-system/tokens';

// Access semantic values
console.log(colors.brand.primary);  // '#2563eb'
console.log(spacing.lg);            // 16
console.log(textStyles.body.medium.fontSize); // 16
```

## API Reference

### Subpath Exports

| Import Path | Description |
|-------------|-------------|
| `@my-scope/design-system` | Root export (tokens only, safe for any environment) |
| `@my-scope/design-system/tokens` | Platform-agnostic design tokens |
| `@my-scope/design-system/web` | Web theme adapter |
| `@my-scope/design-system/native` | React Native theme adapter |

### Tokens

#### Colors

Semantic color tokens organized by purpose:

```ts
colors.brand.primary      // Primary brand color
colors.background.primary // Main background
colors.text.primary       // Primary text color
colors.border.primary     // Default border color
colors.feedback.success   // Success state color
colors.interactive.primary // Interactive element color
```

#### Spacing

Consistent spacing scale (base unit: 4px):

```ts
spacing.none   // 0
spacing.xs     // 4
spacing.sm     // 8
spacing.md     // 12
spacing.lg     // 16
spacing.xl     // 20
spacing['2xl'] // 24
// ... up to 9xl (128)
```

#### Typography

Font families, weights, sizes, and pre-composed text styles:

```ts
textStyles.heading.h1  // { fontSize, fontWeight, lineHeight, letterSpacing, fontFamily }
textStyles.body.medium
textStyles.label.small
textStyles.code.inline
```

#### Radii

Border radius scale:

```ts
radii.none  // 0
radii.sm    // 4
radii.md    // 6
radii.lg    // 8
radii.xl    // 12
radii.full  // 9999 (pill shape)
```

### Web Theme

```ts
import { createWebTheme, generateCSSVariables } from '@my-scope/design-system/web';

// Create theme
const theme = createWebTheme({ mode: 'light' }); // or 'dark'

// Theme provides rem-converted values
theme.spacing.lg        // '1rem' (16px / 16)
theme.typography.sizes.lg // '1rem'
theme.radii.md          // '0.375rem'

// Generate CSS custom properties
const vars = generateCSSVariables(theme);
// { '--color-brand-primary': '#2563eb', ... }

const cssString = generateCSSVariablesString(theme, ':root');
// :root { --color-brand-primary: #2563eb; ... }
```

### Native Theme

```ts
import { createNativeTheme, shadows } from '@my-scope/design-system/native';

// Create theme
const theme = createNativeTheme({
  mode: 'light',
  platform: 'ios', // or 'android'
});

// Theme provides numeric values (density-independent pixels)
theme.spacing.lg        // 16
theme.typography.sizes.lg // 16
theme.radii.md          // 6

// Text styles include calculated lineHeight
theme.typography.textStyles.body.medium
// { fontSize: 16, fontWeight: '400', lineHeight: 24, letterSpacing: 0, fontFamily: 'System' }

// Pre-defined shadows
shadows.md // { shadowColor, shadowOffset, shadowOpacity, shadowRadius, elevation }
```

## Theming with Context (React)

### Web (React Context + styled-components)

```tsx
// theme-context.tsx
import { createContext, useContext, ReactNode, useState } from 'react';
import { createWebTheme, WebTheme } from '@my-scope/design-system/web';
import { ThemeProvider as SCThemeProvider } from 'styled-components';

type ThemeMode = 'light' | 'dark';

const ThemeContext = createContext<{
  mode: ThemeMode;
  toggleMode: () => void;
} | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<ThemeMode>('light');
  const theme = createWebTheme({ mode });

  const toggleMode = () => setMode(m => m === 'light' ? 'dark' : 'light');

  return (
    <ThemeContext.Provider value={{ mode, toggleMode }}>
      <SCThemeProvider theme={theme}>
        {children}
      </SCThemeProvider>
    </ThemeContext.Provider>
  );
}

export const useThemeMode = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useThemeMode must be used within ThemeProvider');
  return context;
};
```

### React Native (Context)

```tsx
// theme-context.tsx
import { createContext, useContext, ReactNode, useState } from 'react';
import { Platform, useColorScheme } from 'react-native';
import { createNativeTheme, NativeTheme } from '@my-scope/design-system/native';

const ThemeContext = createContext<NativeTheme | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const colorScheme = useColorScheme();
  const theme = createNativeTheme({
    mode: colorScheme ?? 'light',
    platform: Platform.OS as 'ios' | 'android',
  });

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const theme = useContext(ThemeContext);
  if (!theme) throw new Error('useTheme must be used within ThemeProvider');
  return theme;
};
```

## Building

```bash
# Install dependencies
npm install

# Build the package
npm run build

# Type check
npm run typecheck

# Watch mode (development)
npm run build:watch
```

## Output Structure

After building, the `dist/` folder contains:

```
dist/
├── index.js          # ESM root
├── index.cjs         # CJS root
├── index.d.ts        # Types root
├── tokens/
│   ├── index.js
│   ├── index.cjs
│   └── index.d.ts
├── web/
│   ├── index.js
│   ├── index.cjs
│   └── index.d.ts
└── native/
    ├── index.js
    ├── index.cjs
    └── index.d.ts
```

## Publishing

```bash
# Ensure you're logged into your private registry
npm login --registry=https://your-registry.com

# Publish
npm publish
```

## Design Principles

1. **Semantic over Primitive**: Never use raw values like `blue500` in app code. Always use semantic tokens like `colors.brand.primary`.

2. **Platform Adapters**: Tokens are platform-agnostic. Use web/native adapters to get platform-appropriate values.

3. **Single Source of Truth**: All design decisions live in the tokens. Adapters only transform, never define.

4. **Type Safety**: Full TypeScript coverage prevents typos and enables autocomplete.

5. **Tree Shaking**: Import from subpaths to include only what you need.
