# @saidabedi/design-system Integration Guide

A design system with **Terracotta + Teal** earth tones and **DM Sans + DM Serif Display** typography.

## Installation

```bash
npm install @saidabedi/design-system
# or
yarn add @saidabedi/design-system
# or
pnpm add @saidabedi/design-system
```

---

## Quick Start

### React Web

```tsx
import { createWebTheme } from '@saidabedi/design-system/web';

const theme = createWebTheme({ mode: 'light' }); // or 'dark'
```

### React Native

```tsx
import { createNativeTheme } from '@saidabedi/design-system/native';
import { Platform } from 'react-native';

const theme = createNativeTheme({
  mode: 'light', // or 'dark'
  platform: Platform.OS, // 'ios' | 'android' | 'custom'
});
```

---

## Web Font Setup

Add to your HTML `<head>` or CSS:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=DM+Serif+Display&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```

Or import in CSS:

```css
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=DM+Serif+Display&family=JetBrains+Mono:wght@400;500&display=swap');
```

---

## Package Exports

| Import Path | Use Case |
|-------------|----------|
| `@saidabedi/design-system` | Tokens only (safe default) |
| `@saidabedi/design-system/tokens` | Raw token values |
| `@saidabedi/design-system/web` | Web theme (rem units, CSS vars) |
| `@saidabedi/design-system/native` | React Native theme (numeric values) |

---

## Color Palette

### Brand Colors
| Token | Light | Dark | Usage |
|-------|-------|------|-------|
| `colors.brand.primary` | `#C4704B` Terracotta | `#D4896B` | Primary buttons, links |
| `colors.brand.secondary` | `#4A7C7C` Teal | `#6B9E9E` | Secondary actions |
| `colors.accent.DEFAULT` | `#4A7C7C` Teal | `#6B9E9E` | CTAs, highlights |

### Backgrounds
| Token | Light | Dark |
|-------|-------|------|
| `colors.background.primary` | `#FDF8F4` Warm Cream | `#1C1917` |
| `colors.background.secondary` | `#FAF5F0` | `#292524` |
| `colors.surface.primary` | `#FFFFFF` | `#292524` |

### Text
| Token | Light | Dark |
|-------|-------|------|
| `colors.text.primary` | `#44403C` | `#FAF9F7` |
| `colors.text.secondary` | `#78716C` | `#A8A29E` |
| `colors.text.link` | `#3D6666` | `#8EBABA` |

### Feedback
| Token | Color | Usage |
|-------|-------|-------|
| `colors.feedback.success` | Sage Green | Success states |
| `colors.feedback.warning` | Amber | Warnings |
| `colors.feedback.error` | Brick Red | Errors |
| `colors.feedback.info` | Teal | Information |

---

## Typography

### Font Families
| Token | Font | Usage |
|-------|------|-------|
| `fontFamilies.serif` | DM Serif Display | Display, H1-H3, blockquotes |
| `fontFamilies.sans` | DM Sans | Body, H4-H6, labels, UI |
| `fontFamilies.mono` | JetBrains Mono | Code |

### Text Styles

```tsx
// Display (DM Serif Display)
theme.typography.textStyles.display.hero    // 96px
theme.typography.textStyles.display.large   // 72px
theme.typography.textStyles.display.medium  // 60px
theme.typography.textStyles.display.small   // 48px

// Headings
theme.typography.textStyles.heading.h1  // 36px serif
theme.typography.textStyles.heading.h2  // 30px serif
theme.typography.textStyles.heading.h3  // 24px serif
theme.typography.textStyles.heading.h4  // 20px sans
theme.typography.textStyles.heading.h5  // 18px sans
theme.typography.textStyles.heading.h6  // 16px sans

// Body (DM Sans)
theme.typography.textStyles.body.large   // 18px
theme.typography.textStyles.body.medium  // 16px (default)
theme.typography.textStyles.body.small   // 14px

// Other
theme.typography.textStyles.lead         // Intro paragraphs
theme.typography.textStyles.label        // Form labels, buttons
theme.typography.textStyles.caption      // Helper text
theme.typography.textStyles.overline     // Small uppercase
theme.typography.textStyles.blockquote   // Quotes (serif)
theme.typography.textStyles.code         // Code blocks
```

---

## Spacing Scale

| Token | Value | Usage |
|-------|-------|-------|
| `spacing.xs` | 4px | Icon gaps |
| `spacing.sm` | 8px | Tight spacing |
| `spacing.md` | 12px | Compact |
| `spacing.lg` | 16px | Default |
| `spacing.xl` | 20px | Comfortable |
| `spacing['2xl']` | 24px | Section padding |
| `spacing['3xl']` | 32px | Card padding |
| `spacing['4xl']` | 40px | Large sections |

---

## Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `radii.sm` | 4px | Subtle |
| `radii.md` | 6px | Buttons, inputs |
| `radii.lg` | 8px | Cards |
| `radii.xl` | 12px | Modals |
| `radii.full` | 9999px | Pills, avatars |

---

## Usage Examples

### Web with styled-components

```tsx
import styled from 'styled-components';
import { createWebTheme } from '@saidabedi/design-system/web';

const theme = createWebTheme({ mode: 'light' });

const Button = styled.button`
  background: ${theme.colors.brand.primary};
  color: ${theme.colors.text.inverse};
  padding: ${theme.spacing.sm} ${theme.spacing.lg};
  border-radius: ${theme.radii.md};
  border: none;
  cursor: pointer;
  ${theme.typography.textStyles.label.medium};

  &:hover {
    background: ${theme.colors.brand.primaryHover};
  }
`;

const Card = styled.div`
  background: ${theme.colors.surface.primary};
  border: 1px solid ${theme.colors.border.primary};
  border-radius: ${theme.radii.lg};
  padding: ${theme.spacing['2xl']};
`;

const Title = styled.h1`
  ${theme.typography.textStyles.heading.h1};
  color: ${theme.colors.text.primary};
`;
```

### Web with Tailwind (CSS Variables)

```tsx
import { createWebTheme, generateCSSVariablesString } from '@saidabedi/design-system/web';

// Generate CSS variables
const theme = createWebTheme({ mode: 'light' });
const cssVars = generateCSSVariablesString(theme, ':root');

// Inject into your global styles, then use:
// className="bg-[var(--color-background-primary)]"
```

### React Native with StyleSheet

```tsx
import { StyleSheet, View, Text } from 'react-native';
import { createNativeTheme } from '@saidabedi/design-system/native';

const theme = createNativeTheme({ mode: 'light', platform: 'ios' });

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background.primary,
    padding: theme.spacing.lg,
  },
  card: {
    backgroundColor: theme.colors.surface.primary,
    borderRadius: theme.radii.lg,
    padding: theme.spacing['2xl'],
    borderWidth: 1,
    borderColor: theme.colors.border.primary,
  },
  title: {
    ...theme.typography.textStyles.heading.h1,
    color: theme.colors.text.primary,
  },
  body: {
    ...theme.typography.textStyles.body.medium,
    color: theme.colors.text.secondary,
  },
  button: {
    backgroundColor: theme.colors.brand.primary,
    paddingVertical: theme.spacing.sm,
    paddingHorizontal: theme.spacing.lg,
    borderRadius: theme.radii.md,
  },
  buttonText: {
    ...theme.typography.textStyles.label.medium,
    color: theme.colors.text.inverse,
    textAlign: 'center',
  },
});
```

### Theme Provider (React Context)

```tsx
// theme-provider.tsx
import { createContext, useContext, useState, ReactNode } from 'react';
import { createWebTheme, WebTheme } from '@saidabedi/design-system/web';

type Mode = 'light' | 'dark';

const ThemeContext = createContext<{
  theme: WebTheme;
  mode: Mode;
  toggleMode: () => void;
} | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<Mode>('light');
  const theme = createWebTheme({ mode });

  const toggleMode = () => setMode(m => m === 'light' ? 'dark' : 'light');

  return (
    <ThemeContext.Provider value={{ theme, mode, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
};
```

---

## Dark Mode

Both `createWebTheme` and `createNativeTheme` accept a `mode` option:

```tsx
// Light mode
const lightTheme = createWebTheme({ mode: 'light' });

// Dark mode
const darkTheme = createWebTheme({ mode: 'dark' });
```

Colors automatically adjust for proper contrast in each mode.

---

## TypeScript

Full type support included:

```tsx
import type { WebTheme, Colors } from '@saidabedi/design-system/web';
import type { NativeTheme } from '@saidabedi/design-system/native';
import type { Spacing, TextStyles } from '@saidabedi/design-system/tokens';
```

---

## Version

Current: `0.1.0`

```bash
# Check for updates
npm outdated @saidabedi/design-system

# Update
npm update @saidabedi/design-system
```

---

## Links

- **npm:** https://www.npmjs.com/package/@saidabedi/design-system
- **Colors:** Terracotta `#C4704B` + Teal `#4A7C7C`
- **Fonts:** DM Sans + DM Serif Display
