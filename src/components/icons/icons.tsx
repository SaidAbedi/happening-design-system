import { IconSvg, type IconSvgProps, type IconGradient } from './Icon';

type IconComponentProps = Omit<IconSvgProps, 'children'>;

// Helper to get fill/stroke value
const getFillStroke = (gradient?: IconGradient, gradientId?: string) => {
  return gradient ? `url(#${gradientId || 'iconGradient'})` : 'currentColor';
};

// Calendar icon
export const CalendarIcon = (props: IconComponentProps) => {
  const fs = getFillStroke(props.gradient, props.gradientId);
  return (
    <IconSvg {...props}>
      <rect x="3" y="4" width="18" height="18" rx="2" stroke={fs} strokeWidth="2" />
      <line x1="3" y1="10" x2="21" y2="10" stroke={fs} strokeWidth="2" />
      <line x1="8" y1="2" x2="8" y2="6" stroke={fs} strokeWidth="2" strokeLinecap="round" />
      <line x1="16" y1="2" x2="16" y2="6" stroke={fs} strokeWidth="2" strokeLinecap="round" />
      <circle cx="8" cy="15" r="1" fill={fs} />
      <circle cx="12" cy="15" r="1" fill={fs} />
      <circle cx="16" cy="15" r="1" fill={fs} />
    </IconSvg>
  );
};

// Search icon
export const SearchIcon = (props: IconComponentProps) => {
  const fs = getFillStroke(props.gradient, props.gradientId);
  return (
    <IconSvg {...props}>
      <circle cx="11" cy="11" r="7" stroke={fs} strokeWidth="2" />
      <line x1="16.5" y1="16.5" x2="21" y2="21" stroke={fs} strokeWidth="2" strokeLinecap="round" />
    </IconSvg>
  );
};

// Heart outline icon
export const HeartOutlineIcon = (props: IconComponentProps) => {
  const fs = getFillStroke(props.gradient, props.gradientId);
  return (
    <IconSvg {...props}>
      <path
        d="M12 21C12 21 3 13.5 3 8.5C3 5.42 5.42 3 8.5 3C10.24 3 11.91 3.81 12 5C12.09 3.81 13.76 3 15.5 3C18.58 3 21 5.42 21 8.5C21 13.5 12 21 12 21Z"
        stroke={fs}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconSvg>
  );
};

// Heart filled icon
export const HeartFilledIcon = (props: IconComponentProps) => {
  const fs = getFillStroke(props.gradient, props.gradientId);
  return (
    <IconSvg {...props}>
      <path
        d="M12 21C12 21 3 13.5 3 8.5C3 5.42 5.42 3 8.5 3C10.24 3 11.91 3.81 12 5C12.09 3.81 13.76 3 15.5 3C18.58 3 21 5.42 21 8.5C21 13.5 12 21 12 21Z"
        fill={fs}
        stroke={fs}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconSvg>
  );
};

// Close circle icon
export const CloseCircleIcon = (props: IconComponentProps) => {
  const fs = getFillStroke(props.gradient, props.gradientId);
  return (
    <IconSvg {...props}>
      <circle cx="12" cy="12" r="9" stroke={fs} strokeWidth="2" />
      <line x1="9" y1="9" x2="15" y2="15" stroke={fs} strokeWidth="2" strokeLinecap="round" />
      <line x1="15" y1="9" x2="9" y2="15" stroke={fs} strokeWidth="2" strokeLinecap="round" />
    </IconSvg>
  );
};

// Sunny icon (light theme)
export const SunnyIcon = (props: IconComponentProps) => {
  const fs = getFillStroke(props.gradient, props.gradientId);
  return (
    <IconSvg {...props}>
      <circle cx="12" cy="12" r="4" stroke={fs} strokeWidth="2" />
      <line x1="12" y1="2" x2="12" y2="4" stroke={fs} strokeWidth="2" strokeLinecap="round" />
      <line x1="12" y1="20" x2="12" y2="22" stroke={fs} strokeWidth="2" strokeLinecap="round" />
      <line x1="4" y1="12" x2="2" y2="12" stroke={fs} strokeWidth="2" strokeLinecap="round" />
      <line x1="22" y1="12" x2="20" y2="12" stroke={fs} strokeWidth="2" strokeLinecap="round" />
      <line x1="5.64" y1="5.64" x2="4.22" y2="4.22" stroke={fs} strokeWidth="2" strokeLinecap="round" />
      <line x1="19.78" y1="19.78" x2="18.36" y2="18.36" stroke={fs} strokeWidth="2" strokeLinecap="round" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke={fs} strokeWidth="2" strokeLinecap="round" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke={fs} strokeWidth="2" strokeLinecap="round" />
    </IconSvg>
  );
};

// Moon icon (dark theme)
export const MoonIcon = (props: IconComponentProps) => {
  const fs = getFillStroke(props.gradient, props.gradientId);
  return (
    <IconSvg {...props}>
      <path
        d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
        stroke={fs}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconSvg>
  );
};

// Phone portrait icon (system theme)
export const PhonePortraitIcon = (props: IconComponentProps) => {
  const fs = getFillStroke(props.gradient, props.gradientId);
  return (
    <IconSvg {...props}>
      <rect x="6" y="2" width="12" height="20" rx="2" stroke={fs} strokeWidth="2" />
      <line x1="10" y1="18" x2="14" y2="18" stroke={fs} strokeWidth="2" strokeLinecap="round" />
    </IconSvg>
  );
};

// Options/settings icon
export const OptionsIcon = (props: IconComponentProps) => {
  const fs = getFillStroke(props.gradient, props.gradientId);
  return (
    <IconSvg {...props}>
      <line x1="4" y1="6" x2="20" y2="6" stroke={fs} strokeWidth="2" strokeLinecap="round" />
      <line x1="4" y1="12" x2="20" y2="12" stroke={fs} strokeWidth="2" strokeLinecap="round" />
      <line x1="4" y1="18" x2="20" y2="18" stroke={fs} strokeWidth="2" strokeLinecap="round" />
      <circle cx="8" cy="6" r="2" fill={fs} stroke={fs} strokeWidth="1" />
      <circle cx="16" cy="12" r="2" fill={fs} stroke={fs} strokeWidth="1" />
      <circle cx="10" cy="18" r="2" fill={fs} stroke={fs} strokeWidth="1" />
    </IconSvg>
  );
};

// Icon map for the unified Icon component
export const iconComponents = {
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
