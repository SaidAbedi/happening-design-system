import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Card } from "../../components/Card";
import { colors, colorsDark } from "../../tokens/colors";
import { fontFamilies, textStyles } from "../../tokens/typography";
import { spacing } from "../../tokens/spacing";

// Helper components for card content
const CardHeader = ({
  title,
  subtitle,
  mode = "light",
}: {
  title: string;
  subtitle?: string;
  mode?: "light" | "dark";
}) => {
  const c = mode === "light" ? colors : colorsDark;
  return (
    <div style={{ marginBottom: spacing.lg }}>
      <h3
        style={{
          ...textStyles.heading.h4,
          color: c.text.primary,
          margin: 0,
          marginBottom: subtitle ? spacing.xs : 0,
        }}
      >
        {title}
      </h3>
      {subtitle && (
        <p
          style={{
            ...textStyles.body.small,
            color: c.text.secondary,
            margin: 0,
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

const CardBody = ({
  children,
  mode = "light",
}: {
  children: React.ReactNode;
  mode?: "light" | "dark";
}) => {
  const c = mode === "light" ? colors : colorsDark;
  return (
    <div
      style={{
        ...textStyles.body.medium,
        color: c.text.secondary,
      }}
    >
      {children}
    </div>
  );
};

const CardShowcase = ({ mode }: { mode: "light" | "dark" }) => {
  const bgColor = mode === "light" ? "#FDF8F4" : "#1C1917";
  const textColor = mode === "light" ? "#2D2420" : "#FAF5F0";

  return (
    <div
      style={{ padding: "32px", backgroundColor: bgColor, minHeight: "100vh" }}
    >
      <h2
        style={{
          color: textColor,
          marginBottom: "32px",
          fontFamily: fontFamilies.sans,
        }}
      >
        Neumorphic Cards ({mode} mode)
      </h2>

      <section style={{ marginBottom: "48px" }}>
        <h3
          style={{
            color: textColor,
            marginBottom: "24px",
            fontFamily: fontFamilies.sans,
            opacity: 0.7,
          }}
        >
          Variants
        </h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "32px",
          }}
        >
          <Card variant="raised" mode={mode}>
            <CardHeader
              title="Raised Card"
              subtitle="Default floating style"
              mode={mode}
            />
            <CardBody mode={mode}>
              This card appears to float above the surface with soft shadows.
            </CardBody>
          </Card>

          <Card variant="raised" accentBorder mode={mode}>
            <CardHeader
              title="Raised + Accent Border"
              subtitle="Gradient border effect"
              mode={mode}
            />
            <CardBody mode={mode}>
              Terracotta to teal gradient border combined with raised style.
            </CardBody>
          </Card>

          <Card variant="glass" mode={mode}>
            <CardHeader
              title="Glass Card"
              subtitle="Translucent style"
              mode={mode}
            />
            <CardBody mode={mode}>
              This card appears to be made of glass with a translucent border.
            </CardBody>
          </Card>

          <Card variant="flat" mode={mode}>
            <CardHeader
              title="Flat Card"
              subtitle="Minimal style"
              mode={mode}
            />
            <CardBody mode={mode}>
              A subtle card with just a border, no shadow elevation.
            </CardBody>
          </Card>

          <Card variant="cut" mode={mode}>
            <CardHeader
              title="Cut Card"
              subtitle="Inset/pressed style"
              mode={mode}
            />
            <CardBody mode={mode}>
              This card appears to be cut into the surface, creating a recessed
              effect.
            </CardBody>
          </Card>

          <Card variant="cut" accentBorder mode={mode}>
            <CardHeader
              title="Cut + Accent Border"
              subtitle="Inset with gradient border"
              mode={mode}
            />
            <CardBody mode={mode}>
              Cut style combined with terracotta to teal gradient border.
            </CardBody>
          </Card>

          <Card variant="bordered" mode={mode}>
            <CardHeader
              title="Bordered Card"
              subtitle="With subtle border"
              mode={mode}
            />
            <CardBody mode={mode}>
              Combines raised shadow with a subtle inner border highlight.
            </CardBody>
          </Card>
        </div>
      </section>

      <section style={{ marginBottom: "48px" }}>
        <h3
          style={{
            color: textColor,
            marginBottom: "24px",
            fontFamily: fontFamilies.sans,
            opacity: 0.7,
          }}
        >
          Sizes
        </h3>
        <div
          style={{
            display: "flex",
            gap: "32px",
            flexWrap: "wrap",
            alignItems: "flex-start",
          }}
        >
          <Card variant="raised" size="sm" mode={mode}>
            <CardHeader title="Small" mode={mode} />
            <CardBody mode={mode}>Compact padding (24px)</CardBody>
          </Card>

          <Card variant="raised" size="md" mode={mode}>
            <CardHeader title="Medium" mode={mode} />
            <CardBody mode={mode}>Default padding (32px)</CardBody>
          </Card>

          <Card variant="raised" size="lg" mode={mode}>
            <CardHeader title="Large" mode={mode} />
            <CardBody mode={mode}>Spacious padding (48px)</CardBody>
          </Card>
        </div>
      </section>

      <section>
        <h3
          style={{
            color: textColor,
            marginBottom: "24px",
            fontFamily: fontFamilies.sans,
            opacity: 0.7,
          }}
        >
          Interactive Cards (hover & click)
        </h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "32px",
          }}
        >
          <Card variant="raised" interactive mode={mode}>
            <CardHeader
              title="Interactive Raised"
              subtitle="Hover for glow effect"
              mode={mode}
            />
            <CardBody mode={mode}>
              Click or hover to see the neumorphic state transitions.
            </CardBody>
          </Card>

          <Card variant="raised" interactive accentBorder mode={mode}>
            <CardHeader
              title="Interactive Raised + Accent"
              subtitle="Gradient border with hover"
              mode={mode}
            />
            <CardBody mode={mode}>
              Raised card with terracotta to teal gradient border.
            </CardBody>
          </Card>

          <Card variant="cut" interactive mode={mode}>
            <CardHeader
              title="Interactive Cut"
              subtitle="Click to press deeper"
              mode={mode}
            />
            <CardBody mode={mode}>
              This inset card gets deeper when pressed.
            </CardBody>
          </Card>

          <Card variant="cut" interactive accentBorder mode={mode}>
            <CardHeader
              title="Interactive Cut + Accent"
              subtitle="Cut style with gradient border"
              mode={mode}
            />
            <CardBody mode={mode}>
              Cut/pressed card with gradient accent border.
            </CardBody>
          </Card>

          <Card variant="glass" interactive mode={mode}>
            <CardHeader
              title="Interactive Glass"
              subtitle="Hover for glow effect"
              mode={mode}
            />
            <CardBody mode={mode}>
              Translucent card with terracotta glow on hover.
            </CardBody>
          </Card>

          <Card variant="bordered" interactive mode={mode}>
            <CardHeader
              title="Interactive Bordered"
              subtitle="Hover for rim glow"
              mode={mode}
            />
            <CardBody mode={mode}>The terracotta rim glows on hover.</CardBody>
          </Card>
        </div>
      </section>
    </div>
  );
};

const CardGrid = ({ mode }: { mode: "light" | "dark" }) => {
  const bgColor = mode === "light" ? "#FDF8F4" : "#1C1917";
  const textColor = mode === "light" ? "#2D2420" : "#FAF5F0";
  const c = mode === "light" ? colors : colorsDark;

  const items = [
    { title: "Dashboard", icon: "📊", desc: "View your analytics" },
    { title: "Settings", icon: "⚙️", desc: "Configure preferences" },
    { title: "Profile", icon: "👤", desc: "Manage your account" },
    { title: "Messages", icon: "💬", desc: "3 new messages" },
    { title: "Calendar", icon: "📅", desc: "Upcoming events" },
    { title: "Documents", icon: "📁", desc: "12 files" },
  ];

  return (
    <div
      style={{ padding: "32px", backgroundColor: bgColor, minHeight: "100vh" }}
    >
      <h2
        style={{
          color: textColor,
          marginBottom: "32px",
          fontFamily: fontFamilies.sans,
        }}
      >
        Card Grid Example
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "24px",
        }}
      >
        {items.map((item) => (
          <Card
            key={item.title}
            variant="raised"
            size="md"
            interactive
            mode={mode}
          >
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "32px", marginBottom: spacing.md }}>
                {item.icon}
              </div>
              <h4
                style={{
                  ...textStyles.heading.h5,
                  color: c.text.primary,
                  margin: 0,
                  marginBottom: spacing.xs,
                }}
              >
                {item.title}
              </h4>
              <p
                style={{
                  ...textStyles.caption.medium,
                  color: c.text.muted,
                  margin: 0,
                }}
              >
                {item.desc}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["raised", "flat", "cut", "bordered", "glass"],
    },
    accentBorder: {
      control: "boolean",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    mode: {
      control: "select",
      options: ["light", "dark"],
    },
    interactive: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Playground: Story = {
  args: {
    variant: "raised",
    size: "md",
    mode: "light",
    interactive: false,
    accentBorder: false,
    children: "Card content goes here",
  },
  render: (args) => (
    <div
      style={{
        padding: "32px",
        backgroundColor: args.mode === "light" ? "#FDF8F4" : "#1C1917",
      }}
    >
      <Card {...args}>
        <CardHeader
          title="Card Title"
          subtitle="Card subtitle"
          mode={args.mode}
        />
        <CardBody mode={args.mode}>{args.children}</CardBody>
      </Card>
    </div>
  ),
};

export const LightMode: Story = {
  render: () => <CardShowcase mode="light" />,
};

export const DarkMode: Story = {
  render: () => <CardShowcase mode="dark" />,
};

export const GridLight: Story = {
  name: "Grid Example (Light)",
  render: () => <CardGrid mode="light" />,
};

export const GridDark: Story = {
  name: "Grid Example (Dark)",
  render: () => <CardGrid mode="dark" />,
};
