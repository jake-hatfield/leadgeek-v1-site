import React, { useState, useEffect, RefObject } from "react"

import axios from "axios"

import { MongoDBWaitlistItem } from "pages/pricing"

// bsr / category % calculator
export const calculateBSR = (
  currentRank: number,
  category: string
): string | number => {
  let totalItems: number
  if (category === "Appliances") {
    totalItems = 616462
  } else if (category.includes("Arts")) {
    totalItems = 7498354
  } else if (category === "Automotive") {
    totalItems = 22271330
  } else if (category.includes("Baby")) {
    totalItems = 2969134
  } else if (category.includes("Beauty")) {
    totalItems = 8918802
  } else if (category === "Books") {
    totalItems = 63513871
  } else if (category.includes("CDs")) {
    totalItems = 5768853
  } else if (category.includes("Phone")) {
    totalItems = 23560255
  } else if (category.includes("Clothing")) {
    totalItems = 115990329
  } else if (category.includes("Collectibles")) {
    totalItems = 5319325
  } else if (category.includes("Electronics")) {
    totalItems = 13436282
  } else if (category.includes("Grocery")) {
    totalItems = 2871202
  } else if (category.includes("Handmade")) {
    totalItems = 1515790
  } else if (category.includes("Health")) {
    totalItems = 7528676
  } else if (category.includes("Home")) {
    totalItems = 59108947
  } else if (category.includes("Industrial")) {
    totalItems = 9915828
  } else if (category.includes("Dining")) {
    totalItems = 59108947
  } else if (category.includes("Movies")) {
    totalItems = 3426934
  } else if (category.includes("Musical")) {
    totalItems = 1455860
  } else if (category.includes("Office")) {
    totalItems = 7746679
  } else if (category.includes("Patio")) {
    totalItems = 8107431
  } else if (category.includes("Pet")) {
    totalItems = 4996454
  } else if (category.includes("Software")) {
    totalItems = 160164
  } else if (category.includes("Sports")) {
    totalItems = 29519885
  } else if (category.includes("Tools")) {
    totalItems = 17564272
  } else if (category.includes("Toys")) {
    totalItems = 8933993
  } else if (category === "Video Games") {
    totalItems = 730691
  }
  if (!totalItems!) {
    return "-"
  } else {
    return ((currentRank / totalItems) * 100).toFixed(3)
  }
}

// truncate long strings
export const truncate = (string: string, n: number): string => {
  return string.length > n ? string.substr(0, n - 1) + "..." : string
}

// add commas to numbers
export const numberWithCommas = (n: number): string => {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

// capitalize the first letter of a string
export const capitalize = (string: string): string => {
  return string.charAt(0).toUpperCase() + string.substring(1).toLowerCase()
}

// title case a string
export const titleCase = (string: string) => {
  var i, j, str, lowers, uppers
  str = string.replace(/([^\W_]+[^\s-]*) */g, function (string: string) {
    return string.charAt(0).toUpperCase() + string.substr(1).toLowerCase()
  })

  // Certain minor words should be left lowercase unless
  // they are the first or last words in the string
  lowers = [
    "A",
    "An",
    "The",
    "And",
    "But",
    "Or",
    "For",
    "Nor",
    "As",
    "At",
    "By",
    "For",
    "From",
    "In",
    "Into",
    "Near",
    "Of",
    "On",
    "Onto",
    "To",
    "With",
  ]
  for (i = 0, j = lowers.length; i < j; i++)
    str = str.replace(
      new RegExp("\\s" + lowers[i] + "\\s", "g"),
      function (string: string) {
        return string.toLowerCase()
      }
    )

  // Certain words such as initialisms or acronyms should be left uppercase
  uppers = ["Id", "Tv"]
  for (i = 0, j = uppers.length; i < j; i++)
    str = str.replace(
      new RegExp("\\b" + uppers[i] + "\\b", "g"),
      uppers[i].toUpperCase()
    )

  return str
}

//   break up the email to the part before the @
export const stringBeforeAt = (string: string): string => {
  let splitString = string.split("@")
  return splitString[0]
}

// close on ref mouseup
export const useOutsideMousedown = (
  ref: RefObject<HTMLElement>,
  setState_1: React.Dispatch<boolean>,
  setState_2: React.Dispatch<boolean> | null
) => {
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as HTMLElement)) {
        setState_1(false)
        if (setState_2) {
          setState_2(false)
        }
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [ref, setState_1, setState_2])
}

// add contact to mailchimp with optional MERGE data and tags
export const addToMailchimp = async (subscriberData: {
  email: string
  FNAME: string
  LNAME: string
  PLAN: string
  LEAD: string
  tags: { name: string; status: "active" | "inactive" }[]
}) => {
  const { email, FNAME, LNAME, PLAN, LEAD, tags } = subscriberData
  const { data } = await axios.post(
    "/.netlify/functions/create-email-subscriber",
    {
      email,
      FNAME,
      LNAME,
      PLAN: PLAN || "",
      LEAD: LEAD || "",
      tags: tags || [],
    }
  )
  return console.log(`Email status: ${data.status}`)
}

export const getCookie = (key: string): string | null => {
  var nameEQ = key + "="
  var ca = document.cookie.split(";")
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i]
    while (c.charAt(0) === " ") c = c.substring(1, c.length)
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length)
  }
  return null
}

const setCookie = (key: string, value: string, numberOfDays: number): void => {
  const now = new Date()
  now.setTime(now.getTime() + numberOfDays * 60 * 60 * 24 * 1000)
  if (typeof document !== undefined) {
    document.cookie = `${key}=${value}; expires=${now.toUTCString()}; path=/`
  }
}

export const deleteCookie = (name: string): void => {
  if (typeof document !== undefined) {
    setCookie(name, "", -1)
  }
}

// get the query params from URL
const grabQueryParam = (search: string, name: string): string | null => {
  const params = new URLSearchParams(search)
  return params.get(name)
}

// create LGID 90-day cookie if one doesn't exist
export const handleLGID = (search: string) => {
  const lgid = grabQueryParam(search, "lgid")
  if (document !== undefined && lgid !== null && getCookie("lgid") === null) {
    setCookie("lgid", lgid, 90)
  }
}

export const formatActiveSubscriptions = (
  rawSubscriptions: {
    plan: {
      id: string
      product: string
    }
    status: string
  }[]
) => {
  //   check active subscriptions
  const activeSubscriptions = rawSubscriptions.filter(
    subscription =>
      subscription.status === "active" ||
      subscription.status === "trialing" ||
      subscription.status === "past_due"
  )

  const bundleSubscriptions = activeSubscriptions.filter(
    subscription =>
      subscription.plan.product === process.env.GATSBY_BUNDLE_PRODUCT_ID
  )
  const proSubscriptions = activeSubscriptions.filter(
    subscription =>
      subscription.plan.product === process.env.GATSBY_PRO_PRODUCT_ID
  )
  const growSubscriptions = activeSubscriptions.filter(
    subscription =>
      subscription.plan.product === process.env.GATSBY_GROW_PRODUCT_ID
  )
  const bundleSubscriptions_2 = activeSubscriptions.filter(
    subscription =>
      subscription.plan.product === process.env.GATSBY_BUNDLE_PRODUCT_ID_2
  )
  const proSubscriptions_2 = activeSubscriptions.filter(
    subscription =>
      subscription.plan.product === process.env.GATSBY_PRO_PRODUCT_ID_2
  )
  const growSubscriptions_2 = activeSubscriptions.filter(
    subscription =>
      subscription.plan.product === process.env.GATSBY_GROW_PRODUCT_ID_2
  )

  return {
    bundleSubscriptions,
    proSubscriptions,
    growSubscriptions,
    bundleSubscriptions_2,
    proSubscriptions_2,
    growSubscriptions_2,
  }
}

export const getWaitlistPlanCount = (
  data: MongoDBWaitlistItem[],
  type: "bundle" | "pro" | "grow"
) => {
  return data
    .filter((waitlistItem: MongoDBWaitlistItem) =>
      waitlistItem.plans.some(
        plan => plan.type === type && plan.active === true
      )
    )
    .map(i => {
      return Object.assign({}, i, {
        plans: i.plans.filter(plan => plan.type === type),
      })
    }).length
}

const getWindowDimensions = () => {
  if (typeof window === "undefined") {
    return {
      width: 0,
      height: 0,
    }
  }

  const { innerWidth: width, innerHeight: height } = window
  return {
    width,
    height,
  }
}

export const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  )

  if (typeof window === "undefined") {
    return windowDimensions
  }

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions())
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return windowDimensions
}

export const isBrowser = () => {
  return typeof window !== "undefined"
}
