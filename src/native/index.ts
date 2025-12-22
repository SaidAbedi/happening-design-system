/**
 * Native Theme Adapter
 *
 * Import from '@my-scope/design-system/native'
 */

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

// Re-export tokens for convenience (optional)
export * from '../tokens';
