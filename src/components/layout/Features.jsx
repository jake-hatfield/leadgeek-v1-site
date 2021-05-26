import React, { useState } from "react"
import { Link } from "gatsby"

import HeaderWrapper from "components/HeaderWrapper"
import PrimaryHeader from "components/primaryHeader"
import BulletedList from "components/BulletedList"

const FeaturePage = ({ feature }) => {
  const [currentFeature, setCurrentFeature] = useState(
    featureList.filter(f => f.link === feature)[0]
  )

  const { title, desc, faqs, link, nextLink, prevLink } = currentFeature
  return (
    <section className="bg-splatter">
      <HeaderWrapper>
        <PrimaryHeader title={title} desc={desc} />
      </HeaderWrapper>
      <section className="container">
        <ul className="mx-auto md:max-w-xl lg:max-w-2xl md:text-lg lg:text-xl leading-relaxed text-gray-800 text-center">
          {faqs.map((faq, i) => (
            <li key={i} className="mt-6">
              <h3 className="text-2xl md:text-3xl xl:text-4xl font-black text-gray-900 inter">
                {faq.title}
              </h3>
              <div className="mt-4 lg:mt-6 h4">{faq.desc}</div>
            </li>
          ))}
        </ul>
      </section>
      <nav className="hidden md:block fixed center-between top-1/2 inter font-bold text-purple-500">
        {prevLink && (
          <Link
            to={`/features/${prevLink}/`}
            className="fixed left-0 all-center transition-main group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span className="tertiary-link">prev</span>
          </Link>
        )}
        {nextLink && (
          <Link
            to={`/features/${nextLink}/`}
            className="fixed right-0 all-center transition-main group"
          >
            <span className="tertiary-link">next</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        )}
      </nav>
    </section>
  )
}

const classes = {
  emphasizedFeature: "emphasized-text",
}

export const featureList = [
  {
    title: "Top-shelf leads come standard",
    desc: (
      <p>
        Scale your business without sacrificing quality in your inventory.
        Carefully-tailored criteria and vetting methods allow you to get
        professional-grade arbitrage sourcing at a fraction of the price.{" "}
        <span className={classes.emphasizedFeature}>
          Every lead needs to meet profit, ROI, and sales requirements
        </span>{" "}
        so you don’t waste any time with duds.
      </p>
    ),
    faqs: [
      {
        title: "What's the base net profit?",
        desc: (
          <p>
            The minimum profit (after FBA fees) a product must meet is{" "}
            <span className={classes.emphasizedFeature}>
              $4/unit for the Grow plan and $7/unit for the Pro plan
            </span>
            . It's worth noting that these are just the minimum acceptable
            values - the average profit is much higher.
          </p>
        ),
      },
      {
        title: "What's the base ROI?",
        desc: (
          <p>
            On top of the profit criteria, any item has to have at least a{" "}
            <span className={classes.emphasizedFeature}>
              40% ROI on the Grow plan and a 50% ROI on the Pro plan
            </span>
            .
          </p>
        ),
      },
      {
        title: "What's the base sales velocity?",
        desc: (
          <p>
            The minimum sales criteria are{" "}
            <span className={classes.emphasizedFeature}>
              10 sales/month + &#60;2% BSR on the Grow plan and 15 sales/month +
              &#60;1.5% BSR on the Pro plan
            </span>
            .
          </p>
        ),
      },
      {
        title: "How did you pick these criteria?",
        desc: (
          <p>
            When you combine the profit, ROI, BSR, and monthly sales minimums,
            there's reasonable padding built in for any fluctuations. To boot -{" "}
            <span className={classes.emphasizedFeature}>
              any lead with these standards means that they're generally in the
              top 1% of products
            </span>{" "}
            sold on Amazon's US marketplace.
          </p>
        ),
      },
    ],
    link: "criteria",
    nextLink: "calculations",
    prevLink: "member-support",
  },
  {
    title: "Laser-accurate number crunching",
    desc: (
      <p>
        If the profit estimations aren’t accurate, you’re often stuck with
        products that are breakeven or even lose you money. With Leadgeek,{" "}
        <span className={classes.emphasizedFeature}>
          all Amazon fees are accounted for with the official calculator
        </span>{" "}
        so you see numbers that can be relied on.
      </p>
    ),
    faqs: [
      {
        title: "Sorry, *which* tool do you use to estimate fees?",
        desc: (
          <p>
            <a
              href="https://sellercentral.amazon.com/hz/fba/profitabilitycalculator/index"
              target="__blank"
              rel="noopener noreferrer"
              className="secondary-link"
            >
              This one
            </a>
            . The official calculator from Amazon is pretty much the only
            reliable way to get an idea of profitability. This little tool keeps
            up with the changing FBA fee structure, so{" "}
            <span className={classes.emphasizedFeature}>
              these numbers are pretty darn close to accurate
            </span>
            .
          </p>
        ),
      },
      {
        title: "What costs are included?",
        desc: (
          <p>
            Two big fees - and one kinda-hidden fee - are built into Leadgeek's
            estimations.{" "}
            <span className={classes.emphasizedFeature}>The referral fee </span>
            (the charge for selling on Amazon's marketplace),{" "}
            <span className={classes.emphasizedFeature}>
              the FBA fulfillment fee
            </span>
            (for not handling shipping or customer service yourself), and{" "}
            <span className={classes.emphasizedFeature}>
              the estimated storage cost
            </span>{" "}
            (an often-neglected charge) are bundled into this calculator.
          </p>
        ),
      },
      {
        title: "Are the values updated periodically?",
        desc: (
          <p>
            Nope, they aren't. A big part of arbitrage in general is timing, and
            things are bound to change. While it would be nice to keep the
            profitability metrics updated over time,{" "}
            <span className={classes.emphasizedFeature}>
              it's just not feasible with 100+ new leads sourced each week
            </span>
            .
          </p>
        ),
      },
    ],
    link: "calculations",
    nextLink: "categories",
    prevLink: "criteria",
  },
  {
    title: "Source comprehensive categories",
    desc: (
      <p>
        Building a diversified inventory has never been easier.{" "}
        <span className={classes.emphasizedFeature}>
          Choose items sourced from 25+ top-selling Amazon categories
        </span>{" "}
        to create your ideal product portfolio.
      </p>
    ),
    faqs: [
      {
        title: "What categories are sourced from?",
        desc: (
          <div>
            <BulletedList
              gridLayout={"grid-cols-2 gap-4"}
              maxWidth={"max-w-2xl"}
              items={[
                { title: "Appliances", delay: null },
                { title: "Arts, crafts, & sewing", delay: null },
                { title: "Automotive parts", delay: null },
                { title: "Baby", delay: null },
                { title: "Beauty & personal care", delay: null },
                { title: "Books", delay: null },
                { title: "CDs & vinyl", delay: null },
                { title: "Cell Phones & Accessories", delay: null },
                { title: "Clothing, Shoes & Jewelry", delay: null },
                { title: "Computers", delay: null },
                { title: "Electronics", delay: null },
                { title: "Garden & Outdoor", delay: null },
                { title: "Grocery & Gourmet Food", delay: null },
                { title: "Handmade", delay: null },
                { title: "Health & Household", delay: null },
                { title: "Home & Kitchen", delay: null },
                { title: "Industrial & Scientific", delay: null },
                { title: "Luggage & Travel Gear", delay: null },
                { title: "Movies & TV", delay: null },
                { title: "Musical Instruments", delay: null },
                { title: "Office Products", delay: null },
                { title: "Pet Supplies", delay: null },
                { title: "Sports & Outdoors", delay: null },
                { title: "Tools & Home Improvement", delay: null },
                { title: "Toys & Games", delay: null },
                { title: "Video Games", delay: null },
              ]}
            />
          </div>
        ),
      },
      {
        title: "What are the most commonly included?",
        desc: (
          <p>
            There's a good bit of{" "}
            <span className={classes.emphasizedFeature}>
              toys, clothing, and home goods on the Grow plan
            </span>
            . More of the same on the Pro plan, but with some extra stuff in{" "}
            <span className={classes.emphasizedFeature}>grocery or beauty</span>{" "}
            as well.
          </p>
        ),
      },
      {
        title: "Will I be gated in some of the products from these categories?",
        desc: (
          <p>
            Most definitely. If you're not gated in at least some, hit me up and
            we'll talk all about how you're a super-seller.{" "}
            <span className={classes.emphasizedFeature}>
              While you won't be able to sell everything, there are plenty of
              people new to arbitrage who use Leadgeek exclusively for sourcing
            </span>
            . We try to source from categories that many sellers are ungated in,
            but if you have concerns please{" "}
            <Link to="/contact/" className="secondary-link">
              contact us
            </Link>
            .
          </p>
        ),
      },
    ],
    link: "categories",
    nextLink: "retailers",
    prevLink: "calculations",
  },
  {
    title: "Solid sources by default",
    desc: (
      <p>
        <span className={classes.emphasizedFeature}>
          Over 500 trusted US-based retailers are used to source products
        </span>
        . This not only gives you variety, but a peace of mind that your items
        are authentic brands to arbitrage, not some knock-off crap that will get
        your Seller Central account suspended.
      </p>
    ),
    faqs: [
      {
        title: "How can I trust that these retailers are the real deal?",
        desc: (
          <p>
            When we say "authentic," we mean it.{" "}
            <span className={classes.emphasizedFeature}>
              These are retailers like Target, Walmart, Best Buy, etc
            </span>
            . No nonsense like eBay or AliExpress. As an added perk, lots of the
            legit retailers have reasonable minimums for free shipping.
          </p>
        ),
      },
      {
        title: "Can I use these sources for ungating?",
        desc: (
          <p>
            <span className={classes.emphasizedFeature}>
              You surely cannot. These are{" "}
              <span className="italic">retailers</span>, not distributors.
            </span>{" "}
            Unlike with wholesale that gets you an invoice, retailers just send
            you a receipt. If you have a question about ungating,{" "}
            <Link to="/contact/" className="secondary-link">
              contact us
            </Link>{" "}
            and we can likely point you in the right direction.
          </p>
        ),
      },
      {
        title: "Do you source from XYZ retailer?",
        desc: (
          <p>
            I dunno! You'll have to{" "}
            <Link to="/contact/" className="secondary-link">
              ask us
            </Link>
            .
          </p>
        ),
      },
    ],
    link: "retailers",
    nextLink: "historical-metrics",
    prevLink: "categories",
  },
  {
    title: "Check out historical metrics",
    desc: (
      <p>
        History tends to repeat itself, and you deserve the full picture. That’s
        why{" "}
        <span className={classes.emphasizedFeature}>
          Leadgeek includes 30 & 90 day metrics and current competition for the
          buy box
        </span>
        . While the price right now is important too, use historical data to see
        trends like seasonality, out of stock spikes, and more.
      </p>
    ),
    faqs: [
      {
        title: "What's the benefit of watching 30 & 90 day metrics?",
        desc: (
          <p>
            There are a lot of benefits, actually. Arbitrage is sorta volatile,
            which creates the price gaps you can take advantage of. A downside
            to that is if the product dips too low in price or slows down to
            much in velocity, you're stuck with something that loses you money.{" "}
            <span className={classes.emphasizedFeature}>
              Verifying the product history is well worth your while, and
              Leadgeek makes it easy to check out
            </span>
            .
          </p>
        ),
      },
      {
        title: "Will I get the buy box?",
        desc: (
          <p>
            <span className={classes.emphasizedFeature}>
              Quite likely, yes!
            </span>{" "}
            That's why the current competition is included. For example: if the
            buy box is controlled by a merchant fulfilled seller, swoop in and
            grab those sales out from under them. Does an FBA seller have the
            buy box? Match and share, there's plenty to go around.
          </p>
        ),
      },
      {
        title: "How are these values tracked?",
        desc: (
          <p>
            <span className={classes.emphasizedFeature}>
              With a really cool tool called Keepa
            </span>
            . Keepa tracks the history of a product for days, weeks, months, or
            even years. The buy box competition is determined a few minutes
            before the lead is posted.
          </p>
        ),
      },
    ],
    link: "historical-metrics",
    nextLink: "reliability",
    prevLink: "retailers",
  },
  {
    title: "Keep 'em coming",
    desc: (
      <p>
        Leadgeek is all about predictability, especially when it comes to the
        quantity of leads you can expect. Gone are the days of striking out when
        sourcing -{" "}
        <span className={classes.emphasizedFeature}>
          the Feed delivers a guaranteed number of leads each and every weekday
        </span>
        . Just scroll through to find the ones that best fit your selling style.
      </p>
    ),
    faqs: [
      {
        title: "How many leads will I get?",
        desc: (
          <p>
            <span className={classes.emphasizedFeature}>
              Leadgeek guarantees 10 products for you to check out every day,
              Monday-Friday
            </span>
            . That's 50 vetted items per week, or 200 every month. Feelin' ready
            to take on more? The Bundle plan give you 20 leads each day
            (100/week, 400/month) for a substantial discount.
          </p>
        ),
      },
      {
        title: "Do you take any holidays off?",
        desc: (
          <p>
            Indeed we do, but it's not like we're throwing a rager on Earth Day.{" "}
            <span className={classes.emphasizedFeature}>
              We take time to rest on Thanksgiving and Christmas
            </span>
            .
          </p>
        ),
      },
      {
        title: "Are there ever any extra leads?",
        desc: (
          <p>
            Heck yeah.{" "}
            <span className={classes.emphasizedFeature}>
              There's around 20-40% extra leads more often than not
            </span>
            . Being gated in a product can be annoying, so some bonus leads are
            thrown in to increase your chances of being able to sell more stuff.
          </p>
        ),
      },
    ],
    link: "reliability",
    nextLink: "exclusivity",
    prevLink: "historical-metrics",
  },
  {
    title: "The inner circle",
    desc: (
      <p>
        Leadgeek takes seller exclusivity seriously, which is why{" "}
        <span className={classes.emphasizedFeature}>
          there are no-budge caps on the number of people allowed on a list at
          any given time
        </span>
        : 30 members for the Grow plan and 15 for the Pro plan - cutting
        competition significantly.
      </p>
    ),
    faqs: [
      {
        title: `Will there be a "race to the bottom"?`,
        desc: (
          <p>
            We have no crystal ball to see into the future, but{" "}
            <span className={classes.emphasizedFeature}>
              reducing the list exposure helps prevent that from happening
            </span>
            . 30 people on the Grow plan and 15 on the Pro plan is one of the
            tightest-knit lists in the industry.
          </p>
        ),
      },
      {
        title: "What's a no-budge cap?",
        desc: (
          <p>
            <span className={classes.emphasizedFeature}>
              The limit of members is the limit of members
            </span>
            . One of the things you're paying for is exclusivity and by darn
            you'll get it.
          </p>
        ),
      },
      {
        title: "Are there ever any extra leads?",
        desc: (
          <p>
            Heck yeah.{" "}
            <span className={classes.emphasizedFeature}>
              There's around 20-40% extra leads more often than not
            </span>
            . Being gated in a product can be annoying, so some bonus leads are
            thrown in to increase your chances of being able to sell more stuff.
          </p>
        ),
      },
    ],
    link: "exclusivity",
    nextLink: "predictability",
    prevLink: "reliability",
  },
  {
    title: "Hot off the press",
    desc: (
      <p>
        Leadgeek helps you make sourcing a system by releasing{" "}
        <span className={classes.emphasizedFeature}>
          fresh leads every morning by 9 am CST
        </span>
        . These guaranteed arbitrage opportunties let you be the first one to
        order - and the first one to sell.
      </p>
    ),
    faqs: [
      {
        title: "Why release leads at a scheduled time?",
        desc: (
          <p>
            Much of arbitrage is about developing a practical system and
            nurturing habits. Many people have full-time jobs on top of doing
            e-commerce, so{" "}
            <span className={classes.emphasizedFeature}>
              it makes sense for there to be a predictable time to make selling
              a part of your schedule
            </span>
            .
          </p>
        ),
      },
      {
        title: "Why 9 am CST?",
        desc: (
          <p>
            Think of it like the opening of a farmer's market:{" "}
            <span className={classes.emphasizedFeature}>
              it's early enough to get first pick
            </span>
            , but not too late that all you want to do is stay in bed.
          </p>
        ),
      },
    ],
    link: "predictability",
    nextLink: "seller-insight",
    prevLink: "exclusivity",
  },
  {
    title: "Professional experience in your corner",
    desc: (
      <p>
        <span className={classes.emphasizedFeature}>
          The Leadgeek sourcing process includes review by a seasoned US Amazon
          seller
        </span>{" "}
        for each and every lead. That way, the only products you see are ones
        that have been approved by years of FBA know-how.
      </p>
    ),
    faqs: [
      {
        title: "Huh? Amazon seller review?",
        desc: (
          <p>
            Yup!{" "}
            <span className={classes.emphasizedFeature}>
              An experienced Amazon seller checks the products
            </span>
            . What's more - while almost every other sourcing list uses
            internationally-based virtual assistants to find new leads,{" "}
            <span className={classes.emphasizedFeature}>
              the vast majority of our sourcing is done manually by a US Amazon
              seller themselves
            </span>
            . No cutting corners 'round these parts.
          </p>
        ),
      },
      {
        title: "Which part is evaluated by the experienced seller?",
        desc: (
          <p>
            <span className={classes.emphasizedFeature}>
              Everything about each and every lead
            </span>
            . They verify that the products are a match to the best of their
            knowledge, that the metrics are accurate, that any additional notes
            are accounted for, and that the product can be expected to sell with
            a reasonable degree of certainty.
          </p>
        ),
      },
      {
        title: "Does that mean I can just purchase stuff willy-nilly?",
        desc: (
          <p>
            Probably not.{" "}
            <span className={classes.emphasizedFeature}>
              It's recommended that you review each product before you add it to
              your inventory
            </span>
            ; Since when have double-checks been a bad idea?
          </p>
        ),
      },
    ],
    link: "seller-insight",
    nextLink: "feed",
    prevLink: "predictability",
  },
  {
    title: "Skim info in the Feed",
    desc: (
      <p>
        The Feed shows the most important product metrics by design, making it
        easy to see the leads you’re interested in and breeze through the ones
        you aren’t.{" "}
        <span className={classes.emphasizedFeature}>
          You won’t be bombarded by info
        </span>
        , but instead feel informed to make the right decisions for you.
      </p>
    ),
    faqs: [
      {
        title: "What kind of stuff is included in the Feed?",
        desc: (
          <p>
            <span className={classes.emphasizedFeature}>
              The title, category, image, competition, profit, ROI, BSR, monthly
              sales, and date for each lead
            </span>
            .
          </p>
        ),
      },
      {
        title: "Can I see more?",
        desc: (
          <p>
            Very easily.{" "}
            <span className={classes.emphasizedFeature}>
              Just click on the row for each item and you'll see a detailed view
              instantly
            </span>
            , along with some extra shortcuts to make your life easier.
          </p>
        ),
      },
    ],
    link: "feed",
    nextLink: "filters",
    prevLink: "seller-insight",
  },
  {
    title: "Surface data, don't dig for it",
    desc: (
      <p>
        You’ve finally got 30 minutes to sit down and check out some arbitrage
        leads. But there’s tons of information to sort through and so many
        metrics to analyze that it all feels overwhelming. Not with Leadgeek.
        Leadgeek allows you to combine simple filters in a powerful way to{" "}
        <span className={classes.emphasizedFeature}>
          only show the information that’s important to you
        </span>
        .
      </p>
    ),
    faqs: [
      {
        title: "What can I filter by?",
        desc: (
          <p>
            There are 7 min/max value filters:{" "}
            <span className={classes.emphasizedFeature}>
              profit, buy price, sell price, ROI, BSR, monthly sales, and weight
            </span>
            . Additionally, only see products that are in a particular{" "}
            <span className={classes.emphasizedFeature}>category</span> or that
            were posted on a certain{" "}
            <span className={classes.emphasizedFeature}>date</span>.
          </p>
        ),
      },
      {
        title: "Only 9 filters? That doesn't seem like a lot...",
        desc: (
          <p>
            <span className={classes.emphasizedFeature}>
              That's kinda the point
            </span>
            . Anything more than that and you're probably over-complicating
            things. The products have already been checked out - the filters are
            there to bubble what you want up to the top. When combined, the
            filters are quite powerful.
          </p>
        ),
      },
    ],
    link: "filters",
    nextLink: "details",
    prevLink: "feed",
  },
  {
    title: "View details on the fly",
    desc: (
      <p>
        Don't miss a beat with the detailed view for each item.{" "}
        <span className={classes.emphasizedFeature}>
          See primary metrics, historical data, and helpful notes all in one
          place.
        </span>{" "}
        Also included are helpful links to the source retailer, Amazon listing,
        and Seller Central to see if the product is ungated for you.
      </p>
    ),
    faqs: [
      {
        title: "Why release leads at a scheduled time?",
        desc: (
          <p>
            Much of arbitrage is about developing a practical system and
            nurturing habits. Many people have full-time jobs on top of doing
            e-commerce, so{" "}
            <span className={classes.emphasizedFeature}>
              it makes sense for there to be a predictable time to make selling
              a part of your schedule
            </span>
            .
          </p>
        ),
      },
      {
        title: "Why 9 am CST?",
        desc: (
          <p>
            Think of it like the opening of a farmer's market:{" "}
            <span className={classes.emphasizedFeature}>
              it's early enough to get first pick
            </span>
            , but not too late that all you want to do is stay in bed.
          </p>
        ),
      },
    ],
    link: "predictability",
    nextLink: "seller-insight",
    prevLink: "exclusivity",
  },
  {
    title: `Stay organized with "Like" & "Archive"`,
    desc: (
      <p>
        <span className={classes.emphasizedFeature}>
          Things are right where you expect to find them
        </span>{" "}
        with Leadgeek's simple but powerful like and archive system. Like the
        leads you want to order soon and archive the ones that deserve a second
        look at some point in the future.
      </p>
    ),
    faqs: [
      {
        title: "Why release leads at a scheduled time?",
        desc: (
          <p>
            Much of arbitrage is about developing a practical system and
            nurturing habits. Many people have full-time jobs on top of doing
            e-commerce, so{" "}
            <span className={classes.emphasizedFeature}>
              it makes sense for there to be a predictable time to make selling
              a part of your schedule
            </span>
            .
          </p>
        ),
      },
      {
        title: "Why 9 am CST?",
        desc: (
          <p>
            Think of it like the opening of a farmer's market:{" "}
            <span className={classes.emphasizedFeature}>
              it's early enough to get first pick
            </span>
            , but not too late that all you want to do is stay in bed.
          </p>
        ),
      },
    ],
    link: "predictability",
    nextLink: "seller-insight",
    prevLink: "exclusivity",
  },
  {
    title: "Account for prep costs automatically",
    desc: (
      <p>
        Built-in tools allow you to{" "}
        <span className={classes.emphasizedFeature}>
          easily estimate product prep fees
        </span>
        . Whether you need to calculate a fee based on quantity or weight,
        you'll see real-world profitability for each item.
      </p>
    ),
    faqs: [
      {
        title: "Why release leads at a scheduled time?",
        desc: (
          <p>
            Much of arbitrage is about developing a practical system and
            nurturing habits. Many people have full-time jobs on top of doing
            e-commerce, so{" "}
            <span className={classes.emphasizedFeature}>
              it makes sense for there to be a predictable time to make selling
              a part of your schedule
            </span>
            .
          </p>
        ),
      },
      {
        title: "Why 9 am CST?",
        desc: (
          <p>
            Think of it like the opening of a farmer's market:{" "}
            <span className={classes.emphasizedFeature}>
              it's early enough to get first pick
            </span>
            , but not too late that all you want to do is stay in bed.
          </p>
        ),
      },
    ],
    link: "predictability",
    nextLink: "seller-insight",
    prevLink: "exclusivity",
  },
  {
    title: "Leave your mark",
    desc: (
      <p>
        <span className={classes.emphasizedFeature}>
          Personalize each product by writing a comment that only you can see
        </span>
        . Interested in a few variations or plan to re-order an item? Write it
        down so you don’t forget!
      </p>
    ),
    faqs: [
      {
        title: "Why release leads at a scheduled time?",
        desc: (
          <p>
            Much of arbitrage is about developing a practical system and
            nurturing habits. Many people have full-time jobs on top of doing
            e-commerce, so{" "}
            <span className={classes.emphasizedFeature}>
              it makes sense for there to be a predictable time to make selling
              a part of your schedule
            </span>
            .
          </p>
        ),
      },
      {
        title: "Why 9 am CST?",
        desc: (
          <p>
            Think of it like the opening of a farmer's market:{" "}
            <span className={classes.emphasizedFeature}>
              it's early enough to get first pick
            </span>
            , but not too late that all you want to do is stay in bed.
          </p>
        ),
      },
    ],
    link: "predictability",
    nextLink: "seller-insight",
    prevLink: "exclusivity",
  },
  {
    title: "Keyword central",
    desc: (
      <p>
        Looking for something in particular?{" "}
        <span className={classes.emphasizedFeature}>
          Powerful search lets you find what you’re interested in
        </span>{" "}
        without hunting through thousands of leads. Input keywords to search by
        the source store, title, ASIN, and more.
      </p>
    ),
    faqs: [
      {
        title: "Why release leads at a scheduled time?",
        desc: (
          <p>
            Much of arbitrage is about developing a practical system and
            nurturing habits. Many people have full-time jobs on top of doing
            e-commerce, so{" "}
            <span className={classes.emphasizedFeature}>
              it makes sense for there to be a predictable time to make selling
              a part of your schedule
            </span>
            .
          </p>
        ),
      },
      {
        title: "Why 9 am CST?",
        desc: (
          <p>
            Think of it like the opening of a farmer's market:{" "}
            <span className={classes.emphasizedFeature}>
              it's early enough to get first pick
            </span>
            , but not too late that all you want to do is stay in bed.
          </p>
        ),
      },
    ],
    link: "predictability",
    nextLink: "seller-insight",
    prevLink: "exclusivity",
  },
  {
    title: "Variation suggestions out of the box",
    desc: (
      <p>
        Finding the right variation is great, but it takes valuable time to
        determine which ones are worth selling. With Leadgeek,{" "}
        <span className={classes.emphasizedFeature}>
          variation research is done for you
        </span>
        . These suggestions and seller-to-seller notes give you clarity on how
        to order your inventory.
      </p>
    ),
    faqs: [
      {
        title: "Why release leads at a scheduled time?",
        desc: (
          <p>
            Much of arbitrage is about developing a practical system and
            nurturing habits. Many people have full-time jobs on top of doing
            e-commerce, so{" "}
            <span className={classes.emphasizedFeature}>
              it makes sense for there to be a predictable time to make selling
              a part of your schedule
            </span>
            .
          </p>
        ),
      },
      {
        title: "Why 9 am CST?",
        desc: (
          <p>
            Think of it like the opening of a farmer's market:{" "}
            <span className={classes.emphasizedFeature}>
              it's early enough to get first pick
            </span>
            , but not too late that all you want to do is stay in bed.
          </p>
        ),
      },
    ],
    link: "predictability",
    nextLink: "seller-insight",
    prevLink: "exclusivity",
  },
  {
    title: "Your own personal researcher",
    desc: (
      <p>
        Are you ever curious if there’s a promo or some discount you’re missing
        before you order? Now you don’t have to wonder.{" "}
        <span className={classes.emphasizedFeature}>
          Any available promotional code, free shipping minimum, and cashback is
          automatically noted
        </span>
        .
      </p>
    ),
    faqs: [
      {
        title: "Why release leads at a scheduled time?",
        desc: (
          <p>
            Much of arbitrage is about developing a practical system and
            nurturing habits. Many people have full-time jobs on top of doing
            e-commerce, so{" "}
            <span className={classes.emphasizedFeature}>
              it makes sense for there to be a predictable time to make selling
              a part of your schedule
            </span>
            .
          </p>
        ),
      },
      {
        title: "Why 9 am CST?",
        desc: (
          <p>
            Think of it like the opening of a farmer's market:{" "}
            <span className={classes.emphasizedFeature}>
              it's early enough to get first pick
            </span>
            , but not too late that all you want to do is stay in bed.
          </p>
        ),
      },
    ],
    link: "predictability",
    nextLink: "seller-insight",
    prevLink: "exclusivity",
  },
  {
    title: "Leads belong to you",
    desc: (
      <p>
        Leadgeek puts you in control - and that means that you should be able to
        download your product leads if you want to.{" "}
        <span className={classes.emphasizedFeature}>
          It's easy to export the items you want into a spreadsheet
        </span>{" "}
        to do whatever you want with.
      </p>
    ),
    faqs: [
      {
        title: "Why release leads at a scheduled time?",
        desc: (
          <p>
            Much of arbitrage is about developing a practical system and
            nurturing habits. Many people have full-time jobs on top of doing
            e-commerce, so{" "}
            <span className={classes.emphasizedFeature}>
              it makes sense for there to be a predictable time to make selling
              a part of your schedule
            </span>
            .
          </p>
        ),
      },
      {
        title: "Why 9 am CST?",
        desc: (
          <p>
            Think of it like the opening of a farmer's market:{" "}
            <span className={classes.emphasizedFeature}>
              it's early enough to get first pick
            </span>
            , but not too late that all you want to do is stay in bed.
          </p>
        ),
      },
    ],
    link: "predictability",
    nextLink: "seller-insight",
    prevLink: "exclusivity",
  },
  {
    title: "A+ member support",
    desc: (
      <p>
        Navigating Amazon's marketplace can be a challenge, but there's no need
        to go through it alone.{" "}
        <span className={classes.emphasizedFeature}>
          LeadGeek members get dedicated guidance from an experienced arbitrage
          seller
        </span>{" "}
        to prevent pitfalls and solve issues. Sell with confidence, not
        confusion.
      </p>
    ),
    faqs: [
      {
        title: "Why release leads at a scheduled time?",
        desc: (
          <p>
            Much of arbitrage is about developing a practical system and
            nurturing habits. Many people have full-time jobs on top of doing
            e-commerce, so{" "}
            <span className={classes.emphasizedFeature}>
              it makes sense for there to be a predictable time to make selling
              a part of your schedule
            </span>
            .
          </p>
        ),
      },
      {
        title: "Why 9 am CST?",
        desc: (
          <p>
            Think of it like the opening of a farmer's market:{" "}
            <span className={classes.emphasizedFeature}>
              it's early enough to get first pick
            </span>
            , but not too late that all you want to do is stay in bed.
          </p>
        ),
      },
    ],
    link: "predictability",
    nextLink: "seller-insight",
    prevLink: "exclusivity",
  },
]

export default FeaturePage
