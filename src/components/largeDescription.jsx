import React from "react"

const largeDescription = ({ bgColor, mainHeader, mainSubheader, items }) => {
  return (
    <section className={`mt-12 lg:mt-24 py-12 lg:py-24 ${bgColor}`}>
      <div className="container text-gray-700">
        <header className="max-w-2xl">
          <h2 className="text-4xl lg:text-6xl font-black text-gray-900">
            {mainHeader}
          </h2>
          <p className="mt-6 text-gray-700 text-xl leading-relaxed">
            {mainSubheader}
          </p>
        </header>
        {items.map(item => (
          <article key={item.id} className="mt-12">
            <header className="text-xl lg:text-3xl font-bold text-gray-900">
              <h3>{item.header}</h3>
            </header>
            <div className="mt-6 md:flex md:justify-between md:items-center">
              <div className="md:w-1/2">{item.content}</div>
              <div className="mt-6 md:mt-0 md:ml-8 md:w-1/2 leading-relaxed lg:text-xl">
                {item.content}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default largeDescription
