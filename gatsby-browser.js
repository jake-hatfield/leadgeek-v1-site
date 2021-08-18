import "./src/styles/app.css"

import "@fontsource/nanum-pen-script"
import "@fontsource/inter/900.css"
import "@fontsource/inter/700.css"
import "@fontsource/inter/600.css"
import "@fontsource/inter/500.css"
import "@fontsource/inter/300.css"
import "@fontsource/space-mono/400.css"
import "@fontsource/space-mono/400.css"
import "@fontsource/space-mono/700.css"

// Activates Google Optimize experiments
const activateOptimize = () => {
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({ event: "optimize.activate" })
}
export const onRouteUpdate = () => {
  activateOptimize()
}
