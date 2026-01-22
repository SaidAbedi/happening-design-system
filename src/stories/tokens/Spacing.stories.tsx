import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { spacing, spacingSemantics } from '../../tokens/spacing';
import { radii, radiiSemantics } from '../../tokens/radii';

const SpacingScale = () => (
  <div style={{ padding: '24px' }}>
    <h2 style={{ marginBottom: '24px' }}>Spacing Scale</h2>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {Object.entries(spacing).map(([key, value]) => (
        <div key={key} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <span style={{ width: '60px', fontSize: '12px', fontFamily: 'monospace', color: '#666' }}>{key}</span>
          <span style={{ width: '50px', fontSize: '12px', color: '#999' }}>{value}px</span>
          <div
            style={{
              width: `${value}px`,
              height: '24px',
              backgroundColor: '#C4756A',
              borderRadius: '4px',
              minWidth: '2px',
            }}
          />
        </div>
      ))}
    </div>
  </div>
);

const SpacingSemanticTokens = () => (
  <div style={{ padding: '24px' }}>
    <h2 style={{ marginBottom: '24px' }}>Semantic Spacing</h2>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {Object.entries(spacingSemantics).map(([category, values]) => (
        <div key={category}>
          <h3 style={{ marginBottom: '12px', color: '#666', textTransform: 'capitalize' }}>{category}</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {Object.entries(values as Record<string, number>).map(([key, value]) => (
              <div key={key} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <span style={{ width: '120px', fontSize: '12px', fontFamily: 'monospace', color: '#666' }}>
                  {category}.{key}
                </span>
                <span style={{ width: '50px', fontSize: '12px', color: '#999' }}>{value}px</span>
                <div
                  style={{
                    width: `${value}px`,
                    height: '20px',
                    backgroundColor: '#5A9A9A',
                    borderRadius: '4px',
                    minWidth: '2px',
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

const RadiiScale = () => (
  <div style={{ padding: '24px' }}>
    <h2 style={{ marginBottom: '24px' }}>Border Radius Scale</h2>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px' }}>
      {Object.entries(radii).map(([key, value]) => (
        <div key={key} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <div
            style={{
              width: '80px',
              height: '80px',
              backgroundColor: '#FDF8F4',
              border: '2px solid #C4756A',
              borderRadius: typeof value === 'number' ? `${value}px` : value,
            }}
          />
          <span style={{ fontSize: '12px', fontFamily: 'monospace' }}>{key}</span>
          <span style={{ fontSize: '11px', color: '#666' }}>{typeof value === 'number' ? `${value}px` : value}</span>
        </div>
      ))}
    </div>
  </div>
);

const RadiiSemanticTokens = () => (
  <div style={{ padding: '24px' }}>
    <h2 style={{ marginBottom: '24px' }}>Semantic Radii</h2>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px' }}>
      {Object.entries(radiiSemantics).map(([key, value]) => (
        <div key={key} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <div
            style={{
              width: '80px',
              height: '80px',
              backgroundColor: '#FDF8F4',
              border: '2px solid #5A9A9A',
              borderRadius: typeof value === 'number' ? `${value}px` : value,
            }}
          />
          <span style={{ fontSize: '12px', fontFamily: 'monospace' }}>{key}</span>
          <span style={{ fontSize: '11px', color: '#666' }}>{typeof value === 'number' ? `${value}px` : value}</span>
        </div>
      ))}
    </div>
  </div>
);

const meta: Meta = {
  title: 'Tokens/Spacing & Radii',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

export const SpacingScaleStory: StoryObj = {
  name: 'Spacing Scale',
  render: () => <SpacingScale />,
};

export const SemanticSpacing: StoryObj = {
  render: () => <SpacingSemanticTokens />,
};

export const BorderRadius: StoryObj = {
  render: () => <RadiiScale />,
};

export const SemanticRadii: StoryObj = {
  render: () => <RadiiSemanticTokens />,
};
