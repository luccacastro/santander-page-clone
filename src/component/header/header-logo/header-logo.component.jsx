import React from 'react';
import logo from './santander.svg';
import './header-logo.css'

export const HeaderLogo = (props) => (
    <div className="header">
        <img className="logo" 
        src={logo} 
        height="23px" 
        width="130px"    
        />
    </div>
);
    
