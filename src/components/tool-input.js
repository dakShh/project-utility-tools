import React from 'react'

const Tinput = ({ onChange, value, className, placeholder }) => {
  return (
    <input
      className={`tinput ${className ?? ""}`}
      onChange={(e) => onChange(e.target.value)}
      value={value ? value : ""}
      placeholder={placeholder ?? ""}
    >
    </input>
  )
}

export default Tinput
