import React from "react"

import { GatsbySeo } from "gatsby-plugin-next-seo"

import Layout from "@components/layout/Layout"

// import OgImage from "@assets/images/og/og-contact.jpg"

interface ChangelogPageProps {
  location: Location
}

const ChangelogPage: React.FC<ChangelogPageProps> = ({ location }) => {
  const title = "Contact Leadgeek"
  const description =
    "Have a question about Leadgeek? We'll do our best to get you some answers. Ask away and receive a prompt reply."

  return (
    <Layout location={location}>
      <GatsbySeo
        title={title}
        description={description}
        // openGraph={{
        //   title,
        //   description,
        //   url: "https://leadgeek.io/contact/",
        //   type: "website",
        //   images: [
        //     {
        //       url: OgImage,
        //       width: 1200,
        //       height: 630,
        //       alt: "Reach out & chat with Leadgeek",
        //     },
        //   ],
        // }}
        language="en"
      />
      <section className="min-h-screen py-12 md:py-24 relative text-gray-900 bg-splatter">
        <div className="container">
          <header className="relative mx-auto lg:mx-0 max-w-md">
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 inter bg-white">
              Changelog
            </h1>
            <p className="mt-4 lg:mt-6 pb-4 h4 bg-white text-gray-700">
              Stay up to date with every change made to Leadgeek since Q4 2021.
            </p>
          </header>
          <section>
            <article>Hello</article>
          </section>
        </div>
      </section>
    </Layout>
  )
}

export default ChangelogPage
