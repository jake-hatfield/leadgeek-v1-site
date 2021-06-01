import React from "react"
import { Link } from "gatsby"

const Faq = () => {
  const questions = [
    {
      title: "How is Leadgeek different from other sourcing lists?",
      desc: (
        <p>
          {" "}
          <span className="emphasized-text">
            Leadgeek is hyper-focused on{" "}
            <Link to="/features/criteria/" className="secondary-link">
              high standards
            </Link>{" "}
            for a{" "}
            <Link to={`/features/exclusivity/`} className="secondary-link">
              small group
            </Link>{" "}
            of dedicated Amazon sellers.
          </span>
        </p>
      ),
      rotate: "rotate-3 hover:rotate-2",
    },
    {
      title: "Are these products ungated for me?",
      desc: (
        <p>
          It depends on the maturity of your Seller account. Since everyone's
          account is slightly different,{" "}
          <span className="emphasized-text">
            it's impossible to say until you check eligibility yourself - though
            certainly some will be
          </span>
          .
          <br />
          <br />
          If being restricted in too many products is a concern, we recommend
          the{" "}
          <Link to={`/signup/grow/`} className="secondary-link">
            Grow Plan
          </Link>{" "}
          since we prioritize more ungated products on that list.
        </p>
      ),
      rotate: "-rotate-2 hover:rotate-1",
    },
    {
      title: "Are the prep or shipping to Amazon fees included?",
      desc: (
        <p>
          <span className="emphasized-text">
            No, they aren't. We'd like to, but it's impossible to account for
            prep and ship-to-Amazon costs since they'll be different for
            everyone
          </span>
          . However, we <i>do</i> account for{" "}
          <Link to={`/features/calculations/`} className="secondary-link">
            FBA fees
          </Link>{" "}
          and a have a built-in{" "}
          <Link to={`/features/prep/`} className="secondary-link">
            prep tool
          </Link>
          .
        </p>
      ),
      rotate: "rotate-2 hover:rotate-1",
    },
    {
      title: "Do you include listings where Amazon is a seller?",
      desc: (
        <p>
          <span className="emphasized-text">In some cases, yeah</span>. We don't
          necessarily shy away from listings with Amazon as a seller if there's
          very strong historic proof that they're sharing the buy box and that
          it's advantageous for FBA sellers.
        </p>
      ),
      rotate: "rotate-1 hover:-rotate-1",
    },
    {
      title: "Can I sell these products on any Amazon marketplace?",
      desc: (
        <p>
          The short answer is that{" "}
          <span className="emphasized-text">
            they're for Amazon US only, though you do not have to live in the US
            to use our service
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
      rotate: "-rotate-3 hover:rotate-2",
    },
    {
      title: "Do you offer lead samples or free trials?",
      desc: (
        <p>
          In order to protect the integrity of the leads and the exclusivity our
          members pay for, <span className="emphasized-text">we do not</span>.
        </p>
      ),
      rotate: "rotate-1 hover:rotate-3",
    },
    {
      title: "How often will my account be charged?",
      desc: (
        <p>
          <span className="emphasized-text">
            Your subscription will renew for another month of service on the
            anniversary of your sign up date
          </span>
          . For more information on Leadgeek subscriptions, read our{" "}
          <Link to={`/terms/#subscription-policy`} className="secondary-link">
            billing policy
          </Link>
          .
        </p>
      ),
      rotate: "rotate-3 hover:-rotate-1",
    },
    {
      title: "What if I decide this isn't for me?",
      desc: (
        <p>
          No worries!{" "}
          <span className="emphasized-text">
            To cancel your subscription, you can email{" "}
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
          <strong>Please note:</strong> due to the nature of the product, we do
          not issue refunds for the current month of service. However, we
          understand that special circumstances arise and honor genuine
          requests. See our{" "}
          <Link to={`/terms/#cancellation-policy`} className="secondary-link">
            cancellation policy
          </Link>{" "}
          for more info.
        </p>
      ),
      rotate: "-rotate-1 hover:-rotate-2",
    },
    {
      title: "How do I get in contact with support?",
      desc: (
        <p>
          {" "}
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
      rotate: "-rotate-3 hover:-rotate-1",
    },
  ]
  return (
    <section className="text-gray-900 bg-splatter">
      <div className="py-12 lg:pt-32 lg:pb-24 container">
        <header className="relative">
          <h2 className="relative text-3xl lg:text-4xl xl:text-5xl font-bold inter text-center bg-white">
            Frequently asked questions
          </h2>
        </header>
        <ul className="mx-auto md:max-w-xl lg:max-w-2xl md:text-lg lg:text-xl leading-relaxed text-gray-800 text-center">
          {questions.map((question, i) => (
            <li
              key={i}
              className={`relative mx-auto md:max-w-xl lg:max-w-2xl mt-8 lg:mt-24 py-4 lg:py-6 px-6 bg-white rounded-lg border border-gray-900 transition-main shadow-dark transform ${question.rotate}`}
            >
              <h3 className="text-xl md:text-2xl xl:text-3xl font-black text-gray-900 inter">
                {question.title}
              </h3>
              <div className="mt-4 lg:mt-6 text-lg">{question.desc}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Faq