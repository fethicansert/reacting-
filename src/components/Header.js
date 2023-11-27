import React from "react";
import reactLogo from '../logos/reactLogo.png'

function Header(){
    return (
        <header>
            <div className="header-left">
                 <img className="react-logo" src={ reactLogo } alt="React Logo"></img>
                 <h1>React Facts</h1>
            </div>

            <p>React Course - Procet 1</p>
           
        </header>
    );
}

export default Header;