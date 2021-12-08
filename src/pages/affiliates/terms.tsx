import React from "react"
import { Link } from "gatsby"

import { GatsbySeo } from "gatsby-plugin-next-seo"

import Layout from "@components/layout/Layout"

import OgImage from "@assets/images/og/og-affiliate-terms.jpg"

interface AffiliateTermsPageProps {
  location: Location
}

const AffiliateTermsPage: React.FC<AffiliateTermsPageProps> = ({
  location,
}) => {
  const siteTitle = "Leadgeek"
  const title = "Affiliate Terms of Service"
  const description =
    "All the policies and terms for Leadgeek affiliates. We try to make all our policies as clear, fair, and understandable as possible."

  return (
    <Layout location={location}>
      <GatsbySeo
        title={title}
        description={description}
        openGraph={{
          title,
          description,
          url: "https://leadgeek.io/affiliates/terms/",
          type: "website",
          images: [
            {
              url: OgImage,
              width: 1200,
              height: 630,
              alt: "Leadgeek affiliate terms of service",
            },
          ],
        }}
        language="en"
      />
      <section className={classes.mainSectionWrapper}>
        <div className={classes.container}>
          <p className={classes.lastUpdated}>Last updated: August 3, 2021</p>
          <h1 className={classes.h1}>
            Welcome to {siteTitle}'s affiliate terms of service agreement
          </h1>{" "}
          <section className={classes.section}>
            <p className={classes.text}>
              These terms of service constitute a contract made between you (the
              "Affiliate"), whether personally or on behalf of an entity
              Leadgeek ("Leadgeek", “we”, “us”, or “our”). It describes how we
              will work together and other aspects of our business relationship.
            </p>
            <p className={classes.text}>
              Supplemental terms and conditions or documents that may be posted
              on the site from time to time are hereby expressly incorporated
              herein by reference. We reserve the right, in our sole discretion,
              to make changes or modifications to these terms of use at any time
              and for any reason. We will alert you about any changes by
              updating the “last updated” date of these terms of use, and you
              waive any right to receive specific notice of each such change. It
              is your responsibility to periodically review these terms of use
              to stay informed of updates. You will be subject to, and will be
              deemed to have been made aware of and to have accepted, the
              changes in any revised terms of use by your continued use of the
              site after the date such revised terms of use are posted.
            </p>
            <p className={classes.text}>
              The site is intended for users who are at least 18 years old.
              Persons under the age of 18 are not permitted to use or register
              for the site. By accepting these terms you also agree to
              Leadgeek's{" "}
              <Link to={`/privacy/`} className={classes.link}>
                privacy policy
              </Link>
            </p>{" "}
          </section>{" "}
          <section className={classes.section}>
            <h2 className={classes.h2}>Intellectual property rights</h2>
            <p className={classes.text}>
              Unless otherwise indicated, the site is our proprietary property
              and all source code, databases, functionality, software, website
              designs, audio, video, text, photographs, and graphics on the site
              (collectively, the “content”) and the trademarks, service marks,
              and logos contained therein (the “marks”) are owned or controlled
              by us or licensed to us, and are protected by copyright and
              trademark laws and various other intellectual property rights and
              unfair competition laws of the united states, international
              copyright laws, and international conventions. The content and the
              marks are provided on the site “as is” for your information and
              personal use only. Except as expressly provided in these terms of
              use, no part of the site and no content or marks may be copied,
              reproduced, aggregated, republished, uploaded, posted, publicly
              displayed, encoded, translated, transmitted, distributed, sold,
              licensed, or otherwise exploited for any commercial purpose
              whatsoever, without our express prior written permission.
            </p>
            <p className={classes.text}>
              Provided that you are eligible to use the site, you are granted a
              limited license to access and use the site and to download or
              print a copy of any portion of the content to which you have
              properly gained access solely for your personal, non-commercial
              use. We reserve all rights not expressly granted to you in and to
              the site, the content and the marks.
            </p>
          </section>
          <section className={classes.section}>
            <h2 className={classes.h2}>Non-exclusivity</h2>
            <p className={classes.text}>
              This Agreement does not create an exclusive agreement between you
              and us. Both you and we will have the right to recommend similar
              products and services of third parties and to work with other
              parties in connection with the design, sale, installation,
              implementation and use of similar services and products of third
              parties.
            </p>
          </section>
          <section className={classes.section}>
            <h2 id="subscription-policy" className={classes.h2}>
              Approval or rejection of the application
            </h2>
            <p className={classes.text}>
              Once you complete an application to become an Affiliate, we will
              review your application and notify you whether you have been
              accepted to participate in the Affiliate Program, or not. Before
              we accept an application, we may want to review your application
              with you, so we may reach out to you for more information. If we
              do not notify you that you are accepted to participate in the
              Affiliate Program within thirty (30) days from your application,
              your application is considered to be rejected.
            </p>
          </section>{" "}
          <section className={classes.section}>
            <h2 id="cancellation-policy" className={classes.h2}>
              Commissions
            </h2>
            <p className={classes.text}>
              Commissions will be paid once a month on the 15th of that month
              via the PayPal email address provided to Leadgeek. If a PayPal
              email address is not provided, no payment will be issued. A
              notification may be sent to the Affiliate that a valid PayPal
              email is needed to proceed with payment, but the responsibility is
              on the Affiliate to provide it.
            </p>
            <p className={classes.text}>
              You cannot refer yourself for a commission, and you will not
              receive a commission on your own accounts. Commissions are awarded
              for referring any new Leadgeek customer upon purchase of any
              Leadgeek product, plan or service. The commission is 25% of the
              price of the sale, recurring and for the lifetime of the customer.
            </p>
            <p className={classes.text}>
              For instance, if a new customer subscribes to the Grow plan for 3
              months and upgrades to the Pro plan for 2 more months, the
              commission is awarded for (3 * 129 * .25) + (2 * 189 * .25) =
              191.25. Transactions that result in chargebacks or refunds will
              not be paid out. Comissions are paid out 60 days after the
              transaction occurs on the nearest 15th of the month.
            </p>
          </section>
          <section className={classes.section}>
            <h2 className={classes.h2}>Termination</h2>
            <p className={classes.text}>
              Your affiliate application and status in the affiliate program may
              be suspended or terminated for any of the following reasons:
            </p>
            <ul className={classes.text}>
              <li className={classes.text}>
                Inappropriate advertisements (false claims, misleading
                hyperlinks, etc.).
              </li>
              <li className={classes.text}>
                Spamming (mass email, mass newsgroup posting, etc.).
              </li>
              <li className={classes.text}>
                Advertising on sites containing or promoting illegal activities.
              </li>
              <li className={classes.text}>
                Violation of intellectual property rights. Leadgeek reserves the
                right to require license agreements from those who employ
                trademarks of Leadgeek in order to protect our intellectual
                property rights.
              </li>
              <li className={classes.text}>
                Offering rebates, coupons, or other form of promised kick-backs
                from your affiliate commission as an incentive. Adding bonuses
                or bundling other products with Leadgeek, however, is
                acceptable.
              </li>
              <li className={classes.text}>
                Self referrals, fraudulent transactions, suspected affiliate
                fraud.
              </li>
            </ul>
          </section>
          <section className={classes.section}>
            <h2 className={classes.h2}>Submissions</h2>
            <p className={classes.text}>
              You acknowledge and agree that any questions, comments,
              suggestions, ideas, feedback, or other information regarding the
              site ("Submissions") provided by you to us are non-confidential
              and shall become our sole property. We shall own exclusive rights,
              including all intellectual property rights, and shall be entitled
              to the unrestricted use and dissemination of these submissions for
              any lawful purpose, commercial or otherwise, without
              acknowledgment or compensation to you. You hereby waive all moral
              rights to any such submissions, and you hereby warrant that any
              such submissions are original with you or that you have the right
              to submit such submissions. You agree there shall be no recourse
              against us for any alleged or actual infringement or
              misappropriation of any proprietary right in your submissions.
            </p>
          </section>
          <section className={classes.section}>
            <h2 className={classes.h2}>Affiliate links</h2>
            <p className={classes.text}>
              You may use graphic and text links both on your website, Facebook
              groups, Discord servers and within in your email messages. You may
              also advertise the Leadgeek site in online and offline classified
              ads, magazines, and newspapers. You may use the graphics and text
              provided by us, or you may create your own as long as they are
              deemed appropriate according to the conditions and not in
              violation of these terms.
            </p>
          </section>
          <section className={classes.section}>
            <h2 className={classes.h2}>Pay per click (PPC) policy</h2>
            <p className={classes.text}>
              PPC bidding is not allowed without prior written permission.
            </p>
          </section>
          <section className={classes.section}>
            <h2 className={classes.h2}>Liability</h2>
            <p className={classes.text}>
              Leadgeek will not be liable for indirect or accidental damages
              (loss of revenue, commissions) due to affiliate tracking failures,
              loss of database files, or any results of intents of harm to the
              program and/or to our website(s). We do not make any expressed or
              implied warranties with respect to the program and/or the
              memberships or products sold by Leadgeek. We make no claim that
              the operation of the program and/or our website(s) will be
              error-free and we will not be liable for any interruptions or
              errors.
            </p>
          </section>
          <section className={classes.section}>
            <h2 className={classes.h2}>Indemnification</h2>
            <p className={classes.text}>
              The affiliate shall indemnify and hold harmless Leadgeek and its
              affiliate and subsidiary companies, officers, directors,
              employees, licensees, successors and assigns, including those
              licensed or authorized by Leadgeek to transmit and distribute
              materials, from any and all liabilities, damages, fines,
              judgments, claims, costs, losses, and expenses (including
              reasonable legal fees and costs) arising out of or related to any
              and all claims sustained in connection with this Agreement due to
              the negligence, misrepresentation, failure to disclose, or
              intentional misconduct of Affiliate.
            </p>
          </section>
          <section className={classes.section}>
            <h2 className={classes.h2}>Electronic signatures effective</h2>
            <p className={classes.text}>
              The agreement is an electronic contract that sets out the legally
              binding terms of your participation in the Leadgeek affiliate
              program. You indicate your acceptance of this Agreement and all of
              the terms and conditions contained or referenced in this Agreement
              by Leadgeek application process. This action creates an electronic
              signature that has the same legal force and effect as a
              handwritten signature.
            </p>
          </section>
          <section className={classes.section}>
            <h2 className={classes.h2}>Contact information</h2>
            <p className={classes.text}>
              If you have any questions about our terms of service, please
              contact us via our{" "}
              <Link to={`/contact/`} className={classes.link}>
                contact form
              </Link>
              , email us at{" "}
              <a
                href="mailto:affiliates@leadgeek.io"
                target="_blank"
                rel="noreferrer"
                className={classes.link}
              >
                <span>affi</span>
                <span>liates@l</span>
                <span>eadgeek.io</span>
              </a>
              .
            </p>
            <p className={classes.text}>
              6333 E Mockingbird Lane, Suite 147 Dallas, TX 75214
            </p>
          </section>
        </div>
      </section>
    </Layout>
  )
}

const classes = {
  mainSectionWrapper: "py-8 md:py-12 lg:py-16 text-gray-900 bg-splatter",
  container: "max-w-2xl container",
  lastUpdated: "bg-white font-bold text-sm text-purple-500",
  h1: "bg-white mt-4 text-3xl font-black inter",
  text: "mt-4",
  link: "secondary-link",
  section:
    "mt-8 container pt-2 pb-4 border border-gray-900 rounded-lg bg-white shadow-graySm",
  h2: "mt-4 text-xl font-bold inter bg-white",
}

export default AffiliateTermsPage
