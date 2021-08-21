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
})(window,document.documentElement,'async-hide','dataLayer',3500,
{'${containerId}':true});`,
})

const googleTagManagerScript = containerId => ({
  __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','${containerId}');`,
})

const customHeadComponents = [
  <script key="data-layer" dangerouslySetInnerHTML={createDataLayer()} />,
  <style
    key="optimize-afs-style"
    dangerouslySetInnerHTML={optimizeAntiFlickerStyle()}
  />,
  <script
    key="optimize-afs-timeout"
    dangerouslySetInnerHTML={optimizeAntiFlickerScript(containerId)}
  />,
  <script
    key="optimize"
    src="https://www.googleoptimize.com/optimize.js?id=OPT-KXGPFFT"
  />,
  <script
    key="gtm-head"
    dangerouslySetInnerHTML={googleTagManagerScript(containerId)}
  />,
]

export const onPreRenderHTML = ({
  getHeadComponents,
  replaceHeadComponents,
}) => {
  const mergedHeadComponents = [...customHeadComponents, ...getHeadComponents()]
  replaceHeadComponents(mergedHeadComponents)
}

const BodyAttributes = [
  <noscript key="gtm-body">
    <iframe
      src={`https://www.googletagmanager.com/ns.html?id=${containerId}`}
      height="0"
      width="0"
      style={{ display: "none", visibility: "hidden" }}
    />
  </noscript>,
]

export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents(BodyAttributes)
}
