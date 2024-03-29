import React, { useState } from "react"
import { Link } from "gatsby"

import HeaderWrapper from "@components/HeaderWrapper"
import PrimaryHeader from "@components/PrimaryHeader"
import BulletedList from "@components/BulletedList"

import CommentMp4 from "@assets/video/comment.mp4"
import FeedMp4 from "@assets/video/the-feed.mp4"
import LikeArchiveMp4 from "@assets/video/like-and-archive.mp4"
import FiltersMp4 from "@assets/video/filters.mp4"
import PrepMp4 from "@assets/video/prep.mp4"
import SearchMp4 from "@assets/video/search.mp4"
import ExportMp4 from "@assets/video/export.mp4"
import CommentWebm from "@assets/video/comment.webm"
import FeedWebm from "@assets/video/the-feed.webm"
import LikeArchiveWebm from "@assets/video/like-and-archive.webm"
import FiltersWebm from "@assets/video/filters.webm"
import PrepWebm from "@assets/video/prep.webm"
import SearchWebm from "@assets/video/search.webm"
import ExportWebm from "@assets/video/export.webm"

interface FeaturePageProps {
  feature: string
}

const FeaturePage: React.FC<FeaturePageProps> = ({ feature }) => {
  const [currentFeature] = useState(
    featureList.filter(f => f.link === feature)[0]
  )

  const {
    title,
    description,
    faqs,
    testimonialOne,
    testimonialTwo,
    link,
    nextLink,
    prevLink,
    video,
  } = currentFeature

  return (
    <section className="pb-12 lg:pb-24 bg-splatter">
      <HeaderWrapper bottomPadding={null} styles={null}>
        <PrimaryHeader
          title={title}
          description={description}
          nav={false}
          goHome={false}
          linkOne={null}
          linkOneText={null}
          linkTwo={null}
          linkTwoText={null}
          outsideLink={null}
          svgOne={
            testimonialOne && (
              <div
                className={`hidden lg:block absolute top-0 left-0 py-1 px-2 handwritten text-lg xl:text-xl rounded-lg bg-gray-900 text-teal-300 transform -translate-x-12 text-center transition-main w-56 ${testimonialOne.rotate}`}
              >
                <blockquote>
                  "{testimonialOne.quote}" -{" "}
                  <cite>{testimonialOne.source}</cite>
                </blockquote>
              </div>
            )
          }
          svgTwo={
            testimonialTwo && (
              <div
                className={`hidden lg:block absolute top-0 right-0 py-1 px-2 handwritten text-xl rounded-lg bg-gray-900 text-teal-300 transform translate-x-20 text-center transition-main w-56 ${testimonialTwo.rotate}`}
              >
                <blockquote>
                  "{testimonialTwo.quote}" -{" "}
                  <cite>{testimonialTwo.source}</cite>
                </blockquote>
              </div>
            )
          }
        />
      </HeaderWrapper>
      {video && (
        <div className="px-4 lg:px-8 pb-12 max-w-4xl lg:max-w-5xl mx-auto">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full rounded-lg border border-gray-900 shadow-pinkMd"
            title={video.title}
          >
            <source src={video.webm} type="video/webm" />
            <source src={video.mp4} type="video/mp4" />
          </video>
        </div>
      )}
      <section className="container">
        <ul className="mx-auto md:max-w-xl lg:max-w-2xl md:text-lg lg:text-xl leading-relaxed text-gray-800 text-center">
          {faqs.map((faq, i) => (
            <li
              key={i}
              className={`relative mx-auto md:max-w-xl lg:max-w-2xl mt-8 lg:mt-24 py-4 lg:py-6 px-6 bg-white rounded-lg border border-gray-900 shadow-graySm transform ${faq.rotate}`}
            >
              <h3 className="text-xl md:text-2xl xl:text-3xl font-black text-gray-900 inter">
                {faq.title}
              </h3>
              <div className="mt-4 lg:mt-6 h4">{faq.description}</div>
            </li>
          ))}
        </ul>
      </section>
      <nav className="hidden md:block fixed center-between top-1/2 inter font-bold text-purple-500 z-40">
        {prevLink && (
          <Link
            to={`/features/${prevLink}/`}
            className="ml-2 lg:ml-8 fixed left-0 lg:left-16 xl:right-2/3 all-center transition-main group"
          >
            <span className="cta-link">prev</span>
          </Link>
        )}
        {nextLink && (
          <Link
            to={`/features/${nextLink}/`}
            className="mr-2 lg:mr-8 fixed right-0 lg:right-16 xl:left-2/3 all-center transition-main group"
          >
            <span className="cta-link">next</span>
          </Link>
        )}
        {link === "support" && (
          <Link
            to={`/pricing/`}
            className="mr-2 lg:mr-8 fixed right-0 all-center transition-main group"
          >
            <span className="cta-link">See pricing</span>
          </Link>
        )}
      </nav>
    </section>
  )
}

const classes = {
  emphasizedFeature: "emphasized-text group-hover:text-gray-700",
}

interface Faq {
  title: string
  description: JSX.Element
  rotate: string | null
}

interface Testimonial {
  quote: string
  source: string
  rotate: string
}

interface Feature {
  title: string
  description: JSX.Element
  faqs: Faq[]
  testimonialOne: Testimonial | null
  testimonialTwo: Testimonial | null
  video: { webm: string; mp4: string; title: string } | null
  link: string
  nextLink: string
  prevLink: string
}

export const featureList: Feature[] = [
  {
    title: "Top-shelf leads come standard",
    description: (
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
        description: (
          <p>
            The minimum profit (after FBA fees) a product must meet is{" "}
            <span className={classes.emphasizedFeature}>
              $4/unit for the Grow plan and $7/unit for the Pro plan
            </span>
            .
          </p>
        ),
        rotate: "rotate-2",
      },
      {
        title: "What's the base ROI?",
        description: (
          <p>
            On top of the profit criteria, any item has to have at least a{" "}
            <span className={classes.emphasizedFeature}>
              40% ROI on the Grow plan and a 50% ROI on the Pro plan
            </span>
            .
          </p>
        ),
        rotate: "-rotate-1",
      },
      {
        title: "What's the base sales velocity?",
        description: (
          <p>
            The minimum sales criteria are{" "}
            <span className={classes.emphasizedFeature}>
              10 sales/month + &#60;2% BSR on the Grow plan and 15 sales/month +
              &#60;1.5% BSR on the Pro plan
            </span>
            .
          </p>
        ),
        rotate: "rotate-2",
      },
      {
        title: "Ok - what about the averages?",
        description: (
          <p>
            Over 2500+ products,{" "}
            <span className={classes.emphasizedFeature}>
              the average profit is $12.96, the average ROI is 84%, and the
              average sales/mo. are 83
            </span>
            . There are no lame chump-change products 'round these parts:{" "}
            <span className={classes.emphasizedFeature}>
              The average selling price (ASP) is $43.57
            </span>
            . Not too shabby!
          </p>
        ),
        rotate: "rotate-1",
      },
      {
        title: "How did you pick these criteria?",
        description: (
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
        rotate: "-rotate-2",
      },
    ],
    testimonialOne: {
      quote:
        "Leadgeek delivers on their promises in the promo video on time every day with solid ROI leads",
      source: "William",
      rotate: "-rotate-6 hover:-rotate-3",
    },
    testimonialTwo: {
      quote:
        "I want to thank you for the effort you make to find products with such good quality",
      source: "Frank",
      rotate: "rotate-3 hover:rotate-2",
    },
    video: null,
    link: "criteria",
    nextLink: "calculations",
    prevLink: "support",
  },
  {
    title: "Laser-accurate number crunching",
    description: (
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
        description: (
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
              these numbers are pretty darn accurate
            </span>
            .
          </p>
        ),
        rotate: "-rotate-3",
      },
      {
        title: "What costs are included?",
        description: (
          <p>
            Two big fees - and one kinda-hidden fee - are built into Leadgeek's
            estimations.{" "}
            <span className={classes.emphasizedFeature}>The referral fee </span>
            (the charge for selling on Amazon's marketplace),{" "}
            <span className={classes.emphasizedFeature}>
              the FBA fulfillment fee
            </span>{" "}
            (for handling shipping and customer service), and{" "}
            <span className={classes.emphasizedFeature}>
              the estimated storage cost
            </span>{" "}
            (an often-neglected charge) are bundled into this calculator.
          </p>
        ),
        rotate: "-rotate-1",
      },
      {
        title: "Are the values updated periodically?",
        description: (
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
        rotate: "rotate-2",
      },
    ],
    testimonialOne: {
      quote: "[My] profit margin is roughly 25% and ROI more than 2x that",
      source: "Charles",
      rotate: "-rotate-2 hover:-rotate-3",
    },
    testimonialTwo: null,
    video: null,
    link: "calculations",
    nextLink: "categories",
    prevLink: "criteria",
  },
  {
    title: "Source comprehensive categories",
    description: (
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
        title: "Which categories are sourced?",
        description: (
          <div>
            <BulletedList
              maxWidth={"max-w-2xl"}
              gridLayout={"grid-cols-2 gap-4"}
              items={[
                "Appliances",
                "Arts, crafts, & sewing",
                "Automotive parts",
                "Baby",
                "Beauty & personal care",
                "Books",
                "CDs & vinyl",
                "Cell Phones & Accessories",
                "Clothing, Shoes & Jewelry",
                "Computers",
                "Electronics",
                "Garden & Outdoor",
                "Grocery & Gourmet Food",
                "Handmade",
                "Health & Household",
                "Home & Kitchen",
                "Industrial & Scientific",
                "Luggage & Travel Gear",
                "Movies & TV",
                "Musical Instruments",
                "Office Products",
                "Pet Supplies",
                "Sports & Outdoors",
                "Tools & Home Improvement",
                "Toys & Games",
                "Video Games",
              ]}
            />
          </div>
        ),
        rotate: "-rotate-1",
      },
      {
        title: "What are the most commonly included?",
        description: (
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
        rotate: "rotate-2",
      },
      {
        title: "Will I be gated in some of the products from these categories?",
        description: (
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
        rotate: "-rotate-1",
      },
    ],
    testimonialOne: null,
    testimonialTwo: null,
    video: null,
    link: "categories",
    nextLink: "retailers",
    prevLink: "calculations",
  },
  {
    title: "Solid sources by default",
    description: (
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
        description: (
          <p>
            When we say "authentic," we mean it.{" "}
            <span className={classes.emphasizedFeature}>
              These are retailers like Target, Walmart, Best Buy, etc
            </span>
            . No nonsense like eBay or AliExpress. As an added perk, lots of the
            legit retailers have reasonable minimums for free shipping.
          </p>
        ),
        rotate: "-rotate-1",
      },
      {
        title: "Can I use these sources for ungating?",
        description: (
          <p>
            <span className={classes.emphasizedFeature}>
              You surely cannot. These are{" "}
              <span className="italic">retailers</span>, not distributors
            </span>
            . Unlike with wholesale that gets you an invoice, retailers just
            send you a receipt. If you have a question about ungating,{" "}
            <Link to="/contact/" className="secondary-link">
              contact us
            </Link>{" "}
            and we can likely point you in the right direction.
          </p>
        ),
        rotate: "-rotate-2",
      },
      {
        title: "Do you source from XYZ retailer?",
        description: (
          <p>
            I dunno! You'll have to{" "}
            <Link to="/contact/" className="secondary-link">
              ask us
            </Link>
            .
          </p>
        ),
        rotate: "rotate-3",
      },
    ],
    testimonialOne: null,
    testimonialTwo: null,
    video: null,
    link: "retailers",
    nextLink: "historical-metrics",
    prevLink: "categories",
  },
  {
    title: "Check out historical metrics",
    description: (
      <p>
        History tends to repeat itself, and you deserve the full picture. That’s
        why{" "}
        <span className={classes.emphasizedFeature}>
          Leadgeek includes 30 & 90 day metrics and competition for the buy box
        </span>
        . Use historical data to see trends like seasonality, out of stock
        spikes, and more.
      </p>
    ),
    faqs: [
      {
        title: "What's the benefit of watching 30 & 90 day metrics?",
        description: (
          <p>
            There are a lot of benefits, actually. Arbitrage is sorta volatile,
            which creates the price gaps you can take advantage of. A downside
            to that is if the product dips too low in price or slows down too
            much in velocity, you're stuck with something that loses you money.{" "}
            <span className={classes.emphasizedFeature}>
              Verifying the product history is well worth your while, and
              Leadgeek makes it easy to check out
            </span>
            .
          </p>
        ),
        rotate: "-rotate-1",
      },
      {
        title: "Will I get the buy box?",
        description: (
          <p>
            <span className={classes.emphasizedFeature}>Quite likely, yes</span>
            ! That's why the current competition is included. For example: if
            the buy box is controlled by a merchant fulfilled seller, swoop in
            and grab those sales out from under them. Does an FBA seller have
            the buy box? Match and share, there's plenty to go around.
          </p>
        ),
        rotate: "rotate-2",
      },
      {
        title: "How are these values tracked?",
        description: (
          <p>
            <span className={classes.emphasizedFeature}>
              With a really cool tool called Keepa
            </span>
            . Keepa tracks the history of a product for days, weeks, months, or
            even years. The buy box competition is determined a few minutes
            before the lead is posted.
          </p>
        ),
        rotate: "-rotate-1",
      },
    ],
    testimonialOne: null,
    testimonialTwo: null,
    video: null,
    link: "historical-metrics",
    nextLink: "reliability",
    prevLink: "retailers",
  },
  {
    title: "Keep 'em coming",
    description: (
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
        description: (
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
        rotate: "rotate-1",
      },
      {
        title: "Are there ever any extra leads?",
        description: (
          <p>
            Heck yeah.{" "}
            <span className={classes.emphasizedFeature}>
              There's around 20-40% extra leads more often than not
            </span>
            . Being gated in a product can be annoying, so some bonus leads are
            thrown in to increase your chances of being able to sell more stuff.
          </p>
        ),
        rotate: "-rotate-1",
      },
      {
        title: "Do you take any holidays off?",
        description: (
          <p>
            Indeed we do, but it's not like we're throwing a rager on Earth Day.{" "}
            <span className={classes.emphasizedFeature}>
              We take time to rest on Thanksgiving and Christmas
            </span>
            .
          </p>
        ),
        rotate: "-rotate-2",
      },
    ],
    testimonialOne: {
      quote: "Always had at least a few items I was interested in",
      source: "Brian",
      rotate: "-rotate-1 hover:rotate-2",
    },
    testimonialTwo: {
      quote: "I love the leads, they're very good",
      source: "Kevin",
      rotate: "rotate-6 hover:-rotate-1",
    },
    video: null,
    link: "reliability",
    nextLink: "exclusivity",
    prevLink: "historical-metrics",
  },
  {
    title: "The inner circle",
    description: (
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
        description: (
          <p>
            We have no crystal ball to see into the future, but{" "}
            <span className={classes.emphasizedFeature}>
              reducing the list exposure helps prevent that from happening
            </span>
            . 30 people on the Grow plan and 15 on the Pro plan is one of the
            tightest-knit lists in the industry.
          </p>
        ),
        rotate: "-rotate-3",
      },
      {
        title: "What's a no-budge cap?",
        description: (
          <p>
            <span className={classes.emphasizedFeature}>
              The limit of members is the limit of members
            </span>
            . One of the things you're paying for is exclusivity and by darn
            you'll get it.
          </p>
        ),
        rotate: "rotate-2",
      },
    ],
    testimonialOne: null,
    testimonialTwo: null,
    video: null,
    link: "exclusivity",
    nextLink: "predictability",
    prevLink: "reliability",
  },
  {
    title: "Hot off the press",
    description: (
      <p>
        Leadgeek helps you make sourcing a system by releasing{" "}
        <span className={classes.emphasizedFeature}>
          fresh leads every morning by 9 am CST
        </span>
        . These guaranteed arbitrage opportunities let you be the first one to
        order - and the first one to sell.
      </p>
    ),
    faqs: [
      {
        title: "Why release leads at a scheduled time?",
        description: (
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
        rotate: "rotate-2",
      },
      {
        title: "Why 9 am CST?",
        description: (
          <p>
            Think of it like the opening of a farmer's market:{" "}
            <span className={classes.emphasizedFeature}>
              it's early enough to get first pick
            </span>
            , but not so late that all that's left are root vegetables...
          </p>
        ),
        rotate: "-rotate-1",
      },
    ],
    testimonialOne: {
      quote: "Leadgeek delivers...on time every day",
      source: "William",
      rotate: "-rotate-6 hover:-rotate-3",
    },
    testimonialTwo: {
      quote: "Delivered their lists as promised daily",
      source: "Brian",
      rotate: "rotate-3 hover:rotate-6",
    },
    video: null,
    link: "predictability",
    nextLink: "seller-insight",
    prevLink: "exclusivity",
  },
  {
    title: "Professional experience in your corner",
    description: (
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
        description: (
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
        rotate: "rotate-2",
      },
      {
        title: "Which part is evaluated by the experienced seller?",
        description: (
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
        rotate: "-rotate-1",
      },
      {
        title: "Does that mean I can just purchase stuff willy-nilly?",
        description: (
          <p>
            Probably not.{" "}
            <span className={classes.emphasizedFeature}>
              It's recommended that you review each product before you add it to
              your inventory
            </span>
            ; Since when have double-checks been a bad idea?
          </p>
        ),
        rotate: "-rotate-2",
      },
    ],
    testimonialOne: null,
    testimonialTwo: null,
    video: null,
    link: "seller-insight",
    nextLink: "feed",
    prevLink: "predictability",
  },
  {
    title: "Skim info in the Feed",
    description: (
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
        description: (
          <p>
            <span className={classes.emphasizedFeature}>
              The title, category, image, competition, profit, ROI, BSR, monthly
              sales, and date for each lead
            </span>
            .
          </p>
        ),
        rotate: "rotate-1",
      },
      {
        title: "Can I see more?",
        description: (
          <p>
            Very easily.{" "}
            <span className={classes.emphasizedFeature}>
              Just click on the row for each item and you'll see a detailed view
              instantly
            </span>
            , along with some extra shortcuts to make your life easier.
          </p>
        ),
        rotate: "-rotate-3",
      },
    ],
    testimonialOne: {
      quote: "It looks FANTASTIC on my first try!",
      source: "Yucheng",
      rotate: "-rotate-2 hover:-rotate-1",
    },
    testimonialTwo: null,
    video: { webm: FeedWebm, mp4: FeedMp4, title: "The Leadgeek Feed" },
    link: "feed",
    nextLink: "filters",
    prevLink: "seller-insight",
  },
  {
    title: "Surface data, don't dig for it",
    description: (
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
        description: (
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
        rotate: "rotate-2",
      },
      {
        title: "Only 9 filters? That doesn't seem like a lot...",
        description: (
          <p>
            Exactly!{" "}
            <span className={classes.emphasizedFeature}>
              Anything more than that and you're probably over-complicating
              things
            </span>
            . The products have already been checked out - the filters are there
            to bubble what you want up to the top. When combined, the filters
            are quite powerful.
          </p>
        ),
        rotate: "-rotate-1",
      },
    ],
    testimonialOne: null,
    testimonialTwo: {
      quote: "5 stars for you guys making this super simple",
      source: "Austin",
      rotate: "rotate-2 hover:-rotate-2",
    },
    video: { webm: FiltersWebm, mp4: FiltersMp4, title: "Using filters" },
    link: "filters",
    nextLink: "details",
    prevLink: "feed",
  },
  {
    title: "View details on the fly",
    description: (
      <p>
        Don't miss a beat with the detailed view for each item.{" "}
        <span className={classes.emphasizedFeature}>
          See primary metrics, historical data, and helpful notes all in one
          place
        </span>
        . Also included are helpful links to the source retailer, Amazon
        listing, and Seller Central to see if the product is ungated for you.
      </p>
    ),
    faqs: [
      {
        title: "How detailed are we talking here?",
        description: (
          <p>
            Pretty detailed. It's good to understand what it is you'll
            potentially be selling:{" "}
            <span className={classes.emphasizedFeature}>
              Hover over the image to get a magnified view, check out the brand,
              and see the source.
            </span>{" "}
            If you're interested,{" "}
            <span className={classes.emphasizedFeature}>
              view the primary & historical metrics, and see if you're ungated
              with one click
            </span>
          </p>
        ),
        rotate: "-rotate-2",
      },
      {
        title: "Alright, what else?",
        description: (
          <p>
            Managerial tasks are really easy from the detailed view -{" "}
            <span className={classes.emphasizedFeature}>
              like/archive, comment, and review seller-to-seller notes
            </span>{" "}
            in a jiffy.
          </p>
        ),
        rotate: "rotate-2",
      },
    ],
    testimonialOne: null,
    testimonialTwo: null,
    video: null,
    link: "details",
    nextLink: "like-and-archive",
    prevLink: "filters",
  },
  {
    title: `Stay organized with "Like" & "Archive"`,
    description: (
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
        title: "How many leads can I like or archive?",
        description: (
          <p>
            <span className={classes.emphasizedFeature}>There's no limit</span>,
            like and archive away!
          </p>
        ),
        rotate: "rotate-2",
      },
      {
        title: "Why include both liked and archived lists?",
        description: (
          <p>
            It's helpful to like the leads you're interested in double-checking
            or ordering every day as you source through the Feed.{" "}
            <span className={classes.emphasizedFeature}>
              To prevent your liked list from getting cluttered, move the
              products over to the archived list when you're ready
            </span>
            .
          </p>
        ),
        rotate: "-rotate-1",
      },
    ],
    testimonialOne: null,
    testimonialTwo: null,
    video: {
      webm: LikeArchiveWebm,
      mp4: LikeArchiveMp4,
      title: "Like & archive leads",
    },
    link: "like-and-archive",
    nextLink: "prep",
    prevLink: "details",
  },
  {
    title: "Account for prep costs automatically",
    description: (
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
        title: `What do you mean by "prep?"`,
        description: (
          <p>
            <span className={classes.emphasizedFeature}>
              When you order from a retailer, they'll ship products that need to
              be prepared before sending them into Amazon's warehouse
            </span>
            . Sometimes things need to be put in bags or packaged more securely.
            In every case, each unit should be labeled with a special label
            called an FNSKU. It's like a fingerprint from your Seller account so
            it doesn't get mixed up with other products at the fulfillment
            center.
          </p>
        ),
        rotate: "rotate-2",
      },
      {
        title: "How can I account for prep expenses?",
        description: (
          <p>
            If your prep is cost calculated by the unit (eg. $0.90) or by weight
            (eg. $0.20/lb),{" "}
            <span className={classes.emphasizedFeature}>
              it's as simple as plugging in the value
            </span>
            . Everything else is taken care of for you, and you'll see adjusted
            prices for every product in the Feed.
          </p>
        ),
        rotate: "-rotate-2",
      },
    ],
    testimonialOne: null,
    testimonialTwo: null,
    video: { webm: PrepWebm, mp4: PrepMp4, title: "Account for prep costs" },
    link: "prep",
    nextLink: "comments",
    prevLink: "like-and-archive",
  },
  {
    title: "Leave your mark",
    description: (
      <p>
        <span className={classes.emphasizedFeature}>
          Personalize each product by writing a comment to remind you of
          something for later
        </span>
        . Interested in a few variations or plan to re-order an item? Write it
        down so you don’t forget!
      </p>
    ),
    faqs: [
      {
        title: "What kinds of comments would be helpful?",
        description: (
          <p>
            Anything to make life easier for your future self. Many people like
            to include the{" "}
            <span className={classes.emphasizedFeature}>
              variations they're interested in, what price to shoot for the buy
              box, or stock reminders down the line
            </span>
            .
          </p>
        ),
        rotate: "-rotate-3",
      },
    ],
    testimonialOne: null,
    testimonialTwo: null,
    video: {
      webm: CommentWebm,
      mp4: CommentMp4,
      title: "Comment on arbitrage leads",
    },
    link: "comments",
    nextLink: "search",
    prevLink: "prep",
  },
  {
    title: "Keyword central",
    description: (
      <p>
        Looking for something in particular?{" "}
        <span className={classes.emphasizedFeature}>
          Powerful search lets you find what you’re interested in
        </span>{" "}
        without hunting through thousands of leads. Input keywords to search by
        the source store, title, or ASIN.
      </p>
    ),
    faqs: [
      {
        title: "What values can I search for?",
        description: (
          <p>
            There are 4 search parameters:{" "}
            <span className={classes.emphasizedFeature}>
              title, retailer source, brand, and ASIN
            </span>
            .
          </p>
        ),
        rotate: "rotate-2",
      },
      {
        title: "Ugh! I don't remember the product's name exactly...",
        description: (
          <p>
            Don't worry! The search bar has what's called "fuzzy" search,
            meaning{" "}
            <span className={classes.emphasizedFeature}>
              you don't have to input a query word-for-word
            </span>
            . It's smart enough to pick up what you're looking for without
            including non-matches.
          </p>
        ),
        rotate: "-rotate-1",
      },
    ],
    testimonialOne: null,
    testimonialTwo: null,
    video: {
      webm: SearchWebm,
      mp4: SearchMp4,
      title: "Search the sourcing list",
    },
    link: "search",
    nextLink: "seller-notes",
    prevLink: "comments",
  },
  {
    title: "Variation suggestions out of the box",
    description: (
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
        title: "What kinds of variation suggestions will I get?",
        description: (
          <p>
            Anything to help make the buying process more clear, though it
            usually looks like 3 main types of notes:{" "}
            <span className={classes.emphasizedFeature}>
              size, style, and color
            </span>
            . These notes are combined, if applicable (eg. Size: 9, 10, 11.5 |
            Color: Black/Red)
          </p>
        ),
        rotate: "rotate-2",
      },
      {
        title: "What is a seller-to-seller note?",
        description: (
          <p>
            <span className={classes.emphasizedFeature}>
              These are notes offering help in a way that metrics maybe don't
              show as explicitly
            </span>
            . Some notes might express trends on the Keepa graph, seasonality,
            or competition expectations in the future (eg. Amazon can't stay in
            stock, increase the buy box price.)
          </p>
        ),
        rotate: "-rotate-1",
      },
    ],
    testimonialOne: null,
    testimonialTwo: null,
    video: null,
    link: "seller-notes",
    nextLink: "promo-notes",
    prevLink: "search",
  },
  {
    title: "Your very own research assistant",
    description: (
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
        title: "Wait...how does cashback work?",
        description: (
          <p>
            Sites like Rakuten or TopCashback get a small affiliate commission
            for referring people to certain retailers like Target, Sierra,
            ShopDisney, etc. At no cost to you, those retailers allow you to{" "}
            <span className={classes.emphasizedFeature}>
              save 1-10%+ when you order your inventory
            </span>
            . After a set amount of time, you can trade in your
            Rakuten/TopCashback credit for gift cards to put towards more
            inventory.
          </p>
        ),
        rotate: "-rotate-2",
      },
      {
        title: "How do I take advantage of this?",
        description: (
          <p>
            With one click! If there's any discount available, you can{" "}
            <span className={classes.emphasizedFeature}>
              check under the notes section in the detailed view to buy from the
              cashback link
            </span>
            .
          </p>
        ),
        rotate: "rotate-2",
      },
      {
        title: "Is the cashback calculated into the purchase price?",
        description: (
          <p>
            <span className={classes.emphasizedFeature}>
              Nope, which means that you'll be able to shave 1-3% on your
              inventory costs on average
            </span>
            .
          </p>
        ),
        rotate: "-rotate-1",
      },
    ],
    testimonialOne: null,
    testimonialTwo: null,
    video: null,
    link: "promo-notes",
    nextLink: "lead-ownership",
    prevLink: "seller-notes",
  },
  {
    title: "Leads belong to you",
    description: (
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
        title: "What format are my leads put in?",
        description: (
          <p>
            When exported,{" "}
            <span className={classes.emphasizedFeature}>
              your leads are converted to a .csv file
            </span>
            , which is viewable in programs like Excel. It's also easy to
            convert it to a .xlsx or other spreadsheet format.
          </p>
        ),
        rotate: "-rotate-2",
      },
      {
        title: "How do I download them?",
        description: (
          <p>
            <span className={classes.emphasizedFeature}>
              Just click on "Export" in the top right of the Leads panel
            </span>
            . After a few seconds, your list will be ready to download.
          </p>
        ),
        rotate: "rotate-2",
      },
    ],
    testimonialOne: null,
    testimonialTwo: null,
    video: {
      webm: ExportWebm,
      mp4: ExportMp4,
      title: "Download arbitrage leads",
    },
    link: "lead-ownership",
    nextLink: "support",
    prevLink: "promo-notes",
  },
  {
    title: "A+ member support",
    description: (
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
        title: "What kinds of things can you help me with?",
        description: (
          <p>
            Our support is handled by an Amazon seller who knows their stuff.
            They're{" "}
            <span className={classes.emphasizedFeature}>
              happy to help with anything you can throw our way
            </span>
            . Things like ungating advice, case-by-case lead analysis, or
            dealing with Amazon/Seller Central are common questions.
          </p>
        ),
        rotate: "rotate-2",
      },
      {
        title: "What are your hours?",
        description: (
          <p>
            <span className={classes.emphasizedFeature}>
              9 am-5 pm CST Monday-Friday
            </span>
            . Additionally, the average email response time is under an hour, so
            no sweat getting your questions answered quickly.
          </p>
        ),
        rotate: "rotate-2",
      },
    ],
    testimonialOne: null,
    testimonialTwo: null,
    video: null,
    link: "support",
    nextLink: "criteria",
    prevLink: "lead-ownership",
  },
]

export default FeaturePage
