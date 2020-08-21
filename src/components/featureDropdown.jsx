import React from "react"
import { Link } from "gatsby"

function Dropdown({ title, items, open, setOpen }) {
  const toggle = () => setOpen(!open)

  return (
    <div>
      <button
        tabIndex={0}
        onKeyPress={() => toggle(!open)}
        onMouseEnter={() => toggle(!open)}
        onMouseLeave={() => toggle(!open)}
        className="inline-flex items-center relative space-x-1 text-gray-500 text-base leading-6 font-medium hover:text-purple-600 focus:outline-none focus:text-purple-600 transition ease-in-out duration-200 md:cursor-default"
      >
        <div>
          <div className="flex items-center md:cursor-pointer">
            {title}
            <svg
              className="h-5 w-5 text-gray-400 group-hover:text-gray-900 group-focus:text-gray-900 transition ease-in-out duration-200"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div
            className={`${
              open ? `block` : `hidden`
            } pt-6 px-2 sm:px-0 w-screen navbar-width absolute z-40 left-50 transform`}
          >
            <div className="rounded-md shadow-md">
              <div className="flex items-center justify-between rounded-md shadow-xs overflow-hidden bg-white">
                <div className="px-5 py-6 w-full lg:w-3/4 xl:w-2/3 relative z-20 grid grid-cols-2 gap-6 sm:gap-8">
                  {items.map(item => (
                    <Link
                      key={item.linkID}
                      to={`/${item.link}`}
                      className="-m-3 p-2 flex items-start space-x-4 rounded-md hover:bg-gray-100 text-left transition ease-in-out duration-200"
                    >
                      <svg
                        className="h-6 w-6 flex-shrink-0 text-purple-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                      </svg>
                      <div className="space-y-1">
                        <p className="text-sm leading-6 font-medium text-gray-900">
                          {item.title}
                        </p>
                        <p className="text-sm leading-5 text-gray-500">
                          {item.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="hidden lg:flex w-1/4 xl:w-1/3 h-48 items-center justify-center bg-gray-100 border-l-2 border-gray-200">
                  GIF
                </div>
              </div>
            </div>
          </div>
        </div>
      </button>
    </div>
  )
}

export default Dropdown
