import React from "react"
import { Link } from "gatsby"

import Logo from "@assets/svgs/logo.svg"

const Footer: React.FC = () => {
  return (
    <footer className="py-12 relative z-20 border-t border-gray-900">
      <div className="mx-auto max-w-xl">
        <div className="flex justify-center">
          <Logo className="w-16 mr-4 text-purple-500" />
        </div>
      </div>
      <div className="mt-8 text-xs font-bold text-gray-600">
        <div className="container md:flex md:items-center md:justify-between">
          <div className="text-center md:text-left inter">
            <a
              href="mailto:hello@leadgeek.io"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block md:mt-4 secondary-link"
            >
              hello@leadgeek.io
            </a>
            <address className="mt-4 not-italic">
              6333 E Mockingbird Lane, Suite 147 Dallas, TX
            </address>
          </div>
          <div className="mt-4 md:mt-0 text-center md:text-left flex flex-col">
            <ul className="md:mt-4 flex justify-center md:justify-end">
              {footerLinks.map(footerLink => (
                <li
                  key={footerLink.title}
                  className="no-m-first secondary-link inter"
                >
                  <Link to={`/${footerLink.link}/`}>{footerLink.title}</Link>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-center md:text-right">
              <span className="inter">&copy;</span> 2020-
              {new Date().getFullYear()} <span className="inter">Leadgeek</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

const footerLinks = [
  {
    title: "Terms of service",
    link: "terms",
  },
  {
    title: "Privacy policy",
    link: "privacy",
  },
]

export default Footer
