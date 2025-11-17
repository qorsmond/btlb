# BTLB – Baseline. Tokens. Layouts. Behaviors.

BTLB is a way of structuring your CSS so that your product stays in sync with your design system, even while both are changing. It gives you a small set of rules for how to write CSS, name tokens, and structure layouts so updates stay manageable.

Instead of “some CSS plus some components”, BTLB gives you a small mental model:

> **Baseline → Tokens → Layouts → Behaviors**

The focus is not on clever themes. The focus is that when the design system shifts, or when a product grows, you can update things in a few clear places and know those changes will flow through.

---

## Why BTLB Exists

Most frontends slowly drift out of sync with their design system:

* Designers evolve the system, but the product is stuck on an older version.
* Teams hardcode values and layouts, so changes “in the system” never make it to the UI.
* Implementing an existing design system feels like re‑implementing it in CSS all over again.

BTLB tries to fix that by:

* Putting all visual decisions behind tokens (so changes happen in one place).
* Putting common layouts behind a small set of patterns instead of ad‑hoc flex/grid.
* Expressing interaction with attributes and state contracts instead of one‑off class hacks.
* Making sure the same ideas work whether your design system is still forming or already documented.

You can use BTLB when:

* You are building a product and design system side by side, and you expect both to evolve.
* You already have a design system (Figma library, tokens, components) and you want the implementation to reflect it faithfully and stay maintainable over time.

---

## The Mental Model

BTLB is deliberately small. You can hold it in your head:

* **Baseline** – semantic HTML defaults.
* **Tokens** – design values and meaning.
* **Layouts** – spatial patterns.
* **Behaviors** – state and interaction rules.

Everything in your product – from low‑level styles to full pages and flows – should be understandable in terms of those four layers. Components are just one packaged way of reusing them; page layouts, shells and other structures also compose the same layers.

---

## Two Common Scenarios

### Product and Design System Evolving Together

You’re moving fast, the design system is not fully baked, and components and tokens are still in flux.

**How BTLB helps:**

* You start with Baseline + Tokens, even if the token set is small.
* Each time a new pattern stabilises (like card padding or page gutters), you formalise it as semantic tokens and/or a layout pattern.
* When design tweaks something (card density, page spacing, surface color), the change happens in tokens or a layout pattern, not across 20 components.

BTLB gives you a controlled way to go from “rough styles” to “stable system” without throwing away implementation as you refine the design system.

### Design System Already Exists, You Need to Implement It

You already have a design system with:

* Documented principles.
* A set of tokens and scales.
* Component specs in Figma or similar.

**How BTLB helps:**

* You map the existing design tokens into primitives and semantic tokens once.
* You mirror the documented patterns into BTLB layouts (`.stack`, `.cluster`, `.grid`, `.sidebar`, etc.).
* You encode the documented component states as behaviors via `data-state` and `aria-*`.

From there, implementation is about wiring the product to these contracts:

* When the design team updates a semantic token, your components inherit it.
* When they refine spacing rules, you adjust the layout pattern, not each instance.
* When they adjust state handling, you tweak the behavior CSS and state attributes, not each button or card.

This is how BTLB supports maintainability: changes stay close to the design system decisions, not spread through the codebase.

---

## The Four Layers, in Practice

This section focuses on how you actually use the layers when shipping features.

### Baseline

**What it is**  
Baseline is “semantic HTML, styled with tokens”. That means things like `body`, headings, paragraphs, buttons, inputs, lists and links already look like your brand with zero classes.

**Example mindset:**

* If you write `<button>Save</button>`, it should already feel like your primary action button.
* If you change typography or surface tokens, those default buttons and headings update automatically.

**Why it matters for maintainability:**

* You have less markup to maintain (fewer classes everywhere).
* When design tightens typography and base spacing, you update Baseline once and the product aligns.

### Tokens

**What they are**  
Tokens are the single source of truth for visual decisions – colors, spacing, type, radii, shadows, motion. They are split into:

* **Primitives**: raw scales (`--color-blue-600`, `--space-4`, `--font-size-lg`, …).
* **Semantics**: “what it means in the UI” (`--color-bg-surface`, `--card-padding`, `--color-text-primary`, …).

Components only ever use semantics (not primitives, not hardcoded values).

**Why it matters for maintainability:**

* If brand colors, elevation or density change, you mainly touch semantic tokens.
* You can support multiple themes or brands without rewriting components.
* When designers rename or regroup tokens, you have a clear mapping instead of scattered values.

### Layouts

**What they are**  
Layouts are a small set of composable patterns that describe how things sit next to each other:

* `.stack` – vertical rhythm.
* `.cluster` – inline group with wrapping.
* `.grid` – responsive cards.
* `.sidebar` – fixed sidebar + flexible content.
* `.center` – max‑width and centering.
* plus others like `.frame`, `.reel`, `.switcher`, where needed.

Each pattern is configured with attributes like `data-gap`, `data-min`, `data-sidebar-width` that map back to your spacing and sizing tokens.

**Why it matters for maintainability:**

* Instead of every component bringing its own flex/grid rules, you reuse a few patterns.
* When the design system adjusts rules for spacing or layout, you update the pattern, not every screen.
* Engineers reading the markup can see “this is a stack of things with gap 4”, instead of decoding a set of utilities.

### Behaviors

**What they are**  
Behaviors describe how components respond to state and interaction:

* `data-state="idle | loading | success | error | active | disabled"`.
* `data-behavior` for things like `accordion`, `favorite`, etc.
* `data-motion` for shared motion patterns.
* `aria-*` for accessibility.

CSS in the Behaviors layer reads those attributes and applies tokens for color, shadows and motion.

**Why it matters for maintainability:**

* Your interaction rules are centralised instead of hand‑written in each component.
* When you refine focus rings, loading animations or error highlighting, you change them in one place.
* The state contract is clear enough to be reused by any framework (Angular, React, vanilla), which makes refactors less risky.

---

## Modern CSS Under the Hood

BTLB leans on modern CSS features, but always in service of the four-layer mental model:

- **Cascade layers (`@layer`)** keep override rules predictable. Baseline, Tokens, Layouts and Behaviors each live in their own layer, so you know what wins when things conflict – and your product or app-level CSS can still sit on top when it needs to.
- **Custom properties (`var(--token-name)`)** are how tokens live in code. Primitives and semantic tokens are just CSS variables, which means you can change values at theme, page or component scope without changing selectors.
- **Container queries and logical properties** help layouts adapt to the space they’re in, not just the viewport. A card grid can change at different widths inside a sidebar, and it will still respect your spacing and sizing tokens.

You don’t have to think about these features all the time, but they are what make the BTLB rules practical: the mental model stays small while the CSS stays flexible and modern.

---

## Quick Start – Using the Layers in Order

This Quick Start keeps the mental model clear. We start with **pure Baseline** and only introduce layout and behavior when needed.

### Install and Import

```bash
npm install @btlb/css
```

```css
/* Start simple: pull in everything */
@import 'btlb';
```

You can later import per‑layer (`@btlb/baseline`, `@btlb/tokens`, `@btlb/layouts`, `@btlb/behaviors`) if you want more control.

### Baseline Only: Semantic HTML That Already Works

No classes, no attributes. Just semantic HTML and Baseline doing its job.

```html
<article>
  <h2>Product Name</h2>
  <p>Premium quality with free shipping.</p>
  <button>Buy now</button>
</article>
```

What’s happening:

* Baseline sets typography, colors and spacing using tokens.
* The button looks like a primary action without you adding any classes.
* If you change your semantic tokens for text and surface/background, this article updates automatically.

### Make the Tokens Explicit

In your token file you define **primitives** and **semantics**:

```css
:root {
  /* primitives */
  --color-blue-600: #2563eb;
  --space-4: 1rem;

  /* semantics used by components + baseline */
  --color-bg-interactive: var(--color-blue-600);
  --color-text-primary: var(--color-gray-900);
  --button-padding-x: var(--space-4);
}
```

Baseline uses only these semantics:

```css
@layer baseline {
  button {
    padding-inline: var(--button-padding-x);
    background: var(--color-bg-interactive);
    color: var(--color-text-on-interactive);
  }
}
```

From here on, everything you do should reuse these semantics instead of inventing new absolute values.

### Add Layout: Introduce a Pattern, Not a Random Flexbox

Now we introduce a layout pattern. Same markup, plus one class:

```html
<article class="stack" data-gap="4">
  <h2>Product Name</h2>
  <p>Premium quality with free shipping.</p>
  <button>Buy now</button>
</article>
```

The pattern:

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

### Add Behavior: Express State via Attributes

We keep the same markup and only add state attributes that Behaviors respond to.

```html
<article class="stack" data-gap="4" data-state="idle">
  <h2>Product Name</h2>
  <p>Premium quality with free shipping.</p>
  <button aria-busy="true" data-state="loading">
    Buy now
  </button>
</article>
```

Behavior CSS:

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

  @keyframes spin {
    to { rotate: 1turn; }
  }
}
```

Your JavaScript (any framework) only toggles **attributes**, not classes or inline styles:

```js
button.dataset.state = 'loading';
button.setAttribute('aria-busy', 'true');
```

In this small example you can already see the full mental model:

* Baseline made the HTML look like UI.
* Tokens control all values.
* Layout patterns describe space.
* Behaviors respond to attributes.

---

## Global Do’s and Don’ts

These are the guardrails for *everything* in BTLB.

### Do

* **Do** start with semantic HTML and let Baseline do as much as possible.
* **Do** use semantic tokens in components (not raw hex, not primitive tokens).
* **Do** reach for layout patterns (`.stack`, `.cluster`, `.grid`, `.sidebar`, `.center`, etc.) before writing custom flex/grid.
* **Do** express state and interaction with attributes like `data-state`, `data-behavior` and `aria-*`.
* **Do** treat components as specs built from the four layers, not as a separate world.

### Don’t

* **Don’t** hardcode visual values (colors, spacing, radii, shadows, motion) in components.
* **Don’t** reference primitives (like `--color-blue-600`) directly from components; map them to semantic tokens first.
* **Don’t** invent one‑off flex/grid layouts when a pattern would work.
* **Don’t** hide state in “magic” class names that nobody can decode.

---

## Components on Top of BTLB

Components are **consumers** of the four layers, not a separate styling system.

A BTLB component spec typically captures:

* What problem it solves (purpose).
* What parts it has (anatomy).
* What states it supports and how they are represented (`data-state`, `aria-*`).
* Which semantic tokens it consumes.
* Which layout patterns it uses internally (`.stack`, `.cluster`, `.grid`, …).

### Example: Card

**Purpose**  
Group related information and actions into a single surface.

**Anatomy**  
Header (optional), body, footer/actions, status label.

**States**  
`idle`, `loading`, `active`, `error`.

Things that should be true for maintainability:

* If the card padding changes in the design system, you remap `--card-padding` to a different primitive value in tokens (without touching the component CSS).
* If “active” cards should elevate more, you update the card’s behavior rule.
* If the design system changes how stacks and clusters behave, you update those patterns and the cards follow.

In code, a card is not a special case; it is just a predictable use of:

* Baseline typography and buttons.
* Semantic tokens for surface, border, padding, gap.
* Layout patterns like `.stack` and `.cluster`.
* Behaviors for hover, focus, active, loading, error.

---

## Tokens and Design Tools

BTLB assumes you’ll keep tokens in sync across design tools (Figma, Penpot, etc.) and code.

A practical mapping:

* **Primitives**: raw color scales, spacing scale, type scale, radii, shadows, motion.
* **Semantics**: roles like `surface/raised`, `text/primary`, `border/focus`, `action/primary/background`, etc.
* **Code**: semantic tokens as CSS custom properties that mirror (or closely follow) the naming in your design tools.

### Do’s and Don’ts for Tokens

* **Do** keep primitives small and generic (`blue/600`, `space/4`).
* **Do** name semantics by role (`surface/card`, `text/muted`, `badge/success/bg`).
* **Don’t** bake usage into primitives (no `btn-primary-bg` as a primitive token).
* **Don’t** let components reference primitives directly.

This ensures that when token values or structure change in the design system, you have a clear place to make those changes in code, and the product follows.

---

## Layout Patterns (Short Reference)

This is just a quick reference for which pattern to use when.

### Stack

> Vertical rhythm between siblings.

```html
<div class="stack" data-gap="4">
  <h2>Title</h2>
  <p>Body text</p>
  <button>Action</button>
</div>
```

Use for: forms, cards, sections, dialogs.

### Cluster

> Horizontal grouping with wrapping and gap.

```html
<div class="cluster" data-gap="3">
  <button>Primary</button>
  <button>Secondary</button>
</div>
```

Use for: button rows, tags, small toolbars.

### Grid

> Responsive cards with minimum width.

```html
<div class="grid" data-min="280" data-gap="5">
  <article class="card">Card 1</article>
  <article class="card">Card 2</article>
  <article class="card">Card 3</article>
</div>
```

Use for: product grids, dashboards.

### Sidebar

> Fixed sidebar + flexible main.

```html
<div class="sidebar" data-sidebar-width="16rem" data-gap="6">
  <aside>Nav</aside>
  <main>Content</main>
</div>
```

Use for: app shells, docs, settings layouts.

### Center

> Constrain width, keep things readable.

```html
<div class="center" data-max="70ch">
  <article>Long-form content</article>
</div>
```

Use for: docs, articles, marketing pages.

The rest (`.frame`, `.reel`, `.switcher`, etc.) follow the same pattern:  
**class = intent, data-attributes = configuration, tokens = values.**

---

## Behaviors (Short Reference)

### State

Use `data-state` as the common hook:

* Typical states: `idle`, `loading`, `success`, `error`, `active`.
* Behaviors read `data-state` and apply tokens for color, shadows, motion.

```html
<button class="btn" data-state="loading" aria-busy="true">
  Save
</button>
```

```css
@layer behaviors {
  .btn[data-state="loading"] {
    color: transparent;
    pointer-events: none;
  }

  /* spinner etc. */
}
```

### Motion

Use tokenised durations and easings so motion is themeable and accessible:

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

### Accessibility Helpers

* `.sr-only` for screen-reader-only text.
* `role="status"` + `aria-live="polite"` for live status text.
* `aria-busy`, `aria-pressed`, `aria-expanded` in tandem with `data-state`.

---

## How BTLB Helps Over Time

The key maintainability story for BTLB is:

* Design system evolves → tokens, patterns and behavior contracts evolve.
* Implementation stays wired to those contracts instead of to incidental values.
* You can change the design system without a massive CSS refactor and keep the product aligned.

Whether you are:

* Slowly shaping a design system while actively shipping product, or
* Implementing an existing design system that is still going to evolve,

BTLB gives you a concrete way to keep the two in step.

If you remember nothing else:

> **BTLB is a four-layer mental model – Baseline, Tokens, Layouts, Behaviors – that keeps your CSS semantic, token-driven, pattern-based and attribute-driven so that changes in the design system can be applied in a few focused places and reliably flow through your product.**

---

## Origin Story

BTLB is curated and maintained by **Quintin Orsmond**.

It grew out of real product work where:

* Design systems and products had to evolve together without drifting apart.
* We wanted fewer magic values and more explicit contracts.
* We wanted cleaner markup that is easier to read and reason about.
* Modern CSS features (cascade layers, custom properties, container queries) were enough once they were organised into a small mental model.

If your team is facing similar problems, BTLB is a small set of rules you can adopt incrementally without rewriting your entire styling approach.
