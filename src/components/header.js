import React from 'react';
import { Link } from "gatsby"

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
      text: "Quizy",
      url: "/quizes",
    },
  ]

const Header = () => {
    return (
        <header>
          <img src={'../images/logo_licencjat.png'} alt='Logo strony'></img>
            <ul className={headerStyles.header}>
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