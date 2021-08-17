import { useState, useEffect } from "react"

import axios from "axios"
import crypto from "crypto"

// bsr / category % calculator
export const calculateBSR = (currentRank, category) => {
  let totalItems
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
  if (!totalItems) {
    return "-"
  } else {
    return ((currentRank / totalItems) * 100).toFixed(3)
  }
}

// truncate long strings
export const truncate = (str, n) => {
  return str.length > n ? str.substr(0, n - 1) + "..." : str
}

// add commas to numbers
export const numberWithCommas = x => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

// capitalize the first letter of a string
export const capitalize = string => {
  return string.charAt(0).toUpperCase() + string.substring(1).toLowerCase()
}

//   break up the email to the part before the @
export const stringBeforeAt = string => {
  let splitString = string.split("@")
  return splitString[0]
}

// close on ref mouseup
export const useOutsideMousedown = (ref, setState_1, setState_2) => {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
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
export const addToMailchimp = async subscriberData => {
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
  console.log(`Email status: ${data.status}`)
}

// generate LGID
export const generateLGID = () => {
  return crypto.randomBytes(64).toString("hex")
}

// get the query params from URL
const grabQueryParam = (location, name) => {
  const params = new URLSearchParams(location.search)
  return params.get(name)
}

export const getCookie = name => {
  var nameEQ = name + "="
  var ca = document.cookie.split(";")
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i]
    while (c.charAt(0) == " ") c = c.substring(1, c.length)
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length)
  }
  return null
}

const setCookie = (key, value, numberOfDays) => {
  const now = new Date()
  now.setTime(now.getTime() + numberOfDays * 60 * 60 * 24 * 1000)
  if (typeof document !== undefined) {
    document.cookie = `${key}=${value}; expires=${now.toUTCString()}; path=/`
  }
}

export const deleteCookie = name => {
  if (typeof document !== undefined) {
    setCookie(name, "", -1)
  }
}

// create LGID 90-day cookie if one doesn't exist
export const handleLGID = location => {
  const lgid = grabQueryParam(location, "lgid")
  if (document !== undefined && lgid !== null && getCookie("lgid") === null) {
    setCookie("lgid", lgid, 90)
  }
}

export const useCookie = (key, defaultValue) => {
  const getCookie = () => getCookie(key) || defaultValue
  const [cookie, setCookie] = useState(getCookie())
  const updateCookie = (value, numberOfDays) => {
    setCookie(value)
    setCookie(key, value, numberOfDays)
  }

  return [cookie, updateCookie]
}
