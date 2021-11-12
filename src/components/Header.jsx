import React, { useRef } from 'react';

import { Link } from 'react-router-dom';

import Logo from '../assets/images/logo.png';

import { HiMenuAlt1 } from "react-icons/hi";

const mainNav = [
    {
        display:"introdution",
        path:"/introdution",
    },
    {
        display:"solution",
        path:"/solution",
    },
    {
        display:"rate plan",
        path:"/rate",
    },
    {
        display:"login",
        path:"/login",
    },
    {
        display:"apply for free use",
        path:"/apply",
    }
];

const Header = () => {
    const menuRef = useRef(null);
    const menuToggle = ()=> menuRef.current.classList.toggle('active');

    return (
        <div className="header">
            <div className="container">
                <HiMenuAlt1 className="icon-menu" onClick={menuToggle}/>
                <div className="header__logo">
                    <Link to='/home'>
                        <img src={Logo} alt="logo" />
                    </Link>
                </div>
                <div className="header__menu" ref={menuRef}>
                    {
                        mainNav.map((item, index) => (
                            <div className="header__menu__item" key={index}>
                                   <Link to={item.path} onClick={menuToggle}>
                                        <span>{item.display}</span>
                                   </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Header
