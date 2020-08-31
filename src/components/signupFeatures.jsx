import React from "react"
import { Link } from "gatsby"

import Check from "../assets/check.svg"

const signupFeatures = ({ featureList, price, plan, discount }) => {
  return (
    <div className="mt-12 lg:mt-0 mx-auto lg:ml-16 w-full lg:w-1/3 max-w-sm">
      <header>
        <div className="flex items-center justify-between">
          <div className="text-xs uppercase text-gray-600">Selected plan:</div>
          <Link
            to={"/pricing#pricing-plans"}
            className="py-1 px-2 bg-purple-100 rounded-full text-xs text-purple-600 hover:text-purple-800 hover:bg-purple-200 focus:outline-none focus:shadow-outline transition-colors duration-200"
          >
            Change plan
          </Link>
        </div>
        <h2 className="mt-4 text-xl lg:text-2xl text-gray-900 font-bold">
          LeadGeek {plan}
        </h2>
        <div className="mt-2">
          <div className="flex items-center justify-between">
            {plan === "Bundle" ? (
              <div className="inline-block">
                <span className="line-through font-medium text-gray-600">
                  $318
                </span>
                <span className="ml-2 text-2xl font-bold">${price}</span>
                <span className="inline-block text-gray-500 text-base">
                  /mo
                </span>
              </div>
            ) : (
              <div>
                <span className="text-2xl font-bold">${price}</span>
                <span className="inline-block text-gray-500 text-base">
                  /mo
                </span>
              </div>
            )}
            {plan === "Bundle" && (
              <span className="py-1 px-2 inline-block bg-teal-200 rounded-full text-xs text-teal-600 focus:outline-none focus:shadow-outline">
                {`${discount}% discount`}
              </span>
            )}
          </div>
        </div>
      </header>
      <aside className="mt-6 text-sm text-gray-500">
        <ul>
          {featureList.map(feature => (
            <li key={feature.number} className="flex items-center">
              <Check className="h-4 w-4 text-teal-500 bg-teal-200 rounded-full" />
              <span className="ml-4">{feature.body}</span>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  )
}

export default signupFeatures
