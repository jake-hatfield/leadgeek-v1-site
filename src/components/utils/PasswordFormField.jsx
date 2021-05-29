import React from "react"

import EyeOpen from "assets/svgs/eye-open.svg"
import EyeClosed from "assets/svgs/eye-closed.svg"

const FormField = ({
  label,
  placeholder,
  onChange,
  passwordShown,
  toggle,
  required,
  width,
}) => {
  return (
    <div className={`pt-4 ${width} flex-col items-center`}>
      <label htmlFor="password" className="form-field-label">
        {label}
      </label>
      <div className="relative">
        <input
          name="password"
          type={passwordShown ? "text" : "password"}
          placeholder={placeholder}
          required={required}
          onChange={onChange}
          className="mt-1 form-field"
        />
        <button
          onClick={toggle}
          type="button"
          className="mt-3 mr-2 absolute right-0 rounded-md text-gray-400 focus:outline-none focus:shadow-outline"
        >
          {passwordShown ? (
            <EyeClosed className="h-4" />
          ) : (
            <EyeOpen className="h-4" />
          )}
        </button>
      </div>
    </div>
  )
}

export default FormField