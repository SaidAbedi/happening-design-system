import React, { useState, type HTMLAttributes } from "react";
import { colors, colorsDark } from "../tokens/colors";
import { shadowsLight, shadowsDark } from "../tokens/shadows";
import { radii } from "../tokens/radii";
import { spacing } from "../tokens/spacing";
import { durations, easings } from "../tokens/motion";
import {
  gradientsLight,
  gradientsDark,
  radialGradients,
} from "../tokens/gradients";

export type CardVariant =
  | "raised"
  | "flat"
  | "cut"
  | "bordered"
  | "glass";
export type CardSize = "sm" | "md" | "lg";

/** Gradient border colors for accent border */
export const accentGradientColors = {
  light: {
    start: '#F5CFC2', // Terracotta (top-left)
    end: '#B8D4D4',   // Teal (bottom-right)
  },
  dark: {
    start: '#3D2E28', // Dark terracotta
    end: '#233A3A',   // Dark teal
  },
};

export interface CardProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  "style"
> {
  variant?: CardVariant;
  size?: CardSize;
  interactive?: boolean;
  mode?: "light" | "dark";
  /**
   * Add gradient accent border (terracotta → teal).
   * Works with any variant (raised, cut, flat, bordered, glass).
   */
  accentBorder?: boolean;
  children: React.ReactNode;
}

export const Card = ({
  children,
  variant = "raised",
  size = "md",
  interactive = false,
  mode = "light",
  accentBorder = false,
  onClick,
  ...props
}: CardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  // Token Selection
  const c = mode === "light" ? colors : colorsDark;
  const shadows = mode === "light" ? shadowsLight : shadowsDark;
  const grads = mode === "light" ? gradientsLight : gradientsDark;
  const radial = radialGradients[mode];
  const bgBase =
    mode === "light" ? colors.surface.base : colorsDark.surface.base;
  const surfaceBase = mode === "light" ? "#FDF8F4" : "#1C1917";
  const gradientColors = mode === "light" ? accentGradientColors.light : accentGradientColors.dark;

  const sizeStyles: Record<CardSize, React.CSSProperties> = {
    sm: { padding: spacing["2xl"], borderRadius: radii.xl },
    md: { padding: spacing["3xl"], borderRadius: radii["2xl"] },
    lg: { padding: spacing["5xl"], borderRadius: radii["3xl"] },
  };

  const getVariantStyles = (): React.CSSProperties => {
    const base: React.CSSProperties = {
      transition: `all ${durations.normal}ms ${easings.out}`,
      cursor: interactive ? "pointer" : "default",
      position: "relative",
      overflow: "hidden",
    };

    switch (variant) {
      case "raised":
        return {
          ...base,
          background: radial.surface.css,
          boxShadow: interactive
            ? isPressed
              ? shadows.pressed
              : isHovered
                ? shadows.glow
                : shadows.md
            : shadows.md,
        };

      case "glass":
        return {
          ...base,
          background:
            isHovered && interactive
              ? grads.terracottaGlow.css
              : grads.ambient.css,
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          border: `1px solid ${mode === "light" ? "rgba(255, 255, 255, 0.5)" : "rgba(255, 255, 255, 0.1)"}`,
          boxShadow: isHovered ? shadows.lg : shadows.sm,
        };

      case "cut":
        return {
          ...base,
          background: grads.ambient.css,
          boxShadow: interactive
            ? isPressed
              ? shadows.inset
              : shadows.cut
            : shadows.cut,
        };

      case "flat":
        return {
          ...base,
          backgroundColor: bgBase,
          boxShadow: interactive
            ? isPressed
              ? shadows.cut
              : isHovered
                ? shadows.sm
                : "none"
            : "none",
          border: `1px solid ${c.border.default}`,
        };

      case "bordered":
        return {
          ...base,
          background: radial.spotlight.css,
          boxShadow: interactive
            ? isPressed
              ? shadows.pressed
              : isHovered
                ? shadows.rim
                : shadows.sm
            : shadows.sm,
          border: `2px solid ${c.border.subtle}`,
        };

      default:
        return base;
    }
  };

  // Accent border gradient style (CSS gradient border technique)
  const getAccentBorderStyle = (): React.CSSProperties => {
    if (!accentBorder) return {};

    const fullGradient = `linear-gradient(135deg, ${gradientColors.start} 0%, ${surfaceBase} 45%, ${surfaceBase} 55%, ${gradientColors.end} 100%)`;

    return {
      backgroundImage: `linear-gradient(${surfaceBase}, ${surfaceBase}), ${fullGradient}`,
      backgroundOrigin: "border-box",
      backgroundClip: "padding-box, border-box",
      border: "2px solid transparent",
    };
  };

  return (
    <div
      style={{ ...sizeStyles[size], ...getVariantStyles(), ...getAccentBorderStyle() }}
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
      {variant === "raised" && isHovered && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: grads.terracottaGlow.css,
            opacity: 0.1,
            pointerEvents: "none",
          }}
        />
      )}

      <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
    </div>
  );
};

export default Card;
