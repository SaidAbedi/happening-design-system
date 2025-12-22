# Typography Exploration

Complementary typography for the Terracotta + Teal earth tone palette.
Targeting millennial + family audiences with warmth and approachability.

---

## Option A: Humanist Warmth ✓ SELECTED

**DM Sans + DM Serif Display**

Modern humanist sans with optional serif for display. Warm, friendly, highly readable.

```
Heading:  DM Serif Display   "Welcome Home"
Body:     DM Sans            "The quick brown fox jumps over the lazy dog"
Code:     JetBrains Mono     "const theme = createWebTheme()"
```

| Style | Font | Weight | Size | Character |
|-------|------|--------|------|-----------|
| Display | DM Serif Display | 400 | 48-72px | Elegant, editorial |
| Headings | DM Sans | 500-700 | 20-36px | Clean, friendly |
| Body | DM Sans | 400 | 14-18px | Highly readable |
| Labels | DM Sans | 500 | 12-14px | Clear UI text |

**Vibe:** Sophisticated yet approachable. Works for lifestyle brands, family apps.
**Pairing:** Serif adds editorial warmth; Sans keeps UI clean.

---

## Option B: Geometric Soft

**Plus Jakarta Sans**

Modern geometric with softened edges. Contemporary, warm, and versatile.

```
Heading:  Plus Jakarta Sans  "Welcome Home"
Body:     Plus Jakarta Sans  "The quick brown fox jumps over the lazy dog"
Code:     Fira Code          "const theme = createWebTheme()"
```

| Style | Font | Weight | Size | Character |
|-------|------|--------|------|-----------|
| Display | Plus Jakarta Sans | 700-800 | 48-72px | Bold, confident |
| Headings | Plus Jakarta Sans | 600-700 | 20-36px | Strong, clear |
| Body | Plus Jakarta Sans | 400-500 | 14-18px | Friendly, readable |
| Labels | Plus Jakarta Sans | 500-600 | 12-14px | Crisp UI |

**Vibe:** Modern startup feel with warmth. Great for apps and products.
**Pairing:** Single family simplifies design decisions.

---

## Option C: Organic Friendly

**Nunito + Nunito Sans**

Rounded terminals create a soft, friendly appearance. Very approachable.

```
Heading:  Nunito             "Welcome Home"
Body:     Nunito Sans        "The quick brown fox jumps over the lazy dog"
Code:     Source Code Pro    "const theme = createWebTheme()"
```

| Style | Font | Weight | Size | Character |
|-------|------|--------|------|-----------|
| Display | Nunito | 700-800 | 48-72px | Playful, warm |
| Headings | Nunito | 600-700 | 20-36px | Friendly, inviting |
| Body | Nunito Sans | 400 | 14-18px | Easy reading |
| Labels | Nunito Sans | 600 | 12-14px | Soft UI |

**Vibe:** Family-friendly, approachable. Great for kids/family products.
**Pairing:** Rounded shapes complement earth tones.

---

## Option D: Editorial Modern

**Fraunces + Inter**

Variable serif display with clean sans body. Sophisticated, premium feel.

```
Heading:  Fraunces           "Welcome Home"
Body:     Inter              "The quick brown fox jumps over the lazy dog"
Code:     JetBrains Mono     "const theme = createWebTheme()"
```

| Style | Font | Weight | Size | Character |
|-------|------|--------|------|-----------|
| Display | Fraunces | 600-900 | 48-72px | Distinctive, artisanal |
| Headings | Fraunces | 500-700 | 24-36px | Editorial warmth |
| Body | Inter | 400 | 14-18px | Perfect readability |
| Labels | Inter | 500 | 12-14px | Clean UI |

**Vibe:** Premium lifestyle brand. Magazine-quality design.
**Pairing:** Fraunces has "wonky" optical features that feel handcrafted.

---

## Option E: Clean Professional

**Outfit + Source Serif 4**

Geometric sans with elegant serif accents. Balanced and versatile.

```
Heading:  Source Serif 4     "Welcome Home"
Body:     Outfit             "The quick brown fox jumps over the lazy dog"
Code:     Source Code Pro    "const theme = createWebTheme()"
```

| Style | Font | Weight | Size | Character |
|-------|------|--------|------|-----------|
| Display | Source Serif 4 | 600-700 | 48-72px | Classic, trustworthy |
| Headings | Outfit | 500-600 | 20-36px | Modern, clean |
| Body | Outfit | 400 | 14-18px | Geometric clarity |
| Labels | Outfit | 500 | 12-14px | Professional |

**Vibe:** Trustworthy and modern. Great for fintech, health, family services.
**Pairing:** Serif headlines add warmth; sans body stays professional.

---

## Type Scale Comparison

All options use the same scale for consistency:

```
Display Large:   72px / 1.1   (-0.02em)
Display Medium:  60px / 1.1   (-0.02em)
Display Small:   48px / 1.15  (-0.01em)

Heading 1:       36px / 1.2   (-0.01em)
Heading 2:       30px / 1.25  (0)
Heading 3:       24px / 1.3   (0)
Heading 4:       20px / 1.35  (0)
Heading 5:       18px / 1.4   (0)
Heading 6:       16px / 1.4   (0.01em)

Body Large:      18px / 1.6   (0)
Body Medium:     16px / 1.5   (0)
Body Small:      14px / 1.5   (0.01em)

Label Large:     16px / 1.2   (0.01em)
Label Medium:    14px / 1.2   (0.01em)
Label Small:     12px / 1.2   (0.02em)

Caption:         12px / 1.4   (0.02em)
Overline:        10px / 1.4   (0.08em)  UPPERCASE
```

---

## Font Loading Strategy

### Variable Fonts (Recommended)
Single file, multiple weights. Better performance.

```css
/* Plus Jakarta Sans Variable */
@font-face {
  font-family: 'Plus Jakarta Sans';
  src: url('/fonts/PlusJakartaSans-Variable.woff2') format('woff2');
  font-weight: 200 800;
  font-display: swap;
}
```

### Static Fonts (Fallback)
Multiple files, specific weights.

```css
/* Weights: 400, 500, 600, 700 */
@font-face {
  font-family: 'Plus Jakarta Sans';
  src: url('/fonts/PlusJakartaSans-Regular.woff2') format('woff2');
  font-weight: 400;
  font-display: swap;
}
```

---

## Native Font Mapping

| Web Font | iOS | Android |
|----------|-----|---------|
| Plus Jakarta Sans | SF Pro | Roboto |
| DM Sans | SF Pro | Roboto |
| Nunito | SF Pro Rounded | Roboto |
| Inter | SF Pro | Roboto |
| Fraunces | New York | Roboto Serif |
| JetBrains Mono | SF Mono | Roboto Mono |

---

## My Recommendation

For **Terracotta + Teal** earth tones with **millennial + family** audience:

### **Option B: Plus Jakarta Sans** (Primary Choice)

Why:
- Single font family = simpler implementation
- Geometric but soft = modern yet approachable
- Excellent weight range (200-800)
- Variable font = great performance
- Works beautifully with earth tones
- Professional enough for parents, friendly enough for kids

### **Option D: Fraunces + Inter** (Premium Alternative)

Why:
- Fraunces has "soft, wonky" optical features that feel artisanal
- Pairs perfectly with terracotta warmth
- More distinctive/memorable brand
- Inter is the most readable sans-serif

---

## Preview with Terracotta Palette

```
┌─────────────────────────────────────────────────────────┐
│  Background: #FDF8F4 (Warm Cream)                       │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │                                                  │   │
│  │  Welcome to                     ← #44403C Stone  │   │
│  │  Happening                      ← #C4704B Terra  │   │
│  │                                                  │   │
│  │  Plan memorable moments with    ← #78716C Muted  │   │
│  │  the people you love.                            │   │
│  │                                                  │   │
│  │  ┌──────────────┐  ┌──────────────┐             │   │
│  │  │  Get Started │  │  Learn More  │             │   │
│  │  │   #C4704B    │  │   #4A7C7C    │             │   │
│  │  └──────────────┘  └──────────────┘             │   │
│  │                                                  │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

## Next Steps

Pick your favorite option (A, B, C, D, or E) and I'll implement:
- Updated font family tokens
- Complete text styles with proper scales
- Web font loading configuration
- Native font mappings
