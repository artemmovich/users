import React from 'react'
import "./index.scss"
export const Button = ({ text, style,}) => {
   return (
      <button className="button" style={style}>
         {text}
      </button>
   );
}