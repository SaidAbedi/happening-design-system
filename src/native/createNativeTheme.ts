/**
 * Native Theme Adapter
 *
 * Transforms platform-agnostic tokens into React Native-friendly theme objects.
 * Uses numeric values (density-independent pixels) and platform font mappings.
 */

import {
  colors,
  colorsDark,
  spacing,
  spacingSemantics,
  fontSizes,
  lineHeights,
  letterSpacings,
  textStyles,
  radii,
  radiiSemantics,
  type Colors,
  type ColorsDark,
} from '../tokens';

/**
 * Platform-specific font family mappings
 * React Native uses different font names on iOS and Android
 *
 * Web fonts → Native equivalents:
 * - DM Sans → SF Pro (iOS) / Roboto (Android)
 * - DM Serif Display → New York (iOS) / Noto Serif (Android)
 * - JetBrains Mono → SF Mono (iOS) / Roboto Mono (Android)
 *
 * For custom fonts, embed DM Sans and DM Serif Display in your app
 * and update these mappings to use the embedded font names.
 */
export const nativeFontFamilies = {
  ios: {
    // DM Sans maps to SF Pro (system font)
    sans: {
      regular: 'System',
      medium: 'System',
      semibold: 'System',
      bold: 'System',
    },
    // JetBrains Mono maps to SF Mono
    mono: {
      regular: 'SF Mono',
      medium: 'SF Mono',
      semibold: 'SF Mono',
      bold: 'SF Mono',
    },
    // DM Serif Display maps to New York (iOS 13+)
    serif: {
      regular: 'NewYork-Regular',
      medium: 'NewYork-Medium',
      semibold: 'NewYork-Semibold',
      bold: 'NewYork-Bold',
    },
  },
  android: {
    // DM Sans maps to Roboto
    sans: {
      regular: 'Roboto',
      medium: 'Roboto-Medium',
      semibold: 'Roboto-Medium',
      bold: 'Roboto-Bold',
    },
    // JetBrains Mono maps to Roboto Mono
    mono: {
      regular: 'RobotoMono-Regular',
      medium: 'RobotoMono-Medium',
      semibold: 'RobotoMono-Medium',
      bold: 'RobotoMono-Bold',
    },
    // DM Serif Display maps to Noto Serif
    serif: {
      regular: 'NotoSerif-Regular',
      medium: 'NotoSerif-Medium',
      semibold: 'NotoSerif-SemiBold',
      bold: 'NotoSerif-Bold',
    },
  },
  // Custom font mappings for apps that embed DM fonts
  custom: {
    sans: {
      regular: 'DMSans-Regular',
      medium: 'DMSans-Medium',
      semibold: 'DMSans-Medium',
      bold: 'DMSans-Bold',
    },
    mono: {
      regular: 'JetBrainsMono-Regular',
      medium: 'JetBrainsMono-Medium',
      semibold: 'JetBrainsMono-SemiBold',
      bold: 'JetBrainsMono-Bold',
    },
    serif: {
      regular: 'DMSerifDisplay-Regular',
      medium: 'DMSerifDisplay-Regular',
      semibold: 'DMSerifDisplay-Regular',
      bold: 'DMSerifDisplay-Regular',
    },
  },
} as const;

export type Platform = 'ios' | 'android' | 'custom';

/**
 * React Native TextStyle-compatible object
 */
export interface NativeTextStyle {
  fontSize: number;
  fontWeight: '400' | '500' | '600' | '700';
  lineHeight: number;
  letterSpacing: number;
  fontFamily?: string;
}

/**
 * Convert numeric font weight to React Native string format
 */
function toNativeFontWeight(weight: number): '400' | '500' | '600' | '700' {
  if (weight >= 700) return '700';
  if (weight >= 600) return '600';
  if (weight >= 500) return '500';
  return '400';
}

/**
 * Get font family for platform
 */
function getFontFamily(
  platform: Platform,
  family: 'sans' | 'mono' | 'serif',
  weight: number
): string {
  const weightKey =
    weight >= 700
      ? 'bold'
      : weight >= 600
        ? 'semibold'
        : weight >= 500
          ? 'medium'
          : 'regular';

  return nativeFontFamilies[platform][family][weightKey];
}

/**
 * Convert letter spacing from em to pixels
 * Based on the font size
 */
function emToPixels(em: number, fontSize: number): number {
  return em * fontSize;
}

/**
 * Calculate line height in pixels from multiplier
 */
function calculateLineHeight(multiplier: number, fontSize: number): number {
  return Math.round(multiplier * fontSize);
}

/**
 * Convert text styles to React Native format
 */
function createNativeTextStyles(platform: Platform) {
  const convert = (
    style: {
      fontSize: number;
      fontWeight: number;
      lineHeight: number;
      letterSpacing: number;
      fontFamily: string;
    },
    family: 'sans' | 'mono' | 'serif' = 'sans'
  ): NativeTextStyle => ({
    fontSize: style.fontSize,
    fontWeight: toNativeFontWeight(style.fontWeight),
    lineHeight: calculateLineHeight(style.lineHeight, style.fontSize),
    letterSpacing: emToPixels(style.letterSpacing, style.fontSize),
    fontFamily: getFontFamily(platform, family, style.fontWeight),
  });

  return {
    // Display uses DM Serif Display (serif)
    display: {
      hero: convert(textStyles.display.hero, 'serif'),
      large: convert(textStyles.display.large, 'serif'),
      medium: convert(textStyles.display.medium, 'serif'),
      small: convert(textStyles.display.small, 'serif'),
    },
    // H1-H3 use serif, H4-H6 use sans
    heading: {
      h1: convert(textStyles.heading.h1, 'serif'),
      h2: convert(textStyles.heading.h2, 'serif'),
      h3: convert(textStyles.heading.h3, 'serif'),
      h4: convert(textStyles.heading.h4, 'sans'),
      h5: convert(textStyles.heading.h5, 'sans'),
      h6: convert(textStyles.heading.h6, 'sans'),
    },
    body: {
      large: convert(textStyles.body.large, 'sans'),
      medium: convert(textStyles.body.medium, 'sans'),
      small: convert(textStyles.body.small, 'sans'),
    },
    lead: {
      large: convert(textStyles.lead.large, 'sans'),
      medium: convert(textStyles.lead.medium, 'sans'),
    },
    label: {
      large: convert(textStyles.label.large, 'sans'),
      medium: convert(textStyles.label.medium, 'sans'),
      small: convert(textStyles.label.small, 'sans'),
    },
    caption: {
      medium: convert(textStyles.caption.medium, 'sans'),
      small: convert(textStyles.caption.small, 'sans'),
    },
    overline: {
      medium: convert(textStyles.overline.medium, 'sans'),
      small: convert(textStyles.overline.small, 'sans'),
    },
    code: {
      block: convert(textStyles.code.block, 'mono'),
      inline: convert(textStyles.code.inline, 'mono'),
    },
    blockquote: {
      large: convert(textStyles.blockquote.large, 'serif'),
      medium: convert(textStyles.blockquote.medium, 'serif'),
    },
  } as const;
}

/**
 * Convert font weights to React Native string format
 */
function createNativeFontWeights() {
  return {
    regular: '400' as const,
    medium: '500' as const,
    semibold: '600' as const,
    bold: '700' as const,
  };
}

export interface NativeThemeOptions {
  /** Color mode */
  mode?: 'light' | 'dark';
  /** Target platform (affects font families) */
  platform?: Platform;
}

export interface NativeTheme {
  colors: Colors | ColorsDark;
  spacing: typeof spacing;
  spacingSemantics: typeof spacingSemantics;
  typography: {
    fonts: (typeof nativeFontFamilies)[Platform];
    weights: ReturnType<typeof createNativeFontWeights>;
    sizes: typeof fontSizes;
    lineHeights: typeof lineHeights;
    letterSpacings: typeof letterSpacings;
    textStyles: ReturnType<typeof createNativeTextStyles>;
  };
  radii: typeof radii;
  radiiSemantics: typeof radiiSemantics;
}

/**
 * Create a React Native-optimized theme object
 *
 * @example
 * ```tsx
 * import { createNativeTheme } from '@my-scope/design-system/native';
 * import { Platform } from 'react-native';
 *
 * const theme = createNativeTheme({
 *   mode: 'light',
 *   platform: Platform.OS,
 * });
 *
 * // Use with StyleSheet or styled-components/native
 * const styles = StyleSheet.create({
 *   container: {
 *     backgroundColor: theme.colors.background.primary,
 *     padding: theme.spacing.lg,
 *     borderRadius: theme.radii.lg,
 *   },
 *   title: {
 *     ...theme.typography.textStyles.heading.h1,
 *     color: theme.colors.text.primary,
 *   },
 * });
 * ```
 */
export function createNativeTheme(options: NativeThemeOptions = {}): NativeTheme {
  const { mode = 'light', platform = 'ios' } = options;

  return {
    colors: mode === 'dark' ? colorsDark : colors,
    spacing,
    spacingSemantics,
    typography: {
      fonts: nativeFontFamilies[platform],
      weights: createNativeFontWeights(),
      sizes: fontSizes,
      lineHeights,
      letterSpacings,
      textStyles: createNativeTextStyles(platform),
    },
    radii,
    radiiSemantics,
  };
}

/**
 * Create a responsive spacing scale based on screen density
 * Useful for tablets vs phones
 *
 * @example
 * ```tsx
 * import { Dimensions } from 'react-native';
 *
 * const { width } = Dimensions.get('window');
 * const scale = width > 768 ? 1.25 : 1;
 * const responsiveSpacing = createResponsiveSpacing(scale);
 * ```
 */
export function createResponsiveSpacing(scale: number = 1) {
  const scaled = <T extends Record<string, number>>(
    obj: T
  ): { [K in keyof T]: number } => {
    const result = {} as { [K in keyof T]: number };
    for (const [key, value] of Object.entries(obj)) {
      result[key as keyof T] = Math.round(value * scale);
    }
    return result;
  };

  return {
    spacing: scaled(spacing),
    radii: scaled(radii),
  };
}

/**
 * Utility to create shadow styles for React Native
 * Provides cross-platform shadow implementation
 */
export function createShadow(
  elevation: number,
  color: string = 'rgba(0, 0, 0, 0.1)'
) {
  // iOS shadow
  const iosShadow = {
    shadowColor: color,
    shadowOffset: {
      width: 0,
      height: Math.round(elevation / 2),
    },
    shadowOpacity: 0.15 + elevation * 0.02,
    shadowRadius: elevation,
  };

  // Android elevation
  const androidShadow = {
    elevation,
  };

  return {
    ios: iosShadow,
    android: androidShadow,
    // Combined for Platform.select usage
    ...iosShadow,
    ...androidShadow,
  };
}

/**
 * Pre-defined shadow elevations
 */
export const shadows = {
  none: createShadow(0),
  sm: createShadow(2),
  md: createShadow(4),
  lg: createShadow(8),
  xl: createShadow(12),
  '2xl': createShadow(24),
} as const;
