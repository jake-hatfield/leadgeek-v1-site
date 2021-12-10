import React from "react"
import { Link } from "gatsby"

const Footer: React.FC = () => {
  return (
    <footer className="py-12 relative z-10 border-t border-gray-900">
      <div className="mx-auto max-w-xl">
        <nav className="grid grid-flow-col auto-cols-fr gap-4 max-w-2xl relative z-10 px-4 md:px-0">
          {categories.map(category => (
            <div key={category.header}>
              <h3 className="h3 font-semibold">{category.header}</h3>
              <ul className="mt-4 text-gray-600">
                {category.items.map(item => (
                  <li key={item.title} className="mb-2 last:mb-0">
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
        <div className="container md:flex md:items-start md:justify-between">
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
          <div className="mt-6 md:mt-0">
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
  //   {
  // title: "RSS",
  // link: "rss.xml",
  //   },
]

export default Footer
