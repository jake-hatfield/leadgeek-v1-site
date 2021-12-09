import React, { useState, useLayoutEffect, useCallback } from "react"

// packages
import { AnchorLink } from "gatsby-plugin-anchor-links"

const TableOfContents: React.FC<{
  items: any
  itemIds: any
}> = ({ items, itemIds }) => {
  const renderItems = useCallback((items: any, activeId: string) => {
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
            {item.items &&
              item.items.length &&
              renderItems(item.items, activeId)}
          </li>
        ))}
      </ol>
    )
  }, [])

  const useActiveId = (itemIds: any) => {
    const [activeId, setActiveId] = useState("")

    useLayoutEffect(() => {
      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setActiveId(entry.target.id)
            }
          })
        },
        { threshold: 0.75, rootMargin: `0% 0% -80% 0%` }
      )

      itemIds.forEach((id: any) => {
        observer.observe(document.getElementById(id)!)
      })

      return () => {
        itemIds.forEach((id: any) => {
          return observer.observe(document.getElementById(id)!)
        })
      }
    }, [itemIds])

    return activeId
  }

  const activeId = useActiveId(itemIds)
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

export default React.memo(TableOfContents)
