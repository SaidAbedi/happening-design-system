import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Button } from '../../components/Button';
import { fontFamilies } from '../../tokens/typography';

const ButtonShowcase = ({ mode }: { mode: 'light' | 'dark' }) => {
  const bgColor = mode === 'light' ? '#FDF8F4' : '#1C1917';
  const textColor = mode === 'light' ? '#2D2420' : '#FAF5F0';

  return (
    <div style={{ padding: '32px', backgroundColor: bgColor, minHeight: '100vh' }}>
      <h2 style={{ color: textColor, marginBottom: '32px', fontFamily: fontFamilies.sans }}>
        Neumorphic Buttons ({mode} mode)
      </h2>

      <section style={{ marginBottom: '48px' }}>
        <h3 style={{ color: textColor, marginBottom: '16px', fontFamily: fontFamilies.sans, opacity: 0.7 }}>
          Variants
        </h3>
        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
          <Button variant="primary" mode={mode}>Primary</Button>
          <Button variant="secondary" mode={mode}>Secondary</Button>
          <Button variant="ghost" mode={mode}>Ghost</Button>
          <Button variant="outline" mode={mode}>Outline</Button>
        </div>
      </section>

      <section style={{ marginBottom: '48px' }}>
        <h3 style={{ color: textColor, marginBottom: '16px', fontFamily: fontFamilies.sans, opacity: 0.7 }}>
          Sizes
        </h3>
        <div style={{ display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap' }}>
          <Button variant="primary" size="sm" mode={mode}>Small</Button>
          <Button variant="primary" size="md" mode={mode}>Medium</Button>
          <Button variant="primary" size="lg" mode={mode}>Large</Button>
        </div>
      </section>

      <section style={{ marginBottom: '48px' }}>
        <h3 style={{ color: textColor, marginBottom: '16px', fontFamily: fontFamilies.sans, opacity: 0.7 }}>
          States
        </h3>
        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
          <Button variant="primary" mode={mode}>Default</Button>
          <Button variant="primary" disabled mode={mode}>Disabled</Button>
        </div>
      </section>

      <section>
        <h3 style={{ color: textColor, marginBottom: '16px', fontFamily: fontFamilies.sans, opacity: 0.7 }}>
          All Variants & Sizes
        </h3>
        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', marginBottom: '16px' }}>
          <Button variant="secondary" size="sm" mode={mode}>Secondary SM</Button>
          <Button variant="secondary" size="md" mode={mode}>Secondary MD</Button>
          <Button variant="secondary" size="lg" mode={mode}>Secondary LG</Button>
        </div>
        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
          <Button variant="outline" size="sm" mode={mode}>Outline SM</Button>
          <Button variant="outline" size="md" mode={mode}>Outline MD</Button>
          <Button variant="outline" size="lg" mode={mode}>Outline LG</Button>
        </div>
      </section>
    </div>
  );
};

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost', 'outline'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    mode: {
      control: 'select',
      options: ['light', 'dark'],
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Playground: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'md',
    mode: 'light',
    disabled: false,
  },
  render: (args) => (
    <div style={{ padding: '32px', backgroundColor: args.mode === 'light' ? '#FDF8F4' : '#1C1917' }}>
      <Button {...args} />
    </div>
  ),
};

export const LightMode: Story = {
  render: () => <ButtonShowcase mode="light" />,
};

export const DarkMode: Story = {
  render: () => <ButtonShowcase mode="dark" />,
};

export const Interactive: Story = {
  render: () => {
    const [count, setCount] = useState(0);
    return (
      <div style={{ padding: '32px', backgroundColor: '#FDF8F4', minHeight: '100vh' }}>
        <h2 style={{ marginBottom: '24px', fontFamily: fontFamilies.sans }}>Interactive Demo</h2>
        <p style={{ marginBottom: '16px', fontFamily: fontFamilies.sans }}>Click count: {count}</p>
        <div style={{ display: 'flex', gap: '16px' }}>
          <Button variant="primary" onClick={() => setCount(c => c + 1)}>Increment</Button>
          <Button variant="secondary" onClick={() => setCount(0)}>Reset</Button>
        </div>
      </div>
    );
  },
};
