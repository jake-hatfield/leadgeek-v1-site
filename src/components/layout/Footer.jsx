import React from "react"
import { Link } from "gatsby"

import Logo from "assets/svgs/Leadgeek-logo-light.svg"

const Footer = () => {
  const categories = [
    {
      header: "Product",
      items: [
        { title: "How it works", link: "how-it-works" },
        { title: "Pricing", link: "pricing" },
        { title: "Demo", link: "demo" },
      ],
    },
    {
      header: "Features",
      items: [
        { title: "All features", link: "features" },
        { title: "Criteria", link: "features/criteria" },
        { title: "Reliability", link: "features/reliability" },
        { title: "Support", link: "features/support" },
      ],
    },
    {
      header: "Company",
      items: [
        { title: "About", link: "about" },
        { title: "Contact", link: "contact" },
      ],
    },
  ]
  return (
    <footer className="pt-16 pb-12 relative z-20">
      <div className="mx-auto max-w-xl">
        <div className="flex justify-center">
          <Logo className="w-8 lg:w-10" />
        </div>
        <nav className="w-full relative z-10 mt-8 lg:mt-12 flex justify-between container">
          {categories.map(category => (
            <div key={category.header} className="mt-4 md:mt-0">
              <h5 className="h3 font-semibold">{category.header}</h5>
              <ul className="mt-4">
                {category.items.map(item => (
                  <li key={item.title} className="mb-2 last:mb-0 ">
                    <Link to={`/${item.link}`} className="tertiary-link">
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
      <div className="mt-8 lg:mt-12 text-xs font-bold text-gray-600">
        <div className="w-full" />
        <div className="mt-6 container md:flex md:items-start md:justify-between">
          <ul className="flex">
            {footerLinks.map(footerLink => (
              <li key={footerLink.title} className="no-m-first tertiary-link">
                {footerLink.title === "Sitemap" ? (
                  <a href={`/${footerLink.link}`}>{footerLink.title}</a>
                ) : (
                  <Link to={`/${footerLink.link}`}>{footerLink.title}</Link>
                )}
              </li>
            ))}
          </ul>
          <div>
            <p>Copyright &copy; {new Date().getFullYear()} Leadgeek</p>
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
