import React from "react"
import { Link } from "gatsby"

const Footer = () => {
  const categories = [
    {
      header: "Features",
      items: [
        { title: "Criteria", link: "features/criteria" },
        { title: "Reliability", link: "features/reliability" },
        // { title: "Education", link: "features/education" },
        { title: "Support", link: "features/support" },
      ],
    },
    {
      header: "Product",
      items: [
        { title: "Pricing", link: "pricing" },
        { title: "Demo", link: "demo" },
        // { title: "Guides", link: "guides" },
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
    <footer className="pt-16 pb-12 relative z-20 bg-gray-900 text-gray-400">
      <nav className="container relative z-10 flex justify-between flex-wrap md:flex-no-wrap">
        <div className="md:mr-12 lg:mr-24 w-full md:w-2/6">
          <Link
            to={`/`}
            className="inline-block font-bold text-2xl lg:text-3xl text-white focus:outline-none focus:shadow-outline"
          >
            <h4>
              Lead<span className="text-purple-500">Geek</span>
            </h4>
          </Link>
          <address className="mt-8 md:mt-4 flex not-italic text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-6 w-6 flex-none"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            <a
              href="https://www.google.com/maps/place/6333+E+Mockingbird+Ln+%23147,+Dallas,+TX+75214"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 text-sm lg:text-base"
            >
              6333 E Mockingbird Lane, Suite 147 Dallas, TX 75214
            </a>
          </address>
        </div>
        {categories.map(category => (
          <div
            key={category.header}
            className="mt-4 md:mt-0 w-1/2 md:w-1/6 text-sm lg:text-base"
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
        <div className="mt-6 md:flex md:items-center md:justify-center">
          &copy; {new Date().getFullYear()} LeadGeek, Inc. All rights reserved
          <div className="mt-2 md:mt-0">
            <span className="ml-1 hidden md:inline-block"> |</span>{" "}
            <a href="/sitemap.xml">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
