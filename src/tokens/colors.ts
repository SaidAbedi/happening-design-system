/**
 * Color Tokens - Option A: Warm Terracotta + Teal
 *
 * Soft earth tones for millennial + family audiences.
 * Cozy, organic, Mediterranean-inspired warmth.
 *
 * These are platform-agnostic semantic color tokens.
 * Consumers should never use primitive values directly.
 * Instead, use semantic tokens (primary, accent, etc.)
 */

// Primitive palette (internal only - not exported)
const palette = {
  // Terracotta / Clay (Primary)
  terracotta50: '#FDF5F2',
  terracotta100: '#FAE8E1',
  terracotta200: '#F5CFC2',
  terracotta300: '#E8A890',
  terracotta400: '#D4896B',
  terracotta500: '#C4704B',
  terracotta600: '#A85D3D',
  terracotta700: '#8C4D33',
  terracotta800: '#73402B',
  terracotta900: '#5F3625',

  // Warm Teal (Accent)
  teal50: '#F0F7F7',
  teal100: '#DCE9E9',
  teal200: '#B8D4D4',
  teal300: '#8EBABA',
  teal400: '#6B9E9E',
  teal500: '#4A7C7C',
  teal600: '#3D6666',
  teal700: '#335555',
  teal800: '#2A4545',
  teal900: '#233A3A',

  // Warm Stone (Neutrals)
  stone50: '#FAF9F7',
  stone100: '#F5F3F0',
  stone200: '#E7E5E4',
  stone300: '#D6D3D1',
  stone400: '#A8A29E',
  stone500: '#78716C',
  stone600: '#57534E',
  stone700: '#44403C',
  stone800: '#292524',
  stone900: '#1C1917',

  // Warm Cream (Backgrounds)
  cream50: '#FDFCFA',
  cream100: '#FDF8F4',
  cream200: '#FAF5F0',
  cream300: '#F5EDE5',
  cream400: '#EBE0D5',

  // Sage Green (Success)
  sage50: '#F4F7F4',
  sage100: '#E4EBE4',
  sage200: '#C8D7C8',
  sage300: '#A3BFA3',
  sage400: '#7DA37D',
  sage500: '#6B8E6B',
  sage600: '#557255',
  sage700: '#465C46',
  sage800: '#3A4D3A',
  sage900: '#303F30',

  // Amber / Honey (Warning)
  amber50: '#FFFBEB',
  amber100: '#FEF3C7',
  amber200: '#FDE68A',
  amber300: '#FCD34D',
  amber400: '#FBBF24',
  amber500: '#D4A04A',
  amber600: '#B8860B',
  amber700: '#92400E',
  amber800: '#78350F',
  amber900: '#5C2D0E',

  // Brick Red (Error/Destructive)
  brick50: '#FEF5F4',
  brick100: '#FDE8E6',
  brick200: '#FACFCB',
  brick300: '#F5A8A1',
  brick400: '#E87E74',
  brick500: '#C4574B',
  brick600: '#A8453B',
  brick700: '#8C3A32',
  brick800: '#73312A',
  brick900: '#5F2A24',

  // Pure
  white: '#FFFFFF',
  black: '#000000',
  transparent: 'transparent',
} as const;

/**
 * Semantic color tokens for light mode
 */
export const colors = {
  // Brand - Primary (Terracotta)
  brand: {
    primary: palette.terracotta500,
    primaryHover: palette.terracotta600,
    primaryActive: palette.terracotta700,
    primaryForeground: palette.white,
    // Secondary (Teal)
    secondary: palette.teal500,
    secondaryHover: palette.teal600,
    secondaryActive: palette.teal700,
    secondaryForeground: palette.white,
  },

  // Accent (Teal for CTAs and highlights)
  accent: {
    DEFAULT: palette.teal500,
    hover: palette.teal600,
    active: palette.teal700,
    foreground: palette.white,
    muted: palette.teal100,
    mutedForeground: palette.teal700,
  },

  // Background
  background: {
    primary: palette.cream100,
    secondary: palette.cream200,
    tertiary: palette.cream300,
    inverse: palette.stone900,
    brand: palette.terracotta500,
    accent: palette.teal500,
  },

  // Surface (cards, modals, popovers)
  surface: {
    primary: palette.white,
    secondary: palette.cream100,
    elevated: palette.white,
    overlay: 'rgba(28, 25, 23, 0.5)',
    muted: palette.stone100,
  },

  // Text
  text: {
    primary: palette.stone700,
    secondary: palette.stone500,
    tertiary: palette.stone400,
    disabled: palette.stone300,
    inverse: palette.cream50,
    brand: palette.terracotta600,
    accent: palette.teal600,
    link: palette.teal600,
    linkHover: palette.teal700,
  },

  // Border
  border: {
    primary: palette.stone200,
    secondary: palette.stone300,
    focus: palette.teal500,
    error: palette.brick500,
    success: palette.sage500,
    input: palette.stone300,
  },

  // Icon
  icon: {
    primary: palette.stone600,
    secondary: palette.stone500,
    tertiary: palette.stone400,
    disabled: palette.stone300,
    inverse: palette.cream50,
    brand: palette.terracotta500,
    accent: palette.teal500,
  },

  // Feedback / Status
  feedback: {
    success: palette.sage600,
    successLight: palette.sage50,
    successForeground: palette.white,
    warning: palette.amber500,
    warningLight: palette.amber50,
    warningForeground: palette.amber900,
    error: palette.brick500,
    errorLight: palette.brick50,
    errorForeground: palette.white,
    info: palette.teal500,
    infoLight: palette.teal50,
    infoForeground: palette.white,
  },

  // Interactive states
  interactive: {
    primary: palette.terracotta500,
    primaryHover: palette.terracotta600,
    primaryActive: palette.terracotta700,
    primaryDisabled: palette.stone300,
    secondary: palette.stone100,
    secondaryHover: palette.stone200,
    secondaryActive: palette.stone300,
    muted: palette.stone100,
    mutedHover: palette.stone200,
  },

  // Ring (focus ring)
  ring: {
    DEFAULT: palette.teal500,
    offset: palette.cream100,
  },

  // Utility
  utility: {
    transparent: palette.transparent,
    white: palette.white,
    black: palette.black,
  },
} as const;

/**
 * Semantic color tokens for dark mode
 */
export const colorsDark = {
  // Brand - Primary (Terracotta - lighter for dark mode)
  brand: {
    primary: palette.terracotta400,
    primaryHover: palette.terracotta300,
    primaryActive: palette.terracotta200,
    primaryForeground: palette.stone900,
    // Secondary (Teal)
    secondary: palette.teal400,
    secondaryHover: palette.teal300,
    secondaryActive: palette.teal200,
    secondaryForeground: palette.stone900,
  },

  // Accent (Teal - lighter for dark mode)
  accent: {
    DEFAULT: palette.teal400,
    hover: palette.teal300,
    active: palette.teal200,
    foreground: palette.stone900,
    muted: palette.teal900,
    mutedForeground: palette.teal200,
  },

  // Background
  background: {
    primary: palette.stone900,
    secondary: palette.stone800,
    tertiary: palette.stone700,
    inverse: palette.cream100,
    brand: palette.terracotta600,
    accent: palette.teal600,
  },

  // Surface
  surface: {
    primary: palette.stone800,
    secondary: palette.stone700,
    elevated: palette.stone700,
    overlay: 'rgba(0, 0, 0, 0.7)',
    muted: palette.stone800,
  },

  // Text
  text: {
    primary: palette.stone50,
    secondary: palette.stone300,
    tertiary: palette.stone400,
    disabled: palette.stone500,
    inverse: palette.stone800,
    brand: palette.terracotta300,
    accent: palette.teal300,
    link: palette.teal300,
    linkHover: palette.teal200,
  },

  // Border
  border: {
    primary: palette.stone700,
    secondary: palette.stone600,
    focus: palette.teal400,
    error: palette.brick400,
    success: palette.sage400,
    input: palette.stone600,
  },

  // Icon
  icon: {
    primary: palette.stone200,
    secondary: palette.stone400,
    tertiary: palette.stone500,
    disabled: palette.stone600,
    inverse: palette.stone800,
    brand: palette.terracotta400,
    accent: palette.teal400,
  },

  // Feedback
  feedback: {
    success: palette.sage400,
    successLight: palette.sage900,
    successForeground: palette.stone900,
    warning: palette.amber400,
    warningLight: palette.amber900,
    warningForeground: palette.stone900,
    error: palette.brick400,
    errorLight: palette.brick900,
    errorForeground: palette.stone900,
    info: palette.teal400,
    infoLight: palette.teal900,
    infoForeground: palette.stone900,
  },

  // Interactive
  interactive: {
    primary: palette.terracotta400,
    primaryHover: palette.terracotta300,
    primaryActive: palette.terracotta200,
    primaryDisabled: palette.stone600,
    secondary: palette.stone700,
    secondaryHover: palette.stone600,
    secondaryActive: palette.stone500,
    muted: palette.stone700,
    mutedHover: palette.stone600,
  },

  // Ring
  ring: {
    DEFAULT: palette.teal400,
    offset: palette.stone900,
  },

  // Utility
  utility: {
    transparent: palette.transparent,
    white: palette.white,
    black: palette.black,
  },
} as const;

export type Colors = typeof colors;
export type ColorsDark = typeof colorsDark;
