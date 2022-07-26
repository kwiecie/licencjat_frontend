import React, { useState } from 'react';
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
      text: "Quiz",
      url: "/quizes",
    },
  ]




const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  const handleToggle = () => {
    setNavbarOpen(prev => !prev)
  } 
    return (
        <header className={headerStyles.header}>
          <Link to='/'>
            <img src={logo} alt='Logo strony' className={headerStyles.logo}></img>
          </Link>
          <button type="button" className={headerStyles.mobileButton} onClick={handleToggle}>☰</button>
            <ul className={headerStyles[navbarOpen ? "mobileMenu" : "nav"]}>
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