/**
 * Shadow Tokens - Neumorphic Design System
 *
 * The neumorphic effect is achieved through dual shadows - a dark shadow
 * on one side and a light shadow on the opposite side, creating a 3D
 * "pillowy" effect that makes elements appear to float or be pressed in.
 */

/**
 * Light mode shadow tokens
 * Uses warm cream tones for the light shadow and stone tones for dark shadow
 */
export const shadowsLight = {
  // No shadow
  none: "none",

  // Small raised element - buttons, tags, chips
  sm: "4px 4px 8px rgba(180, 165, 155, 0.4), -4px -4px 8px rgba(255, 255, 255, 0.8)",

  // Medium raised element (default) - cards, containers
  md: "8px 8px 16px rgba(180, 165, 155, 0.4), -8px -8px 16px rgba(255, 255, 255, 0.9)",

  // Large / most prominent element
  lg: "12px 12px 24px rgba(180, 165, 155, 0.4), -12px -12px 24px rgba(255, 255, 255, 0.9)",

  // Large/prominent element - hero cards, prominent containers
  mass: "16px 16px 32px rgba(180, 165, 155, 0.4), -16px -16px 32px rgba(255, 255, 255, 1)",

  // Shallow inset - input fields, shallow depressions
  cut: "inset 3px 3px 6px rgba(180, 165, 155, 0.4), inset -3px -3px 6px rgba(255, 255, 255, 0.8)",

  // Deep inset - pressed states, deep depressions
  inset:
    "inset 6px 6px 12px rgba(180, 165, 155, 0.4), inset -6px -6px 12px rgba(255, 255, 255, 0.9)",

  // Terracotta glow effect - active/focused interactive elements
  glow: "0 0 24px rgba(196, 117, 106, 0.3), 8px 8px 16px rgba(180, 165, 155, 0.35), -8px -8px 16px rgba(255, 255, 255, 0.8)",

  // Subtle terracotta glow - hover states, subtle highlights
  glowSubtle:
    "0 0 16px rgba(196, 117, 106, 0.2), 6px 6px 12px rgba(180, 165, 155, 0.35), -6px -6px 12px rgba(255, 255, 255, 0.8)",

  // Teal glow effect - secondary actions, info states
  glowTeal:
    "0 0 24px rgba(90, 154, 154, 0.3), 8px 8px 16px rgba(180, 165, 155, 0.35), -8px -8px 16px rgba(255, 255, 255, 0.8)",

  // Pressed/active state
  pressed:
    "inset 4px 4px 8px rgba(180, 165, 155, 0.5), inset -4px -4px 8px rgba(255, 255, 255, 0.6)",

  // Raised with terracotta rim - primary buttons, highlighted elements
  rim: "inset 0 0 0 2px rgba(196, 117, 106, 0.2), 8px 8px 16px rgba(180, 165, 155, 0.4), -8px -8px 16px rgba(255, 255, 255, 0.9)",

  // Inset with terracotta rim - active toggles, selected items
  rimInset:
    "inset 0 0 0 2px rgba(196, 117, 106, 0.15), inset 6px 6px 12px rgba(180, 165, 155, 0.4), inset -6px -6px 12px rgba(255, 255, 255, 0.9)",

  // Raised with teal rim - secondary buttons, teal highlights
  rimTeal:
    "inset 0 0 0 2px rgba(90, 154, 154, 0.2), 8px 8px 16px rgba(180, 165, 155, 0.4), -8px -8px 16px rgba(255, 255, 255, 0.9)",
} as const;

/**
 * Dark mode shadow tokens
 * Uses warm dark tones for depth
 */
export const shadowsDark = {
  // No shadow
  none: "none",

  // Small raised element
  sm: "4px 4px 8px rgba(10, 8, 6, 0.6), -4px -4px 8px rgba(50, 45, 40, 0.15)",

  // Medium raised element (default)
  md: "8px 8px 16px rgba(10, 8, 6, 0.7), -8px -8px 16px rgba(50, 45, 40, 0.12)",

  // Large/prominent element
  lg: "12px 12px 24px rgba(0, 0, 0, 0.5), -8px -8px 20px rgba(255, 255, 255, 0.05)",

  // Largest / most prominent element
  mass: "16px 16px 32px rgba(10, 8, 6, 0.8), -16px -16px 32px rgba(50, 45, 40, 0.1)",

  // Shallow inset
  cut: "inset 3px 3px 6px rgba(10, 8, 6, 0.7), inset -3px -3px 6px rgba(50, 45, 40, 0.1)",

  // Deep inset
  inset:
    "inset 6px 6px 12px rgba(10, 8, 6, 0.8), inset -6px -6px 12px rgba(50, 45, 40, 0.08)",

  // Terracotta glow effect
  glow: "0 0 24px rgba(212, 133, 106, 0.35), 8px 8px 16px rgba(10, 8, 6, 0.6), -8px -8px 16px rgba(50, 45, 40, 0.1)",

  // Subtle terracotta glow
  glowSubtle:
    "0 0 16px rgba(212, 133, 106, 0.2), 6px 6px 12px rgba(10, 8, 6, 0.5), -6px -6px 12px rgba(50, 45, 40, 0.1)",

  // Teal glow effect
  glowTeal:
    "0 0 24px rgba(106, 172, 172, 0.35), 8px 8px 16px rgba(10, 8, 6, 0.6), -8px -8px 16px rgba(50, 45, 40, 0.1)",

  // Pressed/active state
  pressed:
    "inset 4px 4px 8px rgba(10, 8, 6, 0.7), inset -4px -4px 8px rgba(50, 45, 40, 0.08)",

  // Raised with terracotta rim
  rim: "inset 0 0 0 2px rgba(212, 133, 106, 0.3), 8px 8px 16px rgba(10, 8, 6, 0.7), -8px -8px 16px rgba(50, 45, 40, 0.12)",

  // Inset with terracotta rim
  rimInset:
    "inset 0 0 0 2px rgba(212, 133, 106, 0.25), inset 6px 6px 12px rgba(10, 8, 6, 0.8), inset -6px -6px 12px rgba(50, 45, 40, 0.08)",

  // Raised with teal rim
  rimTeal:
    "inset 0 0 0 2px rgba(106, 172, 172, 0.3), 8px 8px 16px rgba(10, 8, 6, 0.7), -8px -8px 16px rgba(50, 45, 40, 0.12)",
} as const;

/**
 * Shadow values as structured objects for native platforms
 * These can be converted to platform-specific shadow implementations
 */
export const shadowValues = {
  sm: {
    offsetX: 4,
    offsetY: 4,
    blurRadius: 8,
    spreadRadius: 0,
  },
  md: {
    offsetX: 8,
    offsetY: 8,
    blurRadius: 16,
    spreadRadius: 0,
  },
  mass: {
    offsetX: 16,
    offsetY: 16,
    blurRadius: 32,
    spreadRadius: 0,
  },
  cut: {
    offsetX: 3,
    offsetY: 3,
    blurRadius: 6,
    spreadRadius: 0,
    inset: true,
  },
  inset: {
    offsetX: 6,
    offsetY: 6,
    blurRadius: 12,
    spreadRadius: 0,
    inset: true,
  },
  pressed: {
    offsetX: 4,
    offsetY: 4,
    blurRadius: 8,
    spreadRadius: 0,
    inset: true,
  },
} as const;

/**
 * Shadow color tokens for custom shadow creation
 */
export const shadowColors = {
  light: {
    dark: "rgba(180, 165, 155, 0.4)",
    darkStrong: "rgba(180, 165, 155, 0.5)",
    light: "rgba(255, 255, 255, 0.8)",
    lightStrong: "rgba(255, 255, 255, 0.9)",
    lightMax: "rgba(255, 255, 255, 1)",
    glowTerracotta: "rgba(196, 117, 106, 0.3)",
    glowTerracottaSubtle: "rgba(196, 117, 106, 0.2)",
    glowTeal: "rgba(90, 154, 154, 0.3)",
    rimTerracotta: "rgba(196, 117, 106, 0.2)",
    rimTeal: "rgba(90, 154, 154, 0.2)",
  },
  dark: {
    dark: "rgba(10, 8, 6, 0.6)",
    darkStrong: "rgba(10, 8, 6, 0.7)",
    darkMax: "rgba(10, 8, 6, 0.8)",
    light: "rgba(50, 45, 40, 0.12)",
    lightSubtle: "rgba(50, 45, 40, 0.1)",
    lightMin: "rgba(50, 45, 40, 0.08)",
    glowTerracotta: "rgba(212, 133, 106, 0.35)",
    glowTerracottaSubtle: "rgba(212, 133, 106, 0.2)",
    glowTeal: "rgba(106, 172, 172, 0.35)",
    rimTerracotta: "rgba(212, 133, 106, 0.3)",
    rimTeal: "rgba(106, 172, 172, 0.3)",
  },
} as const;

export type ShadowsLight = typeof shadowsLight;
export type ShadowsDark = typeof shadowsDark;
export type ShadowValues = typeof shadowValues;
export type ShadowColors = typeof shadowColors;
