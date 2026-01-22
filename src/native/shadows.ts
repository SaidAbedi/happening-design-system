/**
 * React Native Shadow Tokens
 *
 * RN has limited shadow support:
 * - iOS: shadowColor, shadowOffset, shadowOpacity, shadowRadius
 * - Android: elevation only
 *
 * For true neumorphic shadows, use react-native-shadow-2 or similar.
 * These tokens provide the values for both approaches.
 */

import { Platform } from 'react-native';

export interface RNShadow {
  // iOS shadow properties
  shadowColor: string;
  shadowOffset: { width: number; height: number };
  shadowOpacity: number;
  shadowRadius: number;
  // Android elevation
  elevation: number;
}

export interface NeumorphicShadow {
  // For libraries like react-native-shadow-2
  outer: {
    distance: number;
    startColor: string;
    endColor: string;
  };
  inner?: {
    distance: number;
    startColor: string;
    endColor: string;
  };
}

/**
 * Basic RN shadows (single shadow only - use for simple elevation)
 */
export const rnShadowsLight: Record<string, RNShadow> = {
  none: {
    shadowColor: 'transparent',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
  sm: {
    shadowColor: '#B4A59B',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 3,
  },
  md: {
    shadowColor: '#B4A59B',
    shadowOffset: { width: 8, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 16,
    elevation: 6,
  },
  lg: {
    shadowColor: '#B4A59B',
    shadowOffset: { width: 16, height: 16 },
    shadowOpacity: 0.4,
    shadowRadius: 32,
    elevation: 12,
  },
};

export const rnShadowsDark: Record<string, RNShadow> = {
  none: {
    shadowColor: 'transparent',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
  sm: {
    shadowColor: '#0A0806',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.6,
    shadowRadius: 8,
    elevation: 3,
  },
  md: {
    shadowColor: '#0A0806',
    shadowOffset: { width: 8, height: 8 },
    shadowOpacity: 0.7,
    shadowRadius: 16,
    elevation: 6,
  },
  lg: {
    shadowColor: '#0A0806',
    shadowOffset: { width: 16, height: 16 },
    shadowOpacity: 0.8,
    shadowRadius: 32,
    elevation: 12,
  },
};

/**
 * Neumorphic shadow configs for react-native-shadow-2 or similar
 * These create the dual-shadow effect
 */
export const neumorphicShadowsLight = {
  raised: {
    distance: 8,
    startColor: 'rgba(180, 165, 155, 0.4)',
    finalColor: 'transparent',
    // For the light side, you'd add a second Shadow component
    lightSide: {
      distance: 8,
      startColor: 'rgba(255, 255, 255, 0.9)',
      finalColor: 'transparent',
      offset: [-8, -8],
    },
  },
  cut: {
    // Inset effect - darker inside
    inner: true,
    distance: 6,
    startColor: 'rgba(180, 165, 155, 0.4)',
    finalColor: 'transparent',
  },
  pressed: {
    inner: true,
    distance: 4,
    startColor: 'rgba(180, 165, 155, 0.5)',
    finalColor: 'transparent',
  },
} as const;

export const neumorphicShadowsDark = {
  raised: {
    distance: 8,
    startColor: 'rgba(10, 8, 6, 0.7)',
    finalColor: 'transparent',
    lightSide: {
      distance: 8,
      startColor: 'rgba(50, 45, 40, 0.12)',
      finalColor: 'transparent',
      offset: [-8, -8],
    },
  },
  cut: {
    inner: true,
    distance: 6,
    startColor: 'rgba(10, 8, 6, 0.7)',
    finalColor: 'transparent',
  },
  pressed: {
    inner: true,
    distance: 4,
    startColor: 'rgba(10, 8, 6, 0.7)',
    finalColor: 'transparent',
  },
} as const;

/**
 * Helper to get platform-appropriate shadow
 */
export const getShadow = (shadow: RNShadow) => {
  if (Platform.OS === 'android') {
    return { elevation: shadow.elevation };
  }
  return {
    shadowColor: shadow.shadowColor,
    shadowOffset: shadow.shadowOffset,
    shadowOpacity: shadow.shadowOpacity,
    shadowRadius: shadow.shadowRadius,
  };
};
