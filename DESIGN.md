---
name: Industrial Precision
colors:
  surface: '#f7f9fc'
  surface-dim: '#d8dadd'
  surface-bright: '#f7f9fc'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f7'
  surface-container: '#eceef1'
  surface-container-high: '#e6e8eb'
  surface-container-highest: '#e0e3e6'
  on-surface: '#191c1e'
  on-surface-variant: '#44474d'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f4'
  outline: '#75777e'
  outline-variant: '#c4c6ce'
  surface-tint: '#4d5f7d'
  primary: '#000615'
  on-primary: '#ffffff'
  primary-container: '#0b1f3a'
  on-primary-container: '#7587a7'
  inverse-primary: '#b5c7ea'
  secondary: '#35618d'
  on-secondary: '#ffffff'
  secondary-container: '#a2cdff'
  on-secondary-container: '#295782'
  tertiary: '#0d0400'
  on-tertiary: '#ffffff'
  tertiary-container: '#321800'
  on-tertiary-container: '#a87e59'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d6e3ff'
  primary-fixed-dim: '#b5c7ea'
  on-primary-fixed: '#071c36'
  on-primary-fixed-variant: '#364764'
  secondary-fixed: '#d0e4ff'
  secondary-fixed-dim: '#9fcafc'
  on-secondary-fixed: '#001d35'
  on-secondary-fixed-variant: '#174974'
  tertiary-fixed: '#ffdcc1'
  tertiary-fixed-dim: '#eebd94'
  on-tertiary-fixed: '#2e1500'
  on-tertiary-fixed-variant: '#613f20'
  background: '#f7f9fc'
  on-background: '#191c1e'
  surface-variant: '#e0e3e6'
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  headline-md:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  max-width: 1280px
---

## Brand & Style

The design system is engineered to project manufacturing excellence and technical authority. It targets a B2B audience—engineers, procurement officers, and industrial partners—who value stability, precision, and efficiency. 

The aesthetic is a blend of **Corporate Modernism** and **Technical Industrialism**. It draws inspiration from the rigid standards of global engineering giants, emphasizing structured layouts, high-quality typography, and a "built-to-last" visual durability. The interface should feel like a high-performance instrument: purposeful, robust, and devoid of unnecessary decoration. 

Key visual principles:
- **Clarity over Creativity:** Prioritize information density and legibility.
- **Structural Integrity:** Use visible or implied grids to align all elements.
- **Dynamic Precision:** Transitions should be snappy (200ms) and linear, mimicking mechanical movement rather than organic fluidity.

## Colors

The palette is anchored in **Industrial Navy (#0B1F3A)**, signifying depth and institutional trust. **Steel Blue (#1E4E79)** provides a professional bridge between the deep navy and the technical whites.

The system follows an **80/20 rule**: 80% of the interface is composed of clean white space, Light Steel Gray backgrounds, and Graphite text. The remaining 20% utilizes Navy and Blue for structural elements. **Industrial Orange (#F28C28)** is reserved strictly for high-priority actions, critical status indicators, and key performance data, ensuring it remains a high-impact "safety" and "action" color within the calm industrial environment.

## Typography

This design system utilizes **Montserrat** for all headings to convey strength and architectural structure. The geometric nature of Montserrat echoes technical drafting and industrial signage.

**Inter** is the workhorse for all body copy and functional labels. Its high x-height and neutral grotesque style ensure maximum legibility in data-heavy contexts.

- **Scale:** Bold typographic hierarchy is essential. Use `display-lg` for hero sections and `label-md` (uppercase) for category headers to create an editorial yet technical feel.
- **Readability:** Maintain a line length of 60-75 characters for body text to ensure professional reading comfort.

## Layout & Spacing

The design system employs a **Fixed Grid** model for desktop and a **Fluid Grid** for mobile. 

- **Desktop (1440px+):** 12-column grid with a 1280px max-width container. Gutters are fixed at 24px.
- **Tablet (768px - 1024px):** 8-column fluid grid with 24px margins.
- **Mobile (< 768px):** 4-column fluid grid with 16px margins.

Spacing follows a strict **8px base unit**. Component internal padding should favor "generous whitespace" to prevent the interface from feeling cramped, which is common in legacy industrial software. Use `xl` (80px) vertical spacing between major landing page sections to reinforce the premium, "room-to-breathe" corporate aesthetic.

## Elevation & Depth

Visual hierarchy is achieved through **Tonal Layering** and **Ghost Outlines** rather than heavy shadows.

- **Level 0 (Base):** Light Steel Gray (#F5F7FA) or Pure White (#FFFFFF).
- **Level 1 (Cards/Containers):** White background with a 1px solid border in a lightened Steel Blue (#D1D9E0). No shadow.
- **Level 2 (Interactive/Floating):** Subtle, low-opacity ambient shadows (Color: Navy, Blur: 12px, Y: 4px, Opacity: 8%) are used only for active dropdowns, modals, or hovered state cards to indicate "mechanical lift."

Avoid the use of gradients. Depth should feel "machined"—flat surfaces meeting at clean, precise angles.

## Shapes

The shape language is defined by **Low-Radius Geometry (Soft)**. A 0.25rem (4px) corner radius is the standard for buttons, input fields, and small cards. This maintains a sharp, professional industrial edge while feeling modern enough for a contemporary SaaS or corporate environment.

- **Icons:** Use 2px stroke-width icons with square caps.
- **Dividers:** Use 1px solid lines in Light Steel Blue to separate content blocks without adding visual bulk.

## Components

### Buttons
- **Primary:** Solid Navy (#0B1F3A) background, White text, 4px radius. 
- **Secondary:** Transparent background, 2px Solid Steel Blue border, Navy text.
- **Accent/CTA:** Solid Industrial Orange (#F28C28), White text. Use only for the "Contact Sales" or "Request Quote" actions.
- **Hover States:** Lighten the background color by 10% and apply a subtle 2px vertical shift to simulate a physical button press.

### Input Fields
- White background with a 1px border (#D1D9E0). On focus, the border changes to Industrial Navy with a 2px stroke. Labels are always `label-md` and placed above the field.

### Cards
- White fill, 1px light border, no shadow. Headers within cards should use a light gray background strip to separate "Metadata" from "Content."

### Progress & Stats
- Data visualizations should use the Navy/Blue palette with Orange highlights for "Anomalies" or "Targets Reached." Use thick 8px stroke weights for charts to mirror industrial gauges.

### Lists
- Use horizontal dividers between list items. Every item should have a consistent leading icon or index number to reinforce the feeling of a technical specification list.