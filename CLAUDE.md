# Design System - @saidabedi/design-system

A neumorphic design system with Mediterranean warmth (Terracotta + Teal palette).

## Installation

```bash
npm install @saidabedi/design-system
```

## Imports

```tsx
// Tokens
import { colors, colorsDark, spacing, shadows, typography } from '@saidabedi/design-system/tokens'

// Components
import { Button, Card, Icon } from '@saidabedi/design-system/components'

// Web theme adapter
import { createWebTheme } from '@saidabedi/design-system/web'
```

---

## Components

### Button

```tsx
<Button variant="primary" size="md" mode="light">Click me</Button>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary'` \| `'secondary'` \| `'ghost'` \| `'outline'` | `'primary'` | Visual style |
| `size` | `'sm'` \| `'md'` \| `'lg'` | `'md'` | Button size |
| `mode` | `'light'` \| `'dark'` | `'light'` | Color mode |
| `disabled` | `boolean` | `false` | Disabled state |

### Card

```tsx
<Card variant="raised" size="md" interactive mode="light">
  Content here
</Card>
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'raised'` \| `'flat'` \| `'cut'` \| `'bordered'` | `'raised'` | Visual style |
| `size` | `'sm'` \| `'md'` \| `'lg'` | `'md'` | Padding size (24px/32px/48px) |
| `interactive` | `boolean` | `false` | Enable hover/press states |
| `mode` | `'light'` \| `'dark'` | `'light'` | Color mode |

### Icon

```tsx
<Icon name="calendar" size="lg" color="#C4756A" mode="light" />
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `IconName` | required | Icon name |
| `size` | `'sm'` \| `'md'` \| `'lg'` \| `'xl'` \| `number` | `'md'` | Size (16/20/24/32px) |
| `color` | `string` | token `icon.primary` | Icon color (solid) |
| `gradient` | `IconGradientName` \| `{start, end}` | - | Gradient fill |
| `gradientMode` | `'fill'` \| `'stroke'` \| `'both'` | `'both'` | How gradient applies |
| `mode` | `'light'` \| `'dark'` | `'light'` | Color mode |

**Available icons:** `calendar`, `search`, `heart`, `heart-outline`, `close-circle`, `sunny`, `moon`, `phone-portrait`, `options`

**Gradient presets:** `terracotta`, `teal`, `heart`, `success`, `warning`, `sunset`, `ocean`, `brand`

```tsx
// Solid color
<Icon name="heart" color="#C4756A" />

// Gradient fill (preset)
<Icon name="heart" gradient="heart" size="xl" />

// Gradient stroke only (border)
<Icon name="heart" gradient="terracotta" gradientMode="stroke" size="xl" />

// Custom gradient
<Icon name="sunny" gradient={{ start: '#FFD700', end: '#FFA500' }} />
```

### NeumorphicIcon

Icons with 3D neumorphic depth - raised or cut into the surface.

```tsx
<NeumorphicIcon name="heart" variant="raised" size="xl" shape="circle" />
<NeumorphicIcon name="search" variant="cut" interactive onClick={handleClick} />
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `IconName` | required | Icon name |
| `size` | `'sm'` \| `'md'` \| `'lg'` \| `'xl'` \| `number` | `'lg'` | Icon size |
| `containerSize` | `number` | auto | Override container size |
| `variant` | `'raised'` \| `'cut'` \| `'flat'` | `'raised'` | Neumorphic style |
| `shape` | `'circle'` \| `'rounded'` \| `'square'` | `'rounded'` | Container shape |
| `interactive` | `boolean` | `false` | Enable hover/press states |
| `color` | `string` | token-based | Icon color |
| `mode` | `'light'` \| `'dark'` | `'light'` | Color mode |

---

## Design Tokens

### Colors

**Light mode:** `colors`
**Dark mode:** `colorsDark`

```tsx
// Brand
colors.brand.primary          // #C4756A (terracotta)
colors.brand.secondary        // #5A9A9A (teal)

// Backgrounds
colors.background.primary     // #FDF8F4 (warm cream)
colors.surface.raised         // #FFFFFF
colors.surface.base           // #FDF8F4
colors.surface.cut            // #F5EDE5 (inset surfaces)

// Text
colors.text.primary           // #2D2420
colors.text.secondary         // #5C4D45
colors.text.muted             // #8A7A70

// Feedback
colors.feedback.success       // #5A9A9A (teal)
colors.feedback.error         // #C4756A (terracotta)
colors.feedback.warning       // #D4A574

// Interactive
colors.interactive.primary    // #C4756A
colors.interactive.primaryHover // #A65A50
```

### Spacing

```tsx
spacing.xs    // 4px
spacing.sm    // 8px
spacing.md    // 12px
spacing.lg    // 16px
spacing.xl    // 20px
spacing['2xl'] // 24px
spacing['3xl'] // 32px (card padding)
spacing['4xl'] // 40px
spacing['5xl'] // 48px
```

### Typography

```tsx
// Font families
fontFamilies.sans   // "DM Sans", system fallbacks
fontFamilies.serif  // "DM Serif Display", system fallbacks
fontFamilies.mono   // "JetBrains Mono", system fallbacks

// Text styles (pre-composed)
textStyles.display.hero     // 96px serif
textStyles.heading.h1       // 36px serif
textStyles.heading.h4       // 20px sans medium
textStyles.body.medium      // 16px sans
textStyles.label.medium     // 14px sans medium
textStyles.caption.medium   // 12px sans
```

### Shadows (Neumorphic)

```tsx
// Light mode
shadowsLight.sm       // Small raised (buttons)
shadowsLight.md       // Medium raised (cards)
shadowsLight.cut      // Shallow inset
shadowsLight.pressed  // Pressed state
shadowsLight.glow     // Terracotta glow (hover)
shadowsLight.glowTeal // Teal glow

// Dark mode
shadowsDark.sm
shadowsDark.md
// ... same structure
```

### Border Radius

```tsx
radii.sm      // 4px
radii.md      // 6px
radii.lg      // 8px
radii.xl      // 12px
radii['2xl']  // 16px
radii['3xl']  // 24px
radii.full    // 9999px
```

### Motion

```tsx
durations.fast    // 150ms (micro-interactions)
durations.normal  // 200ms (standard)
durations.slow    // 300ms (emphasis)

easings.default   // cubic-bezier(0.22, 1, 0.36, 1)
easings.out       // cubic-bezier(0, 0, 0.2, 1)
easings.bounce    // cubic-bezier(0.34, 1.56, 0.64, 1)
```

---

## Neumorphic Patterns

### Raised Surface
```tsx
style={{
  backgroundColor: colors.surface.raised,
  boxShadow: shadowsLight.md,
  borderRadius: radii['2xl'],
}}
```

### Inset/Cut Surface
```tsx
style={{
  backgroundColor: colors.surface.base,
  boxShadow: shadowsLight.cut,
  borderRadius: radii.xl,
}}
```

### Interactive Button States
```tsx
// Default
boxShadow: shadowsLight.sm

// Hover
boxShadow: shadowsLight.glow

// Pressed
boxShadow: shadowsLight.pressed
```

---

## Dark Mode

Always use the `mode` prop or switch between `colors`/`colorsDark` and `shadowsLight`/`shadowsDark`:

```tsx
const c = mode === 'light' ? colors : colorsDark;
const shadows = mode === 'light' ? shadowsLight : shadowsDark;
const bgColor = mode === 'light' ? '#FDF8F4' : '#1C1917';
```
