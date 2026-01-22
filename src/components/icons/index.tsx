import {
  type IconProps,
  type IconName,
  type IconSize,
  type IconGradient,
  type IconGradientName,
  type IconGradientMode,
  getIconSize,
  getIconColor,
  getGradientDef,
  iconGradients,
} from './Icon';
import { iconComponents } from './icons';

// Re-export utilities
export { getIconSize, getIconColor, getGradientDef, iconGradients };

// Generate unique gradient ID for each icon instance
let gradientIdCounter = 0;
const getUniqueGradientId = () => `iconGradient_${++gradientIdCounter}`;

/**
 * Unified Icon component
 *
 * @example
 * ```tsx
 * // Solid color
 * <Icon name="calendar" size="md" />
 * <Icon name="heart" color="#C4756A" />
 *
 * // Gradient fill (preset)
 * <Icon name="heart" gradient="heart" size="xl" />
 * <Icon name="search" gradient="teal" />
 *
 * // Gradient stroke only (border)
 * <Icon name="heart" gradient="terracotta" gradientMode="stroke" size="xl" />
 *
 * // Gradient fill (custom)
 * <Icon name="sunny" gradient={{ start: '#FFD700', end: '#FFA500' }} />
 * ```
 */
export const Icon = ({
  name,
  size = 'md',
  color,
  gradient,
  gradientMode = 'both',
  mode = 'light',
  className,
  accessibilityLabel,
}: IconProps) => {
  const IconComponent = iconComponents[name];
  const resolvedSize = getIconSize(size);
  const resolvedColor = getIconColor(color, mode);
  const resolvedGradient = gradient ? getGradientDef(gradient) : undefined;
  const gradientId = resolvedGradient ? getUniqueGradientId() : undefined;

  return (
    <IconComponent
      size={resolvedSize}
      color={resolvedColor}
      gradient={resolvedGradient}
      gradientId={gradientId}
      gradientMode={gradientMode}
      className={className}
      accessibilityLabel={accessibilityLabel || name}
    />
  );
};

// Re-export types
export type { IconProps, IconName, IconSize, IconGradient, IconGradientName, IconGradientMode };

// Re-export individual icon components for direct use
export {
  CalendarIcon,
  SearchIcon,
  HeartOutlineIcon,
  HeartFilledIcon,
  CloseCircleIcon,
  SunnyIcon,
  MoonIcon,
  PhonePortraitIcon,
  OptionsIcon,
} from './icons';

// Export the base SVG component for custom icons
export { IconSvg, type IconSvgProps } from './Icon';

// Neumorphic Icon (icon with 3D depth)
export {
  NeumorphicIcon,
  type NeumorphicIconProps,
  type NeumorphicIconVariant,
  type NeumorphicIconShape,
} from './NeumorphicIcon';

export default Icon;
