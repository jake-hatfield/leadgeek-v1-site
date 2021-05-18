import Typography from "typography"

let bodyFontFamily = ["Inter", "sans-serif"]

const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.666,
  googleFonts: [
    { name: "Inter", styles: ["300", "400", "500", "600", "700", "900"] },
  ],
  headerFontFamily: bodyFontFamily,
  bodyFontFamily: bodyFontFamily,
})

export default typography
