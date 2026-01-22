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
  ...pressableProps
}: NeumorphicViewProps) => {
  const c = mode === 'light' ? colors : colorsDark;
  const shadows = mode === 'light' ? rnShadowsLight : rnShadowsDark;

  const resolvedRadius = typeof radius === 'number' ? radius : radii[radius];

  const getBackgroundColor = (v: NeumorphicVariant): string => {
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
      backgroundColor: getBackgroundColor(v),
      borderRadius: resolvedRadius,
    };

    // Apply pressed state if enabled
    if (showPressedState && isPressed) {
      return {
        ...base,
        backgroundColor: c.surface.cut,
        // Note: RN doesn't support inset shadows natively
        // For true inset effect, use react-native-shadow-2
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

  // If no onPress, render as View
  if (!onPress && !pressableProps['onLongPress']) {
    return (
      <View style={[getVariantStyle(variant, false), style]}>
        {children}
      </View>
    );
  }

  // Render as Pressable for interactive use
  return (
    <Pressable
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      {...pressableProps}
      style={({ pressed }: { pressed: boolean }) => [
        getVariantStyle(variant, pressed),
        style,
      ]}
    >
      {children}
    </Pressable>
  );
};

export default NeumorphicView;
