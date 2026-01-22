/**
 * React Native Icon Component
 *
 * Uses react-native-svg for rendering icons.
 * Mirrors the web Icon API for consistency.
 *
 * @requires react-native-svg - Install with: npx expo install react-native-svg
 */

import type { ViewStyle, StyleProp } from 'react-native';
import { View } from 'react-native';
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  Path,
  Circle,
  Rect,
  Line,
  G,
} from 'react-native-svg';
import { colors, colorsDark } from '../tokens/colors';
import { iconGradients } from '../tokens/gradients';

export type IconName =
  | 'calendar'
  | 'search'
  | 'heart'
  | 'heart-outline'
  | 'close-circle'
  | 'sunny'
  | 'moon'
  | 'phone-portrait'
  | 'options';

export type IconSize = 'sm' | 'md' | 'lg' | 'xl';

export type IconGradientName = keyof typeof iconGradients;

export interface IconGradient {
  start: string;
  end: string;
  angle?: number;
}

export type IconGradientMode = 'fill' | 'stroke' | 'both';

export interface IconProps {
  /** Icon name */
  name: IconName;
  /** Size of the icon */
  size?: IconSize | number;
  /** Color of the icon - defaults to text.primary. Ignored if gradient is set. */
  color?: string;
  /** Gradient fill - use preset name or custom {start, end} */
  gradient?: IconGradientName | IconGradient;
  /** How the gradient is applied: 'fill' (solid), 'stroke' (border only), or 'both' */
  gradientMode?: IconGradientMode;
  /** Color mode for default colors */
  mode?: 'light' | 'dark';
  /** Whether the icon should have a filled style (where applicable) */
  filled?: boolean;
  /** Accessibility label */
  accessibilityLabel?: string;
  /** Custom style for the container */
  style?: StyleProp<ViewStyle>;
}

const sizeMap: Record<IconSize, number> = {
  sm: 16,
  md: 20,
  lg: 24,
  xl: 32,
};

export const getIconSize = (size: IconSize | number): number => {
  return typeof size === 'number' ? size : sizeMap[size];
};

export const getIconColor = (color: string | undefined, mode: 'light' | 'dark'): string => {
  if (color) return color;
  return mode === 'light' ? colors.icon.primary : colorsDark.icon.primary;
};

export const getGradientDef = (gradient: IconGradientName | IconGradient): IconGradient => {
  if (typeof gradient === 'string') {
    return iconGradients[gradient];
  }
  return gradient;
};

// Calculate gradient rotation from angle
export const getGradientCoords = (angle: number = 135) => {
  const rad = (angle - 90) * (Math.PI / 180);
  const x1 = 50 - Math.cos(rad) * 50;
  const y1 = 50 - Math.sin(rad) * 50;
  const x2 = 50 + Math.cos(rad) * 50;
  const y2 = 50 + Math.sin(rad) * 50;
  return { x1: `${x1}%`, y1: `${y1}%`, x2: `${x2}%`, y2: `${y2}%` };
};

// Base SVG wrapper for RN icons
export interface IconSvgProps {
  size: number;
  color: string;
  gradient?: IconGradient;
  gradientId?: string;
  gradientMode?: IconGradientMode;
  children: React.ReactNode;
  accessibilityLabel?: string;
  style?: StyleProp<ViewStyle>;
}

export const IconSvg = ({
  size,
  color,
  gradient,
  gradientId = 'iconGradient',
  children,
  accessibilityLabel,
  style,
}: IconSvgProps) => {
  const coords = gradient ? getGradientCoords(gradient.angle) : null;

  return (
    <View
      style={style}
      accessible={!!accessibilityLabel}
      accessibilityLabel={accessibilityLabel}
      accessibilityRole="image"
    >
      <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        {gradient && coords && (
          <Defs>
            <LinearGradient
              id={gradientId}
              x1={coords.x1}
              y1={coords.y1}
              x2={coords.x2}
              y2={coords.y2}
            >
              <Stop offset="0%" stopColor={gradient.start} />
              <Stop offset="100%" stopColor={gradient.end} />
            </LinearGradient>
          </Defs>
        )}
        <G color={color}>{children}</G>
      </Svg>
    </View>
  );
};

// Re-export SVG primitives for use in icons
export { Path, Circle, Rect, Line, G };

// Export gradient presets
export { iconGradients };
