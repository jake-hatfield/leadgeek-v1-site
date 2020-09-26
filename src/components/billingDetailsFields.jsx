import React from "react"
import FormField from "./formField"

const BillingDetailsFields = () => {
  return (
    <>
      <FormField
        name="name"
        label="Full name"
        type="text"
        placeholder="Peter Parker"
        required
      />
      <FormField
        name="email"
        label="Email"
        type="email"
        placeholder="peterparker@gmail.com"
        required
      />
    </>
  )
}

export default BillingDetailsFields
