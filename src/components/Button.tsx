import React, { useState, type ButtonHTMLAttributes } from 'react';
import { colors, colorsDark } from '../tokens/colors';
import { shadowsLight, shadowsDark } from '../tokens/shadows';
import { fontFamilies, textStyles } from '../tokens/typography';
import { radii } from '../tokens/radii';
import { spacing } from '../tokens/spacing';
import { durations, easings } from '../tokens/motion';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'style'> {
  /** Visual style variant */
  variant?: ButtonVariant;
  /** Size of the button */
  size?: ButtonSize;
  /** Color mode */
  mode?: 'light' | 'dark';
  /** Button content */
  children: React.ReactNode;
}

/**
 * Neumorphic Button component
 *
 * @example
 * ```tsx
 * <Button variant="primary" size="md">Click me</Button>
 * <Button variant="secondary" onClick={handleClick}>Secondary</Button>
 * <Button variant="ghost" disabled>Disabled</Button>
 * ```
 */
export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  mode = 'light',
  ...props
}: ButtonProps) => {
  const [isPressed, setIsPressed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const c = mode === 'light' ? colors : colorsDark;
  const shadows = mode === 'light' ? shadowsLight : shadowsDark;
  const bgBase = mode === 'light' ? colors.surface.base : colorsDark.surface.base;

  const sizeStyles: Record<ButtonSize, React.CSSProperties> = {
    sm: {
      padding: `${spacing.sm}px ${spacing.lg}px`,
      fontSize: textStyles.label.small.fontSize,
      borderRadius: radii.lg,
    },
    md: {
      padding: `${spacing.md}px ${spacing['2xl']}px`,
      fontSize: textStyles.label.medium.fontSize,
      borderRadius: radii.xl,
    },
    lg: {
      padding: `${spacing.lg}px ${spacing['3xl']}px`,
      fontSize: textStyles.label.large.fontSize,
      borderRadius: radii['2xl'],
    },
  };

  const getVariantStyles = (): React.CSSProperties => {
    const base: React.CSSProperties = {
      transition: `all ${durations.normal}ms ${easings.out}`,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      border: 'none',
      fontFamily: fontFamilies.sans,
      fontWeight: 500,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: spacing.sm,
    };

    switch (variant) {
      case 'primary':
        return {
          ...base,
          backgroundColor: c.brand.primary,
          color: c.brand.primaryForeground,
          boxShadow: isPressed ? shadows.pressed : isHovered ? shadows.glow : shadows.sm,
        };
      case 'secondary':
        return {
          ...base,
          backgroundColor: bgBase,
          color: c.text.primary,
          boxShadow: isPressed ? shadows.pressed : isHovered ? shadows.glowTeal : shadows.sm,
        };
      case 'ghost':
        return {
          ...base,
          backgroundColor: 'transparent',
          color: c.text.primary,
          boxShadow: isPressed ? shadows.cut : isHovered ? shadows.sm : 'none',
        };
      case 'outline':
        return {
          ...base,
          backgroundColor: 'transparent',
          color: c.brand.primary,
          boxShadow: isPressed ? shadows.pressed : isHovered ? shadows.rim : shadows.sm,
          border: `2px solid ${c.brand.primary}`,
        };
      default:
        return base;
    }
  };

  return (
    <button
      style={{
        ...sizeStyles[size],
        ...getVariantStyles(),
      }}
      disabled={disabled}
      onMouseDown={() => !disabled && setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => {
        setIsPressed(false);
        setIsHovered(false);
      }}
      onMouseEnter={() => !disabled && setIsHovered(true)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
