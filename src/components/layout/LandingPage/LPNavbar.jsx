import React from "react"
import { Link } from "gatsby"

import { LogoJsonLd } from "gatsby-plugin-next-seo"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import Logo from "assets/svgs/leadgeek-logo-light.svg"

const Navbar = () => {
  return (
    <>
      <LogoJsonLd logo={Logo} url="https://leadgeek.io/" />
      <header className="relative z-40">
        {/* notification banner */}
        <aside className="hidden lg:block bg-pink-600 text-white inter">
          <div className="py-3 container flex items-center">
            <p className="font-semibold">
              👋 Hey you! Leadgeek gives you a radical, modern way to find
              things to sell on Amazon.
            </p>
            <div className="ml-2 flex items-center hover:text-gray-900 group transition-colors duration-200">
              <Link
                to={"#pricing"}
                className="whitespace-no-wrap underline font-bold focus:outline-none focus:shadow-outline"
              >
                Join now
              </Link>
            </div>
          </div>
        </aside>
        <div className="absolute w-screen bg-white shadow-sm">
          <div className="w-full py-4 container center-between">
            {/* logo */}
            <div className="font-bold text-xl lg:text-2xl group">
              <Link to={`/`} className="all-center text-gray-900 rounded-lg">
                <Logo className="w-8 lg:w-10 mr-4" />
                lead<span className="text-purple-500">geek</span>
              </Link>
            </div>
            {/* md:+ nav */}
            <nav className="lg:flex lg:items-center mr-4">
              <AnchorLink
                to={"#pricing"}
                title="Leadgeek pricing plans"
                className="no-m-first cta-link inter"
              >
                Join now
              </AnchorLink>
            </nav>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar
