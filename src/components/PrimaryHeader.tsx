import React from "react"
import { Link } from "gatsby"

interface PrimaryHeaderProps {
  title: string
  description: JSX.Element | null
  nav: boolean
  goHome: boolean
  linkOne: string | null
  linkOneText: string | null
  linkTwo: string | null
  linkTwoText: string | null
  outsideLink: string | null
  svgOne: JSX.Element | null
  svgTwo: JSX.Element | null
}

const PrimaryHeader: React.FC<PrimaryHeaderProps> = ({
  title,
  description,
  nav,
  goHome,
  linkOne,
  linkOneText,
  linkTwo,
  linkTwoText,
  outsideLink,
  svgOne,
  svgTwo,
}) => {
  return (
    <header
      className={`relative container overflow-hidden lg:overflow-visible md:text-center`}
    >
      <div className="md:mx-auto relative z-10 max-w-4xl">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-gray-900 inter header-height">
          {title}
        </h1>
        <div className="mt-4 lg:mt-6 mx-auto h4 bg-white text-gray-900">
          {description}
        </div>
        {nav && (
          <nav className="mt-6 lg:mt-8 font-semibold text-center">
            {goHome && (
              <div
                data-sal="slide-up"
                data-sal-delay="500"
                data-sal-duration="500"
                data-sal-easing="ease in out"
              >
                <Link to={`/`} className="block md:inline-block cta-link inter">
                  {linkOneText}
                </Link>
              </div>
            )}
            {linkOne && (
              <div
                data-sal="slide-up"
                data-sal-delay="500"
                data-sal-duration="500"
                data-sal-easing="ease in out"
              >
                <Link
                  to={`/${linkOne}/`}
                  className="block md:inline-block cta-link inter"
                >
                  {linkOneText}
                </Link>
              </div>
            )}
            {outsideLink && (
              <div
                className="w-full inline-block bg-white"
                data-sal="slide-up"
                data-sal-delay="500"
                data-sal-duration="500"
                data-sal-easing="ease in out"
              >
                <a
                  href={outsideLink}
                  className="block md:inline-block cta-link inter"
                >
                  {linkOneText}
                </a>
              </div>
            )}
            {linkTwo && (
              <div
                className="inline-block mt-4 lg:mt-6 bg-white"
                data-sal="fade"
                data-sal-delay="800"
                data-sal-duration="500"
                data-sal-easing="ease in out"
              >
                <Link
                  to={`/${linkTwo}/`}
                  className="secondary-link text-gray-700"
                >
                  {linkTwoText}
                </Link>
              </div>
            )}
          </nav>
        )}
      </div>
      {svgOne && svgOne}
      {svgTwo && svgTwo}
    </header>
  )
}

export default PrimaryHeader
