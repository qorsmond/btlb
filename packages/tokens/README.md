# @btlb/tokens

W3C Design Tokens (DTCG spec) for the BTLB design system.

## Installation

```bash
npm install @btlb/tokens
```

## Usage

### Import All Tokens

```css
@import '@btlb/tokens';
```

This imports both primitives and semantic tokens in the correct cascade layer order.

### Import Separately

```css
/* Primitives only */
@import '@btlb/tokens/primitives.css';

/* Semantic tokens only (requires primitives) */
@import '@btlb/tokens/semantic.css';
```

## Token Structure

### Primitives

Raw design values organized by category:

- **Colors**: Gray, blue, green, red, amber scales (50-950)
- **Spacing**: 0-64 scale in rem units
- **Typography**: Font families, sizes, weights, line heights
- **Radii**: Border radius values
- **Shadows**: Box shadow tokens
- **Motion**: Durations and easing curves

Example:
```css
var(--color-blue-600)
var(--space-4)
var(--font-size-lg)
var(--radius-md)
var(--shadow-lg)
var(--motion-duration-base)
```

### Semantics

Purpose-driven tokens that reference primitives:

- **Backgrounds**: `--color-bg-surface`, `--color-bg-interactive`, etc.
- **Text**: `--color-text-primary`, `--color-text-secondary`, etc.
- **Borders**: `--color-border-default`, `--color-border-focus`, etc.
- **Status**: Success, error, warning, info variants
- **Spacing**: `--spacing-card-padding`, `--spacing-button-padding-x`, etc.
- **Typography**: `--typography-body-font-size`, `--typography-heading-font-weight`, etc.

Example:
```css
var(--color-bg-surface)
var(--color-text-primary)
var(--spacing-card-padding)
var(--typography-body-font-size)
```

## Customizing Tokens

### Option 1: Override in Your CSS

```css
@import '@btlb/tokens';

/* Override semantic tokens for your theme */
@layer semantic {
  :root {
    --color-bg-interactive: var(--color-green-600);
    --color-text-primary: var(--color-gray-950);
  }
}
```

### Option 2: Import Your Own W3C Tokens

Export design tokens from Penpot, Figma, or create your own following the [W3C DTCG spec](https://tr.designtokens.org/format/):

```css
/* Don't import @btlb/tokens */
/* Import your custom tokens instead */
@import './my-penpot-tokens.css' layer(tokens);

/* Then use BTLB layers that consume those tokens */
@import '@btlb/baseline';
@import '@btlb/layouts';
```

## Source JSON Files

The source W3C Design Token JSON files are included in `tokens/`:

```
tokens/
├── primitives/
│   ├── colors.json
│   ├── spacing.json
│   ├── typography.json
│   ├── radii.json
│   ├── shadows.json
│   └── motion.json
└── semantic/
    ├── colors.json
    ├── spacing.json
    └── typography.json
```

You can import these in your own Style Dictionary build if you want to extend or modify them.

## W3C DTCG Format

All tokens follow the W3C Design Tokens Community Group format:

```json
{
  "color": {
    "$type": "color",
    "blue": {
      "500": {
        "$value": "#3b82f6",
        "$description": "Primary blue"
      }
    }
  }
}
```

Token references use curly brace syntax:

```json
{
  "color": {
    "bg": {
      "interactive": {
        "$value": "{color.blue.600}"
      }
    }
  }
}
```

## License

MIT
