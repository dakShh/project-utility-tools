import React from 'react'

const Tinput = ({ onChange, value, className }) => {
  return (
    <input className={`tinput ${className ?? ""}`} onChange={(e) => onChange(e.target.value)} value={value ? value : ""}>
    </input>
  )
}

export default Tinput
