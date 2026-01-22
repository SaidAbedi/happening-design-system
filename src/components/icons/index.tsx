import {
  type IconProps,
  type IconName,
  type IconSize,
  getIconSize,
  getIconColor,
} from './Icon';
import { iconComponents } from './icons';

/**
 * Unified Icon component
 *
 * @example
 * ```tsx
 * <Icon name="calendar" size="md" />
 * <Icon name="heart" color="#C4756A" />
 * <Icon name="search" size={24} mode="dark" />
 * ```
 */
export const Icon = ({
  name,
  size = 'md',
  color,
  mode = 'light',
  className,
  accessibilityLabel,
}: IconProps) => {
  const IconComponent = iconComponents[name];
  const resolvedSize = getIconSize(size);
  const resolvedColor = getIconColor(color, mode);

  return (
    <IconComponent
      size={resolvedSize}
      color={resolvedColor}
      className={className}
      accessibilityLabel={accessibilityLabel || name}
    />
  );
};

// Re-export types
export type { IconProps, IconName, IconSize };

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

export default Icon;
