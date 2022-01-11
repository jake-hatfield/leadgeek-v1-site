import React from "react"
import { Link } from "gatsby"

import Twitter from "@assets/svgs/twitter.svg"

const Footer: React.FC = () => {
  return (
    <footer className="py-12 relative z-10 border-t border-gray-900">
      <div className="mx-auto max-w-xl">
        <nav className="grid grid-flow-rows grid-cols-2 grid-rows-2 md:grid-cols-4 md:grid-rows-1 gap-4 lg:gap-12 max-w-2xl relative z-10 px-4 md:px-0">
          {categories.map(category => (
            <div key={category.header}>
              <h3 className="h3 font-semibold">{category.header}</h3>
              <ul className="mt-4 text-gray-600">
                {category.items.map(item => (
                  <li key={item.title} className="mb-2 last:mb-0">
                    <Link
                      to={`/${item.link}/`}
                      className="tertiary-link inter whitespace-nowrap"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
      <div className="mt-6 md:mt-12 text-sm text-gray-600">
        <div className="container flex items-center justify-between">
          <div className="flex items-end mt-5 md:mt-0">
            <p>
              <span className="inter">&copy;</span> 2020-
              {new Date().getFullYear()} Leadgeek
            </p>
          </div>
          <a
            href="https://twitter.com/leadgeekAMZ"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter className="svg-base text-gray-600 hover:text-gray-700" />
          </a>
          {footerLinks.length > 0 && (
            <ul className="flex flex-wrap md:flex-nowrap md:items-center gap-4">
              {footerLinks.map(footerLink => (
                <li
                  key={footerLink.title}
                  className="first:ml-0 md:ml-4 tertiary-link inter"
                >
                  {footerLink.title === "Sitemap" ||
                  footerLink.title === "RSS" ? (
                    <a href={`/${footerLink.link}`}>{footerLink.title}</a>
                  ) : (
                    <Link to={`/${footerLink.link}/`}>{footerLink.title}</Link>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </footer>
  )
}

const categories = [
  {
    header: "Product",
    items: [
      { title: "Demo", link: "demo" },
      { title: "Tour features", link: "features" },
      { title: "Pricing", link: "pricing" },
    ],
  },
  {
    header: "Company",
    items: [
      { title: "Contact", link: "contact" },
      { title: "Affiliates", link: "affiliates" },
      { title: "Seller stories", link: "stories" },
    ],
  },
  {
    header: "Resources",
    items: [
      //   { title: "Blog", link: "blog" },
      { title: "Changelog", link: "changelog" },
    ],
  },
  {
    header: "Legal",
    items: [
      { title: "Terms of service", link: "terms" },
      { title: "Privacy policy", link: "privacy" },
    ],
  },
]

const footerLinks: { title: string; link: string }[] = [
  //   {
  //     title: "Sitemap",
  //     link: "sitemap.xml",
  //   },
  //   {
  //     title: "RSS",
  //     link: "rss.xml",
  //   },
]

export default Footer
