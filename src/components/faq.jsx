import React from "react"
import { Link } from "gatsby"

import Squiggles from "../assets/svgs/squiggles.svg"

const faq = ({ growPlanSeats, proPlanSeats }) => {
  const questions = [
    {
      id: "1",
      question: "How is LeadGeek different from other sourcing lists?",
      answer: (
        <p>
          LeadGeek is hyper-focused on high standards. We prioritize quality
          over quantity, meaning we only put out leads that have a solid sales
          history and meet our strict criteria. <br />
          <br /> Our intra-list competition is significantly lower than many
          other online arbitrage lists, which means more stable long-term prices
          and a higher likelihood that our leads are replenishable.
          <br />
          <br /> Finally, our team is committed to helping you succeed by
          providing thorough educational material and world-class support.
        </p>
      ),
    },
    {
      id: "2",
      question: "Can I just buy every lead on the list?",
      answer:
        "While that's possible with a big enough budget, it's more realistic to pick out a few products from the list every day that best fit your selling style.",
    },
    {
      id: "3",
      question: "Are these leads going to be oversaturated?",
      answer: (
        <p>
          Not at all. We realize that a big shortcoming of any online arbitrage
          list service is the competition among members, which is why we are
          extremely strict about capping exposure to these leads. Our Grow Plan
          is limited to {growPlanSeats} members and our Pro Plan is limited to{" "}
          {proPlanSeats}, ensuring there's no "race to the bottom."
          <br />
          <br />
          To learn more about our strategies to keep list competition low, read
          our{" "}
          <Link
            to={`/features/criteria#competition`}
            className="font-semibold hover:text-gray-900 transition-colors duration-200"
          >
            criteria page
          </Link>
          .
        </p>
      ),
    },
    {
      id: "4",
      question: "Are these products ungated for me?",
      answer: (
        <p>
          We check our leads against a Seller Central account to determine
          whether or not they're gated. But since everyone's account is slightly
          different, it's impossible to say until you check eligibility
          yourself.
          <br />
          <br />
          If being restricted in too many products is a concern, we recommend
          the{" "}
          <Link
            to={`/signup/grow`}
            className="font-semibold hover:text-gray-900 transition-colors duration-200"
          >
            Grow Plan
          </Link>{" "}
          since we prioritize slightly more ungated products on that list.
        </p>
      ),
    },
    {
      id: "5",
      question: "Are the prep or shipping to Amazon fees included?",
      answer: (
        <p>
          No, they aren't. We'd like to, but it's impossible to account for prep
          and ship-to-Amazon costs since they'll be different for everyone.
          However, we <i>do</i> account for FBA fees and a prep calculator is
          included on every daily sheet.
        </p>
      ),
    },
    {
      id: "6",
      question: "Can I sell these products on any Amazon marketplace?",
      answer: (
        <p>
          The short answer is that they're for Amazon US only. <br /> <br />
          Although these products are specifically meant to sell on the Amazon
          US marketplace, you do not have to live in the US to use our service.
          If you're not based in the US, we recommend using a domestic prepper
          to receive your shipments and process them to Amazon. If you have any
          questions about international selling,{" "}
          <Link
            to={`/contact`}
            className="font-semibold hover:text-gray-900 transition-colors duration-200"
          >
            contact us
          </Link>
          .
        </p>
      ),
    },
    {
      id: "7",
      question: "Do you offer lead samples or free trials?",
      answer:
        "In order to protect the integrity of the leads and the exclusivity our members pay for, we do not.",
    },
    {
      id: "8",
      question: "How often will my account be charged?",
      answer: (
        <p>
          Your subscription will renew for another month of service on the
          anniversary of your sign up date. <br /> <br />
          For more information LeadGeek subscriptions, read our{" "}
          <Link
            to={`/terms#subscription-policy`}
            className="font-semibold hover:text-gray-900 transition-colors duration-200"
          >
            terms of service
          </Link>
          .
        </p>
      ),
    },
    {
      id: "9",
      question: "What if I decide this isn't for me?",
      answer: (
        <p>
          No worries! To cancel your subscription, you can email{" "}
          <a
            href="mailto:support@leadgeek.io"
            target="_blank"
            rel="noreferrer"
            className="font-semibold hover:text-gray-900 transition-colors duration-200"
          >
            <span>sup</span>
            <span>port@l</span>
            <span>eadgeek.io</span>
          </a>{" "}
          and we'll get you sorted out. <br /> <br />{" "}
          <strong>Please note:</strong> due to the nature of the product, we do
          not issue refunds for the current month of service. However, we
          understand that special circumstances arise and honor genuine
          requests.
          <br /> <br /> For more information on LeadGeek's cancellation policy,
          read our{" "}
          <Link
            to={`/terms#cancellation-policy`}
            className="font-semibold hover:text-gray-900 transition-colors duration-200"
          >
            terms of service
          </Link>
          .
        </p>
      ),
    },
    {
      id: "10",
      question: "How do I get in contact with support?",
      answer: (
        <p>
          {" "}
          You can contact our support team weekdays from 8am to 5pm CST via our{" "}
          <Link
            to={`/contact`}
            className="font-semibold hover:text-gray-900 transition-colors duration-200"
          >
            contact page
          </Link>{" "}
          or by emailing{" "}
          <a
            href="mailto:support@leadgeek.io"
            target="_blank"
            rel="noreferrer"
            className="font-semibold hover:text-gray-900 transition-colors duration-200"
          >
            <span>sup</span>
            <span>port@l</span>
            <span>eadgeek.io</span>
          </a>
          .
        </p>
      ),
    },
  ]
  return (
    <section className="mt-12 lg:mt-24 bg-gray-100 text-gray-900">
      <div className="py-12 lg:py-24 md:w-3/4 lg:w-full container">
        <header className="relative">
          <h2
            className="relative z-10 text-3xl lg:text-4xl xl:text-5xl font-bold md:text-center lg:text-left"
            data-sal="slide-up"
            data-sal-duration="1000"
            data-sal-easing="ease"
          >
            Frequently asked questions
          </h2>
          <div className="absolute bottom-0 left-0 z-0 transform translate-y-6 -translate-x-16">
            <Squiggles className="hidden lg:inline-block w-64 text-purple-200" />
          </div>
        </header>
        <article>
          {questions.map(question => (
            <div
              key={question.id}
              className="mt-8 pt-6 lg:flex lg:flex-wrap lg:items-start border-t-2 border-gray-200"
            >
              <div className="mb-4 lg:mb-0 lg:pr-6 lg:w-1/3 md:text-lg font-medium">
                {question.question}
              </div>
              <div className="lg:pl-6 lg:w-2/3 text-gray-600 text-sm md:text-base">
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
