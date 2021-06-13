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
      ],
    },
  ]
  return (
    <footer className="py-12 relative z-20 border-t border-gray-900">
      <div className="mx-auto max-w-xl">
        <div className="flex justify-center">
          <Logo className="w-8 lg:w-10" />
        </div>
        <nav className="w-full relative z-10 mt-8 lg:mt-12 flex justify-center container">
          {categories.map(category => (
            <div
              key={category.header}
              className="mt-4 md:mt-0 first:ml-0 ml-16"
            >
              <h3 className="h3 font-semibold">{category.header}</h3>
              <ul className="mt-4 text-gray-600">
                {category.items.map(item => (
                  <li key={item.title} className="mb-2 last:mb-0 ">
                    <Link to={`/${item.link}/`} className="tertiary-link inter">
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
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
                {footerLink.title === "Sitemap" ? (
                  <a href={`/${footerLink.link}`}>{footerLink.title}</a>
                ) : (
                  <Link to={`/${footerLink.link}/`}>{footerLink.title}</Link>
                )}
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
  {
    title: "Sitemap",
    link: "sitemap.xml",
  },
]

export default Footer
