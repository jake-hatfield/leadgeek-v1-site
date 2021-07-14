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
  let bsrPercentage
  if (!totalItems) {
    return (bsrPercentage = "-")
  } else {
    return (bsrPercentage = ((currentRank / totalItems) * 100).toFixed(3))
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
