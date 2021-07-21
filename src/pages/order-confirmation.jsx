import React, { useEffect } from "react"

import { GatsbySeo } from "gatsby-plugin-next-seo"

import Layout from "components/layout/Layout"
import HeaderWrapper from "components/HeaderWrapper"
import PrimaryHeader from "components/PrimaryHeader"
import { deleteCookie } from "components/utils/utils"
import Bullet from "assets/svgs/bullet.svg"
import OgImage from "assets/images/og/og-order-confirmation.jpg"

const OrderConfirmationPage = ({ location }) => {
  const nextStepsList = [
    {
      description: (
        <p>
          Fresh online arbitrage leads are posted around 9 am CST every morning.
        </p>
      ),
    },
    {
      description: (
        <p>
          Log into the software suite and play around! Note: Your Feed might be
          empty until the next batch of leads go live.
        </p>
      ),
    },
    {
      description: (
        <p>
          Have a question? Shoot us an email at{" "}
          <a href="mailto:support@leadgeek.io" className="secondary-link">
            <span>supp</span>
            <span>ort@le</span>
            <span>adgeek.io</span>
          </a>
          . Our hours are 9am-5pm CST M-F.
        </p>
      ),
    },
  ]
  const title = "Order Confirmation | Leadgeek"
  const desc =
    "Your Leadgeek order has been successfully processed. Thank you for your purchase!"

  useEffect(() => {
    deleteCookie("lgid")
  }, [])

  return (
    <Layout location={location}>
      <GatsbySeo
        title={title}
        description={desc}
        openGraph={{
          title,
          description: desc,
          url: "https://leadgeek.io/order-confirmation/",
          type: "website",
          images: [
            {
              url: OgImage,
              width: 1200,
              height: 630,
              alt: "Thank you for joining Leadgeek",
            },
          ],
        }}
        language="en"
      />
      <section className="pb-12 bg-splatter text-gray-900">
        <HeaderWrapper>
          <PrimaryHeader
            title={`Whoop! A great big thanks for joining.`}
            desc={
              <p className="mt-4 lg:mt-6 lg:max-w-3xl lg:text-lg leading-relaxed text-gray-700 bg-white">
                Your sourcing is about to get pretty stinkin' neat. You should
                receive a confirmation notice shortly to your email, but also
                check spam folders if you don't see it right away.
              </p>
            }
            nav
            outsideLink={"https://app.leadgeek.io/login/"}
            linkOneText={"Log into the software"}
            svgOne={
              <div
                className={`hidden lg:block absolute top-0 left-0 py-1 px-2 handwritten text-lg xl:text-xl rounded-lg bg-gray-900 text-teal-300 transform -translate-x-24 shadow-tealMd text-center transition-main w-56 -rotate-3 hover:-rotate-2`}
              >
                <blockquote>
                  "Definitely the best site I've found for leads" -{" "}
                  <cite>Kevin</cite>
                </blockquote>
              </div>
            }
            svgTwo={
              <div
                className={`hidden lg:block absolute top-0 right-0 py-1 px-2 handwritten text-lg xl:text-xl rounded-lg bg-gray-900 text-teal-300 transform translate-x-28 shadow-tealMd text-center transition-main w-56 rotate-6 hover:rotate-2`}
              >
                <blockquote>
                  "It has been the best decision I have made in acquiring your
                  list" - <cite>Frank</cite>
                </blockquote>
              </div>
            }
          />
        </HeaderWrapper>
        <section className="container">
          <header className="relative mx-auto md:max-w-xl lg:max-w-2xl py-4 lg:py-6 px-6 bg-white rounded-lg border border-gray-900 transition-main shadow-dark transform -rotate-2 hover:rotate-0">
            <h2 className="text-2xl md:text-3xl xl:text-4xl font-black inter">
              Next steps...
            </h2>
            <ul>
              {nextStepsList.map((step, i) => (
                <li key={i} className="first:mt-4 mt-2 flex">
                  <Bullet className="mt-1 svg-sm text-teal-400 flex-none" />
                  <div className="ml-4">{step.description}</div>
                </li>
              ))}
            </ul>
          </header>
        </section>
      </section>
    </Layout>
  )
}

export default OrderConfirmationPage
