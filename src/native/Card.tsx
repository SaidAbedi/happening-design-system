import type { ViewStyle, StyleProp } from 'react-native';
import { spacing } from '../tokens/spacing';
import { NeumorphicView, type NeumorphicViewProps, type NeumorphicVariant } from './NeumorphicView';

export type CardVariant = NeumorphicVariant | 'bordered';
export type CardSize = 'sm' | 'md' | 'lg';

export interface CardProps extends Omit<NeumorphicViewProps, 'variant'> {
  /** Card visual style */
  variant?: CardVariant;
  /** Padding size */
  size?: CardSize;
  /** Enable press state changes */
  interactive?: boolean;
}

const paddingSizes: Record<CardSize, number> = {
  sm: spacing['2xl'], // 24
  md: spacing['3xl'], // 32
  lg: spacing['5xl'], // 48
};

/**
 * Card - A neumorphic card component
 *
 * @example
 * ```tsx
 * // Basic raised card
 * <Card>
 *   <Text>Card content</Text>
 * </Card>
 *
 * // Selected/pressed card
 * <Card variant="cut">
 *   <Text>Selected card</Text>
 * </Card>
 *
 * // Interactive card
 * <Card
 *   variant={isSelected ? "cut" : "raised"}
 *   interactive
 *   onPress={() => setSelected(!isSelected)}
 * >
 *   <Text>Tap to select</Text>
 * </Card>
 * ```
 */
export const Card = ({
  variant = 'raised',
  size = 'md',
  interactive = false,
  style,
  children,
  ...props
}: CardProps) => {
  const paddingValue = paddingSizes[size];

  // Map 'bordered' to 'flat' for NeumorphicView
  const neumorphicVariant: NeumorphicVariant =
    variant === 'bordered' ? 'flat' : variant;

  const cardStyle: StyleProp<ViewStyle> = [
    { padding: paddingValue },
    style,
  ];

  return (
    <NeumorphicView
      variant={neumorphicVariant}
      showPressedState={interactive}
      style={cardStyle}
      {...props}
    >
      {children}
    </NeumorphicView>
  );
};

export default Card;
