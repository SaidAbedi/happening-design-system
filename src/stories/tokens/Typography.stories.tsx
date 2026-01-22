import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { fontFamilies, fontSizes, fontWeights, textStyles } from '../../tokens/typography';

const TypeSample = ({
  label,
  style
}: {
  label: string;
  style: { fontSize: number; fontWeight: number; lineHeight: number; letterSpacing: number; fontFamily: string }
}) => (
  <div style={{ marginBottom: '24px' }}>
    <div style={{ fontSize: '12px', color: '#666', marginBottom: '8px', fontFamily: 'monospace' }}>
      {label} — {style.fontSize}px / {style.fontWeight} / {style.lineHeight} line-height
    </div>
    <div
      style={{
        fontSize: `${style.fontSize}px`,
        fontWeight: style.fontWeight,
        lineHeight: style.lineHeight,
        letterSpacing: `${style.letterSpacing}em`,
        fontFamily: style.fontFamily,
      }}
    >
      The quick brown fox jumps over the lazy dog
    </div>
  </div>
);

const FontFamilyDemo = () => (
  <div style={{ padding: '24px' }}>
    <h2 style={{ marginBottom: '24px' }}>Font Families</h2>

    <div style={{ marginBottom: '32px' }}>
      <h4 style={{ color: '#666', marginBottom: '8px' }}>Sans (DM Sans)</h4>
      <p style={{ fontFamily: fontFamilies.sans, fontSize: '18px' }}>
        The quick brown fox jumps over the lazy dog. 0123456789
      </p>
    </div>

    <div style={{ marginBottom: '32px' }}>
      <h4 style={{ color: '#666', marginBottom: '8px' }}>Serif (DM Serif Display)</h4>
      <p style={{ fontFamily: fontFamilies.serif, fontSize: '24px' }}>
        The quick brown fox jumps over the lazy dog. 0123456789
      </p>
    </div>

    <div style={{ marginBottom: '32px' }}>
      <h4 style={{ color: '#666', marginBottom: '8px' }}>Mono (JetBrains Mono)</h4>
      <p style={{ fontFamily: fontFamilies.mono, fontSize: '16px' }}>
        const greeting = "Hello, World!"; // 0123456789
      </p>
    </div>
  </div>
);

const FontSizeScale = () => (
  <div style={{ padding: '24px' }}>
    <h2 style={{ marginBottom: '24px' }}>Font Size Scale</h2>
    {Object.entries(fontSizes).map(([key, size]) => (
      <div key={key} style={{ display: 'flex', alignItems: 'baseline', marginBottom: '12px', gap: '16px' }}>
        <span style={{ width: '60px', fontSize: '12px', color: '#666', fontFamily: 'monospace' }}>{key}</span>
        <span style={{ width: '50px', fontSize: '12px', color: '#999' }}>{size}px</span>
        <span style={{ fontSize: `${size}px`, fontFamily: fontFamilies.sans }}>Aa</span>
      </div>
    ))}
  </div>
);

const TextStylesDemo = () => (
  <div style={{ padding: '24px' }}>
    <h2 style={{ marginBottom: '32px' }}>Text Styles</h2>

    <h3 style={{ marginBottom: '16px', color: '#666' }}>Display</h3>
    <TypeSample label="display.hero" style={textStyles.display.hero} />
    <TypeSample label="display.large" style={textStyles.display.large} />
    <TypeSample label="display.medium" style={textStyles.display.medium} />
    <TypeSample label="display.small" style={textStyles.display.small} />

    <h3 style={{ marginBottom: '16px', marginTop: '32px', color: '#666' }}>Headings</h3>
    <TypeSample label="heading.h1" style={textStyles.heading.h1} />
    <TypeSample label="heading.h2" style={textStyles.heading.h2} />
    <TypeSample label="heading.h3" style={textStyles.heading.h3} />
    <TypeSample label="heading.h4" style={textStyles.heading.h4} />
    <TypeSample label="heading.h5" style={textStyles.heading.h5} />
    <TypeSample label="heading.h6" style={textStyles.heading.h6} />

    <h3 style={{ marginBottom: '16px', marginTop: '32px', color: '#666' }}>Body</h3>
    <TypeSample label="body.large" style={textStyles.body.large} />
    <TypeSample label="body.medium" style={textStyles.body.medium} />
    <TypeSample label="body.small" style={textStyles.body.small} />

    <h3 style={{ marginBottom: '16px', marginTop: '32px', color: '#666' }}>Labels</h3>
    <TypeSample label="label.large" style={textStyles.label.large} />
    <TypeSample label="label.medium" style={textStyles.label.medium} />
    <TypeSample label="label.small" style={textStyles.label.small} />

    <h3 style={{ marginBottom: '16px', marginTop: '32px', color: '#666' }}>Caption</h3>
    <TypeSample label="caption.medium" style={textStyles.caption.medium} />
    <TypeSample label="caption.small" style={textStyles.caption.small} />
  </div>
);

const meta: Meta = {
  title: 'Tokens/Typography',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

export const FontFamilies: StoryObj = {
  render: () => <FontFamilyDemo />,
};

export const FontSizes: StoryObj = {
  render: () => <FontSizeScale />,
};

export const TextStyles: StoryObj = {
  render: () => <TextStylesDemo />,
};
