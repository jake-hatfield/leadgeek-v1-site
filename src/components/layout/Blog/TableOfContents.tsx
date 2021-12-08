import React, { useEffect, useState } from "react"

// packages
import { AnchorLink } from "gatsby-plugin-anchor-links"

const renderItems = (items: any, activeId: string) => {
  return (
    <ol>
      {items.map((item: any) => (
        <li key={item.url}>
          <AnchorLink
            to={item.url}
            className={`${
              activeId === item.url.slice(1)
                ? "text-purple-500 underline"
                : "text-gray-900"
            } hover:text-purple-500 hover:underline`}
          >
            {item.title}
          </AnchorLink>
          {item.items && renderItems(item.items, activeId)}
        </li>
      ))}
    </ol>
  )
}

const getItemIds = (items: any) => {
  return items.reduce((acc: any, item: any) => {
    if (item.url) {
      acc.push(item.url.slice(1))
    }
    if (item.items) {
      acc.push(...getItemIds(item.items))
    }
    return acc
  }, [])
}

const useActiveId = (itemIds: any[]) => {
  const [activeId, setActiveId] = useState("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: `0% 0% -80% 0%` }
    )

    itemIds.forEach((id: any) => {
      const element = document.getElementById(id)
      if (element) {
        return observer.observe(element)
      }
    })

    return () => {
      itemIds.forEach((id: any) => {
        const element = document.getElementById(id)
        if (element) {
          return observer.observe(element)
        }
      })
    }
  }, [itemIds])

  return activeId
}

const TableOfContents: React.FC<{
  title: string
  items: any
}> = ({ items }) => {
  const idList = getItemIds(items)
  const activeId = useActiveId(idList)
  return (
    <aside
      id="table-of-contents"
      className="w-64 relative z-40 lg:py-6 px-6 bg-white rounded-lg shadow-graySm"
    >
      <h4 className="mb-2 text-gray-900 font-bold inter">Table of contents</h4>
      {renderItems(items, activeId)}
    </aside>
  )
}

export default TableOfContents
