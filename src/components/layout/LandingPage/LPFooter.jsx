import React from "react"
import { Link } from "gatsby"

import Logo from "assets/svgs/leadgeek-logo-light.svg"

const Footer = () => {
  const categories = [
    {
      header: "Product",
      items: [
        { title: "How it works", link: "how-it-works" },
        { title: "Tour features", link: "features" },
        { title: "Pricing", link: "pricing" },
      ],
    },

    {
      header: "Company",
      items: [
        { title: "Contact", link: "contact" },
        { title: "Free coaching", link: "coaching" },
        { title: "Customer stories", link: "stories" },
      ],
    },
  ]
  return (
    <footer className="py-12 relative z-10 border-t border-gray-900">
      <div className="mx-auto max-w-xl">
        <div className="flex justify-center">
          <Logo className="w-8 lg:w-10" />
        </div>
      </div>
      <div className="mt-16 text-xs font-bold text-gray-600">
        <div className="w-full" />
        <div className="mt-6 container md:flex md:items-start md:justify-between">
          <ul className="flex justify-center md:justify-start">
            {footerLinks.map(footerLink => (
              <li
                key={footerLink.title}
                className="no-m-first tertiary-link inter"
              >
                <Link to={`/${footerLink.link}/`}>{footerLink.title}</Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 md:mt-0 text-center md:text-left">
            <p>
              Copyright <span className="inter">&copy;</span>{" "}
              {new Date().getFullYear()} Leadgeek
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
