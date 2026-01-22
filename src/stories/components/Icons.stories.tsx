import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import {
  Icon,
  CalendarIcon,
  SearchIcon,
  HeartOutlineIcon,
  HeartFilledIcon,
  CloseCircleIcon,
  SunnyIcon,
  MoonIcon,
  PhonePortraitIcon,
  OptionsIcon,
  type IconName,
} from '../../components/icons';
import { colors, colorsDark } from '../../tokens/colors';
import { fontFamilies, textStyles } from '../../tokens/typography';
import { spacing } from '../../tokens/spacing';
import { shadowsLight, shadowsDark } from '../../tokens/shadows';
import { radii } from '../../tokens/radii';

const allIcons: { name: IconName; label: string }[] = [
  { name: 'calendar', label: 'Calendar' },
  { name: 'search', label: 'Search' },
  { name: 'heart', label: 'Heart (Filled)' },
  { name: 'heart-outline', label: 'Heart (Outline)' },
  { name: 'close-circle', label: 'Close Circle' },
  { name: 'sunny', label: 'Sunny' },
  { name: 'moon', label: 'Moon' },
  { name: 'phone-portrait', label: 'Phone Portrait' },
  { name: 'options', label: 'Options' },
];

const IconShowcase = ({ mode }: { mode: 'light' | 'dark' }) => {
  const bgColor = mode === 'light' ? '#FDF8F4' : '#1C1917';
  const textColor = mode === 'light' ? '#2D2420' : '#FAF5F0';
  const c = mode === 'light' ? colors : colorsDark;
  const shadows = mode === 'light' ? shadowsLight : shadowsDark;

  return (
    <div style={{ padding: '32px', backgroundColor: bgColor, minHeight: '100vh' }}>
      <h2 style={{ color: textColor, marginBottom: '32px', fontFamily: fontFamilies.sans }}>
        Icons ({mode} mode)
      </h2>

      <section style={{ marginBottom: '48px' }}>
        <h3 style={{ color: textColor, marginBottom: '24px', fontFamily: fontFamilies.sans, opacity: 0.7 }}>
          All Icons
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '24px' }}>
          {allIcons.map(({ name, label }) => (
            <div
              key={name}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: spacing['2xl'],
                backgroundColor: mode === 'light' ? '#FFFFFF' : '#292524',
                borderRadius: radii.xl,
                boxShadow: shadows.sm,
              }}
            >
              <Icon name={name} size="xl" mode={mode} />
              <span style={{
                marginTop: spacing.md,
                ...textStyles.caption.medium,
                color: c.text.secondary,
              }}>
                {label}
              </span>
              <code style={{
                marginTop: spacing.xs,
                ...textStyles.caption.small,
                color: c.text.muted,
                fontFamily: fontFamilies.mono,
              }}>
                {name}
              </code>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: '48px' }}>
        <h3 style={{ color: textColor, marginBottom: '24px', fontFamily: fontFamilies.sans, opacity: 0.7 }}>
          Sizes
        </h3>
        <div style={{ display: 'flex', gap: '32px', alignItems: 'center', flexWrap: 'wrap' }}>
          {(['sm', 'md', 'lg', 'xl'] as const).map((size) => (
            <div key={size} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: spacing.sm }}>
              <Icon name="heart" size={size} mode={mode} />
              <span style={{ ...textStyles.caption.medium, color: c.text.secondary }}>{size}</span>
            </div>
          ))}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: spacing.sm }}>
            <Icon name="heart" size={48} mode={mode} />
            <span style={{ ...textStyles.caption.medium, color: c.text.secondary }}>48px</span>
          </div>
        </div>
      </section>

      <section style={{ marginBottom: '48px' }}>
        <h3 style={{ color: textColor, marginBottom: '24px', fontFamily: fontFamilies.sans, opacity: 0.7 }}>
          Colors
        </h3>
        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: spacing.sm }}>
            <Icon name="heart" size="xl" mode={mode} />
            <span style={{ ...textStyles.caption.medium, color: c.text.secondary }}>Default</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: spacing.sm }}>
            <Icon name="heart" size="xl" color={c.brand.primary} mode={mode} />
            <span style={{ ...textStyles.caption.medium, color: c.text.secondary }}>Primary</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: spacing.sm }}>
            <Icon name="heart" size="xl" color={c.accent.DEFAULT} mode={mode} />
            <span style={{ ...textStyles.caption.medium, color: c.text.secondary }}>Accent</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: spacing.sm }}>
            <Icon name="heart" size="xl" color={c.feedback.error} mode={mode} />
            <span style={{ ...textStyles.caption.medium, color: c.text.secondary }}>Error</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: spacing.sm }}>
            <Icon name="heart" size="xl" color={c.feedback.success} mode={mode} />
            <span style={{ ...textStyles.caption.medium, color: c.text.secondary }}>Success</span>
          </div>
        </div>
      </section>

      <section>
        <h3 style={{ color: textColor, marginBottom: '24px', fontFamily: fontFamilies.sans, opacity: 0.7 }}>
          Neumorphic Icon Buttons
        </h3>
        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
          {['calendar', 'search', 'heart', 'options'].map((iconName) => (
            <button
              key={iconName}
              style={{
                width: 56,
                height: 56,
                borderRadius: radii.xl,
                border: 'none',
                backgroundColor: mode === 'light' ? '#FDF8F4' : '#1C1917',
                boxShadow: shadows.sm,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'box-shadow 200ms ease-out',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = shadows.glow;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = shadows.sm;
              }}
              onMouseDown={(e) => {
                e.currentTarget.style.boxShadow = shadows.pressed;
              }}
              onMouseUp={(e) => {
                e.currentTarget.style.boxShadow = shadows.glow;
              }}
            >
              <Icon name={iconName as IconName} size="lg" mode={mode} />
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};

const ThemeIcons = ({ mode }: { mode: 'light' | 'dark' }) => {
  const bgColor = mode === 'light' ? '#FDF8F4' : '#1C1917';
  const textColor = mode === 'light' ? '#2D2420' : '#FAF5F0';
  const c = mode === 'light' ? colors : colorsDark;
  const shadows = mode === 'light' ? shadowsLight : shadowsDark;

  const themes = [
    { icon: 'sunny' as const, label: 'Light', active: mode === 'light' },
    { icon: 'moon' as const, label: 'Dark', active: mode === 'dark' },
    { icon: 'phone-portrait' as const, label: 'System', active: false },
  ];

  return (
    <div style={{ padding: '32px', backgroundColor: bgColor, minHeight: '50vh' }}>
      <h2 style={{ color: textColor, marginBottom: '32px', fontFamily: fontFamilies.sans }}>
        Theme Selector Example
      </h2>
      <div style={{ display: 'flex', gap: '16px' }}>
        {themes.map(({ icon, label, active }) => (
          <button
            key={icon}
            style={{
              padding: `${spacing.md}px ${spacing.xl}px`,
              borderRadius: radii.xl,
              border: 'none',
              backgroundColor: mode === 'light' ? '#FDF8F4' : '#1C1917',
              boxShadow: active ? shadows.cut : shadows.sm,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: spacing.sm,
              fontFamily: fontFamilies.sans,
              fontSize: textStyles.label.medium.fontSize,
              color: active ? c.brand.primary : c.text.secondary,
              transition: 'all 200ms ease-out',
            }}
          >
            <Icon name={icon} size="md" color={active ? c.brand.primary : c.text.secondary} mode={mode} />
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'select',
      options: allIcons.map(i => i.name),
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
    },
    mode: {
      control: 'select',
      options: ['light', 'dark'],
    },
    color: {
      control: 'color',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Playground: Story = {
  args: {
    name: 'heart',
    size: 'lg',
    mode: 'light',
  },
  render: (args) => (
    <div style={{ padding: '32px', backgroundColor: args.mode === 'light' ? '#FDF8F4' : '#1C1917' }}>
      <Icon {...args} />
    </div>
  ),
};

export const LightMode: Story = {
  render: () => <IconShowcase mode="light" />,
};

export const DarkMode: Story = {
  render: () => <IconShowcase mode="dark" />,
};

export const ThemeSelectorLight: Story = {
  name: 'Theme Selector (Light)',
  render: () => <ThemeIcons mode="light" />,
};

export const ThemeSelectorDark: Story = {
  name: 'Theme Selector (Dark)',
  render: () => <ThemeIcons mode="dark" />,
};
