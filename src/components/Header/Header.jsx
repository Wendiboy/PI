import React from "react";
import './Header.css';

const Header = () => {
    return (
    <h1 className='Header'>
        <span className="Header__logo">
            <img className="Header__logo__img" src={'https://lh3.googleusercontent.com/proxy/J9Q_YV5vzjhs7GalbYvwUS-B3SwNJfqKJbTiUridQHVdExoLWiLv1ks7EYNHgTpd9fQ4IM56lSG70yBF73Iw_wNkjwIqdH6MhEhQG6s70XVlyHbrylXLLcUtIQ=s0-d'}></img>            
        </span>
        <span className="Header__text">
            Rick and Morty
        </span>
    </h1>
    )
}

export default Header