import React, { useEffect } from "react"
import { Link } from "gatsby"
import "styles/app.css"

// packages
import CookieConsent from "react-cookie-consent"

// components
import Navbar from "./Navbar"
import Footer from "./Footer"

// utils
import { handleLGID } from "@components/utils/utils"

interface LayoutProps {
  children: React.ReactNode
  location: Location
}

const Layout: React.FC<LayoutProps> = ({ children, location }) => {
  useEffect(() => {
    if (typeof document !== undefined) {
      handleLGID(location.search)
    }
  })

  return (
    <div className="relative flex flex-col min-h-screen justify-between">
      <Navbar />
      <main>{children}</main>
      <Footer />
      <CookieConsent
        buttonText="Got it"
        disableStyles={true}
        containerClasses="py-4 mx-4 fixed bottom-0 md:left-1/2 md:flex md:items-center md:justify-center w-auto container z-40 bg-gray-900 rounded-lg mb-4 lg:mb-6 shadow-tealSm transform md:-translate-x-1/2 md:whitespace-nowrap"
        contentClasses="lg:mr-4 text-teal-300 text-sm"
        buttonWrapperClasses="mt-4 md:mt-0 md:ml-4 flex-none"
        buttonClasses="block w-full md:w-auto py-2 px-3 rounded-lg shadow-md hover:shadow-lg border border-purple-500 hover:border-purple-600 bg-purple-500 font-semibold text-xs md:text-sm hover:bg-purple-600 text-white transition-main ring-purple inter"
      >
        <span role="img" aria-label="Waving Emoji" className="font-normal">
          👋
        </span>{" "}
        Hi there! We use{" "}
        <Link
          to={`/privacy/#cookies`}
          title="Leadgeek cookie policy"
          className="secondary-link-dark"
        >
          cookies
        </Link>{" "}
        to personalize your site experience.
      </CookieConsent>
    </div>
  )
}

export default Layout
