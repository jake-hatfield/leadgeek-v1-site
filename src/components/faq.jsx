import React from "react"

const faq = () => {
  const questions = [
    {
      id: "1",
      question: "How is LeadGeek different from other sourcing lists?",
      answer:
        "There's a lot of great things about LeadGeek, so take your pick! There's a lot of great things about LeadGeek, so take your pick! There's a lot of great things about LeadGeek, so take your pick!",
    },
    {
      id: "2",
      question: "Can I just buy every lead on the list?",
      answer:
        "There's a lot of great things about LeadGeek, so take your pick!",
    },
    {
      id: "3",
      question: "Are these leads going to be oversaturated?",
      answer:
        "There's a lot of great things about LeadGeek, so take your pick!",
    },
    {
      id: "4",
      question: "Are these product leads ungated for me?",
      answer:
        "There's a lot of great things about LeadGeek, so take your pick!",
    },
    {
      id: "5",
      question: "When are the leads delivered?",
      answer:
        "There's a lot of great things about LeadGeek, so take your pick!",
    },
    {
      id: "6",
      question: "Are the prep or shipping to Amazon fees included?",
      answer:
        "There's a lot of great things about LeadGeek, so take your pick!",
    },
    {
      id: "7",
      question: "Can I sell these product leads on any Amazon marketplace?",
      answer:
        "There's a lot of great things about LeadGeek, so take your pick!",
    },
    {
      id: "8",
      question: "Do you offer lead samples or free trials?",
      answer:
        "There's a lot of great things about LeadGeek, so take your pick!",
    },
    {
      id: "9",
      question: "How often will my account be charged?",
      answer:
        "There's a lot of great things about LeadGeek, so take your pick!",
    },
    {
      id: "10",
      question: "What if I decide this isn't for me?",
      answer:
        "There's a lot of great things about LeadGeek, so take your pick!",
    },
    {
      id: "11",
      question: "How do I get in contact with support?",
      answer:
        "There's a lot of great things about LeadGeek, so take your pick!",
    },
  ]
  return (
    <section className="mt-12 lg:mt-24 bg-gray-100 text-gray-900">
      <div className="py-12 lg:py-24 container">
        <header>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold">
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
