/**
 * Design System Tokens - ValidAI Neumorphic Design System
 *
 * Platform-agnostic design tokens for consistent styling across web and native.
 * Import from '@saidabedi/design-system/tokens' or '@saidabedi/design-system'
 */

// Colors
export {
  colors,
  colorsDark,
  type Colors,
  type ColorsDark,
} from './colors';

// Spacing
export {
  spacing,
  spacingSemantics,
  type Spacing,
  type SpacingSemantics,
} from './spacing';

// Typography
export {
  fontFamilies,
  fontWeights,
  fontSizes,
  lineHeights,
  letterSpacings,
  textStyles,
  type FontFamilies,
  type FontWeights,
  type FontSizes,
  type LineHeights,
  type LetterSpacings,
  type TextStyles,
} from './typography';

// Radii
export {
  radii,
  radiiSemantics,
  type Radii,
  type RadiiSemantics,
} from './radii';

// Shadows (Neumorphic)
export {
  shadowsLight,
  shadowsDark,
  shadowValues,
  shadowColors,
  type ShadowsLight,
  type ShadowsDark,
  type ShadowValues,
  type ShadowColors,
} from './shadows';

// Gradients
export {
  gradientsLight,
  gradientsDark,
  meshGradients,
  overlays,
  accentGradients,
  radialGradients,
  dividerGradients,
  type GradientsLight,
  type GradientsDark,
  type MeshGradients,
  type Overlays,
  type AccentGradients,
  type RadialGradients,
  type DividerGradients,
} from './gradients';

// Motion & Animation
export {
  durations,
  durationsCSS,
  easings,
  transitions,
  nativeAnimations,
  stagger,
  type Durations,
  type DurationsCSS,
  type Easings,
  type Transitions,
  type NativeAnimations,
  type Stagger,
} from './motion';

// Z-Index Scale
export {
  zIndex,
  zIndexSemantics,
  type ZIndex,
  type ZIndexSemantics,
} from './zIndex';

/**
 * Combined tokens object for convenience
 */
export const tokens = {
  colors: {} as import('./colors').Colors,
  colorsDark: {} as import('./colors').ColorsDark,
  spacing: {} as import('./spacing').Spacing,
  spacingSemantics: {} as import('./spacing').SpacingSemantics,
  fontFamilies: {} as import('./typography').FontFamilies,
  fontWeights: {} as import('./typography').FontWeights,
  fontSizes: {} as import('./typography').FontSizes,
  lineHeights: {} as import('./typography').LineHeights,
  letterSpacings: {} as import('./typography').LetterSpacings,
  textStyles: {} as import('./typography').TextStyles,
  radii: {} as import('./radii').Radii,
  radiiSemantics: {} as import('./radii').RadiiSemantics,
  shadowsLight: {} as import('./shadows').ShadowsLight,
  shadowsDark: {} as import('./shadows').ShadowsDark,
  shadowValues: {} as import('./shadows').ShadowValues,
  shadowColors: {} as import('./shadows').ShadowColors,
  gradientsLight: {} as import('./gradients').GradientsLight,
  gradientsDark: {} as import('./gradients').GradientsDark,
  meshGradients: {} as import('./gradients').MeshGradients,
  overlays: {} as import('./gradients').Overlays,
  accentGradients: {} as import('./gradients').AccentGradients,
  radialGradients: {} as import('./gradients').RadialGradients,
  dividerGradients: {} as import('./gradients').DividerGradients,
  durations: {} as import('./motion').Durations,
  durationsCSS: {} as import('./motion').DurationsCSS,
  easings: {} as import('./motion').Easings,
  transitions: {} as import('./motion').Transitions,
  nativeAnimations: {} as import('./motion').NativeAnimations,
  stagger: {} as import('./motion').Stagger,
  zIndex: {} as import('./zIndex').ZIndex,
  zIndexSemantics: {} as import('./zIndex').ZIndexSemantics,
} as const;

// Populate the tokens object
import { colors, colorsDark } from './colors';
import { spacing, spacingSemantics } from './spacing';
import {
  fontFamilies,
  fontWeights,
  fontSizes,
  lineHeights,
  letterSpacings,
  textStyles,
} from './typography';
import { radii, radiiSemantics } from './radii';
import { shadowsLight, shadowsDark, shadowValues, shadowColors } from './shadows';
import {
  gradientsLight,
  gradientsDark,
  meshGradients,
  overlays,
  accentGradients,
  radialGradients,
  dividerGradients,
} from './gradients';
import { durations, durationsCSS, easings, transitions, nativeAnimations, stagger } from './motion';
import { zIndex, zIndexSemantics } from './zIndex';

Object.assign(tokens, {
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
  durations,
  durationsCSS,
  easings,
  transitions,
  nativeAnimations,
  stagger,
  zIndex,
  zIndexSemantics,
});

export type Tokens = typeof tokens;
