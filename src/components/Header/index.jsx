import React from 'react'
import "./index.scss"
import { Button } from '../Button'

export const Header = () => {
   return (
      <header className='header'>
         <div className="header__wrapper">
            <Button text={"Edit Users"} />
            <Button text={"Users"} />
         </div>
      </header>
   )
}
