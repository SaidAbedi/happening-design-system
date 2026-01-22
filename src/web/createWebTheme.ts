/**
 * Web Theme Adapter - ValidAI Neumorphic Design System
 *
 * Transforms platform-agnostic tokens into web-friendly theme objects.
 * Converts pixel values to rem, provides CSS custom property generation, etc.
 */

import {
  colors,
  colorsDark,
  spacing,
  spacingSemantics,
  fontFamilies,
  fontWeights,
  fontSizes,
  lineHeights,
  letterSpacings,
  textStyles,
  radii,
  radiiSemantics,
  shadowsLight,
  shadowsDark,
  shadowValues,
  shadowColors,
  gradientsLight,
  gradientsDark,
  meshGradients,
  overlays,
  accentGradients,
  radialGradients,
  dividerGradients,
  durationsCSS,
  easings,
  transitions,
  zIndex,
  zIndexSemantics,
  type Colors,
  type ColorsDark,
  type ShadowsLight,
  type ShadowsDark,
} from '../tokens';

/** Base font size for rem calculations (browser default) */
const BASE_FONT_SIZE = 16;

/** Convert pixels to rem */
function pxToRem(px: number): string {
  return `${px / BASE_FONT_SIZE}rem`;
}

/** Convert letter spacing em values to CSS format */
function formatLetterSpacing(em: number): string {
  if (em === 0) return 'normal';
  return `${em}em`;
}

/**
 * Convert spacing tokens to rem values for web
 */
function createWebSpacing<T extends Record<string, number>>(
  spacingTokens: T
): { [K in keyof T]: string } {
  const result = {} as { [K in keyof T]: string };
  for (const [key, value] of Object.entries(spacingTokens)) {
    result[key as keyof T] = value === 0 ? '0' : pxToRem(value);
  }
  return result;
}

/**
 * Convert radii tokens to rem values for web
 */
function createWebRadii<T extends Record<string, number>>(
  radiiTokens: T
): { [K in keyof T]: string } {
  const result = {} as { [K in keyof T]: string };
  for (const [key, value] of Object.entries(radiiTokens)) {
    if (value === 0) {
      result[key as keyof T] = '0';
    } else if (value >= 9999) {
      result[key as keyof T] = '9999px'; // Keep pill shape in px
    } else {
      result[key as keyof T] = pxToRem(value);
    }
  }
  return result;
}

/**
 * Convert font sizes to rem
 */
function createWebFontSizes<T extends Record<string, number>>(
  fontSizeTokens: T
): { [K in keyof T]: string } {
  const result = {} as { [K in keyof T]: string };
  for (const [key, value] of Object.entries(fontSizeTokens)) {
    result[key as keyof T] = pxToRem(value);
  }
  return result;
}

/**
 * Convert text styles to web-friendly CSS-in-JS format
 */
type WebTextStyle = {
  fontSize: string;
  fontWeight: number;
  lineHeight: number;
  letterSpacing: string;
  fontFamily: string;
};

function createWebTextStyles() {
  const convert = (style: {
    fontSize: number;
    fontWeight: number;
    lineHeight: number;
    letterSpacing: number;
    fontFamily: string;
  }): WebTextStyle => ({
    fontSize: pxToRem(style.fontSize),
    fontWeight: style.fontWeight,
    lineHeight: style.lineHeight,
    letterSpacing: formatLetterSpacing(style.letterSpacing),
    fontFamily: style.fontFamily,
  });

  return {
    display: {
      hero: convert(textStyles.display.hero),
      large: convert(textStyles.display.large),
      medium: convert(textStyles.display.medium),
      small: convert(textStyles.display.small),
    },
    heading: {
      h1: convert(textStyles.heading.h1),
      h2: convert(textStyles.heading.h2),
      h3: convert(textStyles.heading.h3),
      h4: convert(textStyles.heading.h4),
      h5: convert(textStyles.heading.h5),
      h6: convert(textStyles.heading.h6),
    },
    body: {
      large: convert(textStyles.body.large),
      medium: convert(textStyles.body.medium),
      small: convert(textStyles.body.small),
    },
    lead: {
      large: convert(textStyles.lead.large),
      medium: convert(textStyles.lead.medium),
    },
    label: {
      large: convert(textStyles.label.large),
      medium: convert(textStyles.label.medium),
      small: convert(textStyles.label.small),
    },
    caption: {
      medium: convert(textStyles.caption.medium),
      small: convert(textStyles.caption.small),
    },
    overline: {
      medium: convert(textStyles.overline.medium),
      small: convert(textStyles.overline.small),
    },
    code: {
      block: convert(textStyles.code.block),
      inline: convert(textStyles.code.inline),
    },
    blockquote: {
      large: convert(textStyles.blockquote.large),
      medium: convert(textStyles.blockquote.medium),
    },
  } as const;
}

/**
 * Recursively convert spacing semantics to rem
 */
function createWebSpacingSemantics() {
  const convert = <T extends Record<string, number | Record<string, number>>>(
    obj: T
  ): { [K in keyof T]: T[K] extends number ? string : { [J in keyof T[K]]: string } } => {
    const result = {} as any;
    for (const [key, value] of Object.entries(obj)) {
      if (typeof value === 'number') {
        result[key] = value === 0 ? '0' : pxToRem(value);
      } else {
        result[key] = convert(value);
      }
    }
    return result;
  };

  return convert(spacingSemantics);
}

export interface WebThemeOptions {
  /** Color mode */
  mode?: 'light' | 'dark';
}

export interface WebTheme {
  colors: Colors | ColorsDark;
  spacing: ReturnType<typeof createWebSpacing<typeof spacing>>;
  spacingSemantics: ReturnType<typeof createWebSpacingSemantics>;
  typography: {
    fonts: typeof fontFamilies;
    weights: typeof fontWeights;
    sizes: ReturnType<typeof createWebFontSizes<typeof fontSizes>>;
    lineHeights: typeof lineHeights;
    letterSpacings: { [K in keyof typeof letterSpacings]: string };
    textStyles: ReturnType<typeof createWebTextStyles>;
  };
  radii: ReturnType<typeof createWebRadii<typeof radii>>;
  radiiSemantics: ReturnType<typeof createWebRadii<typeof radiiSemantics>>;
  shadows: ShadowsLight | ShadowsDark;
  shadowValues: typeof shadowValues;
  shadowColors: typeof shadowColors;
  gradients: {
    backgrounds: typeof gradientsLight | typeof gradientsDark;
    mesh: typeof meshGradients;
    overlays: typeof overlays;
    accent: typeof accentGradients;
    radial: typeof radialGradients;
    divider: typeof dividerGradients;
  };
  motion: {
    durations: typeof durationsCSS;
    easings: typeof easings;
    transitions: typeof transitions;
  };
  zIndex: typeof zIndex;
  zIndexSemantics: typeof zIndexSemantics;
}

/**
 * Create a web-optimized theme object
 *
 * @example
 * ```tsx
 * import { createWebTheme } from '@saidabedi/design-system/web';
 *
 * const theme = createWebTheme({ mode: 'light' });
 *
 * // Use with styled-components, emotion, or any CSS-in-JS
 * const Button = styled.button`
 *   background: ${theme.colors.brand.primary};
 *   padding: ${theme.spacing.sm} ${theme.spacing.lg};
 *   border-radius: ${theme.radii.md};
 *   box-shadow: ${theme.shadows.md};
 *   transition: ${theme.motion.transitions.button};
 *
 *   &:hover {
 *     box-shadow: ${theme.shadows.glowSubtle};
 *   }
 *
 *   &:active {
 *     box-shadow: ${theme.shadows.pressed};
 *   }
 * `;
 * ```
 */
export function createWebTheme(options: WebThemeOptions = {}): WebTheme {
  const { mode = 'light' } = options;
  const isDark = mode === 'dark';

  const webLetterSpacings = Object.fromEntries(
    Object.entries(letterSpacings).map(([key, value]) => [
      key,
      formatLetterSpacing(value),
    ])
  ) as { [K in keyof typeof letterSpacings]: string };

  return {
    colors: isDark ? colorsDark : colors,
    spacing: createWebSpacing(spacing),
    spacingSemantics: createWebSpacingSemantics(),
    typography: {
      fonts: fontFamilies,
      weights: fontWeights,
      sizes: createWebFontSizes(fontSizes),
      lineHeights,
      letterSpacings: webLetterSpacings,
      textStyles: createWebTextStyles(),
    },
    radii: createWebRadii(radii),
    radiiSemantics: createWebRadii(radiiSemantics),
    shadows: isDark ? shadowsDark : shadowsLight,
    shadowValues,
    shadowColors,
    gradients: {
      backgrounds: isDark ? gradientsDark : gradientsLight,
      mesh: meshGradients,
      overlays,
      accent: accentGradients,
      radial: radialGradients,
      divider: dividerGradients,
    },
    motion: {
      durations: durationsCSS,
      easings,
      transitions,
    },
    zIndex,
    zIndexSemantics,
  };
}

/**
 * Generate CSS custom properties from theme
 * Useful for vanilla CSS or CSS modules integration
 *
 * @example
 * ```ts
 * const cssVars = generateCSSVariables(createWebTheme());
 * // Returns: { '--color-brand-primary': '#C4756A', '--shadow-md': '...', ... }
 * ```
 */
export function generateCSSVariables(
  theme: WebTheme,
  prefix = ''
): Record<string, string> {
  const vars: Record<string, string> = {};
  const pre = prefix ? `${prefix}-` : '';

  // Flatten nested objects into CSS custom properties
  const flatten = (obj: Record<string, unknown>, path: string[] = []) => {
    for (const [key, value] of Object.entries(obj)) {
      const newPath = [...path, key];
      if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        flatten(value as Record<string, unknown>, newPath);
      } else {
        const varName = `--${pre}${newPath.join('-')}`;
        vars[varName] = String(value);
      }
    }
  };

  // Colors
  flatten({ color: theme.colors });

  // Spacing
  flatten({ spacing: theme.spacing });

  // Radii
  flatten({ radius: theme.radii });

  // Typography
  flatten({ font: theme.typography.fonts });
  flatten({ 'font-size': theme.typography.sizes });
  flatten({ 'font-weight': theme.typography.weights });
  flatten({ 'line-height': theme.typography.lineHeights });

  // Shadows (neumorphic)
  flatten({ shadow: theme.shadows });

  // Motion
  flatten({ duration: theme.motion.durations });
  flatten({ easing: theme.motion.easings });
  flatten({ transition: theme.motion.transitions });

  // Z-Index
  flatten({ 'z-index': theme.zIndex });

  return vars;
}

/**
 * Generate a CSS string with all custom properties
 *
 * @example
 * ```ts
 * const css = generateCSSVariablesString(createWebTheme());
 * // Inject into document or build process
 * ```
 */
export function generateCSSVariablesString(
  theme: WebTheme,
  selector = ':root',
  prefix = ''
): string {
  const vars = generateCSSVariables(theme, prefix);
  const declarations = Object.entries(vars)
    .map(([prop, value]) => `  ${prop}: ${value};`)
    .join('\n');

  return `${selector} {\n${declarations}\n}`;
}
