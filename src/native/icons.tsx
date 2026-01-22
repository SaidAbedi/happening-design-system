/**
 * React Native Icon Components
 *
 * Individual icon components using react-native-svg.
 * These mirror the web icons but use RN SVG components.
 */

import {
  IconSvg,
  Path,
  Circle,
  Rect,
  Line,
  getIconSize,
  getIconColor,
  getGradientDef,
  type IconProps,
  type IconGradient,
  type IconGradientMode,
} from './Icon';

// Re-export IconProps for convenience
export type { IconProps } from './Icon';

type IconComponentProps = Omit<IconProps, 'name'>;

// Helper to get fill and stroke values based on gradient mode
const getColors = (
  gradient?: IconGradient,
  gradientId?: string,
  gradientMode: IconGradientMode = 'both'
) => {
  const gradientUrl = `url(#${gradientId || 'iconGradient'})`;

  if (!gradient) {
    return { fill: 'currentColor', stroke: 'currentColor' };
  }

  switch (gradientMode) {
    case 'fill':
      return { fill: gradientUrl, stroke: 'none' };
    case 'stroke':
      return { fill: 'none', stroke: gradientUrl };
    case 'both':
    default:
      return { fill: gradientUrl, stroke: gradientUrl };
  }
};

// Calendar icon
export const CalendarIcon = ({
  size = 'md',
  color,
  gradient,
  gradientMode = 'both',
  mode = 'light',
  style,
  accessibilityLabel,
}: IconComponentProps) => {
  const resolvedSize = getIconSize(size);
  const resolvedColor = getIconColor(color, mode);
  const resolvedGradient = gradient ? getGradientDef(gradient) : undefined;
  const { fill, stroke } = getColors(resolvedGradient, 'calendarGradient', gradientMode);

  return (
    <IconSvg
      size={resolvedSize}
      color={resolvedColor}
      gradient={resolvedGradient}
      gradientId="calendarGradient"
      style={style}
      accessibilityLabel={accessibilityLabel}
    >
      <Rect x={3} y={4} width={18} height={18} rx={2} stroke={stroke} strokeWidth={2} fill="none" />
      <Line x1={3} y1={10} x2={21} y2={10} stroke={stroke} strokeWidth={2} />
      <Line x1={8} y1={2} x2={8} y2={6} stroke={stroke} strokeWidth={2} strokeLinecap="round" />
      <Line x1={16} y1={2} x2={16} y2={6} stroke={stroke} strokeWidth={2} strokeLinecap="round" />
      <Circle cx={8} cy={15} r={1} fill={fill === 'none' ? stroke : fill} />
      <Circle cx={12} cy={15} r={1} fill={fill === 'none' ? stroke : fill} />
      <Circle cx={16} cy={15} r={1} fill={fill === 'none' ? stroke : fill} />
    </IconSvg>
  );
};

// Search icon
export const SearchIcon = ({
  size = 'md',
  color,
  gradient,
  gradientMode = 'both',
  mode = 'light',
  style,
  accessibilityLabel,
}: IconComponentProps) => {
  const resolvedSize = getIconSize(size);
  const resolvedColor = getIconColor(color, mode);
  const resolvedGradient = gradient ? getGradientDef(gradient) : undefined;
  const { stroke } = getColors(resolvedGradient, 'searchGradient', gradientMode);

  return (
    <IconSvg
      size={resolvedSize}
      color={resolvedColor}
      gradient={resolvedGradient}
      gradientId="searchGradient"
      style={style}
      accessibilityLabel={accessibilityLabel}
    >
      <Circle cx={11} cy={11} r={7} stroke={stroke} strokeWidth={2} fill="none" />
      <Line x1={16.5} y1={16.5} x2={21} y2={21} stroke={stroke} strokeWidth={2} strokeLinecap="round" />
    </IconSvg>
  );
};

// Heart outline icon
export const HeartOutlineIcon = ({
  size = 'md',
  color,
  gradient,
  gradientMode = 'both',
  mode = 'light',
  style,
  accessibilityLabel,
}: IconComponentProps) => {
  const resolvedSize = getIconSize(size);
  const resolvedColor = getIconColor(color, mode);
  const resolvedGradient = gradient ? getGradientDef(gradient) : undefined;
  const { stroke } = getColors(resolvedGradient, 'heartOutlineGradient', gradientMode);

  return (
    <IconSvg
      size={resolvedSize}
      color={resolvedColor}
      gradient={resolvedGradient}
      gradientId="heartOutlineGradient"
      style={style}
      accessibilityLabel={accessibilityLabel}
    >
      <Path
        d="M12 21C12 21 3 13.5 3 8.5C3 5.42 5.42 3 8.5 3C10.24 3 11.91 3.81 12 5C12.09 3.81 13.76 3 15.5 3C18.58 3 21 5.42 21 8.5C21 13.5 12 21 12 21Z"
        stroke={stroke}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </IconSvg>
  );
};

// Heart filled icon
export const HeartFilledIcon = ({
  size = 'md',
  color,
  gradient,
  gradientMode = 'both',
  mode = 'light',
  style,
  accessibilityLabel,
}: IconComponentProps) => {
  const resolvedSize = getIconSize(size);
  const resolvedColor = getIconColor(color, mode);
  const resolvedGradient = gradient ? getGradientDef(gradient) : undefined;
  const { fill, stroke } = getColors(resolvedGradient, 'heartFilledGradient', gradientMode);

  return (
    <IconSvg
      size={resolvedSize}
      color={resolvedColor}
      gradient={resolvedGradient}
      gradientId="heartFilledGradient"
      style={style}
      accessibilityLabel={accessibilityLabel}
    >
      <Path
        d="M12 21C12 21 3 13.5 3 8.5C3 5.42 5.42 3 8.5 3C10.24 3 11.91 3.81 12 5C12.09 3.81 13.76 3 15.5 3C18.58 3 21 5.42 21 8.5C21 13.5 12 21 12 21Z"
        fill={fill}
        stroke={stroke}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconSvg>
  );
};

// Close circle icon
export const CloseCircleIcon = ({
  size = 'md',
  color,
  gradient,
  gradientMode = 'both',
  mode = 'light',
  style,
  accessibilityLabel,
}: IconComponentProps) => {
  const resolvedSize = getIconSize(size);
  const resolvedColor = getIconColor(color, mode);
  const resolvedGradient = gradient ? getGradientDef(gradient) : undefined;
  const { stroke } = getColors(resolvedGradient, 'closeCircleGradient', gradientMode);

  return (
    <IconSvg
      size={resolvedSize}
      color={resolvedColor}
      gradient={resolvedGradient}
      gradientId="closeCircleGradient"
      style={style}
      accessibilityLabel={accessibilityLabel}
    >
      <Circle cx={12} cy={12} r={9} stroke={stroke} strokeWidth={2} fill="none" />
      <Line x1={9} y1={9} x2={15} y2={15} stroke={stroke} strokeWidth={2} strokeLinecap="round" />
      <Line x1={15} y1={9} x2={9} y2={15} stroke={stroke} strokeWidth={2} strokeLinecap="round" />
    </IconSvg>
  );
};

// Sunny icon (light theme)
export const SunnyIcon = ({
  size = 'md',
  color,
  gradient,
  gradientMode = 'both',
  mode = 'light',
  style,
  accessibilityLabel,
}: IconComponentProps) => {
  const resolvedSize = getIconSize(size);
  const resolvedColor = getIconColor(color, mode);
  const resolvedGradient = gradient ? getGradientDef(gradient) : undefined;
  const { stroke } = getColors(resolvedGradient, 'sunnyGradient', gradientMode);

  return (
    <IconSvg
      size={resolvedSize}
      color={resolvedColor}
      gradient={resolvedGradient}
      gradientId="sunnyGradient"
      style={style}
      accessibilityLabel={accessibilityLabel}
    >
      <Circle cx={12} cy={12} r={4} stroke={stroke} strokeWidth={2} fill="none" />
      <Line x1={12} y1={2} x2={12} y2={4} stroke={stroke} strokeWidth={2} strokeLinecap="round" />
      <Line x1={12} y1={20} x2={12} y2={22} stroke={stroke} strokeWidth={2} strokeLinecap="round" />
      <Line x1={4} y1={12} x2={2} y2={12} stroke={stroke} strokeWidth={2} strokeLinecap="round" />
      <Line x1={22} y1={12} x2={20} y2={12} stroke={stroke} strokeWidth={2} strokeLinecap="round" />
      <Line x1={5.64} y1={5.64} x2={4.22} y2={4.22} stroke={stroke} strokeWidth={2} strokeLinecap="round" />
      <Line x1={19.78} y1={19.78} x2={18.36} y2={18.36} stroke={stroke} strokeWidth={2} strokeLinecap="round" />
      <Line x1={18.36} y1={5.64} x2={19.78} y2={4.22} stroke={stroke} strokeWidth={2} strokeLinecap="round" />
      <Line x1={4.22} y1={19.78} x2={5.64} y2={18.36} stroke={stroke} strokeWidth={2} strokeLinecap="round" />
    </IconSvg>
  );
};

// Moon icon (dark theme)
export const MoonIcon = ({
  size = 'md',
  color,
  gradient,
  gradientMode = 'both',
  mode = 'light',
  style,
  accessibilityLabel,
}: IconComponentProps) => {
  const resolvedSize = getIconSize(size);
  const resolvedColor = getIconColor(color, mode);
  const resolvedGradient = gradient ? getGradientDef(gradient) : undefined;
  const { fill, stroke } = getColors(resolvedGradient, 'moonGradient', gradientMode);

  return (
    <IconSvg
      size={resolvedSize}
      color={resolvedColor}
      gradient={resolvedGradient}
      gradientId="moonGradient"
      style={style}
      accessibilityLabel={accessibilityLabel}
    >
      <Path
        d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
        fill={fill}
        stroke={stroke}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconSvg>
  );
};

// Phone portrait icon (system theme)
export const PhonePortraitIcon = ({
  size = 'md',
  color,
  gradient,
  gradientMode = 'both',
  mode = 'light',
  style,
  accessibilityLabel,
}: IconComponentProps) => {
  const resolvedSize = getIconSize(size);
  const resolvedColor = getIconColor(color, mode);
  const resolvedGradient = gradient ? getGradientDef(gradient) : undefined;
  const { stroke } = getColors(resolvedGradient, 'phonePortraitGradient', gradientMode);

  return (
    <IconSvg
      size={resolvedSize}
      color={resolvedColor}
      gradient={resolvedGradient}
      gradientId="phonePortraitGradient"
      style={style}
      accessibilityLabel={accessibilityLabel}
    >
      <Rect x={6} y={2} width={12} height={20} rx={2} stroke={stroke} strokeWidth={2} fill="none" />
      <Line x1={10} y1={18} x2={14} y2={18} stroke={stroke} strokeWidth={2} strokeLinecap="round" />
    </IconSvg>
  );
};

// Options/settings icon
export const OptionsIcon = ({
  size = 'md',
  color,
  gradient,
  gradientMode = 'both',
  mode = 'light',
  style,
  accessibilityLabel,
}: IconComponentProps) => {
  const resolvedSize = getIconSize(size);
  const resolvedColor = getIconColor(color, mode);
  const resolvedGradient = gradient ? getGradientDef(gradient) : undefined;
  const { fill, stroke } = getColors(resolvedGradient, 'optionsGradient', gradientMode);

  return (
    <IconSvg
      size={resolvedSize}
      color={resolvedColor}
      gradient={resolvedGradient}
      gradientId="optionsGradient"
      style={style}
      accessibilityLabel={accessibilityLabel}
    >
      <Line x1={4} y1={6} x2={20} y2={6} stroke={stroke} strokeWidth={2} strokeLinecap="round" />
      <Line x1={4} y1={12} x2={20} y2={12} stroke={stroke} strokeWidth={2} strokeLinecap="round" />
      <Line x1={4} y1={18} x2={20} y2={18} stroke={stroke} strokeWidth={2} strokeLinecap="round" />
      <Circle cx={8} cy={6} r={2} fill={fill} stroke={stroke} strokeWidth={1} />
      <Circle cx={16} cy={12} r={2} fill={fill} stroke={stroke} strokeWidth={1} />
      <Circle cx={10} cy={18} r={2} fill={fill} stroke={stroke} strokeWidth={1} />
    </IconSvg>
  );
};

// Icon component map
const iconComponents = {
  'calendar': CalendarIcon,
  'search': SearchIcon,
  'heart': HeartFilledIcon,
  'heart-outline': HeartOutlineIcon,
  'close-circle': CloseCircleIcon,
  'sunny': SunnyIcon,
  'moon': MoonIcon,
  'phone-portrait': PhonePortraitIcon,
  'options': OptionsIcon,
} as const;

/**
 * Icon - Unified icon component for React Native
 *
 * @example
 * ```tsx
 * // Basic usage
 * <Icon name="calendar" size="lg" />
 *
 * // With gradient fill
 * <Icon name="heart" gradient="brand" />
 *
 * // With gradient stroke only (border)
 * <Icon name="heart-outline" gradient="brand" gradientMode="stroke" />
 *
 * // Custom color
 * <Icon name="search" color="#C4756A" />
 *
 * // Dark mode
 * <Icon name="moon" mode="dark" />
 * ```
 */
export const Icon = ({ name, filled, ...props }: IconProps) => {
  // Handle filled variant for heart
  const iconName = name === 'heart' && filled === false ? 'heart-outline' : name;
  const IconComponent = iconComponents[iconName];
  return <IconComponent {...props} />;
};

export default Icon;
