/**
 * Color Tokens - ValidAI Neumorphic Design System
 *
 * Boolean Surface UI / Neumorphic Design System with Mediterranean warmth.
 * Terracotta + Teal palette with soft shadows and refined interactions.
 *
 * These are platform-agnostic semantic color tokens.
 * Consumers should never use primitive values directly.
 * Instead, use semantic tokens (primary, accent, etc.)
 */

// Primitive palette (internal only - not exported)
const palette = {
  // Terracotta / Clay (Primary) - Updated for neumorphic design
  terracotta50: '#FDF8F4',
  terracotta100: '#FAE8E1',
  terracotta200: '#F5CFC2',
  terracotta300: '#E4A494',
  terracotta400: '#D4856A',
  terracotta500: '#C4756A',
  terracotta600: '#A65A50',
  terracotta700: '#8A4A42',
  terracotta800: '#6E3A34',
  terracotta900: '#522A26',

  // Warm Teal (Secondary Accent) - Updated values
  teal50: '#F0F7F7',
  teal100: '#DCE9E9',
  teal200: '#B8D4D4',
  teal300: '#8EBABA',
  teal400: '#6AACAC',
  teal500: '#5A9A9A',
  teal600: '#4A8080',
  teal700: '#3D6666',
  teal800: '#2A4545',
  teal900: '#233A3A',

  // Warm Stone (Neutrals)
  stone50: '#FAF5F0',
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

  // Mediterranean palette additions
  mediterranean: {
    cream: '#FDF8F4',
    peach: '#FAE8E1',
    sand: '#F5EDE5',
    teal: '#DCE9E9',
    tealDeep: '#B8D4D4',
    warmBlack: '#1C1917',
    warmDark: '#292524',
  },

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

  // Amber / Honey (Warning) - Updated for design system
  amber50: '#FFFBEB',
  amber100: '#FEF3C7',
  amber200: '#FDE68A',
  amber300: '#FCD34D',
  amber400: '#E4B584',
  amber500: '#D4A574',
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

  // Text colors for light mode
  textLight: {
    primary: '#2D2420',
    secondary: '#5C4D45',
    muted: '#8A7A70',
    disabled: '#B8A8A0',
  },

  // Text colors for dark mode
  textDark: {
    primary: '#FAF5F0',
    secondary: '#C4B8B0',
    muted: '#9A8A80',
    disabled: '#5A4A40',
  },

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
    // Terracotta accent alias
    terracotta: palette.terracotta500,
  },

  // Background (neumorphic-friendly)
  background: {
    primary: palette.cream100, // #FDF8F4 warm cream
    secondary: palette.cream200,
    tertiary: palette.cream300,
    inverse: palette.stone900,
    brand: palette.terracotta500,
    accent: palette.teal500,
  },

  // Surface (neumorphic surfaces)
  surface: {
    // Legacy mappings
    primary: palette.white,
    secondary: palette.cream100,
    elevated: palette.white,
    overlay: 'rgba(0, 0, 0, 0.3)',
    muted: palette.stone100,
    // Neumorphic surface tokens
    base: palette.cream100, // #FDF8F4 - Default surface
    raised: palette.white, // #FFFFFF - Elevated elements
    cut: palette.cream300, // #F5EDE5 - Inset/pressed surfaces
  },

  // Text (neumorphic design system)
  text: {
    primary: palette.textLight.primary, // #2D2420
    secondary: palette.textLight.secondary, // #5C4D45
    tertiary: palette.stone400,
    muted: palette.textLight.muted, // #8A7A70
    disabled: palette.textLight.disabled, // #B8A8A0
    inverse: palette.cream50,
    brand: palette.terracotta600,
    accent: palette.teal600,
    link: palette.teal600,
    linkHover: palette.teal700,
  },

  // Energy/Accent colors (Terracotta primary accent)
  energy: {
    primary: palette.terracotta500, // #C4756A
    dim: 'rgba(196, 117, 106, 0.25)',
    glow: 'rgba(196, 117, 106, 0.15)',
    subtle: 'rgba(196, 117, 106, 0.08)',
  },

  // Teal semantic colors (secondary accent)
  teal: {
    primary: palette.teal500, // #5A9A9A
    dim: 'rgba(90, 154, 154, 0.25)',
    glow: 'rgba(90, 154, 154, 0.15)',
    subtle: 'rgba(90, 154, 154, 0.08)',
  },

  // Border (neumorphic design system)
  border: {
    // Legacy mappings
    primary: palette.stone200,
    secondary: palette.stone300,
    focus: palette.teal500,
    error: palette.brick500,
    success: palette.sage500,
    input: palette.stone300,
    // Neumorphic border tokens
    subtle: 'rgba(255, 255, 255, 0.6)',
    default: 'rgba(45, 36, 32, 0.08)',
    strong: 'rgba(45, 36, 32, 0.15)',
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

  // Feedback / Status (semantic colors)
  feedback: {
    success: palette.teal500, // #5A9A9A - Using teal for success
    successLight: palette.teal50,
    successForeground: palette.white,
    warning: palette.amber500, // #D4A574
    warningLight: palette.amber50,
    warningForeground: palette.amber900,
    error: palette.terracotta500, // #C4756A - Using terracotta for error
    errorLight: palette.terracotta50,
    errorForeground: palette.white,
    info: palette.teal500, // #5A9A9A
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
    terracotta: 'rgba(196, 117, 106, 0.5)',
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
    primary: palette.terracotta400, // #D4856A
    primaryHover: palette.terracotta300,
    primaryActive: palette.terracotta200,
    primaryForeground: palette.stone900,
    // Secondary (Teal)
    secondary: palette.teal400, // #6AACAC
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
    // Terracotta accent alias
    terracotta: palette.terracotta400,
  },

  // Background (neumorphic-friendly)
  background: {
    primary: palette.stone900, // #1C1917 warm black
    secondary: palette.stone800,
    tertiary: palette.stone700,
    inverse: palette.cream100,
    brand: palette.terracotta600,
    accent: palette.teal600,
  },

  // Surface (neumorphic surfaces)
  surface: {
    // Legacy mappings
    primary: palette.stone800,
    secondary: palette.stone700,
    elevated: palette.stone700,
    overlay: 'rgba(0, 0, 0, 0.5)',
    muted: palette.stone800,
    // Neumorphic surface tokens
    base: palette.stone900, // #1C1917 - Default surface
    raised: palette.stone800, // #292524 - Elevated elements
    cut: '#1A1816', // Inset/pressed surfaces (darker than base)
  },

  // Text (neumorphic design system)
  text: {
    primary: palette.textDark.primary, // #FAF5F0
    secondary: palette.textDark.secondary, // #C4B8B0
    tertiary: palette.stone400,
    muted: palette.textDark.muted, // #9A8A80
    disabled: palette.textDark.disabled, // #5A4A40
    inverse: palette.stone800,
    brand: palette.terracotta300,
    accent: palette.teal300,
    link: palette.teal300,
    linkHover: palette.teal200,
  },

  // Energy/Accent colors (Terracotta primary accent - dark mode)
  energy: {
    primary: palette.terracotta400, // #D4856A
    dim: 'rgba(212, 133, 106, 0.3)',
    glow: 'rgba(212, 133, 106, 0.2)',
    subtle: 'rgba(212, 133, 106, 0.1)',
  },

  // Teal semantic colors (secondary accent - dark mode)
  teal: {
    primary: palette.teal400, // #6AACAC
    dim: 'rgba(106, 172, 172, 0.3)',
    glow: 'rgba(106, 172, 172, 0.2)',
    subtle: 'rgba(106, 172, 172, 0.1)',
  },

  // Border (neumorphic design system - dark mode)
  border: {
    // Legacy mappings
    primary: palette.stone700,
    secondary: palette.stone600,
    focus: palette.teal400,
    error: palette.brick400,
    success: palette.sage400,
    input: palette.stone600,
    // Neumorphic border tokens
    subtle: 'rgba(212, 133, 106, 0.1)',
    default: 'rgba(212, 133, 106, 0.2)',
    strong: 'rgba(212, 133, 106, 0.35)',
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

  // Feedback (semantic colors - dark mode)
  feedback: {
    success: palette.teal400, // #6AACAC
    successLight: palette.teal900,
    successForeground: palette.stone900,
    warning: palette.amber400, // #E4B584
    warningLight: palette.amber900,
    warningForeground: palette.stone900,
    error: palette.terracotta400, // #D4856A
    errorLight: palette.terracotta900,
    errorForeground: palette.stone900,
    info: palette.teal400, // #6AACAC
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
    terracotta: 'rgba(212, 133, 106, 0.5)',
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
