import React from "react"

const faq = () => {
  const questions = [
    {
      id: "1",
      question: "What's something about LeadGeek?",
      answer:
        "There's a lot of great things about LeadGeek, so take your pick!",
    },
  ]
  return (
    <section className="mt-12 lg:mt-24 bg-gray-100 text-gray-900">
      <div className="py-12 lg:py-24 container">
        <header>
          <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold">
            Frequently asked questions
          </h2>
        </header>
        <article>
          {questions.map(question => (
            <div
              key={question.id}
              className="mt-8 pt-6 lg:flex lg:flex-wrap lg:items-start border-t-2 border-gray-200"
            >
              <div className="mb-4 lg:mb-0 lg:pr-6 lg:w-1/3 lg:text-lg font-medium">
                {question.question}
              </div>
              <div className="lg:pl-6 lg:w-2/3 text-gray-600 text-sm lg:text-base">
                {question.answer}
              </div>
            </div>
          ))}
        </article>
      </div>
    </section>
  )
}

export default faq
