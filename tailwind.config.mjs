/** @type {import('tailwindcss').Config} */
// Velvet & Vine design system tokens (cozy editorial, contemporary romance).
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#fcf9f8",
        surface: "#fcf9f8",
        "surface-dim": "#dcd9d9",
        "surface-bright": "#fcf9f8",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#f6f3f2",
        "surface-container": "#f0eded",
        "surface-container-high": "#eae7e7",
        "surface-container-highest": "#e4e2e1",
        "surface-variant": "#e4e2e1",
        "surface-tint": "#a23a48",
        "on-surface": "#1b1c1c",
        "on-surface-variant": "#564243",
        "on-background": "#1b1c1c",
        "inverse-surface": "#303030",
        "inverse-on-surface": "#f3f0f0",
        outline: "#897172",
        "outline-variant": "#dcc0c1",
        primary: "#8f2c3a",
        "on-primary": "#ffffff",
        "primary-container": "#af4451",
        "on-primary-container": "#ffe1e2",
        "inverse-primary": "#ffb2b7",
        "primary-fixed": "#ffdadb",
        "primary-fixed-dim": "#ffb2b7",
        "on-primary-fixed": "#40000d",
        "on-primary-fixed-variant": "#832332",
        secondary: "#765751",
        "on-secondary": "#ffffff",
        "secondary-container": "#fed3cb",
        "on-secondary-container": "#795953",
        "secondary-fixed": "#ffdad3",
        "secondary-fixed-dim": "#e6bdb5",
        "on-secondary-fixed": "#2c1511",
        "on-secondary-fixed-variant": "#5d403a",
        tertiary: "#50504d",
        "on-tertiary": "#ffffff",
        "tertiary-container": "#686865",
        "on-tertiary-container": "#e9e8e4",
        "tertiary-fixed": "#e4e2de",
        "tertiary-fixed-dim": "#c8c6c3",
        "on-tertiary-fixed": "#1b1c1a",
        "on-tertiary-fixed-variant": "#474744",
        error: "#ba1a1a",
        "on-error": "#ffffff",
        "error-container": "#ffdad6",
        "on-error-container": "#93000a"
      },
      fontFamily: {
        "headline-xl": ["Noto Serif", "Georgia", "serif"],
        "headline-lg": ["Noto Serif", "Georgia", "serif"],
        "headline-md": ["Noto Serif", "Georgia", "serif"],
        "body-lg": ["Be Vietnam Pro", "system-ui", "sans-serif"],
        "body-md": ["Be Vietnam Pro", "system-ui", "sans-serif"],
        "label-sm": ["Be Vietnam Pro", "system-ui", "sans-serif"]
      },
      fontSize: {
        "headline-xl": ["48px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }],
        "headline-lg": ["36px", { lineHeight: "1.2", fontWeight: "600" }],
        "headline-md": ["24px", { lineHeight: "1.3", fontWeight: "600" }],
        "body-lg": ["18px", { lineHeight: "1.6", fontWeight: "400" }],
        "body-md": ["16px", { lineHeight: "1.6", fontWeight: "400" }],
        "label-sm": ["14px", { lineHeight: "1.0", letterSpacing: "0.05em", fontWeight: "600" }]
      },
      borderRadius: {
        DEFAULT: "0.5rem",
        sm: "0.25rem",
        md: "0.75rem",
        lg: "1rem",
        xl: "1.5rem",
        full: "9999px"
      },
      spacing: {
        base: "8px",
        xs: "4px",
        sm: "12px",
        md: "24px",
        lg: "48px",
        xl: "80px",
        gutter: "24px"
      },
      maxWidth: {
        "container-max": "1140px"
      }
    }
  },
  plugins: []
};
