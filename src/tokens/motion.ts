/**
 * Motion & Animation Tokens - ValidAI Neumorphic Design System
 *
 * Duration, easing, and transition tokens for refined animations.
 * Uses smooth, natural motion principles for a polished feel.
 */

/**
 * Duration tokens in milliseconds
 */
export const durations = {
  // Micro-interactions - hover states, focus rings
  fast: 150,

  // Standard transitions - most UI changes
  normal: 200,

  // Emphasis animations - modal opens, page transitions
  slow: 300,

  // Extended animations - complex page transitions, onboarding
  slower: 500,
} as const;

/**
 * Duration tokens as CSS strings
 */
export const durationsCSS = {
  fast: '150ms',
  normal: '200ms',
  slow: '300ms',
  slower: '500ms',
} as const;

/**
 * Easing functions - cubic bezier curves for natural motion
 */
export const easings = {
  // Default - smooth, natural motion for most transitions
  default: 'cubic-bezier(0.22, 1, 0.36, 1)',

  // In - elements entering the screen
  in: 'cubic-bezier(0.4, 0, 1, 1)',

  // Out - elements exiting the screen
  out: 'cubic-bezier(0, 0, 0.2, 1)',

  // In-Out - elements moving within the screen
  inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',

  // Linear - constant speed (use sparingly)
  linear: 'linear',

  // Bounce - playful, bouncy effect
  bounce: 'cubic-bezier(0.34, 1.56, 0.64, 1)',

  // Smooth - very smooth deceleration
  smooth: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
} as const;

/**
 * Pre-composed transition strings for common use cases
 */
export const transitions = {
  // All properties with default easing
  all: `all ${durationsCSS.normal} ${easings.default}`,

  // Fast all properties
  allFast: `all ${durationsCSS.fast} ${easings.default}`,

  // Slow all properties
  allSlow: `all ${durationsCSS.slow} ${easings.default}`,

  // Opacity transitions
  opacity: `opacity ${durationsCSS.normal} ${easings.default}`,
  opacityFast: `opacity ${durationsCSS.fast} ${easings.default}`,

  // Transform transitions
  transform: `transform ${durationsCSS.normal} ${easings.default}`,
  transformFast: `transform ${durationsCSS.fast} ${easings.default}`,

  // Shadow transitions (for neumorphic effects)
  shadow: `box-shadow ${durationsCSS.normal} ${easings.default}`,
  shadowFast: `box-shadow ${durationsCSS.fast} ${easings.default}`,

  // Color transitions
  colors: `background-color ${durationsCSS.normal} ${easings.default}, border-color ${durationsCSS.normal} ${easings.default}, color ${durationsCSS.normal} ${easings.default}`,

  // Button transitions (shadow + transform + colors)
  button: `box-shadow ${durationsCSS.normal} ${easings.default}, transform ${durationsCSS.fast} ${easings.default}, background-color ${durationsCSS.normal} ${easings.default}`,

  // Card hover transitions
  card: `box-shadow ${durationsCSS.normal} ${easings.default}, transform ${durationsCSS.normal} ${easings.default}`,

  // Input focus transitions
  input: `box-shadow ${durationsCSS.fast} ${easings.default}, border-color ${durationsCSS.fast} ${easings.default}`,

  // None - disable transitions
  none: 'none',
} as const;

/**
 * Native animation configurations
 * For React Native Animated and Reanimated
 */
export const nativeAnimations = {
  // Spring configurations
  spring: {
    default: {
      damping: 20,
      stiffness: 300,
      mass: 1,
    },
    gentle: {
      damping: 25,
      stiffness: 200,
      mass: 1,
    },
    bouncy: {
      damping: 10,
      stiffness: 400,
      mass: 0.8,
    },
    stiff: {
      damping: 30,
      stiffness: 500,
      mass: 1,
    },
  },

  // Timing configurations
  timing: {
    fast: {
      duration: 150,
    },
    normal: {
      duration: 200,
    },
    slow: {
      duration: 300,
    },
    slower: {
      duration: 500,
    },
  },
} as const;

/**
 * Stagger delays for sequential animations
 */
export const stagger = {
  // Fast stagger - quick cascading effect
  fast: 30,

  // Normal stagger - standard list animations
  normal: 50,

  // Slow stagger - dramatic reveal effect
  slow: 80,
} as const;

export type Durations = typeof durations;
export type DurationsCSS = typeof durationsCSS;
export type Easings = typeof easings;
export type Transitions = typeof transitions;
export type NativeAnimations = typeof nativeAnimations;
export type Stagger = typeof stagger;
