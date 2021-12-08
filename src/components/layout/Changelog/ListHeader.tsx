import React from "react"

interface ListHeaderProps {
  title: string
  emoji: string
  emojiLabel: string
}

const ListHeader: React.FC<ListHeaderProps> = ({
  title,
  emoji,
  emojiLabel,
}) => {
  return (
    <header className="flex items-center">
      <span
        role="img"
        aria-label={`${emojiLabel} emoji`}
        className="font-normal"
      >
        {emoji}
      </span>
      <h3 className="ml-2 text-base md:text-lg font-bold text-gray-900 inter">
        {title}
      </h3>
    </header>
  )
}

export default ListHeader
