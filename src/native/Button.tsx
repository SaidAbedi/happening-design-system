import {
  Pressable,
  Text,
  type PressableProps,
  type ViewStyle,
  type TextStyle,
  type StyleProp,
} from 'react-native';
import { colors, colorsDark } from '../tokens/colors';
import { radii } from '../tokens/radii';
import { spacing } from '../tokens/spacing';
import { fontFamilies, fontWeights } from '../tokens/typography';
import { rnShadowsLight, rnShadowsDark, getShadow, type RNShadow } from './shadows';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends Omit<PressableProps, 'style'> {
  /** Button visual style */
  variant?: ButtonVariant;
  /** Button size */
  size?: ButtonSize;
  /** Color mode */
  mode?: 'light' | 'dark';
  /** Button label */
  children: string;
  /** Custom container style */
  style?: StyleProp<ViewStyle>;
  /** Custom text style */
  textStyle?: StyleProp<TextStyle>;
}

interface SizeConfig {
  paddingVertical: number;
  paddingHorizontal: number;
  fontSize: number;
  borderRadius: number;
}

const sizeConfigs: Record<ButtonSize, SizeConfig> = {
  sm: {
    paddingVertical: spacing.sm,  // 8
    paddingHorizontal: spacing.lg, // 16
    fontSize: 14,
    borderRadius: radii.lg,  // 8
  },
  md: {
    paddingVertical: spacing.md,  // 12
    paddingHorizontal: spacing.xl, // 20
    fontSize: 16,
    borderRadius: radii.xl,  // 12
  },
  lg: {
    paddingVertical: spacing.lg,  // 16
    paddingHorizontal: spacing['2xl'], // 24
    fontSize: 18,
    borderRadius: radii['2xl'],  // 16
  },
};

/**
 * Button - A neumorphic button component
 *
 * @example
 * ```tsx
 * <Button variant="primary" onPress={handlePress}>
 *   Click me
 * </Button>
 *
 * <Button variant="secondary" size="lg">
 *   Large secondary
 * </Button>
 *
 * <Button variant="ghost" mode="dark">
 *   Ghost button
 * </Button>
 * ```
 */
export const Button = ({
  variant = 'primary',
  size = 'md',
  mode = 'light',
  children,
  disabled = false,
  style,
  textStyle,
  ...pressableProps
}: ButtonProps) => {
  const c = mode === 'light' ? colors : colorsDark;
  const shadows = mode === 'light' ? rnShadowsLight : rnShadowsDark;
  const config = sizeConfigs[size];

  const getVariantStyles = (
    v: ButtonVariant,
    isPressed: boolean
  ): { container: ViewStyle; text: TextStyle } => {
    const baseContainer: ViewStyle = {
      paddingVertical: config.paddingVertical,
      paddingHorizontal: config.paddingHorizontal,
      borderRadius: config.borderRadius,
      alignItems: 'center',
      justifyContent: 'center',
    };

    const baseText: TextStyle = {
      fontSize: config.fontSize,
      fontFamily: fontFamilies.sans,
      fontWeight: fontWeights.medium as TextStyle['fontWeight'],
    };

    if (disabled) {
      return {
        container: {
          ...baseContainer,
          backgroundColor: c.interactive.primaryDisabled,
        },
        text: {
          ...baseText,
          color: c.text.disabled,
        },
      };
    }

    switch (v) {
      case 'primary':
        return {
          container: {
            ...baseContainer,
            backgroundColor: isPressed
              ? c.interactive.primaryActive
              : c.interactive.primary,
            ...getShadow((isPressed ? shadows['none'] : shadows['sm']) as RNShadow),
          },
          text: {
            ...baseText,
            color: c.brand.primaryForeground,
          },
        };

      case 'secondary':
        return {
          container: {
            ...baseContainer,
            backgroundColor: isPressed
              ? c.surface.cut
              : c.surface.raised,
            ...getShadow((isPressed ? shadows['none'] : shadows['sm']) as RNShadow),
          },
          text: {
            ...baseText,
            color: c.text.primary,
          },
        };

      case 'ghost':
        return {
          container: {
            ...baseContainer,
            backgroundColor: isPressed
              ? c.interactive.secondaryActive
              : 'transparent',
          },
          text: {
            ...baseText,
            color: c.brand.primary,
          },
        };

      case 'outline':
        return {
          container: {
            ...baseContainer,
            backgroundColor: isPressed
              ? c.interactive.secondaryActive
              : 'transparent',
            borderWidth: 2,
            borderColor: c.brand.primary,
          },
          text: {
            ...baseText,
            color: c.brand.primary,
          },
        };

      default:
        return { container: baseContainer, text: baseText };
    }
  };

  return (
    <Pressable
      disabled={disabled}
      {...pressableProps}
      style={({ pressed }: { pressed: boolean }) => {
        const styles = getVariantStyles(variant, pressed);
        return [styles.container, style];
      }}
    >
      {({ pressed }: { pressed: boolean }) => {
        const styles = getVariantStyles(variant, pressed);
        return (
          <Text style={[styles.text, textStyle]}>
            {children}
          </Text>
        );
      }}
    </Pressable>
  );
};

export default Button;
