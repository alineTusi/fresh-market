import React from "react";
import basket from './basket.png';
import search from './search.png'
import userIcon from './userIcon.png';
import cart from './cart.png';
import BackgroundCarousel from '../carousel/Carousel';

import './Header.css';
import '../carousel/Carousel.css'

const Header = () => {
    return (
        <div className='header-container'>
            <nav>
                <img className="logo" src={basket} alt="logo"></img>
                <h1>Fresh Market</h1>
                <ul>
                    <li className="active">Home</li>
                    <li>Shop</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                <input className="inputSearch" placeholder="Search..."/>
                <img className="searchIcon" src={search} alt="search Icon" ></img>
                
                <button className="btnLogin"><img className="userIcon" src={userIcon} alt="user Icon"></img>Log In</button>
                
                <img className="cart" src={cart} alt="cart Icon"></img>
            </nav>
            <BackgroundCarousel/>
        </div>
    )
}

export default Header;