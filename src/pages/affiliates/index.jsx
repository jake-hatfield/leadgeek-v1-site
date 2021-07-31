import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import { GatsbySeo } from "gatsby-plugin-next-seo"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import Layout from "components/layout/Layout"
import FormField from "components/utils/FormField"
import PasswordFormField from "components/utils/PasswordFormField"
import Marquee from "react-fast-marquee"

import Bullet from "assets/svgs/bullet.svg"
import OgImage from "assets/images/og/og-contact.jpg"

const ContactPage = ({ data, location }) => {
  const title = "Leadgeek Affiliate Program"
  const desc =
    "Become a Leadgeek affiliate and start earning 25% lifetime recurring commissions."
  const cta = `/affiliates/#apply`

  const benefits = [
    {
      title:
        "Get a 25% lifetime recurring cut on the sale of any plan, product, or service when you refer a new customer.",
    },
    {
      title:
        "There's plenty of time to make the conversion with 90-day cookies.",
    },
    {
      title:
        "Our first-touch attribution model gives 100% credit to you if you're the original referrer.",
    },
    {
      title:
        "See your transactions and future payouts in real-time with a custom affiliate dashboard.",
    },
    {
      title:
        "Get paid monthly & on time via PayPal for commissions that are more than 60 days old.",
    },
    {
      title:
        "No minimum payout thresholds, no maximum earning caps. The sky's the limit.",
    },
  ]

  return (
    <Layout location={location}>
      <GatsbySeo
        title={title}
        description={desc}
        openGraph={{
          title,
          description: desc,
          url: "https://leadgeek.io/affliliates/",
          type: "website",
          images: [
            {
              url: OgImage,
              width: 1200,
              height: 630,
              alt: "Become a Leadgeek affiliate",
            },
          ],
        }}
        language="en"
      />

      <section className="relative overflow-hidden bg-splatter">
        <div className="relative max-w-2xl lg:max-w-7xl md:mx-auto py-8 md:py-16 lg:py-48 px-4 flex flex-col-reverse lg:flex-none">
          <header className="relative z-30 lg:max-w-xl mx-auto lg:mx-0 md:text-center lg:text-left">
            <p className="uppercase font-bold text-sm md:text-base text-purple-500">
              To future Leadgeek affiliates:
            </p>
            <h1 className="mt-2 text-3xl md:text-5xl font-black text-gray-900 inter header-height">
              Start earning some{" "}
              <span role="img" aria-label="Fire Emoji">
                🔥
              </span>{" "}
              <span className="emphasized-text">recurring commissions</span>
            </h1>
            <h2 className="lg:max-w-lg mt-4 lg:mt-6 mx-auto lg:mx-0 text-gray-900 text-lg bg-white">
              Do you like online arbitrage, making extra money, and helping
              others grow their business? Blow up the earnings from your YouTube
              channel, Discord server, or blog with{" "}
              <span className="emphasized-text">
                25% lifetime recurring commissions
              </span>{" "}
              for every new client you refer to Leadgeek.
            </h2>
            <div className="lg:flex lg:items-center mt-4 lg:mt-6">
              <div
                data-sal="slide-up"
                data-sal-delay="500"
                data-sal-duration="500"
                data-sal-easing="ease in out"
              >
                <AnchorLink
                  to={cta}
                  title="See the latest arbitrage leads"
                  className="block md:inline-block cta-link inter text-center text-base"
                  gatsbyLinkProps={{ id: "cta" }}
                >
                  Sign up now
                </AnchorLink>
              </div>
            </div>
          </header>
          <div className="block lg:absolute lg:inset-y-0 lg:right-0 max-w-2xl xl:max-w-3xl w-full mx-auto pb-8 lg:py-24 transform lg:translate-x-56 xl:translate-x-24">
            <div className="lg:h-full mx-auto lg:pl-12 lg:-mr-64">
              <Img
                fluid={data.detailsImage.childImageSharp.fluid}
                alt="Leadgeek app feed"
                className="w-full rounded-lg ring-4 md:ring-6 lg:ring-8 ring-pink-600 ring-opacity-50 shadow-2xl"
              />
            </div>
          </div>
        </div>
        <Marquee
          className="py-3 bg-gray-100 text-gray-900 font-semibold border-t border-b border-gray-500"
          gradient={false}
          speed="100"
          pauseOnHover={true}
        >
          <p className="pl-24">
            <span className="text-pink-600">Important</span>: You've worked hard
            building an audience that respects you. When you promote Leadgeek
            products, we take that seriously and reward you for all your hard
            work.{" "}
            <span role="img" aria-label="Moneybag Emoji">
              💰
            </span>
          </p>
        </Marquee>
      </section>
      {/* section 1: benefits/sign up */}
      <section id="apply" className="relative overflow-hidden bg-splatter">
        <div className="mt-8 md:mt-12 lg:mt-0 lg:mb-32 relative max-w-2xl lg:max-w-7xl md:mx-auto py-8 md:py-16 lg:py-48 px-4 flex flex-col-reverse lg:flex-none">
          <header className="relative md:text-center lg:text-left">
            <h2 className="lg:max-w-xl text-3xl md:text-5xl font-black text-gray-900 inter header-height">
              <span className="emphasized-text">
                Increase your passive income
              </span>{" "}
              with these affiliate benefits:
            </h2>
            <ul className="lg:max-w-lg mt-4 lg:mt-6 bg-white leading-relaxed text-gray-800">
              {benefits.map((benefit, i) => (
                <li key={i} className="mt-2 flex">
                  <Bullet className="mt-1 svg-sm text-teal-300 flex-none" />
                  <p className="ml-4">{benefit.title}</p>
                </li>
              ))}
            </ul>
          </header>
          <div className="block lg:absolute lg:inset-y-0 lg:right-0 max-w-2xl xl:max-w-3xl w-full mx-auto pb-8 lg:py-4 transform lg:translate-y-48 lg:translate-x-56 xl:translate-x-24">
            <div className="lg:h-full mx-auto lg:pl-12 lg:-mr-64">
              <form
                name="Affiliate Application"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                // action="/affiliates/application-success/"
                className="w-full max-w-md rounded-lg bg-white border border-gray-900 shadow-dark transform -rotate-1"
              >
                <input type="hidden" name="bot-field" />
                <input
                  type="hidden"
                  name="form-name"
                  value="Affiliate Application"
                />
                <div className="pt-6 pb-2 px-4 md:px-8">
                  <FormField
                    label="Name*"
                    type="text"
                    name="name"
                    placeholder="Dave Saunders"
                    required={true}
                  />
                  <FormField
                    label="Email*"
                    name="email"
                    type="email"
                    placeholder="dsaunders@gmail.com"
                    required={true}
                  />
                  <PasswordFormField
                    label="Password*"
                    name="password"
                    placeholder={"Create a new password"}
                    //   value={password}
                    //   onChange={onChange}
                    //   passwordShown={passwordShown}
                    //   toggle={togglePasswordVisibility}
                    required
                  />
                  <FormField
                    label="PayPal email"
                    name="email"
                    type="email"
                    placeholder="dsaunders@gmail.com"
                  />
                  <FormField
                    label="Method(s) of promotion*"
                    type="text"
                    name="platform"
                    placeholder="YouTube Channel, Discord, www.myblog.com"
                    required={true}
                  />
                  <FormField
                    label="Approximate audience size"
                    type="number"
                    name="name"
                    placeholder="3000"
                  />
                </div>

                <div className="p-4 md:px-8">
                  <button type="submit" className="cta-link inter">
                    Submit application
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query {
    detailsImage: file(relativePath: { eq: "details.png" }) {
      id
      childImageSharp {
        fluid(maxWidth: 958, quality: 90) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default ContactPage
