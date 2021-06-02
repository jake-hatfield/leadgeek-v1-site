import React from "react"
import { Link } from "gatsby"

import { GatsbySeo } from "gatsby-plugin-next-seo"

import Layout from "components/layout/Layout"

const PrivacyPolicyPage = () => {
  const siteTitle = "Leadgeek"
  const siteLink = "/"
  const siteLinkFull = "https://leadgeek.io"
  const title = "Leadgeek Privacy Policy"
  const desc =
    "The privacy policy for Leadgeek website users and customers. We take your data seriously and handle it responsibly."
  return (
    <Layout>
      <GatsbySeo
        title={title}
        description={desc}
        openGraph={{
          title: { title },
          description: { desc },
          type: "website",
        }}
      />
      <section className="py-8 md:py-12 lg:py-16 text-gray-900 bg-splatter">
        <div className="max-w-2xl container">
          <h1 className="mt-4 text-3xl font-black inter bg-white">
            Welcome to {siteTitle}'s privacy policy
          </h1>
          <section className={classes.section}>
            <p className={classes.text}>
              It is our policy to respect your privacy regarding any information
              we may collect while operating our website. This Privacy Policy
              applies to{" "}
              <Link to={siteLink} className="secondary-link">
                {siteLinkFull}
              </Link>{" "}
              (hereinafter, "us", "we", or "{siteTitle}"). We respect your
              privacy and are committed to protecting personally identifiable
              information you may provide us through the Website. We have
              adopted this privacy policy to explain what information may be
              collected on our Website, how we use this information, and under
              what circumstances we may disclose the information to third
              parties. This privacy policy applies only to information we
              collect through the Website and does not apply to our collection
              of information from other sources.
            </p>
            <p className={classes.text}>
              This Privacy Policy, together with the{" "}
              <Link to={`/terms/`} className="secondary-link">
                terms and conditions
              </Link>{" "}
              posted on our Website, set forth the general rules and policies
              governing your use of our website. Depending on your activities
              when visiting our website, you may be required to agree to
              additional terms and conditions.
            </p>
          </section>
          <section className={classes.section}>
            <h2 className={classes.h2}>Website visitors</h2>
            <p className={classes.text}>
              Like most website operators, {siteTitle} collects
              non-personally-identifying information of the sort that web
              browsers and servers typically make available, such as the browser
              type, language preference, referring site, and the date and time
              of each visitor request. {siteTitle}'s purpose in collecting
              non-personally identifying information is to better understand how{" "}
              {siteTitle}'s visitors use its website. From time to time,{" "}
              {siteTitle} may release non-personally-identifying information in
              the aggregate, e.g., by publishing a report on trends in the usage
              of its website.
            </p>
          </section>
          <section className={classes.section}>
            <h2 className={classes.h2}>
              Gathering of personally-identifying information
            </h2>
            <p className={classes.text}>
              Certain visitors to {siteTitle}'s websites choose to interact with{" "}
              {siteTitle} in ways that require {siteTitle} to gather
              personally-identifying information. The amount and type of
              information that {siteTitle} gathers depends on the nature of the
              interaction. For example, we ask visitors who sign up for our
              services to provide an email address.
            </p>
          </section>
          <section className={classes.section}>
            <h2 className={classes.h2}>Security</h2>
            <p className={classes.text}>
              The security of your personal information is important to us, but
              remember that no method of transmission over the Internet, or
              method of electronic storage is 100% secure. While we strive to
              use commercially acceptable means to protect your personal
              information, we cannot guarantee its absolute security.
            </p>
          </section>
          <section className={classes.section}>
            <h2 className={classes.h2}>Links to external sites</h2>
            <p className={classes.text}>
              Our service may contain links to external sites that are not
              operated by us. If you click on a third party link, you will be
              directed to that third party's site. We strongly advise you to
              review the privacy policy and terms and conditions of every site
              you visit.
            </p>
            <p className={classes.text}>
              We have no control over, and assume no responsibility for the
              content, privacy policies or practices of any third party sites,
              products or services.
            </p>
          </section>
          <section className={classes.section}>
            <h2 className={classes.h2}>Aggregated statistics</h2>
            <p className={classes.text}>
              {siteTitle} may collect statistics about the behavior of visitors
              to its website. {siteTitle} may display this information publicly
              or provide it to others. However, {siteTitle} does not disclose
              your personally-identifying information.
            </p>
          </section>
          <section className={classes.section}>
            <h2 className={classes.h2}>Cookies</h2>
            <p className={classes.text}>
              To enrich and perfect your online experience, {siteTitle} uses
              "cookies", similar technologies and services provided by others to
              display personalized content, appropriate advertising and store
              your preferences on your computer.
            </p>
            <p className={classes.text}>
              A cookie is a string of information that a website stores on a
              visitor's computer, and that the visitor's browser provides to the
              website each time the visitor returns. {siteTitle} uses cookies to
              help {siteTitle} identify and track visitors, their usage of{" "}
              {siteLinkFull}, and their website access preferences. {siteTitle}{" "}
              visitors who do not wish to have cookies placed on their computers
              should set their browsers to refuse cookies before using{" "}
              {siteTitle}
              's websites, with the drawback that certain features of{" "}
              {siteTitle}
              's websites may not function properly without the aid of cookies.
            </p>
            <p className={classes.text}>
              {siteTitle}, or our service providers acting on our behalf, may
              use cookies in the following ways:
            </p>
            <p className={classes.text}>
              <strong>Strictly Necessary:</strong> These cookies are necessary
              to allow us to operate the {siteTitle} Service as you have
              requested. For example, they let us recognize what type of
              subscriber you are and then provide you with services accordingly.
            </p>
            <p className={classes.text}>
              <strong>Performance / Analytics:</strong> We use cookies and other
              similar technologies to analyze how the {siteTitle} Service is
              accessed, is used, or is performing. We use this information to
              maintain, operate, and continually improve the {siteTitle}{" "}
              Service. We may also obtain information from our email newsletters
              or other communications we send to you, including whether you
              opened or forwarded a newsletter or clicked on any of its content.
              This information tells us about our newsletters' effectiveness and
              helps us ensure that we're delivering information that you find
              interesting.
            </p>
            <p className={classes.text}>
              <strong>Functional:</strong> These cookies let us operate the{" "}
              {siteTitle} Service according to your preferences. For example,
              when you continue to use or come back to the {siteTitle} Service,
              we can provide you with our services based on information you
              provide to us, such as remembering your username, how you have
              customized our services, and reminding you of content you have
              engaged with previously.
            </p>
            <p className={classes.text}>
              <strong>Targeted Advertising:</strong> We use these cookies and
              other similar technologies to serve you with advertisements that
              may be relevant to you and your interests, including
              interest-based advertising. The information may also be used to
              record how many times you’ve been served a particular
              advertisement and to ensure we do not display the same
              advertisement to you repeatedly, and to otherwise help us measure
              their effectiveness. Additionally, we may serve remarketing
              advertisements to you.
            </p>
            <p className={classes.text}>
              <strong>Third Party:</strong> We may allow our Business Partners
              (Google:{" "}
              <a
                href="https://google.com/"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="secondary-link"
              >
                https://google.com/
              </a>
              , Microsoft:{" "}
              <a
                href="https://microsoft.com/"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="secondary-link"
              >
                https://microsoft.com/
              </a>
              , Facebook:{" "}
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="secondary-link"
              >
                https://facebook.com/
              </a>
              ), to use cookies or other similar technologies on or outside the{" "}
              {siteTitle} Service for the same purposes identified above,
              including collecting information about your online activities over
              time and across different websites, applications, and/or devices.
            </p>
            <p className={classes.text}>
              <strong>{siteTitle} Ads :</strong> We work with website
              publishers, application developers, advertising networks, and
              service providers to deliver advertisements and other content
              promoting {siteTitle} on other web sites and services. Cookies and
              other similar technologies may be used to serve you with
              advertisements that may be relevant to you and your interests on
              other websites, applications, and devices, and to regulate the
              advertisements you receive and measure their effectiveness.
            </p>
            <p className={classes.text}>
              By continuing to navigate our website without changing your cookie
              settings, you hereby acknowledge and agree to {siteTitle}'s use of
              cookies. If you would like to opt-out of analysis by Google
              Analytics on our website and other websites, please visit{" "}
              <a
                href="https://tools.google.com/dlpage/gaoptout/"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="secondary-link"
              >
                https://tools.google.com/dlpage/gaoptout
              </a>
              . If you would like to adjust your ad delivery preferences on the
              Google Ad network, please visit{" "}
              <a
                href="https://adssettings.google.com/"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="secondary-link"
              >
                Google's Ads Preferences Manager
              </a>
              . If you would like to adjust your Microsoft Advertising
              preferences, please visit{" "}
              <a
                href="https://about.ads.microsoft.com/en-us/resources/policies/personalized-ads"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="secondary-link"
              >
                Microsoft's Ads Preferences Manager
              </a>
              .
            </p>
          </section>
          <section className={classes.section}>
            <h2 className={classes.h2}>Privacy policy changes</h2>
            <p className={classes.text}>
              Although most changes are likely to be minor, {siteTitle} may
              change its privacy policy from time to time, and in {siteTitle}'s
              sole discretion. {siteTitle} encourages visitors to frequently
              check this page for any changes to its privacy policy. Your
              continued use of this site after any change in this privacy policy
              will constitute your acceptance of such change.
            </p>
          </section>
          <section className={classes.section}>
            <h2 className={classes.h2}>Contact information</h2>
            <p className={classes.text}>
              If you have any questions about our privacy policy, please contact
              us via our{" "}
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
                <span>lo@L</span>
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

export default PrivacyPolicyPage
