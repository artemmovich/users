import React from 'react'
import "./index.scss"
export const Button = ({ text, style, onClick }) => {
   return (
      <button onClick={onClick} className="button" style={style}>
         {text}
      </button>
   );
}