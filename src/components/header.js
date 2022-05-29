import React from 'react';
import { Link } from "gatsby"
import logo from "../images/logo_licencjat.png"
import * as headerStyles from './header.module.scss'

//menu
const menu = [
    {
      text: "Strona główna",
      url: "/",
    },
    {
      text: "Linia czasu",
      url: "/timeline",
    },
    {
      text: "Postacie",
      url: "/characters",
    },
    {
      text: "O projekcje",
      url: "/about",
    },
    {
      text: "Quiz",
      url: "/quizes",
    },
  ]

const showMenu = () => {
  const hamilton = document.querySelector(".menu-mobile");
  hamilton.addEventListener("click", function(){
      document.querySelector("#menu").classList.toggle("menu-active");
  })
}

showMenu();

const Header = () => {
    return (
        <header className={headerStyles.header}>
          <Link to='/'>
            <img src={logo} alt='Logo strony' className={headerStyles.logo}></img>
          </Link>
          <button type="button" className={headerStyles.mobileMenu}>☰</button>
            <ul className={headerStyles.nav} id="menu">
                {menu.map(link => (
                    <li key={link.url}>
                        <Link to={link.url} className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>{link.text}</Link>
                    </li>
                ))}
            </ul>
        </header>
    )
}

export default Header