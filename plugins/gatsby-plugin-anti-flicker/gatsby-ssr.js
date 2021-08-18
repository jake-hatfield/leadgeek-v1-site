import React from "react"

const containerId = "GTM-NNVJ2DH"

const createDataLayer = () => ({
  __html: "window.dataLayer = window.dataLayer || []",
})
const optimizeAntiFlickerStyle = () => ({
  __html: ".async-hide { opacity: 0 !important}",
})
const optimizeAntiFlickerScript = containerId => ({
  __html: `(function(a,s,y,n,c,h,i,d,e){s.className+=' '+y;h.start=1*new Date;
h.end=i=function(){s.className=s.className.replace(RegExp(' ?'+y),'')};
(a[n]=a[n]||[]).hide=h;setTimeout(function(){i();h.end=null},c);h.timeout=c;
})(window,document.documentElement,'async-hide','dataLayer',2000,
{${containerId}:true});`,
})

const googleTagManagerScript = containerId => ({
  __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-NNVJ2DH');`,
})

const customHeadComponents = [
  <script dangerouslySetInnerHTML={createDataLayer()} />,
  <style dangerouslySetInnerHTML={optimizeAntiFlickerStyle()} />,
  <script dangerouslySetInnerHTML={optimizeAntiFlickerScript(containerId)} />,
  <script dangerouslySetInnerHTML={googleTagManagerScript(containerId)} />,
]
export const onPreRenderHTML = ({
  getHeadComponents,
  replaceHeadComponents,
}) => {
  const mergedHeadComponents = [...customHeadComponents, ...getHeadComponents()]
  replaceHeadComponents(mergedHeadComponents)
}
