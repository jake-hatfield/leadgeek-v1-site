import React from "react"
import { Link } from "gatsby"

import Check from "../assets/svgs/check.svg"

const signupFeatures = ({ featureList, price, plan, discount }) => {
  return (
    <div className="mt-4 lg:mt-0 mx-auto lg:ml-16 w-full lg:w-1/3 flex flex-col-reverse lg:flex-col max-w-sm">
      <header className="mt-6 lg:mt-0">
        <div className="flex items-center justify-between">
          <div className="text-xs uppercase text-gray-600">Selected plan:</div>
          <Link to={"/pricing#pricing-plans"} className="pr-2 text-xs link">
            Change plan
          </Link>
        </div>
        <h2 className="mt-4 text-xl lg:text-2xl text-gray-900 font-bold">
          LeadGeek <span className="text-purple-600">{plan}</span>
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

        <aside className="mt-6 text-sm text-gray-500">
          <ul>
            {featureList.map(feature => (
              <li key={feature.id} className="flex items-center">
                <Check className="h-4 w-4 text-teal-500 bg-teal-200 rounded-full" />
                <span className="ml-4">{feature.body}</span>
              </li>
            ))}
          </ul>
        </aside>
      </header>
      <aside className="mt-4 py-2 px-4 border-l-8 border-purple-400 bg-purple-100 text-purple-600">
        <div className="flex">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="mt-1 h-4 w-4"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <p className="ml-2 text-sm">
            <strong>Don't worry:</strong> Your LeadGeek subscription will renew
            automatically, but you'll be able to adjust your subscription status
            at any time by contacting support. We'll happily refund you if you
            forget to cancel.
          </p>
        </div>
      </aside>
    </div>
  )
}

export default signupFeatures
