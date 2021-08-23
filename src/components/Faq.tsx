import React from "react"
import { Link } from "gatsby"

import { FAQJsonLd } from "gatsby-plugin-next-seo"
import { AnchorLink } from "gatsby-plugin-anchor-links"

const Faq = () => {
  const questions: {
    title: string
    description: JSX.Element
    rotate: string
  }[] = [
    {
      title: "How is Leadgeek different from other sourcing lists?",
      description: (
        <p>
          <span className="emphasized-text">
            Leadgeek is hyper-focused on{" "}
            <Link to="/features/criteria/" className="secondary-link">
              high standards
            </Link>{" "}
            for a{" "}
            <Link to={`/features/exclusivity/`} className="secondary-link">
              small group
            </Link>{" "}
            of dedicated, modern Amazon sellers
          </span>
          . By curating your daily leads by hand and displaying them in a
          powerful software, Leadgeek creates a seamless experience that allows
          you to sell better products, faster.
        </p>
      ),
      rotate: "rotate-2",
    },
    {
      title: "Are these products ungated for me?",
      description: (
        <p>
          <span className="emphasized-text">
            Leadgeek is built for sellers of every level
          </span>
          , but since everyone's account is slightly different, it's impossible
          to say until you check eligibility yourself. .
          <br />
          Certainly some will be, but if being restricted in too many products
          is a concern, we recommend the{" "}
          <Link to={`/signup/grow/`} className="secondary-link">
            Grow Plan
          </Link>{" "}
          since we prioritize more ungated products on that list.
        </p>
      ),
      rotate: "-rotate-2",
    },
    {
      title: "Can I sell these products on any Amazon marketplace?",
      description: (
        <p>
          The short answer is that{" "}
          <span className="emphasized-text">
            they're for Amazon US only, though you do <strong>not</strong> have
            to live in the US to use our service
          </span>
          . If you're not based in the US, it's recommended to use a domestic
          prepper to receive and process your shipments. If you have any
          questions about international selling,{" "}
          <Link to={`/contact/`} className="secondary-link">
            contact us
          </Link>
          .
        </p>
      ),
      rotate: "-rotate-1",
    },
    {
      title: "What if I decide this isn't for me?",
      description: (
        <p>
          No worries! There are no contracts, and you can cancel anytime. Just{" "}
          <span className="emphasized-text">
            email{" "}
            <a
              href="mailto:support@Leadgeek.io"
              target="_blank"
              rel="noreferrer"
              className="secondary-link"
            >
              <span>sup</span>
              <span>port@l</span>
              <span>eadgeek.io</span>
            </a>
          </span>{" "}
          and we'll get you sorted out. <br /> <br />{" "}
          <strong>Please note:</strong> due to the exclusive nature of the
          product, we do not issue refunds for the current month of service.
          However, we absolutely understand that special circumstances arise and
          honor genuine requests. See our{" "}
          <AnchorLink
            to={`/terms/#cancellation-policy`}
            title="Leadgeek cancellation policy"
            className="secondary-link"
          >
            cancellation policy
          </AnchorLink>{" "}
          for more info.
        </p>
      ),
      rotate: "-rotate-1",
    },
    {
      title: "How do I get in contact with support?",
      description: (
        <p>
          You can contact our support team weekdays from 9am-5pm CST{" "}
          <span className="emphasized-text">
            via our{" "}
            <Link to={`/contact/`} className="secondary-link">
              contact
            </Link>{" "}
            page
          </span>
          .
        </p>
      ),
      rotate: "rotate-2",
    },
  ]
  return (
    <>
      <FAQJsonLd
        questions={[
          {
            question: "How is Leadgeek different from other sourcing lists?",
            answer:
              "Leageek is hyper-focused on high standards for a small group of dedicated Amazon sellers.",
          },
          {
            question: "Are these products ungated for me?",
            answer:
              "It depends on the maturity of your Seller account. Since everyone's account is slightly different,  it's impossible to say until you check eligibility yourself - though certainly some will be. If being restricted in too many products is a concern, we recommend the Grow Plan since we prioritize more ungated products on that list.",
          },
          {
            question: "Are the prep or shipping to Amazon fees included?",
            answer:
              "No, they aren't. We'd like to, but it's impossible to account for prep and ship-to-Amazon costs since they'll be different for everyone. However, we do account for FBA fees and have a built-in prep tool.",
          },
          {
            question: "Can I sell these products on any Amazon marketplace?",
            answer:
              "The short answer is that they're for Amazon US only, though you do not have to live in the US to use our service . If you're not based in the US, it's recommended to use a domestic prepper to receive and process your shipments. If you have any questions about international selling, contact us.",
          },
          {
            question: "What if I decide this isn't for me?",
            answer:
              "No worries! To cancel your subscription, email support@leadgeek.io and we'll get you sorted out. Please note: due to the nature of the product, we do not issue refunds for the current month of service. However, we understand that special circumstances arise and honor genuine requests. See our cancellation policy for more info.",
          },
          {
            question: "How do I get in contact with support?",
            answer:
              "You can contact our support team weekdays from 9am-5pm CST via our contact page.",
          },
        ]}
      />
      <section className="text-gray-900 bg-splatter">
        <div className="py-12 lg:pt-32 lg:pb-24 container">
          <header className="relative text-center">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 inter header-height">
              Frequently asked questions
            </h2>
          </header>
          <ul className="mx-auto md:max-w-xl lg:max-w-2xl md:text-lg lg:text-xl leading-relaxed text-gray-800 text-center">
            {questions.map((question, i) => (
              <li
                key={i}
                className={`relative mx-auto md:max-w-xl lg:max-w-2xl mt-16 lg:mt-24 py-4 lg:py-6 px-6 bg-white rounded-lg border border-gray-900 transition-main shadow-graySm transform ${question.rotate}`}
              >
                <h3 className="text-xl md:text-2xl xl:text-3xl font-black text-gray-900 inter">
                  {question.title}
                </h3>
                <div className="mt-4 lg:mt-6 text-lg">
                  {question.description}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}

export default Faq
