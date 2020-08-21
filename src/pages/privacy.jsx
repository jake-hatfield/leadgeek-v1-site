import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const PrivacyPolicyPage = () => {
  const siteTitle = "LeadGeek"
  const siteLink = "/"
  const siteLinkFull = "https://leadgeek.io"
  return (
    <Layout title="Privacy Policy">
      <SEO title="Privacy Policy" description="" />
      <section className="my-8 md:my-12 lg:my-16 max-w-2xl container text-gray-900">
        <h1 className="text-3xl font-black">
          Welcome to {siteTitle}'s privacy policy
        </h1>
        <p className="mt-4 text-gray-700 text-gray-700">
          It is our policy to respect your privacy regarding any information we
          may collect while operating our website. This Privacy Policy applies
          to{" "}
          <Link to={siteLink} className="font-semibold">
            {siteLinkFull}
          </Link>{" "}
          (hereinafter, "us", "we", or "{siteTitle}"). We respect your privacy
          and are committed to protecting personally identifiable information
          you may provide us through the Website. We have adopted this privacy
          policy to explain what information may be collected on our Website,
          how we use this information, and under what circumstances we may
          disclose the information to third parties. This privacy policy applies
          only to information we collect through the Website and does not apply
          to our collection of information from other sources.
        </p>
        <p className="mt-4 text-gray-700">
          This Privacy Policy, together with the{" "}
          <Link to={`/terms`} className="font-semibold">
            terms and conditions
          </Link>{" "}
          posted on our Website, set forth the general rules and policies
          governing your use of our website. Depending on your activities when
          visiting our website, you may be required to agree to additional terms
          and conditions.
        </p>
        <h2 className="mt-6 text-xl font-bold">Website Visitors</h2>
        <p className="mt-4 text-gray-700">
          Like most website operators, {siteTitle} collects
          non-personally-identifying information of the sort that web browsers
          and servers typically make available, such as the browser type,
          language preference, referring site, and the date and time of each
          visitor request. {siteTitle}'s purpose in collecting non-personally
          identifying information is to better understand how {siteTitle}'s
          visitors use its website. From time to time, {siteTitle} may release
          non-personally-identifying information in the aggregate, e.g., by
          publishing a report on trends in the usage of its website.
        </p>
        <h2 className="mt-6 text-xl font-bold">
          Gathering of Personally-Identifying Information
        </h2>
        <p className="mt-4 text-gray-700">
          Certain visitors to {siteTitle}'s websites choose to interact with{" "}
          {siteTitle} in ways that require {siteTitle} to gather
          personally-identifying information. The amount and type of information
          that {siteTitle} gathers depends on the nature of the interaction. For
          example, we ask visitors who sign up for our services to provide an
          email address.
        </p>
        <h2 className="mt-6 text-xl font-bold">Security</h2>
        <p className="mt-4 text-gray-700">
          The security of your personal information is important to us, but
          remember that no method of transmission over the Internet, or method
          of electronic storage is 100% secure. While we strive to use
          commercially acceptable means to protect your personal information, we
          cannot guarantee its absolute security.
        </p>
        <h2 className="mt-6 text-xl font-bold">Links To External Sites</h2>
        <p className="mt-4 text-gray-700">
          Our service may contain links to external sites that are not operated
          by us. If you click on a third party link, you will be directed to
          that third party's site. We strongly advise you to review the privacy
          policy and terms and conditions of every site you visit.
        </p>
        <p className="mt-4 text-gray-700">
          We have no control over, and assume no responsibility for the content,
          privacy policies or practices of any third party sites, products or
          services.
        </p>
        <h2 className="mt-6 text-xl font-bold">Aggregated Statistics</h2>
        <p className="mt-4 text-gray-700">
          {siteTitle} may collect statistics about the behavior of visitors to
          its website. {siteTitle} may display this information publicly or
          provide it to others. However, {siteTitle} does not disclose your
          personally-identifying information.
        </p>
        <h2 className="mt-6 text-xl font-bold">Cookies</h2>
        <p className="mt-4 text-gray-700">
          To enrich and perfect your online experience, {siteTitle} uses
          "cookies", similar technologies and services provided by others to
          display personalized content, appropriate advertising and store your
          preferences on your computer.
        </p>
        <p className="mt-4 text-gray-700">
          A cookie is a string of information that a website stores on a
          visitor's computer, and that the visitor's browser provides to the
          website each time the visitor returns. {siteTitle} uses cookies to
          help {siteTitle} identify and track visitors, their usage of{" "}
          {siteLinkFull}, and their website access preferences. {siteTitle}{" "}
          visitors who do not wish to have cookies placed on their computers
          should set their browsers to refuse cookies before using {siteTitle}'s
          websites, with the drawback that certain features of {siteTitle}'s
          websites may not function properly without the aid of cookies.
        </p>
        <p className="mt-4 text-gray-700">
          By continuing to navigate our website without changing your cookie
          settings, you hereby acknowledge and agree to {siteTitle}'s use of
          cookies.
        </p>
        <h2 className="mt-6 text-xl font-bold">Privacy Policy Changes</h2>
        <p className="mt-4 text-gray-700">
          Although most changes are likely to be minor, {siteTitle} may change
          its privacy policy from time to time, and in {siteTitle}'s sole
          discretion. {siteTitle} encourages visitors to frequently check this
          page for any changes to its privacy policy. Your continued use of this
          site after any change in this privacy policy will constitute your
          acceptance of such change.
        </p>
        <h2 className="mt-6 text-xl font-bold">Contact Information</h2>
        <p className="mt-4 text-gray-700">
          If you have any questions about this privacy policy, please contact us
          via our{" "}
          <Link to={`/contact`} className="font-semibold">
            contact form
          </Link>
          .
        </p>
      </section>
    </Layout>
  )
}

export default PrivacyPolicyPage
