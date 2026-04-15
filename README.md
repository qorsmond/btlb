# BTLB – Baseline. Tokens. Layouts. Behaviors.

BTLB is a small methodology for structuring CSS so your product stays in sync with your design system, even while both are changing.

It gives you four layers — **Baseline → Tokens → Layouts → Behaviors** — and a set of rules for writing CSS against them. When the design system shifts, you update things in a few clear places and those changes flow through.

---

## The Shift in Thinking

Most frontend styling is built decision-by-decision:

> *I need a flex container here. What was that hex code for the border? I need a margin-bottom on the title. I'll add a class for when it's active.*

BTLB replaces that with a layered approach:

> **Baseline** – Start with the HTML. A `<button>` and `<h2>` already look correct because Baseline styles semantic elements with tokens.
>
> **Tokens** – Apply the "paint." Use semantic tokens like `var(--surface-card)` and `var(--border-subtle)` instead of reaching for hex codes.
>
> **Layouts** – Manage the space. Wrap items in a `.stack` or `.cluster` instead of writing flex/grid rules from scratch.
>
> **Behaviors** – Handle interaction. Bind state to attributes like `data-state="loading"` and `aria-selected="true"` instead of toggling one-off classes.

You stop making small visual decisions everywhere and start assembling meaningful parts.

---

## Quick Start

### Install and Import

```bash
npm install @btlb/css
```

```css
@import '@btlb/css';
```

You can also import per-layer (`@btlb/baseline`, `@btlb/tokens`, `@btlb/layouts`, `@btlb/behaviors`) for more control.

### Step 1: Baseline — Semantic HTML That Already Works

No classes, no attributes. Just HTML and Baseline doing its job.

```html
<article>
  <h2>Product Name</h2>
  <p>Premium quality with free shipping.</p>
  <button>Buy now</button>
</article>
```

Baseline styles typography, colors, and spacing using tokens. The button looks like a primary action without you adding anything. If your semantic tokens change, this markup updates automatically.

### Step 2: Tokens — Make the Values Explicit

Your token file separates **primitives** (raw scales) from **semantics** (what values mean in the UI):

```css
:root {
  /* Primitives — raw values */
  --color-blue-600: #2563eb;
  --space-4: 1rem;

  /* Semantics — purpose */
  --color-bg-interactive: var(--color-blue-600);
  --color-text-primary: var(--color-gray-900);
  --button-padding-x: var(--space-4);
}
```

Baseline and components consume only semantics:

```css
@layer baseline {
  button {
    padding-inline: var(--button-padding-x);
    background: var(--color-bg-interactive);
    color: var(--color-text-on-interactive);
  }
}
```

The rule is strict: **components never reference primitives or hardcoded values.** If the brand changes, you update the semantic mapping once.

### Step 3: Layouts — A Pattern, Not a Random Flexbox

Instead of repeating `display: flex; flex-direction: column; gap: …` everywhere, you name the pattern:

```html
<article class="stack" data-gap="4">
  <h2>Product Name</h2>
  <p>Premium quality with free shipping.</p>
  <button>Buy now</button>
</article>
```

The CSS behind it:

```css
@layer layouts {
  .stack {
    display: flex;
    flex-direction: column;
    gap: var(--stack-gap, var(--space-4));
  }

  .stack[data-gap="2"] { --stack-gap: var(--space-2); }
  .stack[data-gap="4"] { --stack-gap: var(--space-4); }
  .stack[data-gap="6"] { --stack-gap: var(--space-6); }
}
```

Data attributes configure the pattern. The class declares **intent** ("this is a stack"), the attribute declares **configuration** ("with this gap"). Reading the markup tells you *why* elements are grouped, not just *how* they are styled.

### Step 4: Behaviors — State via Attributes

State is expressed through attributes that Behaviors CSS reads:

```html
<article class="stack" data-gap="4" data-state="idle">
  <h2>Product Name</h2>
  <p>Premium quality with free shipping.</p>
  <button aria-busy="true" data-state="loading">Buy now</button>
</article>
```

```css
@layer behaviors {
  button[data-state="loading"] {
    color: transparent;
    pointer-events: none;
  }

  button[data-state="loading"]::after {
    content: '';
    inline-size: 1em;
    block-size: 1em;
    border-radius: 999px;
    border: var(--border-width-sm) solid currentColor;
    border-inline-end-color: transparent;
    animation: spin var(--motion-duration-spin) linear infinite;
  }

  @keyframes spin { to { rotate: 1turn; } }
}
```

Your JavaScript (any framework) only toggles attributes:

```js
button.dataset.state = 'loading';
button.setAttribute('aria-busy', 'true');
```

No magic class names, no inline styles. The same attribute that CSS reads is the same attribute a screen reader uses.

**That's the full model.** Baseline made the HTML look like UI. Tokens control all values. Layout patterns describe space. Behaviors respond to attributes.

---

## The Four Layers in Detail

### Baseline

Semantic HTML, styled with tokens. Headings, paragraphs, buttons, inputs, and links look like your brand with zero classes. When design tightens typography or adjusts surface colors, you update Baseline once.

### Tokens

The single source of truth for visual decisions. Split into two tiers:

- **Primitives** — raw scales: `--color-blue-600`, `--space-4`, `--font-size-lg`.
- **Semantics** — roles: `--color-bg-surface`, `--card-padding`, `--color-text-primary`.

Components only use semantics. If brand colors, elevation, or density change, you update semantic tokens. You can support multiple themes or brands without rewriting components.

**Bridge Tokens** handle cases where a primitive needs different values at different breakpoints (e.g., desktop vs. mobile font sizes). Instead of forcing components to pick between `--font-size-desktop-h1` and `--font-size-mobile-h1`, a bridge token resolves it once with a mobile-first default and a media query override:

```css
:root {
  --font-size-h1: var(--font-size-mobile-h1);
}

@media (min-width: 900px) {
  :root {
    --font-size-h1: var(--font-size-desktop-h1);
  }
}
```

Downstream tokens and components reference `--font-size-h1` and never think about breakpoints.

### Layouts

A small set of composable patterns:

| Pattern | Purpose | Use for |
|---|---|---|
| `.stack` | Vertical rhythm between siblings | Forms, cards, sections, dialogs |
| `.cluster` | Horizontal group with wrapping | Button rows, tags, toolbars |
| `.grid` | Responsive cards with min width | Product grids, dashboards |
| `.sidebar` | Fixed side + flexible main | App shells, docs, settings |
| `.center` | Constrain width for readability | Articles, marketing pages |

Others (`.frame`, `.reel`, `.switcher`) follow the same convention: **class = intent, data attributes = configuration, tokens = values.**

```html
<div class="grid" data-min="280" data-gap="5">
  <article>Card 1</article>
  <article>Card 2</article>
  <article>Card 3</article>
</div>
```

When the design system adjusts spacing or layout rules, you update the pattern once — not every screen.

### Behaviors

How components respond to state and interaction:

- **State**: `data-state="idle | loading | success | error | active | disabled"`
- **Motion**: `data-motion="fade"` with tokenized durations and easings.
- **Accessibility**: `aria-busy`, `aria-pressed`, `aria-expanded` in tandem with `data-state`.

```css
[data-motion="fade"] {
  transition: opacity var(--motion-duration-default) var(--motion-easing-standard);
}

@media (prefers-reduced-motion: reduce) {
  [data-motion] {
    transition-duration: 0ms;
    animation-duration: 0ms;
  }
}
```

Interaction rules are centralized. When you refine focus rings, loading animations, or error highlighting, you change them in one place. The state contract works with any framework.

---

## Modern CSS Under the Hood

BTLB leans on a few modern CSS features in service of the four-layer model:

- **Cascade layers (`@layer`)** keep override order predictable. Baseline, Tokens, Layouts, and Behaviors each live in their own layer so you know what wins when things conflict.
- **Custom properties (`var()`)** are how tokens live in code. You can change values at theme, page, or component scope without changing selectors.
- **Container queries and logical properties** help layouts adapt to the space they're in, not just the viewport.

---

## Do's and Don'ts

### Do

- Start with semantic HTML and let Baseline do as much as possible.
- Use semantic tokens in components — never raw hex, never primitives.
- Reach for layout patterns before writing custom flex/grid.
- Express state with `data-state`, `data-behavior`, and `aria-*` attributes.
- Treat components as assemblies of the four layers, not a separate styling world.

### Don't

- Hardcode visual values (colors, spacing, radii, shadows, motion) in components.
- Reference primitives like `--color-blue-600` directly from component CSS.
- Invent one-off flex/grid layouts when a pattern would work.
- Hide state in class names that nobody can decode (`.is-active-v2`, `.card--special`).

---

## Components Are Consumers, Not a Fifth Layer

A component is just a predictable assembly of the four layers. A card, for example, is:

- **Baseline** typography and button defaults.
- **Semantic tokens** for its surface, border, padding, and gap.
- **Layout patterns** like `.stack` and `.cluster` for internal structure.
- **Behaviors** for hover, focus, active, loading, and error states.

If card padding changes in the design system, you remap `--card-padding` in tokens. If active cards should elevate more, you update the behavior rule. If stacks get new spacing, you update the pattern. The component CSS itself rarely changes.

---

## Why Strict Layers Help with AI Code Generation

If you use AI tools to generate frontend code, BTLB gives the model a constrained vocabulary: named tokens instead of arbitrary values, named patterns instead of ad-hoc flex/grid, and attributes instead of invented class names. The output becomes predictable and consistent with your system rather than a grab-bag of styles.

---

## Adopting BTLB Incrementally

BTLB is not a rewrite. You can adopt it layer by layer:

1. **Start with Tokens.** Separate your existing CSS variables into primitives and semantics. Stop hardcoding values in components.
2. **Add Baseline.** Style semantic HTML elements with your tokens so bare markup looks right.
3. **Introduce Layout patterns.** When you see the same flex/grid recipe repeated, extract it into a named pattern.
4. **Move to attribute-driven Behaviors.** Replace state class names with `data-state` and `aria-*` attributes as you touch components.

Each step improves things on its own. You don't need all four layers to start getting value.

---

## Origin

BTLB is curated and maintained by **Quintin Orsmond**. It grew out of real product work where design systems and products had to evolve together without drifting apart — fewer magic values, more explicit contracts, cleaner markup, and modern CSS features organized into a mental model small enough to hold in your head.
