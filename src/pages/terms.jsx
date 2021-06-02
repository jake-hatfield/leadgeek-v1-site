import React from "react"
import { Link } from "gatsby"

import { GatsbySeo } from "gatsby-plugin-next-seo"

import Layout from "components/layout/Layout"

const TermsPage = () => {
  const siteTitle = "Leadgeek"
  const siteLink = "/"
  const siteLinkFull = "https://leadgeek.io/"
  const title = "Leadgeek Terms of Service"
  const desc =
    "All the policies and terms for Leadgeek customers. We try to make all our policies as clear, fair, and understandable as possible."
  return (
    <Layout>
      <GatsbySeo
        title={title}
        description={desc}
        openGraph={{
          title,
          description: desc,
          url: "https://leadgeek.io/terms/",
          type: "website",
        }}
        language="en"
      />
      <section className="py-8 mdd:py-12 lg:py-16 text-gray-900 bg-splatter">
        <div className="max-w-2xl container">
          <p className="font-bold text-sm text-purple-500 bg-white">
            Last updated: March 10, 2021
          </p>
          <h1 className="mt-4 text-3xl font-black inter bg-white">
            Welcome to {siteTitle}'s terms of service agreement
          </h1>{" "}
          <section className={classes.section}>
            <p className={classes.text}>
              These terms of service constitute a legally binding agreement made
              between you, whether personally or on behalf of an entity Leadgeek
              ("Leadgeek", “we”, “us”, or “our”), concerning your access to and
              use of the{" "}
              <Link to={siteLink} className="secondary-link">
                {siteLinkFull}
              </Link>{" "}
              website as well as any other media form, media channel, mobile
              website or mobile application related, linked, or otherwise
              connected thereto (collectively, the “site”). You agree that by
              accessing the site, you have read, understood, and agree to be
              bound by all of these terms of service, including the{" "}
              <Link to={`/privacy/`} className="secondary-link">
                privacy policy
              </Link>{" "}
              posted on the site, which are incorporated into these terms of
              service. If you do not agree with all of these terms of service,
              then you are expressly prohibited from using the site and you must
              discontinue use immediately.
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
              The information provided on the site is not intended for
              distribution to or use by any person or entity in any jurisdiction
              or country where such distribution or use would be contrary to law
              or regulation or which would subject us to any registration
              requirement within such jurisdiction or country. Accordingly,
              those persons who choose to access the site from other locations
              do so on their own initiative and are solely responsible for
              compliance with local laws, if and to the extent local laws are
              applicable.
            </p>
            <p className={classes.text}>
              The site is intended for users who are at least 18 years old.
              Persons under the age of 18 are not permitted to use or register
              for the site.
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
            </p>{" "}
          </section>{" "}
          <section className={classes.section}>
            <h2 className={classes.h2}>User representations</h2>
            <p className={classes.text}>
              By using the site, you represent and warrant that:{" "}
            </p>
            <ul className="mt-4">
              <li className={classes.text}>
                1. you have the legal capacity and you agree to comply with
                these terms of use;
              </li>
              <li className={classes.text}>
                2. you are not a minor in the jurisdiction in which you reside;
              </li>
              <li className={classes.text}>
                3. you will not access the site through automated or non-human
                means, whether through a bot, script or otherwise;
              </li>
              <li className={classes.text}>
                4. you will not use the site for any illegal or unauthorized
                purpose;
              </li>
              <li className={classes.text}>
                5. your use of the site will not violate any applicable law or
                regulation.
              </li>
            </ul>
            <p className={classes.text}>
              If you provide any information that is untrue, inaccurate, not
              current, or incomplete, we have the right to suspend or terminate
              your account and refuse any and all current or future use of the
              site (or any portion thereof).
            </p>{" "}
          </section>{" "}
          <section className={classes.section}>
            <h2 id="subscription-policy" className={classes.h2}>
              Fees and payment
            </h2>
            <p className={classes.text}>
              We accept the following forms of payment:
            </p>
            <ul className="mt-4">
              <li className={classes.text}>- Visa</li>
              <li className={classes.text}>- Mastercard</li>
              <li className={classes.text}>- Discover</li>
              <li className={classes.text}>- American Express</li>
            </ul>
            <p className={classes.text}>
              You may be required to purchase or pay a fee to access some of our
              services. You agree to provide current, complete, and accurate
              purchase and account information for all purchases made via the
              site. You further agree to promptly update account and payment
              information, including email address, payment method, and payment
              card expiration date, so that we can complete your transactions
              and contact you as needed. We process payments securely with
              Stripe. Sales tax will be added to the price of purchases as
              deemed required by us. We may change prices at any time. All
              payments shall be in U.S. dollars.
            </p>
            <p className={classes.text}>
              You agree to pay all charges or fees at the prices then in effect
              for your purchases, and you authorize us to charge your chosen
              payment provider for any such amounts upon making your purchase.
              If your purchase is subject to recurring charges, then you consent
              to our charging your payment method on a recurring basis without
              requiring your prior approval for each recurring charge, until you
              notify us of your cancellation.
            </p>
            <p className={classes.text}>
              We reserve the right to correct any errors or mistakes in pricing,
              even if we have already requested or received payment. We also
              reserve the right to refuse any order placed through the Site.
            </p>{" "}
          </section>{" "}
          <section className={classes.section}>
            <h2 id="cancellation-policy" className={classes.h2}>
              Cancellations and refunds
            </h2>
            <p className={classes.paragrap}>
              You can cancel your subscription at any time by contacting us
              using the contact information provided below. Your cancellation
              will take effect at the end of the current paid term.
            </p>
            <p className={classes.text}>
              Please email us at{" "}
              <a
                href="mailto:hello@leadgeek.io"
                target="_blank"
                rel="noreferrer"
                className="secondary-link"
              >
                <span>hel</span>
                <span>lo@l</span>
                <span>eadgeek.io</span>
              </a>{" "}
              (preferred) or call us at{" "}
              <a href="tel:(214) 810-0564" className="secondary-link">
                <span>(214) 8</span>
                <span>10-05</span>64
              </a>
              .
            </p>
            <p className={classes.text}>
              Our policy is not to issue refunds for the current month of
              service, though exceptions are entirely up to our discretion. Due
              to the nature of a weekly service on a recurring monthly
              structure, we attempt to work with our members and reach a mutual
              resolution by allowing the ability to pause a subscription's
              unused time/service and re-activate at a later date. For instance,
              if a member uses a week of service and realizes they want to
              become more ungated in categories and brands, we'll pause
              recurring payments and allow the remaining 3 weeks to be used at a
              later date.
            </p>
            <p className={classes.text}>
              If you forget to cancel your subscription before your automatic
              payment cycle renews, please email support within 72 hours of the
              payment and we'll refund you in full for the most recent charge.
              Refund requests made after the 72 hour period are honored at our
              discretion.
            </p>
            <p className={classes.text}>
              <strong>Please note:</strong> there will not be any refunds for
              too many products being gated for a your Amazon Seller Central
              account. We intentionally source products that are usable and
              ungated for the majority of established Amazon Seller accounts, so
              please ensure your account meets these criteria before joining.
            </p>{" "}
          </section>
          <section className={classes.section}>
            <h2 className={classes.h2}>Prohibited activities</h2>
            <p className={classes.text}>
              You may not access or use the site for any purpose other than that
              for which we make the site available. The site may not be used in
              connection with any commercial endeavors except those that are
              specifically endorsed or approved by us.
            </p>
            <p className={classes.text}>
              As a user of the Site, you agree not to:
            </p>
            <ol className="mt-4">
              <li className={classes.text}>
                1. Systematically retrieve data or other content from the site
                to create or compile, directly or indirectly, a collection,
                compilation, database, or directory without written permission
                from us.
              </li>
              <li className={classes.text}>
                2. Circumvent, disable, or otherwise interfere with
                security-related features of the site, including features that
                prevent or restrict the use or copying of any content or enforce
                limitations on the use of the site and/or the content contained
                therein.
              </li>
              <li className={classes.text}>
                3. Engage in unauthorized framing of or linking to the site.
              </li>
              <li className={classes.text}>
                4. Engage in any automated use of the system, such as using
                scripts to send comments or messages, or using any data mining,
                robots, or similar data gathering and extraction tools.
              </li>
              <li className={classes.text}>
                5. Interfere with, disrupt, or create an undue burden on the
                site or the networks or services connected to the site.
              </li>
              <li className={classes.text}>
                6. Use the site as part of any effort to compete with us or
                otherwise use the site and/or the content for any
                revenue-generating endeavor or commercial enterprise.
              </li>
              <li className={classes.text}>
                7. Decipher, decompile, disassemble, or reverse engineer any of
                the software comprising or in any way making up a part of the
                site.
              </li>
              <li className={classes.text}>
                8. Attempt to bypass any measures of the site designed to
                prevent or restrict access to the site, or any portion of the
                site.
              </li>
              <li className={classes.text}>
                9. Copy or adapt the site’s software, including but not limited
                to HTML, JavaScript, CSS, or other code.
              </li>
              <li className={classes.text}>
                10. Upload or transmit (or attempt to upload or to transmit)
                viruses, trojan horses, or other material, including excessive
                use of capital letters and spamming (continuous posting of
                repetitive text), that interferes with any party’s uninterrupted
                use and enjoyment of the site or modifies, impairs, disrupts,
                alters, or interferes with the use, features, functions,
                operation, or maintenance of the site.
              </li>
              <li className={classes.text}>
                11. Use the Site in a manner inconsistent with any applicable
                laws or regulations.
              </li>
            </ol>
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
            <h2 className={classes.h2}>Third-party websites and content</h2>
            <p className={classes.text}>
              The site may contain (or you may be sent via the site) links to
              other websites ("Third-party websites") as well as articles,
              photographs, text, graphics, pictures, designs, music, sound,
              video, information, applications, software, and other content or
              items belonging to or originating from third parties ("Third-party
              content"). Such third-party websites and third-party content are
              not investigated, monitored, or checked for accuracy,
              appropriateness, or completeness by us, and we are not responsible
              for any third-party websites accessed through the site or any
              third-party content posted on, available through, or installed
              from the site, including the content, accuracy, offensiveness,
              opinions, reliability, privacy practices, or other policies of or
              contained in the third-party websites or the third-party content.
              Inclusion of, linking to, or permitting the use or installation of
              any third-party websites or any third-party content does not imply
              approval or endorsement thereof by us.
            </p>
            <p className={classes.text}>
              If you decide to leave the site and access the third-party
              websites or to use or install any third-party content, you do so
              at your own risk, and you should be aware these terms of use no
              longer govern. You should review the applicable terms and
              policies, including privacy and data gathering practices, of any
              website to which you navigate from the site or relating to any
              applications you use or install from the site. Any purchases you
              make through third-party websites will be through other websites
              and from other companies, and we take no responsibility whatsoever
              in relation to such purchases which are exclusively between you
              and the applicable third party. You agree and acknowledge that we
              do not endorse the products or services offered on third-party
              websites and you shall hold us harmless from any harm caused by
              your purchase of such products or services. Additionally, you
              shall hold us harmless from any losses sustained by you or harm
              caused to you relating to or resulting in any way from any
              third-party content or any contact with third-party websites.
            </p>
          </section>
          <section className={classes.section}>
            <h2 className={classes.h2}>Site management</h2>
            <p className={classes.text}>
              We reserve the right, but not the obligation, to:
              <ol className="mt-4">
                <li className={classes.text}>
                  1. monitor the site for violations of these terms of use;
                </li>
                <li className={classes.text}>
                  2. take appropriate legal action against anyone who, in our
                  sole discretion, violates the law or these terms of use,
                  including without limitation, reporting such user to law
                  enforcement authorities;
                </li>
                <li className={classes.text}>
                  3. in our sole discretion and without limitation, refuse,
                  restrict access to, limit the availability of, or disable (to
                  the extent technologically feasible) any of your contributions
                  or any portion thereof;
                </li>
                <li className={classes.text}>
                  4. in our sole discretion and without limitation, notice, or
                  liability, to remove from the site or otherwise disable all
                  files and content that are excessive in size or are in any way
                  burdensome to our systems;
                </li>
                <li className={classes.text}>
                  5. otherwise manage the site in a manner designed to protect
                  our rights and property and to facilitate the proper
                  functioning of the site.
                </li>
              </ol>
            </p>
          </section>
          <section className={classes.section}>
            <h2 className={classes.h2}>Term and termination</h2>
            <p className={classes.text}>
              These terms of use shall remain in full force and effect while you
              use the site. Without limiting any other provision of these terms
              of use, we reserve the right to, in our sole discretion and
              without notice or liability, deny access to and use of the site
              (including blocking certain ip addresses), to any person for any
              reason or for no reason, including without limitation for breach
              of any representation, warranty, or covenant contained in these
              terms of use or of any applicable law or regulation. We may
              terminate your use or participation in the site or delete any
              content or information that you posted at any time, without
              warning, in our sole discretion.
            </p>
            <p className={classes.text}>
              If we terminate or suspend your account for any reason, you are
              prohibited from registering and creating a new account under your
              name, a fake or borrowed name, or the name of any third party,
              even if you may be acting on behalf of the third party. In
              addition to terminating or suspending your account, we reserve the
              right to take appropriate legal action, including without
              limitation pursuing civil, criminal, and injunctive redress.
            </p>
          </section>
          <section className={classes.section}>
            <h2 className={classes.h2}>Modifications and interruptions</h2>
            <p className={classes.text}>
              We reserve the right to change, modify, or remove the contents of
              the site at any time or for any reason at our sole discretion
              without notice. However, we have no obligation to update any
              information on our site. We also reserve the right to modify or
              discontinue all or part of the site without notice at any time. We
              will not be liable to you or any third party for any modification,
              price change, suspension, or discontinuance of the site.
            </p>
            <p className={classes.text}>
              We cannot guarantee the site will be available at all times. We
              may experience hardware, software, or other problems or need to
              perform maintenance related to the site, resulting in
              interruptions, delays, or errors. We reserve the right to change,
              revise, update, suspend, discontinue, or otherwise modify the site
              at any time or for any reason without notice to you. You agree
              that we have no liability whatsoever for any loss, damage, or
              inconvenience caused by your inability to access or use the site
              during any downtime or discontinuance of the site. Nothing in
              these terms of use will be construed to obligate us to maintain
              and support the site or to supply any corrections, updates, or
              releases in connection therewith.
            </p>
          </section>
          <section className={classes.section}>
            <h2 className={classes.h2}>Corrections</h2>
            <p className={classes.text}>
              There may be information on the site that contains typographical
              errors, inaccuracies, or omissions, including descriptions,
              pricing, availability, and various other information. We reserve
              the right to correct any errors, inaccuracies, or omissions and to
              change or update the information on the Site at any time, without
              prior notice.
            </p>
          </section>
          <section className={classes.section}>
            <h2 className={classes.h2}>Earnings disclaimer</h2>
            <p className={classes.text}>
              We are unable to offer any guarantees as to any income during the
              term of this agreement. You accept full responsibility for your
              financial performance during this agreement. You understand and
              accept that your income depends on your own individual capacity,
              expertise, experience, and efforts. The company is unable to
              assume any responsibility for your success or offer any guarantees
              of any nature whatsoever.
            </p>
            <p className={classes.text}>
              You understand and accept that we do not have any control or
              influence on any customer’s decision to acquire your product on
              any third-party marketplace. We will not be held liable for your
              success or failure to achieve any specific financial or career
              goals during this agreement.
            </p>
          </section>
          <section className={classes.section}>
            <h2 className={classes.h2}>Contact information</h2>
            <p className={classes.text}>
              If you have any questions about our terms of service, please
              contact us via our{" "}
              <Link to={`/contact/`} className="secondary-link">
                contact form
              </Link>
              , email us at{" "}
              <a
                href="mailto:hello@leadgeek.io"
                target="_blank"
                rel="noreferrer"
                className="secondary-link"
              >
                <span>hel</span>
                <span>lo@l</span>
                <span>eadgeek.io</span>
              </a>{" "}
              or call us at{" "}
              <a href="tel:(214) 810-0564" className="secondary-link">
                <span>(214) 8</span>
                <span>10-05</span>64
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
  text: "mt-4",
  section:
    "mt-8 container pt-2 pb-4 border border-gray-900 rounded-lg bg-white stack-sm",
  h2: "mt-4 text-xl font-bold inter bg-white",
}

export default TermsPage
