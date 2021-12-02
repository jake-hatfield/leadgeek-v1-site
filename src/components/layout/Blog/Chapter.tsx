import React from "react"

const Chapter = () => {
  return (
    <section className="my-8 bg-gray-200 full-width border-t border-b border-gray-900">
      <div className="py-8 container md:max-w-xl lg:max-w-2xl">
        <strong className="uppercase text-sm lg:text-base">Chapter 2:</strong>
        <h2 className="mt-2 text-xl lg:text-2xl font-bold inter">
          SaaS CRO backed by Cold War era science
        </h2>
        <div className="mt-8 flex flex-col-reverse md:flex md:flex-row md:justify-between">
          <div className="md:w-3/5 text-base">
            <p className="mt-4 md:mt-0">
              These fundamental UX design principles will lay the foundation for
              converting the right people.
            </p>
            <p className="mt-4">
              Following these rules reduces the often overlooked friction in
              CRO.
            </p>
          </div>
          <div className="md:ml-6 md:w-2/5 px-4 md:px-0">
            <img
              src={"https://statamic.com/img/blog/new-docs.jpg"}
              className="mb-0 md:w-64 rounded-lg shadow-pinkSm transform rotate-3"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Chapter
