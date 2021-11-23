import React, { useEffect } from "react"
import "styles/app.css"

// import exitIntent from "exit-intent"

import LPNavbar from "./LPNavbar"
import LPFooter from "./LPFooter"
import { handleLGID } from "@components/utils/utils"
// import Popup from "@components/utils/Popup"
// import Bullet from "@assets/svgs/bullet.svg"

interface LPLayoutProps {
  children: React.ReactNode
  location: Location
}

const LPLayout: React.FC<LPLayoutProps> = ({ children, location }) => {
  useEffect(() => {
    if (typeof document !== undefined) {
      handleLGID(location.search)
    }
  })

  //   const [showExitPopup, setShowExitPopup] = useState(false)
  //   useEffect(() => {
  //     if (showExitPopup) {
  //       document.body.style.overflow = "hidden"
  //     }
  //     return () => {
  //       document.body.style.overflow = "unset"
  //     }
  //   }, [showExitPopup])

  //   useEffect(() => {
  //     if (document.cookie.indexOf("popupSeen=true") < 0) {
  //       const removeExitIntent = exitIntent({
  //         threshold: 30,
  //         eventThrottle: 100,
  //         maxDisplays: 1,
  //         onExitIntent: () => {
  //           setShowExitPopup(true)
  //         },
  //       })
  //       return () => {
  //         removeExitIntent()
  //       }
  //     }
  //   })

  //   const coachingItems = [
  //     "How to develop your own unique selling style",
  //     "How to get ungated in more brands & categories",
  //     "Which sourcing tools are important (and which aren't)",
  //     "Best practices to keep your Amazon account healthy",
  //   ]

  return (
    <div className="relative flex flex-col h-screen justify-between">
      <LPNavbar />
      <main className="mt-16 md:mt-20">{children}</main>
      <LPFooter />
      {/* exit popup */}
      {/* {showExitPopup && (
        <Popup
          show={showExitPopup}
          setShow={setShowExitPopup}
          details={{
            id: "exitPopup",
            headers: [
              <>
                Figuring out how to sell on Amazon by yourself isn't any fun...
              </>,
              <>Raise the roof!</>,
            ],
            subheaders: [
              <>
                But it doesn't have to <i>stay</i> that way.{" "}
                <strong>
                  Schedule a{" "}
                  <span className="font-bold text-pink-600">100% free</span>{" "}
                  coaching call with an experienced FBA arbitrage seller
                </strong>
                . No strings attached.{" "}
                <span role="img" aria-label="Party emoji" className="font-normal">
                  🎉
                </span>
              </>,
              <>
                <strong>
                  Check your email for a link to schedule the call
                </strong>
                . If you have any questions, bring 'em on! Otherwise, here are
                some things we'll discuss:
              </>,
            ],
            additionalInfo: (
              <ul className="max-w-md mt-4 mx-auto text-xs md:text-sm lg:text-base">
                {coachingItems.map((item, i) => (
                  <li key={i} className="mt-2 flex text-left">
                    <Bullet className="mt-1 svg-sm text-teal-300 flex-none" />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            ),
            cta: "Request a free coaching call",
            tags: [{ name: `Coaching Call Lead`, status: "active" }],
          }}
        />
      )} */}
    </div>
  )
}

export default LPLayout
