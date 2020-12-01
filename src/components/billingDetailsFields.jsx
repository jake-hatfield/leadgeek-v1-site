import React from "react"
import FormField from "./formField"

const BillingDetailsFields = () => {
  return (
    <>
      <div className="md:flex justify-between">
        <FormField
          name="firstname"
          label="First name"
          type="text"
          placeholder="Dave"
          required
        />
        <FormField
          name="lastname"
          label="Last name"
          type="text"
          placeholder="Saunders"
          width="md:ml-4"
          required
        />
      </div>
      <FormField
        name="email"
        label="Email"
        type="email"
        placeholder="dsaunders@gmail.com"
        required
      />
    </>
  )
}

export default BillingDetailsFields
