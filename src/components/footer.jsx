import React from "react"
import { Link } from "gatsby"

const Footer = () => {
  const categories = [
    {
      header: "Features",
      items: [
        { title: "Criteria", link: "features/criteria" },
        { title: "Reliability", link: "features/reliability" },
        { title: "Education", link: "features/education" },
        { title: "Support", link: "features/support" },
      ],
    },
    {
      header: "Product",
      items: [
        { title: "Pricing", link: "pricing" },
        { title: "Demo", link: "demo" },
        { title: "Guides", link: "guides" },
      ],
    },
    {
      header: "Company",
      items: [
        { title: "About", link: "about" },
        { title: "Contact", link: "contact" },
      ],
    },
    {
      header: "Legal",
      items: [
        { title: "Privacy", link: "privacy" },
        { title: "Terms", link: "terms" },
      ],
    },
  ]
  return (
    <footer className="py-12 relative z-20 bg-gray-900 text-gray-400">
      <nav className="container flex justify-between flex-wrap md:flex-no-wrap">
        <div className="md:mr-12 lg:mr-24 w-full md:w-2/6">
          <Link
            to={`/`}
            className="inline-block font-bold text-2xl lg:text-3xl text-white focus:outline-none focus:shadow-outline"
          >
            <h4>
              Lead<span className="text-purple-500">Geek</span>
            </h4>
          </Link>
          <p className="mt-6 max-w-md md:max-w-none text-gray-400">
            Premium online arbitrage leads for Amazon sellers who want to put
            product sourcing on full throttle.
          </p>
        </div>
        {categories.map(category => (
          <div
            key={category.header}
            className="mt-8 md:mt-0 w-1/2 md:w-1/6 text-sm lg:text-base"
          >
            <h5 className="uppercase tracking-tight font-semibold text-gray-500">
              {category.header}
            </h5>
            <ul className="mt-5">
              {category.items.map(item => (
                <li key={item.title} className="mb-3 last:mb-0">
                  <Link
                    to={`/${item.link}`}
                    className="hover:text-gray-300 transition-colors duration-200"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
      <div className="mt-12 container md:text-center text-sm md:text-base text-gray-600">
        <div className="w-full border border-gray-800" />
        <div className="mt-6">
          &copy; {new Date().getFullYear()} LeadGeek, Inc. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
