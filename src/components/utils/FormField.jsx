import React from "react"

const FormField = ({
  label,
  type,
  name,
  placeholder,
  value,
  onChange,
  required,
  width,
}) => {
  return (
    <div className={`pt-4 ${width} flex-col items-center`}>
      <label htmlFor={name} className="form-field-label">
        {label}
      </label>
      <input
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        required={required}
        onChange={onChange}
        className="mt-1 form-field"
      />
    </div>
  )
}

export default FormField
