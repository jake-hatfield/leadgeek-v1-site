import React from "react"
import { Link } from "gatsby"

// packages
import { LogoJsonLd } from "gatsby-plugin-next-seo"
import { AnchorLink } from "gatsby-plugin-anchor-links"

// utils
import { isBrowser } from "@components/utils/utils"

// assets
import LogoSvg from "@assets/svgs/logo.svg"
import LogoPng from "@assets/images/logo.png"

const Navbar: React.FC<{ location: Location }> = ({ location }) => {
  if (!isBrowser()) return null

  return (
    <>
      <LogoJsonLd logo={LogoPng} url="https://leadgeek.io/" />
      <header className="relative z-20">
        {/* notification banner */}
        <aside className="hidden lg:block bg-gray-900 text-teal-300 inter">
          <div className="py-3 container flex items-center">
            <p className="font-semibold">
              <span role="img" aria-label="Wave emoji" className="font-normal">
                👋
              </span>{" "}
              Hey you! Leadgeek is an easy-to-use, high-tech way of finding
              things to flip on Amazon.
            </p>
            <div className="ml-2 flex items-center hover:text-pink-600 group transition-colors duration-200">
              <AnchorLink
                to={location ? `${location.pathname}#leads` : ""}
                title="Start a free trial"
                className="whitespace-no-wrap underline font-bold focus:outline-none focus:shadow-outline"
                gatsbyLinkProps={{ id: "cta" }}
              >
                Start a free 5-day trial
              </AnchorLink>
            </div>
          </div>
        </aside>
        <div className="absolute w-full bg-white shadow-sm">
          <div className="w-full py-4 container center-between">
            {/* logo */}
            <div className="font-bold text-xl lg:text-2xl group">
              <Link to={`/`} className="all-center text-gray-900 rounded-lg">
                <LogoSvg className="w-12 mr-4 text-purple-500" />
                lead<span className="text-purple-500">geek</span>
              </Link>
            </div>
            {/* md:+ nav */}
            <nav className="hidden md:block lg:flex lg:items-center mr-4">
              <AnchorLink
                to={location ? `${location.pathname}#leads` : ""}
                title="Start a free trial"
                className="no-m-first cta-link inter"
                gatsbyLinkProps={{ id: "cta" }}
              >
                Start a free 5-day trial
              </AnchorLink>
            </nav>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar
