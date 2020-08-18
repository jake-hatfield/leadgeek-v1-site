import React from "react"

const smallDescription = ({ mainHeader, item, reverse }) => {
  return (
    <section className="mt-12 lg:mt-24">
      <div className="container text-gray-700">
        <article
          className={`${
            reverse ? `md:flex-row-reverse` : `md:flex-row`
          } mt-6 md:flex md:justify-between`}
        >
          <header className="md:w-1/2">
            <span className="text-sm text-purple-600 uppercase font-bold">
              {item.id}
            </span>
            <h3 className="mt-2 text-2xl lg:text-3xl font-bold text-gray-900">
              {item.header}
            </h3>
            <p className="mt-4 leading-relaxed">{item.content}</p>
          </header>
          <div className="md:w-1/2">hello</div>
        </article>
      </div>
    </section>
  )
}

export default smallDescription
