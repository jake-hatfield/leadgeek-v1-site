import Typography from "typography"

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  googleFonts: [{ name: "Inter", styles: ["300, 400, 500, 600, 700, 900"] }],
  headerFontFamily: ["Inter", "sans-serif"],
  bodyFontFamily: ["Inter", "sans-serif"],
})

export default typography
