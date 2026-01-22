/**
 * Gradient Tokens - ValidAI Neumorphic Design System
 *
 * Background gradients for signup screens, hero sections, and ambient backgrounds.
 * Inspired by Mediterranean warmth with Terracotta + Teal palette.
 *
 * Includes:
 * - Hero/signup gradients
 * - Accent gradients (terracotta & teal)
 * - Radial gradients (surface, spotlight, glow)
 * - Overlay gradients
 * - Divider gradients
 */

/**
 * Gradient color stops for light mode
 * Warm cream → Soft peach → Muted teal
 */
export const gradientsLight = {
  // Primary signup/hero gradient - warm and inviting
  signup: {
    colors: ['#FDF8F4', '#FAE8E1', '#F5EDE5', '#DCE9E9'],
    locations: [0, 0.3, 0.6, 1],
    angle: 160, // degrees
    css: 'linear-gradient(160deg, #FDF8F4 0%, #FAE8E1 30%, #F5EDE5 60%, #DCE9E9 100%)',
  },

  // Subtle terracotta glow
  terracottaGlow: {
    colors: ['#FDF8F4', '#FAE8E1', '#F5CFC2', '#FDF8F4'],
    locations: [0, 0.4, 0.7, 1],
    angle: 135,
    css: 'linear-gradient(135deg, #FDF8F4 0%, #FAE8E1 40%, #F5CFC2 70%, #FDF8F4 100%)',
  },

  // Teal accent gradient
  tealAccent: {
    colors: ['#FDF8F4', '#F0F7F7', '#DCE9E9', '#B8D4D4'],
    locations: [0, 0.3, 0.6, 1],
    angle: 180,
    css: 'linear-gradient(180deg, #FDF8F4 0%, #F0F7F7 30%, #DCE9E9 60%, #B8D4D4 100%)',
  },

  // Warm ambient - very subtle
  ambient: {
    colors: ['#FDFCFA', '#FDF8F4', '#FAF5F0'],
    locations: [0, 0.5, 1],
    angle: 145,
    css: 'linear-gradient(145deg, #FDFCFA 0%, #FDF8F4 50%, #FAF5F0 100%)',
  },

  // Radial glow for bokeh effect
  radialGlow: {
    colors: ['#FAE8E1', '#FDF8F4', '#F0F7F7'],
    locations: [0, 0.5, 1],
    css: 'radial-gradient(ellipse at 30% 20%, #FAE8E1 0%, #FDF8F4 50%, #F0F7F7 100%)',
  },

  // Wave-inspired gradient
  wave: {
    colors: ['#FDF8F4', '#F5EDE5', '#DCE9E9', '#F0F7F7', '#FDF8F4'],
    locations: [0, 0.25, 0.5, 0.75, 1],
    angle: 170,
    css: 'linear-gradient(170deg, #FDF8F4 0%, #F5EDE5 25%, #DCE9E9 50%, #F0F7F7 75%, #FDF8F4 100%)',
  },
} as const;

/**
 * Gradient color stops for dark mode
 * Warm black → Deep terracotta → Muted teal
 */
export const gradientsDark = {
  // Primary signup/hero gradient - warm and moody
  signup: {
    colors: ['#1C1917', '#292524', '#2A3535', '#233A3A'],
    locations: [0, 0.3, 0.6, 1],
    angle: 160,
    css: 'linear-gradient(160deg, #1C1917 0%, #292524 30%, #2A3535 60%, #233A3A 100%)',
  },

  // Terracotta glow on dark
  terracottaGlow: {
    colors: ['#1C1917', '#2D2420', '#3D2E28', '#292524'],
    locations: [0, 0.4, 0.7, 1],
    angle: 135,
    css: 'linear-gradient(135deg, #1C1917 0%, #2D2420 40%, #3D2E28 70%, #292524 100%)',
  },

  // Teal accent on dark
  tealAccent: {
    colors: ['#1C1917', '#1E2625', '#233A3A', '#2A4545'],
    locations: [0, 0.3, 0.6, 1],
    angle: 180,
    css: 'linear-gradient(180deg, #1C1917 0%, #1E2625 30%, #233A3A 60%, #2A4545 100%)',
  },

  // Dark ambient - very subtle
  ambient: {
    colors: ['#1A1816', '#1C1917', '#201E1C'],
    locations: [0, 0.5, 1],
    angle: 145,
    css: 'linear-gradient(145deg, #1A1816 0%, #1C1917 50%, #201E1C 100%)',
  },

  // Radial glow for bokeh effect (dark)
  radialGlow: {
    colors: ['#3D2E28', '#1C1917', '#233A3A'],
    locations: [0, 0.5, 1],
    css: 'radial-gradient(ellipse at 30% 20%, #3D2E28 0%, #1C1917 50%, #233A3A 100%)',
  },

  // Wave-inspired gradient (dark)
  wave: {
    colors: ['#1C1917', '#2D2420', '#233A3A', '#1E2625', '#1C1917'],
    locations: [0, 0.25, 0.5, 0.75, 1],
    angle: 170,
    css: 'linear-gradient(170deg, #1C1917 0%, #2D2420 25%, #233A3A 50%, #1E2625 75%, #1C1917 100%)',
  },
} as const;

/**
 * Mesh gradient definitions for more complex backgrounds
 * Use with CSS mesh gradients or as layered radial gradients
 */
export const meshGradients = {
  light: {
    // Layer multiple radial gradients for depth
    layers: [
      'radial-gradient(ellipse at 20% 10%, rgba(250, 232, 225, 0.8) 0%, transparent 50%)',
      'radial-gradient(ellipse at 80% 30%, rgba(220, 233, 233, 0.6) 0%, transparent 40%)',
      'radial-gradient(ellipse at 40% 80%, rgba(245, 207, 194, 0.4) 0%, transparent 45%)',
      'linear-gradient(160deg, #FDF8F4 0%, #FAF5F0 100%)',
    ],
    css: `
      radial-gradient(ellipse at 20% 10%, rgba(250, 232, 225, 0.8) 0%, transparent 50%),
      radial-gradient(ellipse at 80% 30%, rgba(220, 233, 233, 0.6) 0%, transparent 40%),
      radial-gradient(ellipse at 40% 80%, rgba(245, 207, 194, 0.4) 0%, transparent 45%),
      linear-gradient(160deg, #FDF8F4 0%, #FAF5F0 100%)
    `.replace(/\s+/g, ' ').trim(),
  },
  dark: {
    layers: [
      'radial-gradient(ellipse at 20% 10%, rgba(61, 46, 40, 0.6) 0%, transparent 50%)',
      'radial-gradient(ellipse at 80% 30%, rgba(35, 58, 58, 0.5) 0%, transparent 40%)',
      'radial-gradient(ellipse at 40% 80%, rgba(45, 36, 32, 0.4) 0%, transparent 45%)',
      'linear-gradient(160deg, #1C1917 0%, #201E1C 100%)',
    ],
    css: `
      radial-gradient(ellipse at 20% 10%, rgba(61, 46, 40, 0.6) 0%, transparent 50%),
      radial-gradient(ellipse at 80% 30%, rgba(35, 58, 58, 0.5) 0%, transparent 40%),
      radial-gradient(ellipse at 40% 80%, rgba(45, 36, 32, 0.4) 0%, transparent 45%),
      linear-gradient(160deg, #1C1917 0%, #201E1C 100%)
    `.replace(/\s+/g, ' ').trim(),
  },
} as const;

/**
 * Overlay gradients for adding depth to images
 */
export const overlays = {
  light: {
    // Subtle vignette
    vignette: 'radial-gradient(ellipse at center, transparent 0%, rgba(253, 248, 244, 0.3) 100%)',
    // Top fade for status bar
    topFade: 'linear-gradient(180deg, rgba(253, 248, 244, 0.9) 0%, transparent 100%)',
    // Bottom fade for navigation
    bottomFade: 'linear-gradient(0deg, rgba(253, 248, 244, 0.9) 0%, transparent 100%)',
  },
  dark: {
    vignette: 'radial-gradient(ellipse at center, transparent 0%, rgba(28, 25, 23, 0.5) 100%)',
    topFade: 'linear-gradient(180deg, rgba(28, 25, 23, 0.9) 0%, transparent 100%)',
    bottomFade: 'linear-gradient(0deg, rgba(28, 25, 23, 0.9) 0%, transparent 100%)',
  },
} as const;

/**
 * Accent gradients for buttons, highlights, and interactive elements
 */
export const accentGradients = {
  // Primary terracotta accent gradient (diagonal)
  terracotta: {
    colors: ['#D4856A', '#C4756A'],
    locations: [0, 1],
    angle: 135,
    css: 'linear-gradient(135deg, #D4856A 0%, #C4756A 100%)',
  },

  // Vertical terracotta accent gradient
  terracottaVertical: {
    colors: ['#D4856A', '#C4756A'],
    locations: [0, 1],
    angle: 180,
    css: 'linear-gradient(180deg, #D4856A 0%, #C4756A 100%)',
  },

  // Teal accent gradient
  teal: {
    colors: ['#6AACAC', '#5A9A9A'],
    locations: [0, 1],
    angle: 135,
    css: 'linear-gradient(135deg, #6AACAC 0%, #5A9A9A 100%)',
  },

  // Vertical teal gradient
  tealVertical: {
    colors: ['#6AACAC', '#5A9A9A'],
    locations: [0, 1],
    angle: 180,
    css: 'linear-gradient(180deg, #6AACAC 0%, #5A9A9A 100%)',
  },
} as const;

/**
 * Radial gradients for surface effects, spotlights, and glow effects
 */
export const radialGradients = {
  light: {
    // Radial surface gradient - center to edges
    surface: {
      css: 'radial-gradient(ellipse at center, #FFFFFF 0%, #FDF8F4 100%)',
    },

    // Spotlight effect from top
    spotlight: {
      css: 'radial-gradient(ellipse at top, #FFFFFF 0%, #FDF8F4 50%, #F5EDE5 100%)',
    },

    // Glow effect for bokeh/ambient
    glow: {
      css: 'radial-gradient(ellipse at 30% 20%, #FAE8E1 0%, #FDF8F4 50%, #F0F7F7 100%)',
    },
  },
  dark: {
    // Radial surface gradient - center to edges
    surface: {
      css: 'radial-gradient(ellipse at center, #292524 0%, #1C1917 100%)',
    },

    // Spotlight effect from top
    spotlight: {
      css: 'radial-gradient(ellipse at top, #292524 0%, #1C1917 50%, #1A1816 100%)',
    },

    // Glow effect for bokeh/ambient
    glow: {
      css: 'radial-gradient(ellipse at 30% 20%, #3D2E28 0%, #1C1917 50%, #233A3A 100%)',
    },
  },
} as const;

/**
 * Divider gradients with faded edges
 */
export const dividerGradients = {
  light: {
    // Default divider with fade edges
    default: 'linear-gradient(90deg, transparent 0%, rgba(45, 36, 32, 0.08) 20%, rgba(45, 36, 32, 0.08) 80%, transparent 100%)',

    // Accent divider (terracotta)
    accent: 'linear-gradient(90deg, transparent 0%, rgba(196, 117, 106, 0.25) 20%, rgba(196, 117, 106, 0.25) 80%, transparent 100%)',

    // Teal divider
    teal: 'linear-gradient(90deg, transparent 0%, rgba(90, 154, 154, 0.25) 20%, rgba(90, 154, 154, 0.25) 80%, transparent 100%)',

    // Strong divider
    strong: 'linear-gradient(90deg, transparent 0%, rgba(45, 36, 32, 0.15) 20%, rgba(45, 36, 32, 0.15) 80%, transparent 100%)',

    // Subtle divider
    subtle: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.6) 20%, rgba(255, 255, 255, 0.6) 80%, transparent 100%)',

    // Vertical divider
    vertical: 'linear-gradient(180deg, transparent 0%, rgba(45, 36, 32, 0.08) 20%, rgba(45, 36, 32, 0.08) 80%, transparent 100%)',
  },
  dark: {
    // Default divider with fade edges
    default: 'linear-gradient(90deg, transparent 0%, rgba(212, 133, 106, 0.2) 20%, rgba(212, 133, 106, 0.2) 80%, transparent 100%)',

    // Accent divider (terracotta)
    accent: 'linear-gradient(90deg, transparent 0%, rgba(212, 133, 106, 0.3) 20%, rgba(212, 133, 106, 0.3) 80%, transparent 100%)',

    // Teal divider
    teal: 'linear-gradient(90deg, transparent 0%, rgba(106, 172, 172, 0.3) 20%, rgba(106, 172, 172, 0.3) 80%, transparent 100%)',

    // Strong divider
    strong: 'linear-gradient(90deg, transparent 0%, rgba(212, 133, 106, 0.35) 20%, rgba(212, 133, 106, 0.35) 80%, transparent 100%)',

    // Subtle divider
    subtle: 'linear-gradient(90deg, transparent 0%, rgba(212, 133, 106, 0.1) 20%, rgba(212, 133, 106, 0.1) 80%, transparent 100%)',

    // Vertical divider
    vertical: 'linear-gradient(180deg, transparent 0%, rgba(212, 133, 106, 0.2) 20%, rgba(212, 133, 106, 0.2) 80%, transparent 100%)',
  },
} as const;

/**
 * Icon gradients for colorful icon fills
 * Each gradient has start/end colors for SVG linearGradient
 */
export const iconGradients = {
  // Terracotta/red gradient
  terracotta: {
    start: '#E4948A',
    end: '#C4756A',
    angle: 135,
    css: 'linear-gradient(135deg, #E4948A 0%, #C4756A 100%)',
  },

  // Teal/green gradient
  teal: {
    start: '#7ABCBC',
    end: '#5A9A9A',
    angle: 135,
    css: 'linear-gradient(135deg, #7ABCBC 0%, #5A9A9A 100%)',
  },

  // Heart/love red gradient
  heart: {
    start: '#F5A8A1',
    end: '#E87E74',
    angle: 135,
    css: 'linear-gradient(135deg, #F5A8A1 0%, #E87E74 100%)',
  },

  // Success green gradient
  success: {
    start: '#8EBABA',
    end: '#6AACAC',
    angle: 135,
    css: 'linear-gradient(135deg, #8EBABA 0%, #6AACAC 100%)',
  },

  // Warning amber gradient
  warning: {
    start: '#F5D4A4',
    end: '#E4B584',
    angle: 135,
    css: 'linear-gradient(135deg, #F5D4A4 0%, #E4B584 100%)',
  },

  // Sunset gradient (terracotta to amber)
  sunset: {
    start: '#E4948A',
    end: '#E4B584',
    angle: 135,
    css: 'linear-gradient(135deg, #E4948A 0%, #E4B584 100%)',
  },

  // Ocean gradient (teal variations)
  ocean: {
    start: '#8EBABA',
    end: '#5A9A9A',
    angle: 180,
    css: 'linear-gradient(180deg, #8EBABA 0%, #5A9A9A 100%)',
  },

  // Primary brand gradient
  brand: {
    start: '#D4856A',
    end: '#A65A50',
    angle: 135,
    css: 'linear-gradient(135deg, #D4856A 0%, #A65A50 100%)',
  },
} as const;

export type GradientsLight = typeof gradientsLight;
export type GradientsDark = typeof gradientsDark;
export type MeshGradients = typeof meshGradients;
export type Overlays = typeof overlays;
export type AccentGradients = typeof accentGradients;
export type RadialGradients = typeof radialGradients;
export type DividerGradients = typeof dividerGradients;
export type IconGradients = typeof iconGradients;
