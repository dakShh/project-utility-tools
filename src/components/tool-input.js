import React from 'react'
const Tinput = ({ onChange, value, className, type, placeholder, ...rest }) => {
  return (
    <input
      {...rest}
      className={`tinput ${className ?? ""}`}
      onChange={(e) => onChange(e.target.value)}
      value={value ? value : ""}
      placeholder={placeholder ?? ""}
      type={type ?? ""}
    >
    </input>
  )
}

export default Tinput
