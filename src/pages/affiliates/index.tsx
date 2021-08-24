import React, { useState, useEffect } from "react"
import { navigate, graphql } from "gatsby"
import Img, { GatsbyImageFluidProps } from "gatsby-image"

import axios from "axios"

import { GatsbySeo } from "gatsby-plugin-next-seo"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import Marquee from "react-fast-marquee"

import Layout from "@components/layout/Layout"
import FormField from "@components/utils/FormField"
import PasswordFormField from "@components/utils/PasswordFormField"
import Spinner from "@components/utils/Spinner"

import Bullet from "@assets/svgs/bullet.svg"
import OgImage from "@assets/images/og/og-affiliate-index.jpg"

interface AffiliatePageProps {
  data: {
    affiliatePanel: GatsbyImageFluidProps
  }
  location: Location
}

const AffiliatePage: React.FC<AffiliatePageProps> = ({ data, location }) => {
  const title = "Leadgeek Affiliate Program"
  const description =
    "Become a Leadgeek affiliate and start earning 25% lifetime recurring commissions."
  const cta = `/affiliates/#affiliate-application`

  const [formError, setFormError] = useState("")
  const [checkedTOS, setCheckedTOS] = useState(false)
  const [processing, setProcessing] = useState(false)

  const [passwordShown, setPasswordShown] = useState(false)
  const togglePasswordVisibility = () => {
    setPasswordShown(passwordShown ? false : true)
  }

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    platform: "",
    audience: "",
  })

  const { email, password, firstName, lastName, platform, audience } = formData

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    })
  }

  useEffect(() => {
    if (checkedTOS) {
      setFormError("")
    }
  }, [checkedTOS])

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // create affiliate
    try {
      setProcessing(true)

      if (!checkedTOS) {
        setFormError("Please accept the affiliate terms of service.")
        return setProcessing(false)
      }

      const firstNameCapitalized =
        firstName.charAt(0).toUpperCase() + firstName.substring(1).toLowerCase()
      const lastNameCapitalized =
        lastName.charAt(0).toUpperCase() + lastName.substring(1).toLowerCase()
      const name = `${firstNameCapitalized} ${lastNameCapitalized}`
      const lowerCaseEmail = email.toLowerCase()

      const formData = {
        name,
        email: lowerCaseEmail,
        password,
        platform,
        audience,
      }

      const { data } = await axios.post(
        "/.netlify/functions/create-affiliate",
        formData
      )
      if (data.message === "Affiliate submission successful.") {
        return navigate("/affiliates/application-success/")
      } else {
        setFormError(
          "There was an error creating your affiliate account. Please contact affiliates@leadgeek.io to finish the setup process."
        )
        setProcessing(false)
      }
    } catch (error) {
      console.log(error.message)
      setFormError(
        "There was an error creating your affiliate account. Please contact affiliates@leadgeek.io to finish the setup process."
      )
      setProcessing(false)
    }
  }

  return (
    <Layout location={location}>
      <GatsbySeo
        title={title}
        description={description}
        openGraph={{
          title,
          description,
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
              Do you have an Amazon FBA community that loves online arbitrage?
              Blow up the earnings from your YouTube channel, Discord server, or
              blog with{" "}
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
                  Become an affiliate
                </AnchorLink>
              </div>
            </div>
          </header>
          <div className="block lg:absolute lg:inset-y-0 lg:right-0 max-w-2xl xl:max-w-3xl w-full mx-auto pb-8 lg:py-24 transform lg:translate-x-56 xl:translate-x-24">
            <div className="lg:h-full mx-auto lg:pl-12 lg:-mr-64">
              <Img
                fluid={data.affiliatePanel.childImageSharp.fluid}
                alt="Leadgeek app feed"
                className="w-full rounded-lg shadow-purpleMd ring-opacity-50 shadow-2xl"
              />
            </div>
          </div>
        </div>
        <Marquee
          className="py-3 bg-gray-100 text-gray-900 font-semibold border-t border-b border-gray-500"
          gradient={false}
          speed={100}
          pauseOnHover={true}
        >
          <p className="pl-24">
            <span className="text-pink-600">
              An important message to affiliates
            </span>
            : You've worked hard building an audience that respects you. We
            recognize that and want to provide an awesome service to your FBA
            community while rewarding you at the same time.{" "}
            <span role="img" aria-label="Moneybag Emoji">
              💰
            </span>
          </p>
        </Marquee>
      </section>
      {/* section 1: benefits/sign up */}
      <section id="apply" className="relative overflow-hidden bg-splatter">
        <div className="mt-8 md:mt-12 xl:mt-0 xl:mb-32 relative max-w-2xl xl:max-w-7xl md:mx-auto py-8 md:py-16 xl:py-48 px-4">
          <header className="relative md:text-center xl:text-left">
            <h2 className="xl:max-w-xl text-3xl md:text-5xl font-black text-gray-900 inter header-height">
              <span className="emphasized-text">Grow your passive income</span>{" "}
              with these affiliate benefits:
            </h2>
            <ul className="lg:max-w-lg mt-4 xl:mt-6 mx-auto xl:mx-0 bg-white leading-relaxed text-left text-gray-800">
              {benefits.map((benefit, i) => (
                <li key={i} className="mt-2 flex">
                  <Bullet className="mt-1 svg-sm text-teal-300 flex-none" />
                  <p className="ml-4">{benefit.title}</p>
                </li>
              ))}
            </ul>
          </header>
          <div className="mt-12 xl:mt-0 block xl:absolute xl:inset-y-0 xl:right-0 max-w-2xl xl:max-w-3xl w-full mx-auto pb-8 xl:py-4 transform xl:translate-y-48 xl:translate-x-24">
            <div className="xl:h-full xl:pl-12 xl:-mr-64">
              <form
                onSubmit={e => onSubmit(e)}
                id="affiliate-application"
                className="w-full max-w-md mx-auto rounded-lg bg-white border border-gray-900 shadow-pinkSm transform md:-rotate-1"
              >
                <div className="pt-6 pb-2 px-4 md:px-8">
                  <div className="md:flex justify-between">
                    <FormField
                      name={"firstName"}
                      label={"First name *"}
                      type={"text"}
                      placeholder={"Dave"}
                      value={firstName}
                      onChange={onChange}
                      required
                      styles={null}
                    />
                    <FormField
                      name={"lastName"}
                      label={"Last name *"}
                      type={"text"}
                      placeholder={"Saunders"}
                      value={lastName}
                      onChange={onChange}
                      required
                      styles={"md:ml-4"}
                    />
                  </div>
                  <FormField
                    label={"Email *"}
                    name={"email"}
                    type={"email"}
                    value={email}
                    onChange={onChange}
                    placeholder="dsaunders@gmail.com"
                    required={true}
                    styles={null}
                  />
                  <PasswordFormField
                    label={"Password *"}
                    placeholder={"Create a new password"}
                    value={password}
                    onChange={onChange}
                    passwordShown={passwordShown}
                    toggle={togglePasswordVisibility}
                    required
                    styles={null}
                  />
                  <FormField
                    label={"Method(s) of promotion *"}
                    type={"text"}
                    name={"platform"}
                    value={platform}
                    onChange={onChange}
                    placeholder={"YouTube Channel, Discord, www.myblog.com"}
                    required={true}
                    styles={null}
                  />
                  <FormField
                    label={"Approximate audience size"}
                    type={"number"}
                    name={"audience"}
                    value={audience}
                    onChange={onChange}
                    placeholder={"3000"}
                    required={false}
                    styles={null}
                  />
                  <div className="mt-6 md:flex md:items-center text-gray-800">
                    <label className="flex items-center text-xs">
                      <input
                        className="mr-2 h-4 w-4 leading-tight rounded-sm text-purple-500 ring-purple transition-main"
                        type="checkbox"
                        checked={checkedTOS}
                        onChange={() => setCheckedTOS(!checkedTOS)}
                      />
                      <span className="text-xs md:text-sm">
                        I agree to the affiliate{" "}
                        <a
                          href="/affiliates/terms/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="secondary-link"
                        >
                          terms of service
                        </a>
                      </span>
                    </label>
                  </div>
                  {formError && (
                    <aside className="mt-4 py-2 px-4 bg-gray-900 text-teal-300 shadow-tealSm rounded-lg">
                      <div className="flex">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="svg-sm"
                          >
                            <path
                              fillRule="evenodd"
                              d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <p className="ml-2 text-xs">{formError}</p>
                      </div>
                    </aside>
                  )}
                </div>
                <div className="p-4 md:px-8">
                  {processing ? (
                    <div className="mt-4">
                      <Spinner
                        divWidth={null}
                        spinnerWidth={"md"}
                        margin={false}
                        search={false}
                        text={null}
                      />
                    </div>
                  ) : (
                    <button type="submit" className="cta-link inter">
                      Submit
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

const benefits = [
  {
    title:
      "Receive a 25% lifetime recurring cut of any plan, product, or service when you refer a new customer.",
  },
  {
    title: "Get plenty of time to make the conversion with 90-day cookies.",
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
    title: "No minimum payout thresholds, no maximum earning caps.",
  },
]

export const query = graphql`
  query {
    affiliatePanel: file(relativePath: { eq: "aff-screenshot.png" }) {
      childImageSharp {
        fluid(maxWidth: 958, quality: 90) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default AffiliatePage
