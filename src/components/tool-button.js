import React from 'react'

const Tbutton = ({ content, onClick }) => {
  return (
    <button className="tool-button" onClick={() => onClick()}>
      {content || ""}
    </button>
  )
}

export default Tbutton
