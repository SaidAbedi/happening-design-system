import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { colors, colorsDark } from '../../tokens/colors';

const ColorSwatch = ({ name, value, textColor = '#000' }: { name: string; value: string; textColor?: string }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
    <div
      style={{
        width: '100px',
        height: '60px',
        backgroundColor: value,
        borderRadius: '8px',
        border: '1px solid rgba(0,0,0,0.1)',
        display: 'flex',
        alignItems: 'flex-end',
        padding: '4px',
      }}
    >
      <span style={{ fontSize: '10px', color: textColor, fontFamily: 'monospace' }}>{value}</span>
    </div>
    <span style={{ fontSize: '11px', fontWeight: 500 }}>{name}</span>
  </div>
);

const ColorGroup = ({ title, colorObj, prefix = '' }: { title: string; colorObj: Record<string, any>; prefix?: string }) => {
  const renderColors = (obj: Record<string, any>, path: string = '') => {
    return Object.entries(obj).map(([key, value]) => {
      const fullPath = path ? `${path}.${key}` : key;
      if (typeof value === 'string') {
        const isLight = value.startsWith('#F') || value.startsWith('#E') || value.startsWith('#D') || value === '#FFFFFF' || value.includes('rgba');
        return <ColorSwatch key={fullPath} name={fullPath} value={value} textColor={isLight ? '#000' : '#fff'} />;
      }
      return null;
    }).filter(Boolean);
  };

  const flatColors = renderColors(colorObj);

  return (
    <div style={{ marginBottom: '32px' }}>
      <h3 style={{ marginBottom: '16px', fontFamily: 'system-ui', fontSize: '18px' }}>{title}</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
        {flatColors}
      </div>
    </div>
  );
};

const ColorPalette = ({ mode }: { mode: 'light' | 'dark' }) => {
  const colorTokens = mode === 'light' ? colors : colorsDark;
  const bgColor = mode === 'light' ? '#FDF8F4' : '#1C1917';
  const textColor = mode === 'light' ? '#2D2420' : '#FAF5F0';

  return (
    <div style={{ padding: '24px', backgroundColor: bgColor, color: textColor, minHeight: '100vh' }}>
      <h2 style={{ marginBottom: '24px', fontFamily: 'system-ui' }}>
        {mode === 'light' ? 'Light Mode' : 'Dark Mode'} Colors
      </h2>

      <ColorGroup title="Brand" colorObj={colorTokens.brand} />
      <ColorGroup title="Accent" colorObj={colorTokens.accent} />
      <ColorGroup title="Background" colorObj={colorTokens.background} />
      <ColorGroup title="Surface" colorObj={colorTokens.surface} />
      <ColorGroup title="Text" colorObj={colorTokens.text} />
      <ColorGroup title="Border" colorObj={colorTokens.border} />
      <ColorGroup title="Feedback" colorObj={colorTokens.feedback} />
      <ColorGroup title="Interactive" colorObj={colorTokens.interactive} />
    </div>
  );
};

const meta: Meta = {
  title: 'Tokens/Colors',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

export const LightMode: StoryObj = {
  render: () => <ColorPalette mode="light" />,
};

export const DarkMode: StoryObj = {
  render: () => <ColorPalette mode="dark" />,
};
