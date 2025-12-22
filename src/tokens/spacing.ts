/**
 * Spacing Tokens
 *
 * Platform-agnostic spacing scale using numeric values.
 * Web adapter will convert to rem/px, Native will use as-is (density-independent pixels).
 *
 * Base unit: 4px
 * Scale: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128
 */

export const spacing = {
  /** 0px */
  none: 0,
  /** 4px - Minimal spacing, icon padding */
  xs: 4,
  /** 8px - Tight spacing, inline elements */
  sm: 8,
  /** 12px - Compact spacing */
  md: 12,
  /** 16px - Default spacing, form elements */
  lg: 16,
  /** 20px - Comfortable spacing */
  xl: 20,
  /** 24px - Section padding */
  '2xl': 24,
  /** 32px - Card padding */
  '3xl': 32,
  /** 40px - Large section spacing */
  '4xl': 40,
  /** 48px - Major section breaks */
  '5xl': 48,
  /** 64px - Page section spacing */
  '6xl': 64,
  /** 80px - Large page sections */
  '7xl': 80,
  /** 96px - Hero sections */
  '8xl': 96,
  /** 128px - Maximum spacing */
  '9xl': 128,
} as const;

/**
 * Semantic spacing aliases for common use cases
 */
export const spacingSemantics = {
  // Component internals
  component: {
    /** Padding inside buttons, inputs */
    paddingXs: spacing.xs,
    paddingSm: spacing.sm,
    paddingMd: spacing.md,
    paddingLg: spacing.lg,
    /** Gap between icon and text */
    iconGap: spacing.sm,
    /** Gap in button groups */
    buttonGroupGap: spacing.sm,
  },

  // Layout
  layout: {
    /** Gutter between grid columns */
    gutter: spacing.lg,
    /** Page horizontal padding (mobile) */
    pagePaddingMobile: spacing.lg,
    /** Page horizontal padding (tablet+) */
    pagePaddingDesktop: spacing['3xl'],
    /** Space between cards in a list */
    cardGap: spacing.lg,
    /** Space between sections */
    sectionGap: spacing['5xl'],
  },

  // Form
  form: {
    /** Space between form fields */
    fieldGap: spacing.lg,
    /** Space between label and input */
    labelGap: spacing.sm,
    /** Space between input and helper text */
    helperGap: spacing.xs,
    /** Horizontal padding in inputs */
    inputPaddingX: spacing.md,
    /** Vertical padding in inputs */
    inputPaddingY: spacing.sm,
  },

  // Stack (vertical spacing)
  stack: {
    xs: spacing.xs,
    sm: spacing.sm,
    md: spacing.lg,
    lg: spacing['2xl'],
    xl: spacing['4xl'],
  },

  // Inline (horizontal spacing)
  inline: {
    xs: spacing.xs,
    sm: spacing.sm,
    md: spacing.md,
    lg: spacing.lg,
    xl: spacing['2xl'],
  },
} as const;

export type Spacing = typeof spacing;
export type SpacingSemantics = typeof spacingSemantics;
