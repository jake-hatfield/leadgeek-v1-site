import React from "react"

interface ChapterProps {
  number: number
  title: string
  description: string[]
  imageSrc: string
}

const Chapter: React.FC<ChapterProps> = ({
  number,
  title,
  description,
  imageSrc,
}) => {
  return (
    <section className="my-8 bg-gray-200 full-width border-t border-b border-gray-900">
      <div className="py-8 container md:max-w-xl lg:max-w-2xl">
        <strong className="uppercase text-sm lg:text-base">
          Chapter {number}:
        </strong>
        <h2 className="mt-2 text-xl lg:text-2xl font-bold inter">{title}</h2>
        <div className="mt-8 flex flex-col-reverse md:flex md:flex-row md:justify-between">
          <div className="md:w-3/5 text-base">
            {description.map((item: string, i) => (
              <p key={i} className="mt-4 first:md:mt-0">
                {item}
              </p>
            ))}
          </div>
          <div className="md:ml-6 md:w-2/5 px-4 md:px-0">
            <img
              src={imageSrc}
              className="mb-0 md:w-64 rounded-lg shadow-pinkSm transform rotate-3"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Chapter
