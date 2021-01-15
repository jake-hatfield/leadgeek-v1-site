import React from "react"

const FormField = ({
  label,
  type,
  name,
  placeholder,
  onChange,
  required,
  width,
}) => {
  return (
    <div className={`pt-4 ${width} flex-col items-center`}>
      <label htmlFor={name} className="block text-xs font-medium text-gray-500">
        {label}
      </label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        onChange={onChange}
        className="mt-1 py-1 px-2 w-full rounded-md bg-transparent text-sm border border-gray-200 shadow-xs placeholder-gray-300 focus:outline-none focus:shadow-outline"
      />
    </div>
  )
}

export default FormField
