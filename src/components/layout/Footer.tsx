import React from "react"
import { Link } from "gatsby"

import Logo from "@assets/svgs/logo.svg"

const Footer: React.FC = () => {
  return (
    <footer className="py-8 md:py-12 relative z-10 border-t border-gray-900">
      <div className="mx-auto max-w-xl">
        <div className="flex justify-center">
          <Logo className="w-16 mr-4 text-purple-500" />
        </div>
        <nav className="grid gap-x-4 gap-y-6 grid-cols-2 md:grid-cols-3 w-full relative z-10 mt-8 lg:mt-12 container">
          {categories.map(category => (
            <div key={category.header} className="">
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
      <div className="mt-6 md:mt-12 text-xs font-bold text-gray-600">
        <div className="mt-6 container md:flex md:items-start md:justify-between">
          <ul className="grid grid-flow-col grid-cols-2 md:flex md:items-center gap-2">
            {footerLinks.map(footerLink => (
              <li
                key={footerLink.title}
                className="first:ml-0 ml-4 tertiary-link inter"
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
          <div className="mt-4 md:mt-0">
            <p>
              <span className="inter">&copy;</span> 2020-
              {new Date().getFullYear()} Leadgeek
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

const categories = [
  {
    header: "Product",
    items: [
      { title: "How it works", link: "demo" },
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
]

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
  {
    title: "RSS",
    link: "rss.xml",
  },
]

export default Footer
