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
  tags: string[]
}

const SocialShare: React.FC<SocialShareProps> = ({
  siteUrl,
  url,
  title,
  tags,
}) => {
  const bgColor = `#243B53`
  const iconColor = `#8EEDC7`

  return (
    <aside>
      <FacebookShareButton
        url={url}
        className="focus:outline-none focus:shadow-outline"
      >
        <FacebookIcon
          size={32}
          round={true}
          bgStyle={{ fill: bgColor }}
          iconFillColor={iconColor}
        />
      </FacebookShareButton>
      <TwitterShareButton
        url={url}
        title={title}
        hashtags={tags}
        className="ml-2 focus:outline-none focus:shadow-outline"
      >
        <TwitterIcon
          size={32}
          round={true}
          bgStyle={{ fill: bgColor }}
          iconFillColor={iconColor}
        />
      </TwitterShareButton>
      <LinkedinShareButton
        url={url}
        source={siteUrl}
        title={title}
        className="ml-2 focus:outline-none focus:shadow-outline"
      >
        <LinkedinIcon
          size={32}
          round={true}
          bgStyle={{ fill: bgColor }}
          iconFillColor={iconColor}
        />
      </LinkedinShareButton>
      <RedditShareButton
        url={url}
        title={title}
        className="ml-2 focus:outline-none focus:shadow-outline"
      >
        <RedditIcon
          size={32}
          round={true}
          bgStyle={{ fill: bgColor }}
          iconFillColor={iconColor}
        />
      </RedditShareButton>
    </aside>
  )
}

export default SocialShare
