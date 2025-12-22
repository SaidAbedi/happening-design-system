/**
 * Border Radius Tokens
 *
 * Platform-agnostic border radius values.
 * Values are in pixels - adapters convert as needed.
 */

export const radii = {
  /** 0px - No rounding */
  none: 0,
  /** 2px - Subtle rounding */
  xs: 2,
  /** 4px - Slight rounding */
  sm: 4,
  /** 6px - Default rounding */
  md: 6,
  /** 8px - Medium rounding */
  lg: 8,
  /** 12px - Pronounced rounding */
  xl: 12,
  /** 16px - Large rounding */
  '2xl': 16,
  /** 24px - Extra large rounding */
  '3xl': 24,
  /** 9999px - Pill/circular shape */
  full: 9999,
} as const;

/**
 * Semantic radius aliases for components
 */
export const radiiSemantics = {
  /** Buttons */
  button: radii.md,
  /** Input fields */
  input: radii.md,
  /** Cards */
  card: radii.lg,
  /** Modals / Dialogs */
  modal: radii.xl,
  /** Tooltips */
  tooltip: radii.sm,
  /** Badges / Tags */
  badge: radii.full,
  /** Avatars (circular) */
  avatar: radii.full,
  /** Checkboxes */
  checkbox: radii.xs,
  /** Toasts / Notifications */
  toast: radii.lg,
  /** Dropdown menus */
  dropdown: radii.lg,
  /** Popovers */
  popover: radii.lg,
} as const;

export type Radii = typeof radii;
export type RadiiSemantics = typeof radiiSemantics;
