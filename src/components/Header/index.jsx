import React, { useState } from 'react';
import './index.scss';
import { Button } from '../Button';
import { Link } from 'react-router-dom';

export const Header = () => {
   const [activeButton, setActiveButton] = useState('edit');

   const handleButtonClick = (button) => {
      setActiveButton(button);
   };

   return (
      <header className="header">
         <div className="header__wrapper">
            <Link to="/edit-users" onClick={() => handleButtonClick('edit')} >
               <Button
                  style={{
                     width: '200px',
                     height: '40px',
                     backgroundColor: activeButton === 'edit' ? '#c4c4c4' : '#fff',

                  }}
                  text={"Edit User"}
               />
            </Link>
            <Link to="/users" onClick={() => handleButtonClick('users')}>
               <Button
                  style={{
                     width: '200px',
                     height: '40px',
                     backgroundColor: activeButton === 'users' ? '#c4c4c4' : '#fff',

                  }}
                  text={"Users"}
               />
            </Link>
         </div>
      </header>
   );
};
