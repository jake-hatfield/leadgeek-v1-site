import React from "react"
import FormField from "./formField"

const BillingDetailsFields = () => {
  return (
    <>
      <FormField
        name="name"
        label="Name"
        type="text"
        placeholder="Jeff Bezos"
        required
      />
      <FormField
        name="email"
        label="Email"
        type="email"
        placeholder="totallyjeffbezos@amazon.com"
        required
      />
    </>
  )
}

export default BillingDetailsFields
