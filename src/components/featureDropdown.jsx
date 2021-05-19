import React from "react"
import { Link } from "gatsby"

import { animated } from "react-spring"

import demoGif from "assets/gifs/preview.gif"
import PlayButton from "assets/svgs/play.svg"

function Dropdown({ title, items, open, setOpen, animation }) {
  const toggle = () => setOpen(!open)

  return (
    <div>
      <button
        tabIndex={0}
        onKeyPress={() => toggle(!open)}
        onMouseEnter={() => open === false && toggle(!open)}
        onMouseLeave={() => open === true && toggle(!open)}
        className="inline-flex items-center relative space-x-1 text-gray-500 text-base leading-6 font-medium hover:text-gray-700 focus:outline-none focus:text-gray-700 transition ease-in-out duration-200 md:cursor-default"
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
          <animated.div
            className={`${
              open ? `block` : `hidden`
            } pt-8 px-2 sm:px-0 w-screen navbar-width absolute z-40 left-50 transform`}
            style={animation}
          >
            <div className="rounded-md shadow-md">
              <div className="flex items-center justify-between rounded-md shadow-xs overflow-hidden bg-gray-100">
                <div className="px-5 py-6 w-full lg:w-3/4 xl:w-2/3 relative z-20 grid grid-cols-2 gap-6 sm:gap-8 bg-white border-r-2 border-gray-200">
                  {items.map(item => (
                    <Link
                      key={item.linkID}
                      to={`/${item.link}`}
                      className="-m-3 p-2 flex items-start space-x-4 rounded-md hover:bg-gray-100 text-left transition ease-in-out duration-200"
                    >
                      {item.path}
                      <div className="space-y-1">
                        <p className="text-sm leading-6 font-semibold text-gray-700">
                          {item.title}
                        </p>
                        <p className="text-sm leading-5 font-normal text-gray-500">
                          {item.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="hidden lg:flex lg:flex-col w-1/4 xl:w-1/3 h-48 items-center justify-center">
                  <div>
                    <div className="relative">
                      <Link to={"/demo"}>
                        <PlayButton className="h-12 w-12 gif-button text-purple-600" />
                        <img
                          src={demoGif}
                          alt="Leadgeek demo preview"
                          className="mb-0 w-48 xl:w-64 rounded-md shadow-xl"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </animated.div>
        </div>
      </button>
    </div>
  )
}

export default Dropdown
