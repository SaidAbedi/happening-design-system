/**
 * React Native Design System
 *
 * Import from '@saidabedi/design-system/native'
 *
 * Includes:
 * - All tokens (colors, spacing, typography, etc.)
 * - RN-specific shadow tokens
 * - Native components (Button, Card, NeumorphicView)
 */

// Theme utilities
export {
  createNativeTheme,
  createResponsiveSpacing,
  createShadow,
  shadows,
  nativeFontFamilies,
  type NativeTheme,
  type NativeThemeOptions,
  type NativeTextStyle,
  type Platform,
} from './createNativeTheme';

// RN Shadow tokens
export {
  rnShadowsLight,
  rnShadowsDark,
  neumorphicShadowsLight,
  neumorphicShadowsDark,
  getShadow,
  type RNShadow,
  type NeumorphicShadow,
} from './shadows';

// Components
export {
  NeumorphicView,
  type NeumorphicViewProps,
  type NeumorphicVariant,
} from './NeumorphicView';

export {
  Card,
  type CardProps,
  type CardVariant,
  type CardSize,
} from './Card';

export {
  Button,
  type ButtonProps,
  type ButtonVariant,
  type ButtonSize,
} from './Button';

// Re-export all tokens for convenience
export * from '../tokens';
