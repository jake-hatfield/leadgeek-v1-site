import React, { Fragment } from "react"

import { GatsbySeo } from "gatsby-plugin-next-seo"
import { DateTime } from "luxon"

import Layout from "@components/layout/Layout"

import OgImage from "@assets/images/og/og-changelog.jpg"

interface ChangelogPageProps {
  location: Location
}

const ChangelogPage: React.FC<ChangelogPageProps> = ({ location }) => {
  const title = "Leadgeek Changelog"
  const description =
    "Track new features, updates, and improvements to the Leadgeek software suite. The team is constantly making improvements, and if you have any ideas on a feature, chime in!"

  return (
    <Layout location={location}>
      <GatsbySeo
        title={title}
        description={description}
        openGraph={{
          title,
          description,
          url: "https://leadgeek.io/changelog/",
          type: "website",
          images: [
            {
              url: OgImage,
              width: 1200,
              height: 630,
              alt: "View updates to the Leadgeek app",
            },
          ],
        }}
        language="en"
      />
      <section className="min-h-screen py-12 relative text-gray-900 bg-splatter">
        <div className="container">
          <header className="relative mx-auto lg:mx-0">
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 inter bg-white">
              Changelog
            </h1>
            <p className="mt-4 lg:mt-6 pb-4 bg-white text-gray-700">
              Stay up to date with every change made to Leadgeek since 2021.
            </p>
          </header>
          <section className="mt-10 lg:mt-16">
            <ul>
              {changelogItems.map((item, i) => (
                <li
                  key={i}
                  className="mt-8 card shadow-grayMd"
                  id={`version-${item.version}`}
                >
                  <header className="pb-2 md:flex items-end justify-between border-b border-gray-900">
                    <div className="flex items-center">
                      <h3 className="text-lg md:text-2xl font-black text-gray-900 inter">
                        Version {item.version}
                      </h3>
                      <time
                        dateTime={item.date}
                        className="ml-2 py-1 px-2 bg-gray-900 rounded-lg text-teal-300 text-xs"
                      >
                        {DateTime.fromISO(item.date).toFormat("LLL dd, yyyy")}
                      </time>
                    </div>
                    <a
                      href="mailto:support@leadgeek.io"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Report a problem with this update"
                      className="hidden md:inline-block p-1 text-gray-400 hover:text-gray-500 hover:bg-gray-200 rounded-md transition duration-100 ease-in-out ring-gray"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </header>
                  {item.newFeatures.length > 0 && (
                    <ChangelogList
                      title={"New features"}
                      emoji={"🚀"}
                      emojiTitle={"Rocket"}
                      items={item.newFeatures}
                    />
                  )}
                  {item.removedFeatures.length > 0 && (
                    <ChangelogList
                      title={"Removed features"}
                      emoji={"✂️"}
                      emojiTitle={"Scissors"}
                      items={item.removedFeatures}
                    />
                  )}
                  {item.bugFixes.length > 0 && (
                    <ChangelogList
                      title={"Bug fixes"}
                      emoji={"🐛"}
                      emojiTitle={"Bug"}
                      items={item.bugFixes}
                    />
                  )}
                  {item.securityFixes.length > 0 && (
                    <ChangelogList
                      title={"Security fixes"}
                      emoji={"🔒"}
                      emojiTitle={"Lock"}
                      items={item.securityFixes}
                    />
                  )}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </section>
    </Layout>
  )
}

interface ChangelogListProps {
  title: string
  emoji: string
  emojiTitle: string
  items: { title: JSX.Element; description: JSX.Element[] }[]
}

const ChangelogList: React.FC<ChangelogListProps> = ({
  title,
  emoji,
  emojiTitle,
  items,
}) => {
  return (
    <article className="mt-4">
      <header className="flex items-center">
        <span
          role="img"
          aria-label={`${emojiTitle} emoji`}
          className="font-normal"
        >
          {emoji}
        </span>
        <h4 className="ml-2 text-base md:text-lg font-bold text-gray-900 inter">
          {title}
        </h4>
      </header>
      <ul className="mt-2 ml-6">
        {items.map((item: any, i: number) => (
          <Fragment key={i}>
            <li className="mt-2 list-disc">
              <span className="inline-block px-2 py-1 bg-gray-100 rounded-lg text-sm font-semibold border border-gray-900">
                {item.title}
              </span>
            </li>
            <li>
              <ul>
                {item.description.map((item: JSX.Element, i: number) => (
                  <li key={i} className="mt-2 ml-6 list-disc">
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          </Fragment>
        ))}
      </ul>
    </article>
  )
}

const changelogItems = [
  //   {
  //     version: "1.02",
  //     date: "2021-11-20T17:25:18+0000",
  //     newFeatures: [
  //       {
  //         title: <p>UI</p>,
  //         description: [
  //           <p>
  //             Complete overhaul of the way things look, with enhanced depth and
  //             responsive animations
  //           </p>,
  //         ],
  //       },
  //     ],
  //     removedFeatures: [],
  //     bugFixes: [],
  //     securityFixes: [],
  //   },
  {
    version: "1.01",
    date: "2021-10-10T17:25:18+0000",
    newFeatures: [
      {
        title: <p>UI</p>,
        description: [
          <p>
            Complete overhaul of the way things look, with enhanced depth and
            responsive animations
          </p>,
        ],
      },
      {
        title: <p>Hotkeys</p>,
        description: [
          <p>
            Perform repetitive actions with hotkey shortcuts, like viewing,
            liking, and archiving a lead
          </p>,
        ],
      },
      {
        title: <p>Filters</p>,
        description: [
          <p>
            Filters are now easier to add and manage in the updated interface.
            Filters now also apply to "Liked," "Archived," & "Search"
          </p>,
        ],
      },
      {
        title: <p>Notifications</p>,
        description: [
          <p>
            Receive announcement and account-specific information in the new
            notifications system
          </p>,
        ],
      },
      {
        title: <p>Dark mode</p>,
        description: [
          <p>Your eyes can chill with an option to switch things dark</p>,
        ],
      },
    ],
    removedFeatures: [
      {
        title: <p>Prep fees</p>,
        description: [
          <p>
            Temporarily removed the automatic prep fee calculator to iterate on
            an implementation that accounts for more factors
          </p>,
        ],
      },
    ],
    bugFixes: [
      {
        title: <p>Exporting</p>,
        description: [
          <p>
            Fixed a bug where exporting leads only exported all available leads.
            Filters and date ranges now apply to the exported batch
          </p>,
        ],
      },
      {
        title: <p>Error monitoring</p>,
        description: [
          <p>
            Unhandled crashes are now automatically reported to make the app
            more robust
          </p>,
        ],
      },
      {
        title: <p>@typescript refactor</p>,
        description: [
          <p>
            Not exactly a bug fix, more of bug prevention. TypeScript will help
            app development progress faster and with fewer errors
          </p>,
        ],
      },
    ],
    securityFixes: [
      {
        title: <p>Lowercase login</p>,
        description: [
          <p>
            Fixed an error where the lowercase email input didn't allow an
            otherwise successful login
          </p>,
        ],
      },
    ],
  },
]

export default ChangelogPage
