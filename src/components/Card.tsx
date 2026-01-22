import React, { useState, type HTMLAttributes } from 'react';
import { colors, colorsDark } from '../tokens/colors';
import { shadowsLight, shadowsDark } from '../tokens/shadows';
import { radii } from '../tokens/radii';
import { spacing } from '../tokens/spacing';
import { durations, easings } from '../tokens/motion';

export type CardVariant = 'raised' | 'flat' | 'cut' | 'bordered';
export type CardSize = 'sm' | 'md' | 'lg';

export interface CardProps extends Omit<HTMLAttributes<HTMLDivElement>, 'style'> {
  /** Visual style variant */
  variant?: CardVariant;
  /** Size affecting padding and border radius */
  size?: CardSize;
  /** Enable hover and press interactions */
  interactive?: boolean;
  /** Color mode */
  mode?: 'light' | 'dark';
  /** Card content */
  children: React.ReactNode;
}

/**
 * Neumorphic Card component
 *
 * @example
 * ```tsx
 * <Card variant="raised" size="md">
 *   <h3>Card Title</h3>
 *   <p>Card content goes here</p>
 * </Card>
 *
 * <Card variant="cut" interactive onClick={handleClick}>
 *   Interactive inset card
 * </Card>
 * ```
 */
export const Card = ({
  children,
  variant = 'raised',
  size = 'md',
  interactive = false,
  mode = 'light',
  onClick,
  ...props
}: CardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const c = mode === 'light' ? colors : colorsDark;
  const shadows = mode === 'light' ? shadowsLight : shadowsDark;
  const bgBase = mode === 'light' ? colors.surface.base : colorsDark.surface.base;
  const cardBg = mode === 'light' ? colors.surface.raised : colorsDark.surface.raised;

  const sizeStyles: Record<CardSize, React.CSSProperties> = {
    sm: { padding: spacing['2xl'], borderRadius: radii.xl },      // 24px
    md: { padding: spacing['3xl'], borderRadius: radii['2xl'] },  // 32px
    lg: { padding: spacing['5xl'], borderRadius: radii['3xl'] },  // 48px
  };

  const getVariantStyles = (): React.CSSProperties => {
    const base: React.CSSProperties = {
      transition: `all ${durations.normal}ms ${easings.out}`,
      cursor: interactive ? 'pointer' : 'default',
    };

    switch (variant) {
      case 'raised':
        return {
          ...base,
          backgroundColor: cardBg,
          boxShadow: interactive
            ? (isPressed ? shadows.pressed : isHovered ? shadows.glow : shadows.md)
            : shadows.md,
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
      case 'cut':
        return {
          ...base,
          backgroundColor: bgBase,
          boxShadow: interactive
            ? (isPressed ? shadows.inset : isHovered ? shadows.cut : shadows.cut)
            : shadows.cut,
        };
      case 'bordered':
        return {
          ...base,
          backgroundColor: cardBg,
          boxShadow: interactive
            ? (isPressed ? shadows.pressed : isHovered ? shadows.rim : shadows.sm)
            : shadows.sm,
          border: `2px solid ${c.border.subtle}`,
        };
      default:
        return base;
    }
  };

  return (
    <div
      style={{
        ...sizeStyles[size],
        ...getVariantStyles(),
      }}
      onMouseEnter={() => interactive && setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsPressed(false);
      }}
      onMouseDown={() => interactive && setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
