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
  | "glass"
  | "neumorphic-accent";
export type CardSize = "sm" | "md" | "lg";

export interface CardProps extends Omit<
  HTMLAttributes<HTMLDivElement>,
  "style"
> {
  variant?: CardVariant;
  size?: CardSize;
  interactive?: boolean;
  mode?: "light" | "dark";
  /** 'teal', 'terracotta', or 'mixed' (terracotta to teal) */
  accent?: "teal" | "terracotta" | "mixed";
  children: React.ReactNode;
}

export const Card = ({
  children,
  variant = "raised",
  size = "md",
  interactive = false,
  mode = "light",
  accent = "teal",
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
      case "neumorphic-accent":
        /**
         * PRONOUNCED TERRACOTTA NEUMORPHISM
         * Starts with a richer Terracotta top-left, blending through surfaceBase,
         * and ending in a sharp Teal bottom-right rim.
         */
        const tColor = mode === "light" ? "#F5CFC2" : "#3D2E28"; // Richer Terracotta
        const tealColor = mode === "light" ? "#B8D4D4" : "#233A3A"; // Pronounced Teal

        // Gradient that peeks through the border and colors the edges
        const fullGradient = `linear-gradient(135deg, ${tColor} 0%, ${surfaceBase} 45%, ${surfaceBase} 55%, ${tealColor} 100%)`;

        return {
          ...base,
          // Surface is solid, Border area reveals the gradient
          backgroundImage: `linear-gradient(${surfaceBase}, ${surfaceBase}), ${fullGradient}`,
          backgroundOrigin: "border-box",
          backgroundClip: "padding-box, border-box",
          border: "2px solid transparent", // Slightly thicker for more color visibility

          boxShadow: [
            interactive && isPressed
              ? shadows.pressed
              : isHovered
                ? shadows.md
                : shadows.sm,
            // Inner Terracotta glow (Top-Left)
            `inset 4px 4px 12px ${tColor}${mode === "light" ? "66" : "33"}`,
            // Inner White highlight (Specular)
            `inset 1px 1px 2px ${mode === "light" ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.1)"}`,
          ].join(", "),
        };

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

  return (
    <div
      style={{ ...sizeStyles[size], ...getVariantStyles() }}
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
      {/* LOCALIZED GRADIENT: Only bottom-right corner */}
      {variant === "neumorphic-accent" && (
        <div
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            width: "50%",
            height: "50%",
            // Transition from Terracotta (Bottom) to Teal (Right)
            background: `radial-gradient(circle at bottom right, ${accent === "mixed" ? "#D4856A" : "#6AACAC"}22 0%, transparent 80%)`,
            // If mixed, we add a second layer for the Teal side
            backgroundImage:
              accent === "mixed"
                ? `radial-gradient(circle at bottom right, #6AACAC22 0%, transparent 70%), radial-gradient(circle at bottom center, #D4856A22 0%, transparent 70%)`
                : undefined,
            pointerEvents: "none",
            zIndex: 0,
          }}
        />
      )}

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
