import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { NeumorphicIcon, type IconName } from '../../components/icons';
import { colors, colorsDark } from '../../tokens/colors';
import { fontFamilies, textStyles } from '../../tokens/typography';
import { spacing } from '../../tokens/spacing';

const allIcons: IconName[] = [
  'calendar', 'search', 'heart', 'heart-outline', 'close-circle',
  'sunny', 'moon', 'phone-portrait', 'options'
];

const NeumorphicIconShowcase = ({ mode }: { mode: 'light' | 'dark' }) => {
  const bgColor = mode === 'light' ? '#FDF8F4' : '#1C1917';
  const textColor = mode === 'light' ? '#2D2420' : '#FAF5F0';
  const c = mode === 'light' ? colors : colorsDark;

  return (
    <div style={{ padding: '32px', backgroundColor: bgColor, minHeight: '100vh' }}>
      <h2 style={{ color: textColor, marginBottom: '32px', fontFamily: fontFamilies.sans }}>
        Neumorphic Icons ({mode} mode)
      </h2>

      <section style={{ marginBottom: '48px' }}>
        <h3 style={{ color: textColor, marginBottom: '24px', fontFamily: fontFamilies.sans, opacity: 0.7 }}>
          Variants
        </h3>
        <div style={{ display: 'flex', gap: '48px', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: spacing.md }}>
            <NeumorphicIcon name="heart" variant="raised" size="xl" mode={mode} />
            <span style={{ ...textStyles.caption.medium, color: c.text.secondary }}>Raised</span>
            <span style={{ ...textStyles.caption.small, color: c.text.muted }}>Floating above surface</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: spacing.md }}>
            <NeumorphicIcon name="heart" variant="cut" size="xl" mode={mode} />
            <span style={{ ...textStyles.caption.medium, color: c.text.secondary }}>Cut</span>
            <span style={{ ...textStyles.caption.small, color: c.text.muted }}>Pressed into surface</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: spacing.md }}>
            <NeumorphicIcon name="heart" variant="flat" size="xl" mode={mode} />
            <span style={{ ...textStyles.caption.medium, color: c.text.secondary }}>Flat</span>
            <span style={{ ...textStyles.caption.small, color: c.text.muted }}>Minimal border only</span>
          </div>
        </div>
      </section>

      <section style={{ marginBottom: '48px' }}>
        <h3 style={{ color: textColor, marginBottom: '24px', fontFamily: fontFamilies.sans, opacity: 0.7 }}>
          Shapes
        </h3>
        <div style={{ display: 'flex', gap: '48px', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: spacing.md }}>
            <NeumorphicIcon name="calendar" shape="circle" size="xl" mode={mode} />
            <span style={{ ...textStyles.caption.medium, color: c.text.secondary }}>Circle</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: spacing.md }}>
            <NeumorphicIcon name="calendar" shape="rounded" size="xl" mode={mode} />
            <span style={{ ...textStyles.caption.medium, color: c.text.secondary }}>Rounded</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: spacing.md }}>
            <NeumorphicIcon name="calendar" shape="square" size="xl" mode={mode} />
            <span style={{ ...textStyles.caption.medium, color: c.text.secondary }}>Square</span>
          </div>
        </div>
      </section>

      <section style={{ marginBottom: '48px' }}>
        <h3 style={{ color: textColor, marginBottom: '24px', fontFamily: fontFamilies.sans, opacity: 0.7 }}>
          Sizes
        </h3>
        <div style={{ display: 'flex', gap: '32px', alignItems: 'center', flexWrap: 'wrap' }}>
          {(['sm', 'md', 'lg', 'xl'] as const).map((size) => (
            <div key={size} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: spacing.sm }}>
              <NeumorphicIcon name="heart" size={size} mode={mode} />
              <span style={{ ...textStyles.caption.medium, color: c.text.secondary }}>{size}</span>
            </div>
          ))}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: spacing.sm }}>
            <NeumorphicIcon name="heart" size={48} containerSize={80} mode={mode} />
            <span style={{ ...textStyles.caption.medium, color: c.text.secondary }}>48px / 80px</span>
          </div>
        </div>
      </section>

      <section style={{ marginBottom: '48px' }}>
        <h3 style={{ color: textColor, marginBottom: '24px', fontFamily: fontFamilies.sans, opacity: 0.7 }}>
          Interactive (hover & press)
        </h3>
        <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: spacing.md }}>
            <NeumorphicIcon name="heart" variant="raised" size="xl" interactive mode={mode} />
            <span style={{ ...textStyles.caption.medium, color: c.text.secondary }}>Raised</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: spacing.md }}>
            <NeumorphicIcon name="search" variant="cut" size="xl" interactive mode={mode} />
            <span style={{ ...textStyles.caption.medium, color: c.text.secondary }}>Cut</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: spacing.md }}>
            <NeumorphicIcon name="options" variant="flat" size="xl" interactive mode={mode} />
            <span style={{ ...textStyles.caption.medium, color: c.text.secondary }}>Flat</span>
          </div>
        </div>
      </section>

      <section style={{ marginBottom: '48px' }}>
        <h3 style={{ color: textColor, marginBottom: '24px', fontFamily: fontFamilies.sans, opacity: 0.7 }}>
          All Icons (Raised)
        </h3>
        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
          {allIcons.map((name) => (
            <div key={name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: spacing.sm }}>
              <NeumorphicIcon name={name} variant="raised" size="lg" mode={mode} />
              <span style={{ ...textStyles.caption.small, color: c.text.muted, fontFamily: fontFamilies.mono }}>
                {name}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: '48px' }}>
        <h3 style={{ color: textColor, marginBottom: '24px', fontFamily: fontFamilies.sans, opacity: 0.7 }}>
          All Icons (Cut)
        </h3>
        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
          {allIcons.map((name) => (
            <div key={name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: spacing.sm }}>
              <NeumorphicIcon name={name} variant="cut" size="lg" mode={mode} />
              <span style={{ ...textStyles.caption.small, color: c.text.muted, fontFamily: fontFamilies.mono }}>
                {name}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 style={{ color: textColor, marginBottom: '24px', fontFamily: fontFamilies.sans, opacity: 0.7 }}>
          Custom Colors
        </h3>
        <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
          <NeumorphicIcon name="heart" size="xl" color={c.brand.primary} mode={mode} />
          <NeumorphicIcon name="heart" size="xl" color={c.accent.DEFAULT} mode={mode} />
          <NeumorphicIcon name="heart" size="xl" color={c.feedback.error} mode={mode} />
          <NeumorphicIcon name="heart" size="xl" color={c.feedback.success} mode={mode} />
        </div>
      </section>
    </div>
  );
};

const ToolbarExample = ({ mode }: { mode: 'light' | 'dark' }) => {
  const bgColor = mode === 'light' ? '#FDF8F4' : '#1C1917';
  const textColor = mode === 'light' ? '#2D2420' : '#FAF5F0';
  const c = mode === 'light' ? colors : colorsDark;

  return (
    <div style={{ padding: '32px', backgroundColor: bgColor, minHeight: '50vh' }}>
      <h2 style={{ color: textColor, marginBottom: '32px', fontFamily: fontFamilies.sans }}>
        Toolbar Example
      </h2>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <NeumorphicIcon name="calendar" variant="raised" size="lg" shape="circle" interactive mode={mode} />
        <NeumorphicIcon name="search" variant="raised" size="lg" shape="circle" interactive mode={mode} />
        <NeumorphicIcon name="heart-outline" variant="raised" size="lg" shape="circle" interactive mode={mode} />
        <div style={{ width: 1, height: 32, backgroundColor: c.border.default, margin: '0 8px' }} />
        <NeumorphicIcon name="options" variant="cut" size="lg" shape="circle" interactive mode={mode} />
      </div>
    </div>
  );
};

const meta: Meta<typeof NeumorphicIcon> = {
  title: 'Components/NeumorphicIcon',
  component: NeumorphicIcon,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'select',
      options: allIcons,
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
    },
    variant: {
      control: 'select',
      options: ['raised', 'cut', 'flat'],
    },
    shape: {
      control: 'select',
      options: ['circle', 'rounded', 'square'],
    },
    mode: {
      control: 'select',
      options: ['light', 'dark'],
    },
    interactive: {
      control: 'boolean',
    },
    color: {
      control: 'color',
    },
  },
};

export default meta;
type Story = StoryObj<typeof NeumorphicIcon>;

export const Playground: Story = {
  args: {
    name: 'heart',
    size: 'xl',
    variant: 'raised',
    shape: 'rounded',
    mode: 'light',
    interactive: false,
  },
  render: (args) => (
    <div style={{ padding: '64px', backgroundColor: args.mode === 'light' ? '#FDF8F4' : '#1C1917' }}>
      <NeumorphicIcon {...args} />
    </div>
  ),
};

export const LightMode: Story = {
  render: () => <NeumorphicIconShowcase mode="light" />,
};

export const DarkMode: Story = {
  render: () => <NeumorphicIconShowcase mode="dark" />,
};

export const ToolbarLight: Story = {
  name: 'Toolbar Example (Light)',
  render: () => <ToolbarExample mode="light" />,
};

export const ToolbarDark: Story = {
  name: 'Toolbar Example (Dark)',
  render: () => <ToolbarExample mode="dark" />,
};
