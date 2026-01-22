import type { ReactNode } from 'react';
import { colors, colorsDark } from '../../tokens/colors';
import { iconGradients } from '../../tokens/gradients';

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

export interface IconProps {
  /** Icon name */
  name: IconName;
  /** Size of the icon */
  size?: IconSize | number;
  /** Color of the icon - defaults to text.primary. Ignored if gradient is set. */
  color?: string;
  /** Gradient fill - use preset name or custom {start, end} */
  gradient?: IconGradientName | IconGradient;
  /** Color mode for default colors */
  mode?: 'light' | 'dark';
  /** Whether the icon should have a filled style (where applicable) */
  filled?: boolean;
  /** Additional className for web */
  className?: string;
  /** Accessibility label */
  accessibilityLabel?: string;
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

// Base SVG wrapper component
export interface IconSvgProps {
  size: number;
  color: string;
  gradient?: IconGradient;
  gradientId?: string;
  children: ReactNode;
  accessibilityLabel?: string;
  className?: string;
}

export const IconSvg = ({
  size,
  color,
  gradient,
  gradientId = 'iconGradient',
  children,
  accessibilityLabel,
  className
}: IconSvgProps) => {
  // Calculate gradient rotation from angle
  const getGradientCoords = (angle: number = 135) => {
    const rad = (angle - 90) * (Math.PI / 180);
    const x1 = 50 - Math.cos(rad) * 50;
    const y1 = 50 - Math.sin(rad) * 50;
    const x2 = 50 + Math.cos(rad) * 50;
    const y2 = 50 + Math.sin(rad) * 50;
    return { x1: `${x1}%`, y1: `${y1}%`, x2: `${x2}%`, y2: `${y2}%` };
  };

  const coords = gradient ? getGradientCoords(gradient.angle) : null;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={accessibilityLabel}
      className={className}
      style={{ display: 'inline-block', verticalAlign: 'middle', color }}
    >
      {gradient && coords && (
        <defs>
          <linearGradient id={gradientId} x1={coords.x1} y1={coords.y1} x2={coords.x2} y2={coords.y2}>
            <stop offset="0%" stopColor={gradient.start} />
            <stop offset="100%" stopColor={gradient.end} />
          </linearGradient>
        </defs>
      )}
      {children}
    </svg>
  );
};

// Export gradient presets for easy access
export { iconGradients };
