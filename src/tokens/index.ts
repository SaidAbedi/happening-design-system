/**
 * Design System Tokens
 *
 * Platform-agnostic design tokens for consistent styling across web and native.
 * Import from '@my-scope/design-system/tokens' or '@my-scope/design-system'
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
});

export type Tokens = typeof tokens;
