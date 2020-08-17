import React from "react"
import { Link } from "gatsby"

import Check from "../assets/check.svg"

const sideCard = ({ featureList, plan, price, link, start }) => {
  return (
    <div
      className={`${
        start
          ? `lg:col-start-1 lg:col-end-4 rounded-tl-md rounded-bl-md`
          : `lg:col-start-8 lg:col-end-11 rounded-tr-md rounded-br-md`
      } mt-12 lg:mt-0 mx-auto lg:mx-0 max-w-md md:max-w-sm lg:max-w-none lg:row-start-2 lg:row-end-3 shadow-md`}
    >
      <header className="pt-8 pb-6 px-6 bg-white rounded-t-md text-center background-repeat">
        <h3 className="text-2xl lg:text-3xl font-semibold">{plan} Plan</h3>
        <div className="mt-1 flex items-center justify-center text-5xl lg:text-4xl font-bold">
          <span className="text-2xl font-bold">$</span>
          <span>{price}</span>
          <span className="ml-1 inline-block text-gray-600 text-2xl lg:text-lg">
            /mo
          </span>
        </div>
      </header>
      <div className="p-6 rounded-b-md border-t-2 border-gray-200">
        <ul>
          {featureList.map(feature => (
            <li key={feature.number} className="flex items-center">
              <Check className="h-4 w-4 text-teal-500 bg-teal-200 rounded-full" />
              <p className="ml-4 text-gray-600">{feature.body}</p>
            </li>
          ))}
        </ul>
        <Link
          to={`/signup/${link}`}
          className="mt-8 py-3 block shadow-sm bg-white rounded-md text-center font-bold text-purple-500 hover:text-purple-600 transition-colors duration-200 focus:outline-none focus:shadow-outline"
        >
          Get the {plan} Plan
        </Link>
      </div>
    </div>
  )
}

export default sideCard
