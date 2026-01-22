import type { ReactNode } from 'react';
import { colors, colorsDark } from '../../tokens/colors';

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

export interface IconProps {
  /** Icon name */
  name: IconName;
  /** Size of the icon */
  size?: IconSize | number;
  /** Color of the icon - defaults to text.primary */
  color?: string;
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

// Base SVG wrapper component
export interface IconSvgProps {
  size: number;
  color: string;
  children: ReactNode;
  accessibilityLabel?: string;
  className?: string;
}

export const IconSvg = ({ size, color, children, accessibilityLabel, className }: IconSvgProps) => (
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
    {children}
  </svg>
);
