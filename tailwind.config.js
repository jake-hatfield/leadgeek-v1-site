const plugin = require("tailwindcss/plugin")

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: ["./src/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: {
          100: "#E6E6FF",
          200: "#C4C6FF",
          300: "#A2A5FC",
          400: "#8888FC",
          500: "#7069FA",
          600: "#5D55FA",
          700: "#4D3DF7",
          800: "#3525E6",
          900: "#1D0EBE",
        },
        teal: {
          100: "#EFFCF6",
          200: "#C6F7E2",
          300: "#8EEDC7",
          400: "#65D6AD",
          500: "#3EBD93",
          600: "#27AB83",
          700: "#199473",
          800: "#147D64",
          900: "#0C6B58",
        },
        gray: {
          100: "#F0F4F8",
          200: "#e6ebf0",
          300: "#BCCCDC",
          400: "#9FB3C8",
          500: "#829AB1",
          600: "#627D98",
          700: "#486581",
          800: "#334E68",
          900: "#243B53",
        },
      },
      boxShadow: {
        purpleSm:
          "0 1px 3px 0 rgba(93, 85, 250, 0.6), 0 1px 2px 0 rgba(93, 85, 250, 0.3)",
        purpleMd:
          "0 4px 6px -1px rgba(93, 85, 250, 0.6), 0 2px 4px -1px rgba(93, 85, 250, 0.3)",
        tealSm:
          "0 1px 3px 0 rgba(142,237,199, 0.6), 0 1px 2px 0 rgba(142,237,199, 0.6)",
        tealMd:
          "0 4px 6px -1px rgba(142,237,199, 0.6), 0 2px 4px -1px rgba(142,237,199, 0.6)",
      },
      width: {
        72: "18rem",
      },
      borderWidth: {
        DEFAULT: "1px",
        0: "0",
        2: "2px",
        3: "3px",
        4: "4px",
        6: "6px",
        8: "8px",
      },
      rotate: ["active", "group-hover"],
    },
  },
  variants: {
    backgroundColor: [
      "responsive",
      "first",
      "last",
      "even",
      "odd",
      "hover",
      "group-hover",
      "focus",
    ],
    textColor: [
      "responsive",
      "first",
      "last",
      "even",
      "odd",
      "hover",
      "group-hover",
      "focus",
    ],
    margin: [
      "responsive",
      "first",
      "last",
      "even",
      "odd",
      "hover",
      "group-hover",
      "focus",
    ],
    padding: [
      "responsive",
      "first",
      "last",
      "even",
      "odd",
      "hover",
      "group-hover",
      "focus",
    ],
    border: [
      "responsive",
      "first",
      "last",
      "even",
      "odd",
      "hover",
      "group-hover",
      "focus",
    ],
    borderWidth: [
      "responsive",
      "first",
      "last",
      "even",
      "odd",
      "hover",
      "group-hover",
      "focus",
    ],
    borderStyle: [
      "responsive",
      "first",
      "last",
      "even",
      "odd",
      "hover",
      "group-hover",
      "focus",
    ],
    borderColor: [
      "responsive",
      "first",
      "last",
      "even",
      "odd",
      "hover",
      "group-hover",
      "focus",
    ],
    flexDirection: ["responsive", "first", "last", "even", "odd"],
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    plugin(function ({ addComponents }) {
      const container = {
        ".container": {
          width: "100%",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "1rem",
          paddingRight: "1rem",
          "@screen sm": {
            maxWidth: "640px",
            paddingLeft: "1rem",
            paddingRight: "1rem",
          },
          "@screen md": {
            maxWidth: "1023px",
            paddingLeft: "1.25rem",
            paddingRight: "1.25rem",
          },
          "@screen lg": {
            maxWidth: "1139px",
            paddingLeft: "1.5rem",
            paddingRight: "1.5rem",
          },
          "@screen xl": {
            maxWidth: "1140px",
            paddingLeft: "2rem",
            paddingRight: "2rem",
          },
        },
      }
      addComponents(container)
    }),
    require("@tailwindcss/forms"),
    require("tailwind-scrollbar"),
  ],
}
