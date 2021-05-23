import React from "react"
import { Link } from "gatsby"

import Arrow from "assets/svgs/cta-arrow.svg"

const CTA = ({ mainHeader, links }) => {
  console.log(links)
  return (
    <section className="relative py-8 lg:py-12 bg-gray-100">
      <div className="relative container">
        <header className="mt-6 lg:mt-0 mx-auto md:mx-0 relative z-10 font-semibold center-between">
          <h2
            className={`max-w-md text-2xl md:text-3xl xl:text-4xl font-black text-gray-900`}
          >
            {mainHeader || `Start simplifying your sourcing.`}
          </h2>
          <nav className="flex flex-col text-center md:text-left">
            {links.map(link => (
              <Link
                key={link.title}
                to={`/${link.link}`}
                className="mt-4 cta-link-center"
              >
                {link.title}
              </Link>
            ))}
          </nav>
        </header>
        <div className="text-purple-500">
          <Arrow className="hidden lg:block absolute top-0 right-0 w-full max-w-xs xl:max-w-sm transform translate-y-12 -translate-x-64" />
        </div>
      </div>
    </section>
  )
}

export default CTA
