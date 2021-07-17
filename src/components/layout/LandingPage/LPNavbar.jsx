import React from "react"
import { Link } from "gatsby"

import { LogoJsonLd } from "gatsby-plugin-next-seo"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import Logo from "assets/svgs/leadgeek-logo-light.svg"

const Navbar = () => {
  return (
    <>
      <LogoJsonLd logo={Logo} url="https://leadgeek.io/" />
      <header className="relative z-20">
        {/* notification banner */}
        <aside className="hidden lg:block bg-pink-600 text-white inter">
          <div className="py-3 container flex items-center">
            <p className="font-semibold">
              <span role="img" aria-label="Wave emoji">
                👋
              </span>{" "}
              Hey you! Leadgeek gives you a radical, modern way to find things
              to sell on Amazon.
            </p>
            <div className="ml-2 flex items-center hover:text-gray-900 group transition-colors duration-200">
              <AnchorLink
                to={"#pricing"}
                title="See Leadgeek pricing plans"
                className="whitespace-no-wrap underline font-bold focus:outline-none focus:shadow-outline"
                gatsbyLinkProps={{ id: "cta" }}
              >
                Start sourcing now
              </AnchorLink>
            </div>
          </div>
        </aside>
        <div className="absolute w-full bg-white shadow-sm">
          <div className="w-full py-4 container center-between">
            {/* logo */}
            <div className="font-bold text-xl lg:text-2xl group">
              <Link to={`/`} className="all-center text-gray-900 rounded-lg">
                <Logo className="w-8 lg:w-10 mr-4" />
                lead<span className="text-purple-500">geek</span>
              </Link>
            </div>
            {/* md:+ nav */}
            <nav className="hidden md:block lg:flex lg:items-center mr-4">
              <AnchorLink
                to={"#pricing"}
                title="See Leadgeek pricing plans"
                className="no-m-first cta-link inter"
                gatsbyLinkProps={{ id: "cta" }}
              >
                Start sourcing now
              </AnchorLink>
            </nav>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar
