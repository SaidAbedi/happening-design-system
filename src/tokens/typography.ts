/**
 * Typography Tokens - DM Sans + DM Serif Display
 *
 * Warm humanist typography pairing for millennial + family audiences.
 * DM Serif Display for elegant headlines, DM Sans for friendly body text.
 *
 * Platform-agnostic typography scale.
 * Font sizes are in numeric values that adapters convert to platform units.
 * Line heights are expressed as multipliers.
 */

/**
 * Font family stacks
 * Web will use these directly, Native will map to platform fonts
 */
export const fontFamilies = {
  /** Primary sans-serif for body text and UI */
  sans: '"DM Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  /** Display serif for headlines and hero text */
  serif: '"DM Serif Display", Georgia, Cambria, "Times New Roman", Times, serif',
  /** Monospace font for code */
  mono: '"JetBrains Mono", "SF Mono", Consolas, "Liberation Mono", Menlo, monospace',
} as const;

/**
 * Font weights
 * DM Sans: 400, 500, 700
 * DM Serif Display: 400 (single weight)
 */
export const fontWeights = {
  /** Regular weight for body text */
  regular: 400,
  /** Medium weight for emphasis and labels */
  medium: 500,
  /** Semibold - maps to medium for DM Sans */
  semibold: 500,
  /** Bold weight for strong emphasis */
  bold: 700,
} as const;

/**
 * Font sizes in pixels (adapters convert as needed)
 */
export const fontSizes = {
  /** 10px - Fine print, overlines */
  xs: 10,
  /** 12px - Captions, helper text */
  sm: 12,
  /** 14px - Secondary text, small labels */
  md: 14,
  /** 16px - Body text (base) */
  lg: 16,
  /** 18px - Large body, lead text */
  xl: 18,
  /** 20px - Heading 6, large labels */
  '2xl': 20,
  /** 24px - Heading 5 */
  '3xl': 24,
  /** 30px - Heading 4 */
  '4xl': 30,
  /** 36px - Heading 3 */
  '5xl': 36,
  /** 48px - Heading 2 */
  '6xl': 48,
  /** 60px - Heading 1 / Display */
  '7xl': 60,
  /** 72px - Display Large */
  '8xl': 72,
  /** 96px - Display Hero */
  '9xl': 96,
} as const;

/**
 * Line height multipliers
 */
export const lineHeights = {
  /** 1 - Single line, icons, buttons */
  none: 1,
  /** 1.1 - Very tight, large display text */
  tighter: 1.1,
  /** 1.2 - Tight, headings */
  tight: 1.2,
  /** 1.3 - Snug, subheadings */
  snug: 1.3,
  /** 1.5 - Normal, body text */
  normal: 1.5,
  /** 1.6 - Relaxed, comfortable reading */
  relaxed: 1.6,
  /** 1.75 - Loose, spacious paragraphs */
  loose: 1.75,
} as const;

/**
 * Letter spacing values (in em units for proportional scaling)
 */
export const letterSpacings = {
  /** -0.03em - Tighter, for large display serif */
  tighter: -0.03,
  /** -0.02em - Tight, for headings */
  tight: -0.02,
  /** -0.01em - Slightly tight */
  snug: -0.01,
  /** 0 - Normal */
  normal: 0,
  /** 0.01em - Slightly wide, small text */
  wide: 0.01,
  /** 0.02em - Wider, captions */
  wider: 0.02,
  /** 0.08em - Widest, overlines/uppercase */
  widest: 0.08,
} as const;

/**
 * Pre-composed text styles for common use cases
 * These combine size, weight, line-height, and letter-spacing
 *
 * Display & Headings use DM Serif Display for editorial warmth
 * Body, Labels, Captions use DM Sans for readability
 */
export const textStyles = {
  // Display styles (hero sections, marketing)
  // Uses DM Serif Display for elegant, editorial feel
  display: {
    hero: {
      fontSize: fontSizes['9xl'],
      fontWeight: fontWeights.regular,
      lineHeight: lineHeights.tighter,
      letterSpacing: letterSpacings.tighter,
      fontFamily: fontFamilies.serif,
    },
    large: {
      fontSize: fontSizes['8xl'],
      fontWeight: fontWeights.regular,
      lineHeight: lineHeights.tighter,
      letterSpacing: letterSpacings.tighter,
      fontFamily: fontFamilies.serif,
    },
    medium: {
      fontSize: fontSizes['7xl'],
      fontWeight: fontWeights.regular,
      lineHeight: lineHeights.tighter,
      letterSpacing: letterSpacings.tight,
      fontFamily: fontFamilies.serif,
    },
    small: {
      fontSize: fontSizes['6xl'],
      fontWeight: fontWeights.regular,
      lineHeight: lineHeights.tight,
      letterSpacing: letterSpacings.tight,
      fontFamily: fontFamilies.serif,
    },
  },

  // Heading styles
  // H1-H3 use DM Serif Display for warmth
  // H4-H6 use DM Sans for cleaner hierarchy
  heading: {
    h1: {
      fontSize: fontSizes['5xl'],
      fontWeight: fontWeights.regular,
      lineHeight: lineHeights.tight,
      letterSpacing: letterSpacings.tight,
      fontFamily: fontFamilies.serif,
    },
    h2: {
      fontSize: fontSizes['4xl'],
      fontWeight: fontWeights.regular,
      lineHeight: lineHeights.tight,
      letterSpacing: letterSpacings.snug,
      fontFamily: fontFamilies.serif,
    },
    h3: {
      fontSize: fontSizes['3xl'],
      fontWeight: fontWeights.regular,
      lineHeight: lineHeights.snug,
      letterSpacing: letterSpacings.snug,
      fontFamily: fontFamilies.serif,
    },
    h4: {
      fontSize: fontSizes['2xl'],
      fontWeight: fontWeights.medium,
      lineHeight: lineHeights.snug,
      letterSpacing: letterSpacings.normal,
      fontFamily: fontFamilies.sans,
    },
    h5: {
      fontSize: fontSizes.xl,
      fontWeight: fontWeights.medium,
      lineHeight: lineHeights.snug,
      letterSpacing: letterSpacings.normal,
      fontFamily: fontFamilies.sans,
    },
    h6: {
      fontSize: fontSizes.lg,
      fontWeight: fontWeights.medium,
      lineHeight: lineHeights.snug,
      letterSpacing: letterSpacings.wide,
      fontFamily: fontFamilies.sans,
    },
  },

  // Body styles - DM Sans for excellent readability
  body: {
    large: {
      fontSize: fontSizes.xl,
      fontWeight: fontWeights.regular,
      lineHeight: lineHeights.relaxed,
      letterSpacing: letterSpacings.normal,
      fontFamily: fontFamilies.sans,
    },
    medium: {
      fontSize: fontSizes.lg,
      fontWeight: fontWeights.regular,
      lineHeight: lineHeights.normal,
      letterSpacing: letterSpacings.normal,
      fontFamily: fontFamilies.sans,
    },
    small: {
      fontSize: fontSizes.md,
      fontWeight: fontWeights.regular,
      lineHeight: lineHeights.normal,
      letterSpacing: letterSpacings.wide,
      fontFamily: fontFamilies.sans,
    },
  },

  // Lead/intro paragraph style
  lead: {
    large: {
      fontSize: fontSizes['2xl'],
      fontWeight: fontWeights.regular,
      lineHeight: lineHeights.relaxed,
      letterSpacing: letterSpacings.normal,
      fontFamily: fontFamilies.sans,
    },
    medium: {
      fontSize: fontSizes.xl,
      fontWeight: fontWeights.regular,
      lineHeight: lineHeights.relaxed,
      letterSpacing: letterSpacings.normal,
      fontFamily: fontFamilies.sans,
    },
  },

  // Label styles (forms, buttons, navigation)
  label: {
    large: {
      fontSize: fontSizes.lg,
      fontWeight: fontWeights.medium,
      lineHeight: lineHeights.none,
      letterSpacing: letterSpacings.wide,
      fontFamily: fontFamilies.sans,
    },
    medium: {
      fontSize: fontSizes.md,
      fontWeight: fontWeights.medium,
      lineHeight: lineHeights.none,
      letterSpacing: letterSpacings.wide,
      fontFamily: fontFamilies.sans,
    },
    small: {
      fontSize: fontSizes.sm,
      fontWeight: fontWeights.medium,
      lineHeight: lineHeights.none,
      letterSpacing: letterSpacings.wider,
      fontFamily: fontFamilies.sans,
    },
  },

  // Caption and helper text
  caption: {
    medium: {
      fontSize: fontSizes.sm,
      fontWeight: fontWeights.regular,
      lineHeight: lineHeights.normal,
      letterSpacing: letterSpacings.wide,
      fontFamily: fontFamilies.sans,
    },
    small: {
      fontSize: fontSizes.xs,
      fontWeight: fontWeights.regular,
      lineHeight: lineHeights.normal,
      letterSpacing: letterSpacings.wider,
      fontFamily: fontFamilies.sans,
    },
  },

  // Overline (small uppercase labels)
  overline: {
    medium: {
      fontSize: fontSizes.sm,
      fontWeight: fontWeights.medium,
      lineHeight: lineHeights.none,
      letterSpacing: letterSpacings.widest,
      fontFamily: fontFamilies.sans,
      // Note: textTransform: 'uppercase' should be applied in the component
    },
    small: {
      fontSize: fontSizes.xs,
      fontWeight: fontWeights.medium,
      lineHeight: lineHeights.none,
      letterSpacing: letterSpacings.widest,
      fontFamily: fontFamilies.sans,
    },
  },

  // Code styles
  code: {
    block: {
      fontSize: fontSizes.md,
      fontWeight: fontWeights.regular,
      lineHeight: lineHeights.relaxed,
      letterSpacing: letterSpacings.normal,
      fontFamily: fontFamilies.mono,
    },
    inline: {
      fontSize: fontSizes.sm,
      fontWeight: fontWeights.regular,
      lineHeight: lineHeights.normal,
      letterSpacing: letterSpacings.normal,
      fontFamily: fontFamilies.mono,
    },
  },

  // Blockquote style - uses serif for editorial feel
  blockquote: {
    large: {
      fontSize: fontSizes['3xl'],
      fontWeight: fontWeights.regular,
      lineHeight: lineHeights.snug,
      letterSpacing: letterSpacings.snug,
      fontFamily: fontFamilies.serif,
    },
    medium: {
      fontSize: fontSizes['2xl'],
      fontWeight: fontWeights.regular,
      lineHeight: lineHeights.snug,
      letterSpacing: letterSpacings.normal,
      fontFamily: fontFamilies.serif,
    },
  },
} as const;

export type FontFamilies = typeof fontFamilies;
export type FontWeights = typeof fontWeights;
export type FontSizes = typeof fontSizes;
export type LineHeights = typeof lineHeights;
export type LetterSpacings = typeof letterSpacings;
export type TextStyles = typeof textStyles;
