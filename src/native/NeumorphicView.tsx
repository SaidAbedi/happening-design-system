import React from 'react';
import {
  View,
  Pressable,
  type ViewStyle,
  type PressableProps,
  type StyleProp,
} from 'react-native';
import { colors, colorsDark } from '../tokens/colors';
import { radii } from '../tokens/radii';
import { rnShadowsLight, rnShadowsDark, getShadow, type RNShadow } from './shadows';

export type NeumorphicVariant = 'raised' | 'cut' | 'flat';

/** Gradient border colors for neumorphic-accent variant */
export const accentGradientColors = {
  light: {
    start: '#F5CFC2', // Terracotta (top-left)
    end: '#B8D4D4',   // Teal (bottom-right)
  },
  dark: {
    start: '#3D2E28', // Dark terracotta
    end: '#233A3A',   // Dark teal
  },
};

/** Neumorphic shadow configs for react-native-shadow-2 */
export const neumorphicShadowConfig = {
  light: {
    raised: {
      distance: 6,
      startColor: 'rgba(180, 165, 155, 0.25)',
      finalColor: 'transparent',
      offset: [3, 3] as [number, number],
    },
    cut: {
      distance: 4,
      startColor: 'rgba(180, 165, 155, 0.3)',
      finalColor: 'transparent',
      offset: [2, 2] as [number, number],
    },
  },
  dark: {
    raised: {
      distance: 6,
      startColor: 'rgba(0, 0, 0, 0.4)',
      finalColor: 'transparent',
      offset: [3, 3] as [number, number],
    },
    cut: {
      distance: 4,
      startColor: 'rgba(0, 0, 0, 0.5)',
      finalColor: 'transparent',
      offset: [2, 2] as [number, number],
    },
  },
};

export interface NeumorphicViewProps extends Omit<PressableProps, 'style'> {
  /** Neumorphic style variant */
  variant?: NeumorphicVariant;
  /** Color mode */
  mode?: 'light' | 'dark';
  /** Border radius preset or number */
  radius?: keyof typeof radii | number;
  /** Whether to show pressed state on press */
  showPressedState?: boolean;
  /** Custom style */
  style?: StyleProp<ViewStyle>;
  /** Children */
  children?: React.ReactNode;
  /**
   * Add gradient accent border (terracotta → teal).
   * Requires LinearGradient prop to be set.
   * Works with any variant (raised, cut, flat).
   */
  accentBorder?: boolean;
  /**
   * LinearGradient component for accent border effect.
   * Pass expo-linear-gradient or react-native-linear-gradient.
   * Required when accentBorder is true.
   * @example
   * import { LinearGradient } from 'expo-linear-gradient';
   * <NeumorphicView variant="raised" accentBorder LinearGradient={LinearGradient} />
   */
  LinearGradient?: React.ComponentType<{
    colors: string[];
    start?: { x: number; y: number };
    end?: { x: number; y: number };
    style?: StyleProp<ViewStyle>;
    children?: React.ReactNode;
  }>;
  /**
   * Shadow component from react-native-shadow-2 for enhanced neumorphic shadows.
   * When provided, uses proper soft shadows instead of basic RN shadows.
   * @example
   * import { Shadow } from 'react-native-shadow-2';
   * <NeumorphicView variant="raised" Shadow={Shadow} />
   */
  Shadow?: React.ComponentType<{
    distance?: number;
    startColor?: string;
    finalColor?: string;
    offset?: [number, number];
    style?: StyleProp<ViewStyle>;
    containerStyle?: StyleProp<ViewStyle>;
    radius?: number;
    stretch?: boolean;
    children?: React.ReactNode;
  }>;
}

/**
 * NeumorphicView - A View with neumorphic styling
 *
 * @example
 * ```tsx
 * // Raised (default) - floating above surface
 * <NeumorphicView variant="raised">
 *   <Text>Floating card</Text>
 * </NeumorphicView>
 *
 * // Cut - pressed into surface (selected state)
 * <NeumorphicView variant="cut">
 *   <Text>Selected item</Text>
 * </NeumorphicView>
 *
 * // Interactive with press handling
 * <NeumorphicView
 *   variant={isSelected ? "cut" : "raised"}
 *   showPressedState
 *   onPress={() => setSelected(!isSelected)}
 * >
 *   <Text>Tap me</Text>
 * </NeumorphicView>
 * ```
 *
 * Note: For true neumorphic dual-shadow effects, consider using
 * react-native-shadow-2 with the neumorphicShadowsLight/Dark tokens.
 */
export const NeumorphicView = ({
  variant = 'raised',
  mode = 'light',
  radius = '2xl',
  showPressedState = false,
  style,
  children,
  onPress,
  onPressIn,
  onPressOut,
  accentBorder = false,
  LinearGradient,
  Shadow,
  ...pressableProps
}: NeumorphicViewProps) => {
  const c = mode === 'light' ? colors : colorsDark;
  const shadows = mode === 'light' ? rnShadowsLight : rnShadowsDark;
  const gradientColors = mode === 'light' ? accentGradientColors.light : accentGradientColors.dark;
  const shadowConfig = mode === 'light' ? neumorphicShadowConfig.light : neumorphicShadowConfig.dark;

  const resolvedRadius = typeof radius === 'number' ? radius : radii[radius];
  const borderWidth = 2;

  const getBackgroundColor = (v: NeumorphicVariant, isPressed: boolean): string => {
    if (showPressedState && isPressed) {
      return c.surface.cut;
    }
    switch (v) {
      case 'raised':
        return c.surface.raised;
      case 'cut':
        return c.surface.cut;
      case 'flat':
      default:
        return c.surface.base;
    }
  };

  const getVariantStyle = (v: NeumorphicVariant, isPressed: boolean): ViewStyle => {
    const base: ViewStyle = {
      backgroundColor: getBackgroundColor(v, isPressed),
      borderRadius: resolvedRadius,
    };

    // When using accent border, don't add variant borders (gradient handles it)
    if (accentBorder && LinearGradient) {
      return {
        ...base,
        borderRadius: resolvedRadius - borderWidth,
      };
    }

    switch (v) {
      case 'raised':
        return {
          ...base,
          ...getShadow(shadows['md'] as RNShadow),
        };
      case 'cut':
        // Inset shadows aren't supported in RN
        // We simulate with darker background and subtle border
        return {
          ...base,
          borderWidth: 1,
          borderColor: mode === 'light'
            ? 'rgba(180, 165, 155, 0.2)'
            : 'rgba(10, 8, 6, 0.3)',
        };
      case 'flat':
        return {
          ...base,
          borderWidth: 1,
          borderColor: c.border.default,
        };
      default:
        return base;
    }
  };

  // Helper to wrap content with Shadow if provided
  const wrapWithShadow = (content: React.ReactNode, isRaised: boolean) => {
    if (!Shadow || !isRaised) return content;
    const config = shadowConfig.raised;
    return (
      <Shadow
        distance={config.distance}
        startColor={config.startColor}
        finalColor={config.finalColor}
        offset={config.offset}
        radius={resolvedRadius}
        stretch={true}
      >
        {content}
      </Shadow>
    );
  };

  // Render with gradient accent border
  if (accentBorder && LinearGradient) {
    const gradientStyle: ViewStyle = {
      borderRadius: resolvedRadius,
      padding: borderWidth,
    };

    // Non-interactive with accent border
    if (!onPress && !pressableProps['onLongPress']) {
      const content = (
        <LinearGradient
          colors={[gradientColors.start, gradientColors.end]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={gradientStyle}
        >
          <View style={[getVariantStyle(variant, false), style]}>
            {children}
          </View>
        </LinearGradient>
      );
      return wrapWithShadow(content, variant === 'raised');
    }

    // Interactive with accent border
    return (
      <Pressable
        onPress={onPress}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        {...pressableProps}
      >
        {({ pressed }: { pressed: boolean }) => {
          const content = (
            <LinearGradient
              colors={[gradientColors.start, gradientColors.end]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={gradientStyle}
            >
              <View style={[getVariantStyle(variant, pressed), style]}>
                {children}
              </View>
            </LinearGradient>
          );
          return wrapWithShadow(content, variant === 'raised' && !pressed);
        }}
      </Pressable>
    );
  }

  // If no onPress, render as View (no accent border)
  if (!onPress && !pressableProps['onLongPress']) {
    const content = (
      <View style={[getVariantStyle(variant, false), style]}>
        {children}
      </View>
    );
    return wrapWithShadow(content, variant === 'raised');
  }

  // Render as Pressable for interactive use (no accent border)
  return (
    <Pressable
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      {...pressableProps}
    >
      {({ pressed }: { pressed: boolean }) => {
        const content = (
          <View style={[getVariantStyle(variant, pressed), style]}>
            {children}
          </View>
        );
        return wrapWithShadow(content, variant === 'raised' && !pressed);
      }}
    </Pressable>
  );
};

export default NeumorphicView;
