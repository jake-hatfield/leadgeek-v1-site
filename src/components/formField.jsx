import React from "react"

const FormField = ({ label, type, name, placeholder, required }) => {
  return (
    <div className="pt-4 flex-col items-center">
      <label htmlFor={name} className="block text-xs font-medium text-gray-700">
        {label}
      </label>
      <div className="mt-1">
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          required={required}
          className="py-1 px-2 w-full rounded-md bg-transparent text-sm shadow-xs focus:outline-none focus:shadow-outline"
        />
      </div>
    </div>
  )
}

export default FormField
