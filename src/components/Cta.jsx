import React from "react"
import { Link } from "gatsby"

import LoopyDashed from "assets/svgs/loopy-dashed.svg"
import Loopy from "assets/svgs/slash-loopy-1.svg"
import BirdTracks from "assets/svgs/bird-tracks.svg"

const Cta = ({ mainHeader, desc, links }) => {
  return (
    <section className="relative py-8 pt-32 lg:pt-48 lg:pb-24 bg-splatter">
      <div className="relative container">
        <LoopyDashed className="absolute top-0 right-1/2 h-28 lg:h-40 text-purple-500 transform -translate-y-36 lg:-translate-y-48" />
        <div className="hidden md:block absolute bottom-1/2 w-full max-w-2xl right-0 transform translate-y-16 translate-x-12 text-gray-400">
          <BirdTracks />
        </div>
        <header className="mt-6 lg:mt-0 mx-auto md:mx-0 relative z-10 font-semibold md:flex md:items-center md:justify-between bg-gray-900 py-4 lg:py-6 px-6 rounded-lg stack-sm text-white">
          <div className="max-w-sm lg:max-w-md">
            <h2 className="text-2xl md:text-3xl xl:text-4xl font-black inter">
              {mainHeader || `Simplify your sourcing.`}
            </h2>
            <div className="mt-4 lg:mt-6 text-teal-300">
              {desc || "Check out the buttons, do the things."}
            </div>
          </div>
          <nav className="mt-10 lg:mt-0 flex flex-col text-center md:text-left">
            {links.map(link => (
              <Link
                key={link.title}
                to={`/${link.link}/`}
                className="first:mt-0 mt-4 cta-link-center inter"
              >
                {link.title}
              </Link>
            ))}
          </nav>
        </header>
        <Loopy className="absolute top-0 left-0 h-8 text-teal-300 transform -rotate-45 -translate-y-2 -translate-x-2" />
      </div>
    </section>
  )
}

export default Cta
