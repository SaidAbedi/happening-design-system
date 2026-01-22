import { colors, colorsDark } from '../../tokens/colors';
import { shadowsLight, shadowsDark } from '../../tokens/shadows';
import { radii } from '../../tokens/radii';
import { durations, easings } from '../../tokens/motion';
import { Icon, type IconName, type IconSize, getIconSize } from './index';

export type NeumorphicIconVariant = 'raised' | 'cut' | 'flat';
export type NeumorphicIconShape = 'circle' | 'rounded' | 'square';

export interface NeumorphicIconProps {
  /** Icon name */
  name: IconName;
  /** Size of the icon */
  size?: IconSize | number;
  /** Size of the container (defaults to icon size + padding) */
  containerSize?: number;
  /** Neumorphic style variant */
  variant?: NeumorphicIconVariant;
  /** Shape of the neumorphic container */
  shape?: NeumorphicIconShape;
  /** Color of the icon */
  color?: string;
  /** Color mode */
  mode?: 'light' | 'dark';
  /** Whether the icon is interactive (shows hover/press states) */
  interactive?: boolean;
  /** Click handler */
  onClick?: () => void;
  /** Accessibility label */
  accessibilityLabel?: string;
  /** Additional className */
  className?: string;
}

/**
 * Neumorphic Icon component - icons with 3D depth
 *
 * @example
 * ```tsx
 * // Raised icon (floating above surface)
 * <NeumorphicIcon name="calendar" variant="raised" size="lg" />
 *
 * // Cut/inset icon (pressed into surface)
 * <NeumorphicIcon name="heart" variant="cut" shape="circle" />
 *
 * // Interactive icon button
 * <NeumorphicIcon name="search" interactive onClick={handleSearch} />
 * ```
 */
export const NeumorphicIcon = ({
  name,
  size = 'lg',
  containerSize,
  variant = 'raised',
  shape = 'rounded',
  color,
  mode = 'light',
  interactive = false,
  onClick,
  accessibilityLabel,
  className,
}: NeumorphicIconProps) => {
  const c = mode === 'light' ? colors : colorsDark;
  const shadows = mode === 'light' ? shadowsLight : shadowsDark;
  const bgBase = mode === 'light' ? colors.surface.base : colorsDark.surface.base;
  const bgRaised = mode === 'light' ? colors.surface.raised : colorsDark.surface.raised;

  const iconSize = getIconSize(size);
  const padding = Math.round(iconSize * 0.5);
  const totalSize = containerSize || iconSize + padding * 2;

  const iconColor = color || (variant === 'cut' ? c.icon.secondary : c.icon.primary);

  const shapeStyles: Record<NeumorphicIconShape, string> = {
    circle: '50%',
    rounded: `${radii.xl}px`,
    square: `${radii.md}px`,
  };

  const getVariantStyles = (isHovered: boolean, isPressed: boolean): React.CSSProperties => {
    const base: React.CSSProperties = {
      width: totalSize,
      height: totalSize,
      borderRadius: shapeStyles[shape],
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: `all ${durations.normal}ms ${easings.out}`,
      cursor: interactive ? 'pointer' : 'default',
      border: 'none',
      outline: 'none',
    };

    switch (variant) {
      case 'raised':
        return {
          ...base,
          backgroundColor: bgRaised,
          boxShadow: interactive
            ? (isPressed ? shadows.pressed : isHovered ? shadows.glow : shadows.sm)
            : shadows.sm,
        };
      case 'cut':
        return {
          ...base,
          backgroundColor: bgBase,
          boxShadow: interactive
            ? (isPressed ? shadows.inset : isHovered ? shadows.cut : shadows.cut)
            : shadows.cut,
        };
      case 'flat':
        return {
          ...base,
          backgroundColor: bgBase,
          boxShadow: interactive
            ? (isPressed ? shadows.cut : isHovered ? shadows.sm : 'none')
            : 'none',
          border: `1px solid ${c.border.default}`,
        };
      default:
        return base;
    }
  };

  // Use a button for interactive, div for non-interactive
  const Component = interactive ? 'button' : 'div';

  return (
    <Component
      className={className}
      onClick={interactive ? onClick : undefined}
      aria-label={accessibilityLabel || name}
      style={getVariantStyles(false, false)}
      onMouseEnter={(e) => {
        if (interactive) {
          Object.assign(e.currentTarget.style, getVariantStyles(true, false));
        }
      }}
      onMouseLeave={(e) => {
        if (interactive) {
          Object.assign(e.currentTarget.style, getVariantStyles(false, false));
        }
      }}
      onMouseDown={(e) => {
        if (interactive) {
          Object.assign(e.currentTarget.style, getVariantStyles(false, true));
        }
      }}
      onMouseUp={(e) => {
        if (interactive) {
          Object.assign(e.currentTarget.style, getVariantStyles(true, false));
        }
      }}
    >
      <Icon name={name} size={iconSize} color={iconColor} mode={mode} />
    </Component>
  );
};

export default NeumorphicIcon;
