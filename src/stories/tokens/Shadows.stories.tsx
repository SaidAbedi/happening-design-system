import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { shadowsLight, shadowsDark } from '../../tokens/shadows';
import { gradientsLight, gradientsDark, accentGradients } from '../../tokens/gradients';

const ShadowDemo = ({ mode }: { mode: 'light' | 'dark' }) => {
  const shadows = mode === 'light' ? shadowsLight : shadowsDark;
  const bgColor = mode === 'light' ? '#FDF8F4' : '#1C1917';
  const cardBg = mode === 'light' ? '#FFFFFF' : '#292524';
  const textColor = mode === 'light' ? '#2D2420' : '#FAF5F0';

  return (
    <div style={{ padding: '24px', backgroundColor: bgColor, minHeight: '100vh' }}>
      <h2 style={{ marginBottom: '24px', color: textColor }}>
        {mode === 'light' ? 'Light' : 'Dark'} Mode Shadows
      </h2>

      <h3 style={{ marginBottom: '16px', color: textColor, opacity: 0.7 }}>Neumorphic Raised</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px', marginBottom: '48px' }}>
        {Object.entries(shadows.raised).map(([key, value]) => (
          <div key={key} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
            <div
              style={{
                width: '120px',
                height: '120px',
                backgroundColor: cardBg,
                borderRadius: '16px',
                boxShadow: value,
              }}
            />
            <span style={{ fontSize: '12px', fontFamily: 'monospace', color: textColor }}>{key}</span>
          </div>
        ))}
      </div>

      <h3 style={{ marginBottom: '16px', color: textColor, opacity: 0.7 }}>Neumorphic Cut (Inset)</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px', marginBottom: '48px' }}>
        {Object.entries(shadows.cut).map(([key, value]) => (
          <div key={key} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
            <div
              style={{
                width: '120px',
                height: '120px',
                backgroundColor: bgColor,
                borderRadius: '16px',
                boxShadow: value,
              }}
            />
            <span style={{ fontSize: '12px', fontFamily: 'monospace', color: textColor }}>{key}</span>
          </div>
        ))}
      </div>

      <h3 style={{ marginBottom: '16px', color: textColor, opacity: 0.7 }}>Interactive States</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px' }}>
        {Object.entries(shadows.interactive).map(([key, value]) => (
          <div key={key} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
            <div
              style={{
                width: '120px',
                height: '120px',
                backgroundColor: cardBg,
                borderRadius: '16px',
                boxShadow: value,
              }}
            />
            <span style={{ fontSize: '12px', fontFamily: 'monospace', color: textColor }}>{key}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const GradientDemo = ({ mode }: { mode: 'light' | 'dark' }) => {
  const gradients = mode === 'light' ? gradientsLight : gradientsDark;
  const bgColor = mode === 'light' ? '#FDF8F4' : '#1C1917';
  const textColor = mode === 'light' ? '#2D2420' : '#FAF5F0';

  return (
    <div style={{ padding: '24px', backgroundColor: bgColor, minHeight: '100vh' }}>
      <h2 style={{ marginBottom: '24px', color: textColor }}>
        {mode === 'light' ? 'Light' : 'Dark'} Mode Gradients
      </h2>

      <h3 style={{ marginBottom: '16px', color: textColor, opacity: 0.7 }}>Surface Gradients</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', marginBottom: '48px' }}>
        {Object.entries(gradients.surface).map(([key, value]) => (
          <div key={key} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <div
              style={{
                width: '150px',
                height: '100px',
                background: value,
                borderRadius: '12px',
                border: '1px solid rgba(0,0,0,0.1)',
              }}
            />
            <span style={{ fontSize: '11px', fontFamily: 'monospace', color: textColor }}>{key}</span>
          </div>
        ))}
      </div>

      <h3 style={{ marginBottom: '16px', color: textColor, opacity: 0.7 }}>Accent Gradients</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px' }}>
        {Object.entries(accentGradients).map(([key, value]) => (
          <div key={key} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <div
              style={{
                width: '150px',
                height: '100px',
                background: value,
                borderRadius: '12px',
              }}
            />
            <span style={{ fontSize: '11px', fontFamily: 'monospace', color: textColor }}>{key}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const meta: Meta = {
  title: 'Tokens/Shadows & Gradients',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

export const ShadowsLight: StoryObj = {
  name: 'Shadows (Light)',
  render: () => <ShadowDemo mode="light" />,
};

export const ShadowsDark: StoryObj = {
  name: 'Shadows (Dark)',
  render: () => <ShadowDemo mode="dark" />,
};

export const GradientsLight: StoryObj = {
  name: 'Gradients (Light)',
  render: () => <GradientDemo mode="light" />,
};

export const GradientsDark: StoryObj = {
  name: 'Gradients (Dark)',
  render: () => <GradientDemo mode="dark" />,
};
