/*
 * Design tokens — Figma: Design System Foundations (RHVDAjk5iKIMQcoIKb94jy)
 * Synced: 2026-03-17
 *
 * These values are the authoritative TypeScript mirror of the CSS custom
 * properties defined in globals.css. Keep both files in sync.
 *
 * Extraction note: the Figma MCP remote server's get_variable_defs tool is
 * selection-scoped; it returns only variables applied to queried nodes.
 * 13 primitive tokens were found across all reachable component nodes —
 * no semantic / mode layer was surfaced. If the Figma file gains color modes,
 * re-run extraction and update both this file and globals.css.
 */

// ── Primitive values (for JS/TS usage and ComponentLibrary docs) ─────────────

export const colors = {
  primary: {
    100: "#dce0d2", // lightest tint
    200: "#b9c2a6",
    300: "#4d523c", // mid / hover
    400: "#323429", // brand dark green
  },
  neutral: {
    100: "#ffffff",
    200: "#f9f7f2",
    300: "#f1ece0",
    400: "#e2d9c2",
    500: "#c8bfa8",
    600: "#eaeaea",
    700: "#a6a6a6",
    800: "#6c6c6c",
    900: "#161714", // near-black
  },
  accent: {
    100: "#fcded3",
    200: "#f69371",
    300: "#c5765a",
  },
  highlight: {
    100: "#f6ffcd",
    200: "#ecff92",
  },
  tertiary: {
    100: "#f9f9fe",
    200: "#ead7f3",
    300: "#bbacc2",
  },
  secondary: {
    100: "#d0e2e8",
    200: "#a2c6d1",
    300: "#88acb7",
  },
  error: {
    100: "#e8cac6",
    200: "#b45446",
  },
  success: {
    100: "#bed9c7",
    200: "#2e844a",
  },
} as const;

export const typography = {
  families: {
    title: "var(--font-family-title)",
    body: "var(--font-family-body)",
    label: "var(--font-family-label)",
  },
  weights: {
    regular: "var(--font-weight-regular)",
    light: "var(--font-weight-light)",
    medium: "var(--font-weight-medium)",
  },
  styles: {
    // Headings
    h1: {
      fontFamily: "var(--font-heading-h1-family)",
      fontSize: "var(--font-heading-h1-size)",
      fontWeight: "var(--font-heading-h1-weight)",
      lineHeight: "var(--font-heading-h1-line-height)",
      letterSpacing: "var(--font-heading-h1-letter-spacing)",
    },
    h2: {
      fontFamily: "var(--font-heading-h2-family)",
      fontSize: "var(--font-heading-h2-size)",
      fontWeight: "var(--font-heading-h2-weight)",
      lineHeight: "var(--font-heading-h2-line-height)",
      letterSpacing: "var(--font-heading-h2-letter-spacing)",
    },
    h3: {
      fontFamily: "var(--font-heading-h3-family)",
      fontSize: "var(--font-heading-h3-size)",
      fontWeight: "var(--font-heading-h3-weight)",
      lineHeight: "var(--font-heading-h3-line-height)",
      letterSpacing: "var(--font-heading-h3-letter-spacing)",
    },
    h4: {
      fontFamily: "var(--font-heading-h4-family)",
      fontSize: "var(--font-heading-h4-size)",
      fontWeight: "var(--font-heading-h4-weight)",
      lineHeight: "var(--font-heading-h4-line-height)",
      letterSpacing: "var(--font-heading-h4-letter-spacing)",
    },
    h5: {
      fontFamily: "var(--font-heading-h5-family)",
      fontSize: "var(--font-heading-h5-size)",
      fontWeight: "var(--font-heading-h5-weight)",
      lineHeight: "var(--font-heading-h5-line-height)",
      letterSpacing: "var(--font-heading-h5-letter-spacing)",
    },
    h6: {
      fontFamily: "var(--font-heading-h6-family)",
      fontSize: "var(--font-heading-h6-size)",
      fontWeight: "var(--font-heading-h6-weight)",
      lineHeight: "var(--font-heading-h6-line-height)",
      letterSpacing: "var(--font-heading-h6-letter-spacing)",
    },
    // Body (regular weight)
    body1Regular: {
      fontFamily: "var(--font-body-1-family)",
      fontSize: "var(--font-body-1-size)",
      fontWeight: "var(--font-body-1-weight-regular)",
      lineHeight: "var(--font-body-1-line-height)",
      letterSpacing: "var(--font-body-1-letter-spacing)",
    },
    body2Regular: {
      fontFamily: "var(--font-body-2-family)",
      fontSize: "var(--font-body-2-size)",
      fontWeight: "var(--font-body-2-weight-regular)",
      lineHeight: "var(--font-body-2-line-height)",
      letterSpacing: "var(--font-body-2-letter-spacing)",
    },
    body3Regular: {
      fontFamily: "var(--font-body-3-family)",
      fontSize: "var(--font-body-3-size)",
      fontWeight: "var(--font-body-3-weight-regular)",
      lineHeight: "var(--font-body-3-line-height)",
      letterSpacing: "var(--font-body-3-letter-spacing)",
    },
    body4Regular: {
      fontFamily: "var(--font-body-4-family)",
      fontSize: "var(--font-body-4-size)",
      fontWeight: "var(--font-body-4-weight-regular)",
      lineHeight: "var(--font-body-4-line-height)",
      letterSpacing: "var(--font-body-4-letter-spacing)",
    },
    body5Regular: {
      fontFamily: "var(--font-body-5-family)",
      fontSize: "var(--font-body-5-size)",
      fontWeight: "var(--font-body-5-weight-regular)",
      lineHeight: "var(--font-body-5-line-height)",
      letterSpacing: "var(--font-body-5-letter-spacing)",
    },
    body6Regular: {
      fontFamily: "var(--font-body-6-family)",
      fontSize: "var(--font-body-6-size)",
      fontWeight: "var(--font-body-6-weight-regular)",
      lineHeight: "var(--font-body-6-line-height)",
      letterSpacing: "var(--font-body-6-letter-spacing)",
    },
    // Body (medium weight)
    body1Medium: {
      fontFamily: "var(--font-body-1-family)",
      fontSize: "var(--font-body-1-size)",
      fontWeight: "var(--font-body-1-weight-medium)",
      lineHeight: "var(--font-body-1-line-height)",
      letterSpacing: "var(--font-body-1-letter-spacing)",
    },
    body2Medium: {
      fontFamily: "var(--font-body-2-family)",
      fontSize: "var(--font-body-2-size)",
      fontWeight: "var(--font-body-2-weight-medium)",
      lineHeight: "var(--font-body-2-line-height)",
      letterSpacing: "var(--font-body-2-letter-spacing)",
    },
    body3Medium: {
      fontFamily: "var(--font-body-3-family)",
      fontSize: "var(--font-body-3-size)",
      fontWeight: "var(--font-body-3-weight-medium)",
      lineHeight: "var(--font-body-3-line-height)",
      letterSpacing: "var(--font-body-3-letter-spacing)",
    },
    body4Medium: {
      fontFamily: "var(--font-body-4-family)",
      fontSize: "var(--font-body-4-size)",
      fontWeight: "var(--font-body-4-weight-medium)",
      lineHeight: "var(--font-body-4-line-height)",
      letterSpacing: "var(--font-body-4-letter-spacing)",
    },
    body5Medium: {
      fontFamily: "var(--font-body-5-family)",
      fontSize: "var(--font-body-5-size)",
      fontWeight: "var(--font-body-5-weight-medium)",
      lineHeight: "var(--font-body-5-line-height)",
      letterSpacing: "var(--font-body-5-letter-spacing)",
    },
    body6Medium: {
      fontFamily: "var(--font-body-6-family)",
      fontSize: "var(--font-body-6-size)",
      fontWeight: "var(--font-body-6-weight-medium)",
      lineHeight: "var(--font-body-6-line-height)",
      letterSpacing: "var(--font-body-6-letter-spacing)",
    },
    // Labels
    label1Regular: {
      fontFamily: "var(--font-label-1-family)",
      fontSize: "var(--font-label-1-size)",
      fontWeight: "var(--font-label-1-weight-regular)",
      lineHeight: "var(--font-label-1-line-height)",
      letterSpacing: "var(--font-label-1-letter-spacing)",
    },
    label1Medium: {
      fontFamily: "var(--font-label-1-family)",
      fontSize: "var(--font-label-1-size)",
      fontWeight: "var(--font-label-1-weight-medium)",
      lineHeight: "var(--font-label-1-line-height)",
      letterSpacing: "var(--font-label-1-letter-spacing)",
    },
    label2Regular: {
      fontFamily: "var(--font-label-2-family)",
      fontSize: "var(--font-label-2-size)",
      fontWeight: "var(--font-label-2-weight-regular)",
      lineHeight: "var(--font-label-2-line-height)",
      letterSpacing: "var(--font-label-2-letter-spacing)",
    },
    label3Regular: {
      fontFamily: "var(--font-label-3-family)",
      fontSize: "var(--font-label-3-size)",
      fontWeight: "var(--font-label-3-weight-regular)",
      lineHeight: "var(--font-label-3-line-height)",
      letterSpacing: "var(--font-label-3-letter-spacing)",
    },
  },
  /** label/2 medium */
  label2Medium: {
    fontFamily: "var(--font-label-2-family)",
    fontSize: "var(--font-label-2-size)",
    fontWeight: "var(--font-label-2-weight-medium)",
    lineHeight: "var(--font-label-2-line-height)",
    letterSpacing: "var(--font-label-2-letter-spacing)",
    // Raw values — use for documentation only, not inline styles
    _raw: {
      fontFamily: '"Simplon Mono", monospace',
      fontSize: "12px",
      fontWeight: 500,
      lineHeight: 1.2,
      letterSpacing: "0.96px",
    },
  },
} as const;

export const radius = {
  0: "var(--radius-radius-0)",
  4: "var(--radius-radius-4)",
  10: "var(--radius-radius-10)",
  12: "var(--radius-radius-12)",
  20: "var(--radius-radius-20)",
  60: "var(--radius-radius-60)",
  400: "var(--radius-radius-400)",
} as const;

export const spacing = {
  none: "var(--spacing-spacing-none)",
  4: "var(--spacing-spacing-4)",
  8: "var(--spacing-spacing-8)",
  12: "var(--spacing-spacing-12)",
  16: "var(--spacing-spacing-16)",
  24: "var(--spacing-spacing-24)",
  32: "var(--spacing-spacing-32)",
  48: "var(--spacing-spacing-48)",
  64: "var(--spacing-spacing-64)",
  80: "var(--spacing-spacing-80)",
} as const;

// ── CSS variable name map ─────────────────────────────────────────────────────
// Use these when you need the variable name string (e.g. to build a style prop)
// e.g. cssVars["color/primary/400"] === "var(--color-primary-400)"

export const cssVars = {
  "color/primary/100": "var(--color-primary-100)",
  "color/primary/200": "var(--color-primary-200)",
  "color/primary/300": "var(--color-primary-300)",
  "color/primary/400": "var(--color-primary-400)",
  "color/neutral/100": "var(--color-neutral-100)",
  "color/neutral/200": "var(--color-neutral-200)",
  "color/neutral/300": "var(--color-neutral-300)",
  "color/neutral/400": "var(--color-neutral-400)",
  "color/neutral/500": "var(--color-neutral-500)",
  "color/neutral/600": "var(--color-neutral-600)",
  "color/neutral/700": "var(--color-neutral-700)",
  "color/neutral/800": "var(--color-neutral-800)",
  "color/neutral/900": "var(--color-neutral-900)",
  "color/accent/100": "var(--color-accent-100)",
  "color/accent/200": "var(--color-accent-200)",
  "color/accent/300": "var(--color-accent-300)",
  "color/highlight/100": "var(--color-highlight-100)",
  "color/highlight/200": "var(--color-highlight-200)",
  "color/tertiary/100": "var(--color-tertiary-100)",
  "color/tertiary/200": "var(--color-tertiary-200)",
  "color/tertiary/300": "var(--color-tertiary-300)",
  "color/secondary/100": "var(--color-secondary-100)",
  "color/secondary/200": "var(--color-secondary-200)",
  "color/secondary/300": "var(--color-secondary-300)",
  "color/success/100": "var(--color-success-100)",
  "color/success/200": "var(--color-success-200)",
  "color/error/100": "var(--color-error-100)",
  "color/error/200": "var(--color-error-200)",
  "radius/radius-0": "var(--radius-radius-0)",
  "radius/radius-4": "var(--radius-radius-4)",
  "radius/radius-10": "var(--radius-radius-10)",
  "radius/radius-12": "var(--radius-radius-12)",
  "radius/radius-20": "var(--radius-radius-20)",
  "radius/radius-60": "var(--radius-radius-60)",
  "radius/radius-400": "var(--radius-radius-400)",
  "spacing/spacing-none": "var(--spacing-spacing-none)",
  "spacing/spacing-4": "var(--spacing-spacing-4)",
  "spacing/spacing-8": "var(--spacing-spacing-8)",
  "spacing/spacing-12": "var(--spacing-spacing-12)",
  "spacing/spacing-16": "var(--spacing-spacing-16)",
  "spacing/spacing-24": "var(--spacing-spacing-24)",
  "spacing/spacing-32": "var(--spacing-spacing-32)",
  "spacing/spacing-48": "var(--spacing-spacing-48)",
  "spacing/spacing-64": "var(--spacing-spacing-64)",
  "spacing/spacing-80": "var(--spacing-spacing-80)",
  "font/family-title": "var(--font-family-title)",
  "font/family-body": "var(--font-family-body)",
  "font/family-label": "var(--font-family-label)",
  "font/weight-regular": "var(--font-weight-regular)",
  "font/weight-light": "var(--font-weight-light)",
  "font/weight-medium": "var(--font-weight-medium)",
  "type/heading/h1": "var(--font-heading-h1-size)",
  "type/heading/h2": "var(--font-heading-h2-size)",
  "type/heading/h3": "var(--font-heading-h3-size)",
  "type/heading/h4": "var(--font-heading-h4-size)",
  "type/heading/h5": "var(--font-heading-h5-size)",
  "type/heading/h6": "var(--font-heading-h6-size)",
  "type/body/1": "var(--font-body-1-size)",
  "type/body/2": "var(--font-body-2-size)",
  "type/body/3": "var(--font-body-3-size)",
  "type/body/4": "var(--font-body-4-size)",
  "type/body/5": "var(--font-body-5-size)",
  "type/body/6": "var(--font-body-6-size)",
  "type/label/1": "var(--font-label-1-size)",
  "type/label/2": "var(--font-label-2-size)",
  "type/label/3": "var(--font-label-3-size)",
} as const;

// ── Flat token map for ComponentLibrary display ───────────────────────────────
// Maps Figma token path → resolved hex / raw value

export const tokenMap = {
  "color/primary/100": colors.primary[100],
  "color/primary/200": colors.primary[200],
  "color/primary/300": colors.primary[300],
  "color/primary/400": colors.primary[400],
  "color/neutral/100": colors.neutral[100],
  "color/neutral/200": colors.neutral[200],
  "color/neutral/300": colors.neutral[300],
  "color/neutral/400": colors.neutral[400],
  "color/neutral/500": colors.neutral[500],
  "color/neutral/600": colors.neutral[600],
  "color/neutral/700": colors.neutral[700],
  "color/neutral/800": colors.neutral[800],
  "color/neutral/900": colors.neutral[900],
  "color/accent/100": colors.accent[100],
  "color/accent/200": colors.accent[200],
  "color/accent/300": colors.accent[300],
  "color/highlight/100": colors.highlight[100],
  "color/highlight/200": colors.highlight[200],
  "color/tertiary/100": colors.tertiary[100],
  "color/tertiary/200": colors.tertiary[200],
  "color/tertiary/300": colors.tertiary[300],
  "color/secondary/100": colors.secondary[100],
  "color/secondary/200": colors.secondary[200],
  "color/secondary/300": colors.secondary[300],
  "color/success/100": colors.success[100],
  "color/success/200": colors.success[200],
  "color/error/100": colors.error[100],
  "color/error/200": colors.error[200],
  "radius/radius-0": "0px",
  "radius/radius-4": "4px",
  "radius/radius-10": "10px",
  "radius/radius-12": "12px",
  "radius/radius-20": "20px",
  "radius/radius-60": "60px",
  "radius/radius-400": "400px",
  "spacing/spacing-none": "0px",
  "spacing/spacing-4": "4px",
  "spacing/spacing-8": "8px",
  "spacing/spacing-12": "12px",
  "spacing/spacing-16": "16px",
  "spacing/spacing-24": "24px",
  "spacing/spacing-32": "32px",
  "spacing/spacing-48": "48px",
  "spacing/spacing-64": "64px",
  "spacing/spacing-80": "80px",
  "label/2 medium": 'Simplon Mono, 12px, weight 500',
  "font/family-title": "Saol",
  "font/family-body": "Simplon Norm",
  "font/family-label": "Simplon Mono",
  "font/weight-regular": "Regular",
  "font/weight-light": "Light",
  "font/weight-medium": "Medium",
  "type/heading/h1": "Saol Text, 48px, weight 300",
  "type/heading/h2": "Saol Text, 40px, weight 300",
  "type/heading/h3": "Saol Text, 32px, weight 300",
  "type/heading/h4": "Saol Text, 24px, weight 300",
  "type/heading/h5": "Saol Text, 20px, weight 300",
  "type/heading/h6": "Saol Text, 16px, weight 300",
  "type/body/1": "Simplon Norm, 24px, 150%",
  "type/body/2": "Simplon Norm, 20px, 150%",
  "type/body/3": "Simplon Norm, 16px, 150%",
  "type/body/4": "Simplon Norm, 14px, 150%",
  "type/body/5": "Simplon Norm, 12px, 150%",
  "type/body/6": "Simplon Norm, 10px, 150%",
  "type/label/1": "Simplon Mono, 14px, 120%",
  "type/label/2": "Simplon Mono, 12px, 120%",
  "type/label/3": "Simplon Mono, 10px, 120%",
} as const;
