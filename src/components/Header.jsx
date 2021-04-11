import React from "react";
import GlobalContext from '../contexts/GlobalContext.jsx'

const data = require('../data.json')

const Header = () => {
  const globalValue = React.useContext(GlobalContext)

  const [showMenu, setShowMenu] = React.useState(false)
  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }
  const closeMenu = () => {
    setShowMenu(false)
  }

  return (
    // ========== HEADER ==========
    <header className="l-header" id="header">
      <nav className="nav bd-container">
        <a href="#" className="nav__logo">
          {data.userName.last}
      </a>

        <div className={`nav__menu ${showMenu ? 'show-menu' : ''}`} id="nav-menu">
          <ul className="nav__list">
            {data.navLinks.map((item, i) => (
              <NavItem item={item} key={i} isActive={item.id == globalValue.activeSection} onClick={closeMenu} />
            ))}
          </ul>
        </div>

        <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
          <i className="bx bx-grid-alt nav__icon"></i>
        </div>
      </nav>
    </header>
  )
};

const NavItem = ({ item, onClick, isActive }) => (
  <li className="nav__item">
    <a href={`#${item.id}`} className={`nav__link ${isActive && 'active-link'}`} onClick={onClick}>
      <i className={`bx ${item.icon} nav__icon`}></i>
      {item.text}
    </a>
  </li>
);

export default Header;
