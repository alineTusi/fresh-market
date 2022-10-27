import React from "react";
import basket from './basket.png';
import search from './search.png'
import userIcon from './userIcon.png';
import cart from './cart.png';
import { NavLink } from "react-router-dom";

import './Header.css';
import '../carousel/Carousel.css'

const Header = () => {
    return (
        <div className='header-container'>
            <nav>
                <img className="logo" src={basket} alt="logo"></img>
                <h1>Fresh Market</h1>
                <ul>
                    <NavLink  className="active" to={"/"}>Home</NavLink>
                    <NavLink to={"shop"} >Shop</NavLink>
                    <NavLink to={"about"} >About</NavLink>
                    <NavLink >Contact</NavLink>
                </ul>
                <input className="inputSearch" placeholder="Search..."/>
                <img className="searchIcon" src={search} alt="search Icon" ></img>
                
                <button className="btnLogin"><img className="userIcon" src={userIcon} alt="user Icon"></img>Log In</button>
                
                <img className="cart" src={cart} alt="cart Icon"></img>
            </nav>
            
        </div>
    )
}

export default Header;