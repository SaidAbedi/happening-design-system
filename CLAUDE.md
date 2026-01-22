# Design System - @saidabedi/design-system

A neumorphic design system for React Native with Mediterranean warmth (Terracotta + Teal palette).

## Installation

```bash
npm install @saidabedi/design-system
```

## Usage (React Native)

```tsx
import { colors, colorsDark, shadowsLight, shadowsDark, spacing, radii } from '@saidabedi/design-system/tokens'
import { Ionicons } from '@expo/vector-icons'

// Theme-aware colors
const c = isDark ? colorsDark : colors
const shadows = isDark ? shadowsDark : shadowsLight
```

---

## Common Patterns

### Selected vs Unselected States

```tsx
// Selected: cut surface + filled icon
<NeumorphicView variant="cut">
  <Ionicons name="calendar" size={24} color={c.brand.primary} />
</NeumorphicView>

// Unselected: raised surface + outline icon
<NeumorphicView variant="raised">
  <Ionicons name="calendar-outline" size={24} color={c.icon.secondary} />
</NeumorphicView>
```

### Event Card Example

```tsx
<NeumorphicView
  variant={isSelected ? "cut" : "raised"}
  style={{
    backgroundColor: isSelected ? c.surface.cut : c.surface.raised,
    padding: spacing['2xl'],
    borderRadius: radii['2xl'],
  }}
  onPress={() => selectEvent(event.id)}
>
  <Ionicons
    name={isSelected ? "calendar" : "calendar-outline"}
    size={24}
    color={isSelected ? c.brand.primary : c.icon.secondary}
  />
  <Text style={{ color: c.text.primary }}>{event.title}</Text>
</NeumorphicView>
```

---

## Design Tokens

### Colors

**Light mode:** `colors` | **Dark mode:** `colorsDark`

```tsx
// Brand
c.brand.primary          // #C4756A (terracotta)
c.brand.secondary        // #5A9A9A (teal)

// Surfaces (for neumorphic cards)
c.surface.raised         // #FFFFFF (light) / #292524 (dark) - floating
c.surface.base           // #FDF8F4 (light) / #1C1917 (dark) - default
c.surface.cut            // #F5EDE5 (light) / #1A1816 (dark) - pressed/inset

// Backgrounds
c.background.primary     // #FDF8F4 (light) / #1C1917 (dark)

// Text
c.text.primary           // #2D2420 (light) / #FAF5F0 (dark)
c.text.secondary         // #5C4D45 (light) / #C4B8B0 (dark)
c.text.muted             // #8A7A70 (light) / #9A8A80 (dark)

// Icons
c.icon.primary           // Main icon color
c.icon.secondary         // Muted icon color
c.icon.brand             // Terracotta icon

// Feedback
c.feedback.success       // #5A9A9A (teal)
c.feedback.error         // #C4756A (terracotta)
c.feedback.warning       // #D4A574 (amber)

// Interactive
c.interactive.primary       // #C4756A
c.interactive.primaryHover  // #A65A50
c.interactive.primaryActive // #8A4A42
```

### Spacing

```tsx
spacing.xs     // 4
spacing.sm     // 8
spacing.md     // 12
spacing.lg     // 16
spacing.xl     // 20
spacing['2xl'] // 24
spacing['3xl'] // 32
spacing['4xl'] // 40
spacing['5xl'] // 48
```

### Border Radius

```tsx
radii.sm      // 4
radii.md      // 6
radii.lg      // 8
radii.xl      // 12
radii['2xl']  // 16
radii['3xl']  // 24
radii.full    // 9999
```

### Typography

```tsx
// Font families (load these fonts in your app)
fontFamilies.sans   // "DM Sans"
fontFamilies.serif  // "DM Serif Display"
fontFamilies.mono   // "JetBrains Mono"

// Pre-composed text styles
textStyles.display.hero     // { fontSize: 96, fontFamily: serif }
textStyles.heading.h1       // { fontSize: 36, fontFamily: serif }
textStyles.heading.h4       // { fontSize: 20, fontFamily: sans, fontWeight: 500 }
textStyles.body.medium      // { fontSize: 16, fontFamily: sans }
textStyles.label.medium     // { fontSize: 14, fontFamily: sans, fontWeight: 500 }
textStyles.caption.medium   // { fontSize: 12, fontFamily: sans }
```

### Shadows (Neumorphic)

For React Native, use these with `react-native-shadow-2` or similar:

```tsx
// Light mode
shadowsLight.sm       // Small raised (buttons)
shadowsLight.md       // Medium raised (cards)
shadowsLight.cut      // Inset shadow (selected/pressed)
shadowsLight.pressed  // Pressed state
shadowsLight.glow     // Terracotta glow

// Dark mode - same structure
shadowsDark.sm
shadowsDark.md
shadowsDark.cut
shadowsDark.pressed
shadowsDark.glow
```

### Motion

```tsx
durations.fast    // 150 (micro-interactions)
durations.normal  // 200 (standard)
durations.slow    // 300 (emphasis)

easings.default   // Easing.bezier(0.22, 1, 0.36, 1)
easings.out       // Easing.bezier(0, 0, 0.2, 1)
easings.bounce    // Easing.bezier(0.34, 1.56, 0.64, 1)
```

---

## Neumorphic View Pattern

Your `NeumorphicView` component should support these variants:

| Variant | Background | Shadow | Use Case |
|---------|------------|--------|----------|
| `raised` | `c.surface.raised` | `shadows.sm` or `shadows.md` | Default cards, unselected items |
| `cut` | `c.surface.cut` | `shadows.cut` (inset) | Selected items, pressed states |
| `flat` | `c.surface.base` | none or subtle border | Neutral containers |

---

## Dark Mode

Always switch between light/dark tokens based on theme:

```tsx
const { colorScheme } = useColorScheme() // or your theme hook
const isDark = colorScheme === 'dark'

const c = isDark ? colorsDark : colors
const shadows = isDark ? shadowsDark : shadowsLight
const bgColor = isDark ? '#1C1917' : '#FDF8F4'
```

---

## Icon Mapping (Ionicons)

| Design System | Ionicons (outline) | Ionicons (filled) |
|---------------|-------------------|-------------------|
| calendar | calendar-outline | calendar |
| search | search-outline | search |
| heart | heart-outline | heart |
| close-circle | close-circle-outline | close-circle |
| sunny | sunny-outline | sunny |
| moon | moon-outline | moon |
| phone-portrait | phone-portrait-outline | phone-portrait |
| options | options-outline | options |
