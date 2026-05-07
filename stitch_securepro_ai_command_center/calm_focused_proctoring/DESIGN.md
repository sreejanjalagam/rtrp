---
name: Calm & Focused Proctoring
colors:
  surface: '#fbf8fe'
  surface-dim: '#dcd9de'
  surface-bright: '#fbf8fe'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f2f8'
  surface-container: '#f0edf2'
  surface-container-high: '#eae7ed'
  surface-container-highest: '#e4e1e7'
  on-surface: '#1b1b1f'
  on-surface-variant: '#46464f'
  inverse-surface: '#303034'
  inverse-on-surface: '#f3eff5'
  outline: '#777681'
  outline-variant: '#c7c5d1'
  surface-tint: '#545a94'
  primary: '#161c54'
  on-primary: '#ffffff'
  primary-container: '#2d336b'
  on-primary-container: '#979ddd'
  inverse-primary: '#bdc2ff'
  secondary: '#5b5d75'
  on-secondary: '#ffffff'
  secondary-container: '#e0e0fe'
  on-secondary-container: '#61627c'
  tertiary: '#351d00'
  on-tertiary: '#ffffff'
  tertiary-container: '#533000'
  on-tertiary-container: '#cb975f'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dfe0ff'
  primary-fixed-dim: '#bdc2ff'
  on-primary-fixed: '#0e144d'
  on-primary-fixed-variant: '#3c427b'
  secondary-fixed: '#e0e0fe'
  secondary-fixed-dim: '#c3c4e1'
  on-secondary-fixed: '#181a2f'
  on-secondary-fixed-variant: '#43455d'
  tertiary-fixed: '#ffddbb'
  tertiary-fixed-dim: '#f4bc80'
  on-tertiary-fixed: '#2b1700'
  on-tertiary-fixed-variant: '#643e0d'
  background: '#fbf8fe'
  on-background: '#1b1b1f'
  surface-variant: '#e4e1e7'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.02em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-padding: 2rem
  gutter: 1.5rem
  section-gap: 3rem
---

## Brand & Style

The design system is engineered to transform the high-stakes environment of online examination into a space of calm, professional focus. It deliberately moves away from the "surveillance" aesthetic—characterized by dark modes, neon accents, and aggressive grids—and replaces it with a supportive, institutional atmosphere.

The style is **Corporate Modern** with a **Minimalist** focus. It prioritizes clarity and cognitive ease through a balanced use of white space and soft tonal shifts. Every interface element is designed to feel authoritative yet non-threatening, ensuring the student's attention remains on the assessment rather than the monitoring software. Sparse, high-blur glassmorphism is reserved for critical focus overlays to maintain a sense of depth without causing visual clutter.

## Colors

This design system utilizes a light-mode-first approach to maximize legibility and minimize the "eye strain" often associated with dark, high-contrast security interfaces. 

- **Primary:** The Deep Indigo (#2D336B) serves as the anchor of the system, used for navigation headers and primary actions to project trust and authority.
- **Surfaces:** A hierarchy of off-whites and soft grays creates a natural "paper-like" layering effect, distinguishing the examination content from the proctoring tools.
- **Accents:** Feedback colors are muted to prevent panic. Mint Green indicates a healthy connection, Soft Amber suggests a warning or need for attention without being alarming, and Muted Blue provides contextual assistance.
- **Text:** High-contrast Dark Navy is used for all instructional and exam content to ensure maximum readability and accessibility.

## Typography

The design system exclusively uses **Inter** for its utilitarian and highly legible properties. By avoiding monospaced or "technical" fonts, we keep the experience grounded and approachable.

- **Legibility:** All body text utilizes a generous 1.6 line height to prevent line-tracking fatigue during long exams.
- **Hierarchy:** Headlines are weighted at 500 or 600 to provide clear structural markers without becoming visually "heavy." 
- **Instructional Text:** All labels and microcopy use a slightly increased letter spacing to ensure clarity even at smaller scales.

## Layout & Spacing

The layout philosophy follows a **Fixed Grid** model to ensure the test content remains centered and predictable. A 12-column grid is used for dashboard views, while exam-taking views are restricted to a single, wide column (max-width 800px) to eliminate peripheral distractions.

- **Margins:** Ample whitespace (2rem minimum) is maintained around all content containers to reduce cognitive load.
- **Consistency:** All spacing is derived from a base-8px unit, ensuring a rhythmic and balanced distribution of elements.
- **Layout Model:** Use sidebars for proctoring metadata (timer, status) and a central focused area for the examination questions.

## Elevation & Depth

Hierarchy in the design system is communicated through **Tonal Layers** and **Ambient Shadows** rather than stark borders.

- **Tiers:** The background uses the main surface color (#F8FAFC). Content cards sit on top using a pure white background with a very soft, diffused shadow (0px 4px 20px rgba(15, 23, 42, 0.05)).
- **Glassmorphism:** Reserved specifically for focus-mode overlays or modal backgrounds. These use a high blur (20px) and low opacity (50-70%) to keep the underlying interface visible but non-distracting.
- **Borders:** Subtle 1px borders in the soft light gray (#E2E8F0) are used to define inputs and secondary containers, replacing "glowing" or high-contrast divider lines.

## Shapes

The design system adopts a **Rounded** shape language to soften the interface and make it feel more modern and inviting.

- **Standard Elements:** Buttons, input fields, and containers utilize a 0.5rem (8px) radius.
- **Large Containers:** Cards and major layout blocks utilize a 1rem (16px) radius for a more distinct, sophisticated feel.
- **No Sharp Edges:** Sharp corners are avoided to prevent a "rigid" or "clinical" atmosphere, favoring a smooth, continuous visual flow.

## Components

Consistency across the design system is maintained through these core component guidelines:

- **Buttons:** Primary buttons are solid Deep Indigo with white text. Secondary buttons use a subtle gray stroke with primary text. All buttons feature a 300ms transition on hover with a slight elevation increase.
- **Input Fields:** Minimalist design with a subtle gray border that transitions to the Deep Indigo on focus. Backgrounds should be pure white to contrast against the off-white surface.
- **Progress Indicators:** Use the Mint Green accent. The movement should be smooth and linear rather than stepped to reduce user anxiety.
- **Status Chips:** Small, pill-shaped indicators using low-saturation versions of the accent colors (e.g., light mint background with dark green text) to provide status without visual noise.
- **Focus Overlays:** When a user needs to concentrate on a specific task (like a prompt), the rest of the UI is obscured by a high-blur glassmorphism layer to maintain context while removing distraction.
- **Warning Cards:** Non-intrusive banners at the top of the content area using the Soft Amber color. They should not block the exam content unless a critical violation is detected.