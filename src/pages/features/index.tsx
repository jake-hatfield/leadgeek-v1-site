import React from "react"
import { Link } from "gatsby"

import { GatsbySeo } from "gatsby-plugin-next-seo"

import Layout from "@components/layout/Layout"
import HeaderWrapper from "@components/HeaderWrapper"
import PrimaryHeader from "@components/PrimaryHeader"
import { featureList } from "@components/layout/Features"

import LongArrow from "@assets/svgs/arrow-straight-solid.svg"
import OgImage from "@assets/images/og/og-features-index.jpg"

interface FeaturesIndexPageProps {
  location: Location
}

const FeaturesIndexPage: React.FC<FeaturesIndexPageProps> = ({ location }) => {
  const title = `Leadgeek Features`
  const description = `See the top ${featureList.length} features that supercharge a great online arbitrage sourcing list into a deal-finding machine for your FBA business.`

  return (
    <Layout location={location}>
      <GatsbySeo
        title={title}
        description={description}
        openGraph={{
          title,
          description,
          url: "https://leadgeek.io/features/",
          type: "website",
          images: [
            {
              url: OgImage,
              width: 1200,
              height: 630,
              alt: "See the top 20 Leadgeek features",
            },
          ],
        }}
        language="en"
      />
      <section className={classes.headerWrapper}>
        <HeaderWrapper bottomPadding={null} styles={null}>
          <PrimaryHeader
            title={`The arbitrage sourcing list that's loaded with features`}
            description={
              <h2>
                Leadgeek lets you to find the products you want, when you want
                them. The top {featureList.length} features are the perfect
                combination of hand-curation and wicked-fast software that make
                arbitrage efficient and (dare I say it?)... fun.
              </h2>
            }
            nav={true}
            goHome={false}
            linkOne={`features/criteria`}
            linkOneText={`Start the tour`}
            linkTwo={null}
            linkTwoText={null}
            outsideLink={null}
            svgOne={
              <div
                className={classes.noteWrapper}
                data-sal="fade"
                data-sal-delay="900"
                data-sal-duration="500"
                data-sal-easing="ease in out"
              >
                <div className="relative">
                  <p className={classes.note}>
                    Start the tour or click on a feature to learn more
                  </p>
                  <LongArrow className={classes.longArrow} />
                </div>
              </div>
            }
            svgTwo={null}
          />
        </HeaderWrapper>
      </section>
      <section className={classes.featuresWrapper}>
        <div className={classes.featuresContainer}>
          <ol className={classes.featuresList}>
            {featureList.map((feature, i) => (
              <Link key={i} to={`/features/${feature.link}/`}>
                <li className={classes.feature}>
                  <header className={classes.featureHeader}>
                    <h2 className={classes.featureTitle}>{feature.title}</h2>
                  </header>
                  <div className={classes.featureDesc}>{feature.desc}</div>
                </li>
              </Link>
            ))}
          </ol>
        </div>
      </section>
    </Layout>
  )
}

const classes = {
  headerWrapper: "relative overflow-hidden bg-splatter",
  noteWrapper:
    "hidden lg:block absolute right-1/2 transform -translate-y-16 -translate-x-72",
  note:
    "py-1 px-2 handwritten text-xl rounded-lg bg-gray-900 text-teal-300 transform text-center transition-main w-56 -rotate-6 hover:-rotate-3",
  featuresWrapper:
    "relative pb-12 lg:pb-24 px-4 lg:px-8 text-gray-900 overflow-x-hidden bg-splatter",
  featuresContainer: "max-w-screen-2xl mx-auto",
  featuresList:
    "mt-4 lg:mt-6 feature-list feature-grid text-center md:text-left",
  feature:
    "mt-8 lg:mt-6 feature-list-item py-4 lg:py-6 px-6 bg-white hover:bg-purple-500 hover:text-white group rounded-lg border border-gray-900 w-80 md:w-64 transition-main shadow-graySm",
  featureHeader: "text-gray-900 group-hover:text-white",
  featureTitle: "text-lg xl:text-xl inter font-black",
  featureDesc: "mt-2 lg:mt-4 leading-relaxed",
  longArrow:
    "absolute right-0 h-48 transform -rotate-90 -translate-y-32 translate-x-28 text-gray-500",
}

export default FeaturesIndexPage
