import React from "react"
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
  RedditShareButton,
  RedditIcon,
} from "react-share"

interface SocialShareProps {
  siteUrl: string
  url: string
  title: string
  twitterTags: string[]
}

const SocialShare: React.FC<SocialShareProps> = ({
  siteUrl,
  url,
  title,
  twitterTags,
}) => {
  return (
    <section>
      <FacebookShareButton
        url={url}
        className="focus:outline-none focus:shadow-outline"
      >
        <FacebookIcon
          size={32}
          round={true}
          bgStyle={{ fill: `#cbd5e0` }}
          iconFillColor={`#050505`}
        />
      </FacebookShareButton>
      <TwitterShareButton
        url={url}
        title={title}
        hashtags={twitterTags}
        className="ml-4 focus:outline-none focus:shadow-outline"
      >
        <TwitterIcon
          size={32}
          round={true}
          bgStyle={{ fill: `#cbd5e0` }}
          iconFillColor={`#050505`}
        />
      </TwitterShareButton>
      <LinkedinShareButton
        url={url}
        source={siteUrl}
        title={title}
        className="ml-4 focus:outline-none focus:shadow-outline"
      >
        <LinkedinIcon
          size={32}
          round={true}
          bgStyle={{ fill: `#cbd5e0` }}
          iconFillColor={`#050505`}
        />
      </LinkedinShareButton>
      <RedditShareButton
        url={url}
        title={title}
        className="ml-4 focus:outline-none focus:shadow-outline"
      >
        <RedditIcon
          size={32}
          round={true}
          bgStyle={{ fill: `#cbd5e0` }}
          iconFillColor={`#050505`}
        />
      </RedditShareButton>
    </section>
  )
}

export default SocialShare
