import React from "react"

import ArrowLink from "../components/arrowLink"

const otherFeatures = ({
  criteria,
  reliability,
  education,
  support,
  margin,
  bgColor,
  primaryTextColor,
  secondaryTextColor,
  iconColor,
}) => {
  return (
    <section
      className={`${margin} py-12 md:py-16 lg:py-24 ${bgColor} ${primaryTextColor}`}
    >
      <div className="container">
        <header>
          <h2 className="mt-2 text-3xl lg:text-4xl xl:text-5xl font-bold">
            Explore other LeadGeek features
          </h2>
        </header>
        <div className="mt-12 lg:flex lg:justify-between">
          {criteria && (
            <div
              v-for="item in items"
              className="lg:w-1/3 first:ml-0 lg:ml-8 first:mt-0 mt-8 lg:mt-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className={`p-2 h-10 w-10 ${iconColor} rounded-md`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                />
              </svg>
              <h3 className="mt-6 lg:text-xl font-semibold">Strict criteria</h3>
              <p className={`mt-2 ${secondaryTextColor}`}>
                Don't sacrifice standards or cut any corners - every lead needs
                to meet rigorous requirements before they're approved and sent
                to you.
              </p>
              <ArrowLink
                link="/features/criteria"
                linkText="Learn about lead criteria"
              />
            </div>
          )}
          {reliability && (
            <div
              v-for="item in items"
              className="lg:w-1/3 first:ml-0 lg:ml-8 first:mt-0 mt-8 lg:mt-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className={`p-2 h-10 w-10 ${iconColor} rounded-md`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                />
              </svg>
              <h3 className="mt-6 lg:text-xl font-semibold">
                Proven reliability
              </h3>
              <p className={`mt-2 ${secondaryTextColor}`}>
                Our team works tirelessly to bring you a consistent output of
                high-quality products that you can count on to deliver results.
              </p>
              <ArrowLink
                link="/features/reliability"
                linkText="Learn about sourcing reliability"
              />
            </div>
          )}
          {education && (
            <div
              v-for="item in items"
              className="lg:w-1/3 first:ml-0 lg:ml-8 first:mt-0 mt-8 lg:mt-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className={`p-2 h-10 w-10 ${iconColor} rounded-md`}
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>
              <h3 className="mt-6 lg:text-xl font-semibold">
                Seller education
              </h3>
              <p className={`mt-2 ${secondaryTextColor}`}>
                Learn foundational online arbitrage concepts and strategies
                through guides, courses, and templates available for members.
              </p>
              <ArrowLink
                link="/features/education"
                linkText="Learn about arbitrage training"
              />
            </div>
          )}
          {support && (
            <div
              v-for="item in items"
              className="lg:w-1/3 first:ml-0 lg:ml-8 first:mt-0 mt-8 lg:mt-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className={`p-2 h-10 w-10 ${iconColor} rounded-md`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <h3 className="mt-6 lg:text-xl font-semibold">Member support</h3>
              <p className={`mt-2 ${secondaryTextColor}`}>
                Our experienced team has your back! Reach out to us for
                dedicated support and other perks exclusive to LeadGeek sellers.
              </p>
              <ArrowLink
                link="/features/support"
                linkText="Learn about member support"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default otherFeatures
