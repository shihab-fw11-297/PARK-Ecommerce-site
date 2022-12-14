import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import "./Navbar.scss"

const Navbar = () => {
    let showMenu = false;


    const toggleMenu = () =>{
        // console.log("---", navItems && navItems)
        if(!showMenu) {
            const hamburger = document.querySelector('.menu-btn__burger');
            hamburger.classList.add('open');
            const nav = document.querySelector('.navbar');
            nav.classList.add('open');
            const wrapper = document.querySelector('.wrapper');
            wrapper.classList.add('open');
            const menuNav = document.querySelector('.left');
            menuNav.classList.add('open');
            const menuNavs = document.querySelector('.right');
            menuNavs.classList.add('open');
            const navItems = document.querySelectorAll('.item');
            navItems && navItems.forEach(item => item.classList.add('open'));
            const disable = document.querySelectorAll('.items');
            disable && disable.forEach(item => item.classList.add('open'));

            showMenu = true;
          } else {
            const hamburger = document.querySelector('.menu-btn__burger');
            hamburger.classList.remove('open');
            const nav = document.querySelector('.navbar');
            nav.classList.remove('open');
            const wrapper = document.querySelector('.wrapper');
            wrapper.classList.remove('open');
            const menuNav = document.querySelector('.left');
            menuNav.classList.remove('open');
            const menuNavs = document.querySelector('.right');
            menuNavs.classList.add('open');
            const navItems = document.querySelectorAll('.item');
            navItems && navItems.forEach(item => item.classList.remove('open'));
            const disable = document.querySelectorAll('.items');
            disable && disable.forEach(item => item.classList.remove('open'));
            showMenu = false;
          }
    }
    return (
        <div className='navbar'>

            {/* <div className="menu-btn" onClick={toggleMenu}>
                <span className="menu-btn__burger"></span>
            </div> */}

            <div className='wrapper'>
                <div className='left'>
                    <div className="item items" >
                        <img src="/img/en.png" alt="" />
                        <KeyboardArrowDownIcon />
                    </div>
                    <div className="item items">
                        <span>USD</span>
                        <KeyboardArrowDownIcon />
                    </div>
                    <div className="item">
                        <Link className="link" to="/products/1">Women</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/products/2">Men</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/products/3">Children</Link>
                    </div>
                </div>
                <div className='center'>
                    <Link className="link" to="/">
                        <img className='logo' src="/img/logo.png" alt="logo" />
                    </Link>
                </div>
                <div className='right'>
                    <div className="item">
                        <Link className="link" to="/">Homepage</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/">About</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/">Contact</Link>
                    </div>
                    <div className="item">
                        <Link className="link" to="/">Stores</Link>
                    </div>
                    <div className="icons">
                        <SearchIcon />
                        <PersonOutlineOutlinedIcon />
                        <FavoriteBorderOutlinedIcon />
                        <div className="cartIcon">
                            <ShoppingCartOutlinedIcon />
                            <span>0</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar