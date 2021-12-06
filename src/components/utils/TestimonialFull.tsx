import React from "react"

// packages
import { GatsbyImage } from "gatsby-plugin-image"

// assets
import Quote from "@assets/svgs/quote.svg"

interface TestimonialFullProps {
  key: number | null
  size: string | null
  margin: string | null
  position: string | null
  text: JSX.Element
  image: any
  source: string
  description: string
  rotate: string
}

const TestimonialFull: React.FC<TestimonialFullProps> = ({
  size,
  margin,
  position,
  text,
  image,
  source,
  description,
  rotate,
}) => {
  const cardWidth = size === "sm" ? "max-w-md" : "md:max-w-xl"
  const cardMargin = margin || "mt-16 lg:mt-24"
  const cardPosition = position || "md:flex justify-center"

  return (
    <article
      className={`relative ${cardPosition} ${cardMargin} text-center transform`}
    >
      <div
        className={`relative z-40 w-full ${cardWidth} transform ${
          rotate ? rotate : ""
        } transition-main`}
      >
        <div className="relative py-4 lg:py-6 px-6 bg-white rounded-lg border border-gray-900 shadow-graySm">
          <blockquote
            className={`${
              size === "sm" ? "text-sm" : "md:text-lg"
            } leading-relaxed text-gray-800`}
          >
            {text}
          </blockquote>
          <div className="mt-4 md:flex md:items-center md:justify-center">
            <div className="flex items-center justify-center">
              {image && (
                <GatsbyImage
                  image={image}
                  alt={`${source}'s testimonial`}
                  title={`${source}'s testimonial`}
                  className="rounded-full shadow-tealSm border border-gray-900 bg-gray-900 transform -rotate-6"
                />
              )}
              <cite className="ml-4 text-sm font-semibold inter text-gray-900">
                {source}
              </cite>
            </div>
            <span className="hidden md:block mx-2 font-semibold text-purple-500">
              /
            </span>
            <p className="mt-2 md:mt-0 font-semibold text-xs lg:text-sm text-gray-600 inter">{`${description} FBA seller`}</p>
          </div>
        </div>
        <div className="absolute top-0 left-0 font-bold text-5xl svg-shadow">
          <Quote
            className={`${
              size === "sm"
                ? "h-6 w-6 -translate-x-4"
                : "h-8 w-8 -translate-x-6"
            } text-gray-900 transform rotate-180`}
          />
        </div>
        <div className="absolute bottom-0 right-0 font-bold text-5xl svg-shadow">
          <Quote
            className={`${
              size === "sm" ? "h-6 w-6 translate-x-4" : "h-8 w-8 translate-x-6"
            } text-gray-900 transform -translate-y-2 `}
          />
        </div>
      </div>
    </article>
  )
}

export default TestimonialFull
