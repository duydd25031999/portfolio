import React from "react";
import GlobalContext from '../contexts/GlobalContext.jsx'

const navLinks = [
  {
    id: "home",
    icon: "bx-home",
    text: "Home",
  },
  {
    id: "profile",
    icon: "bx-user",
    text: "Profile",
  },
  {
    id: "education",
    icon: "bx-book",
    text: "Education",
  },
  {
    id: "skills",
    icon: "bx-receipt",
    text: "Skills",
  },
  {
    id: "experience",
    icon: "bx-briefcase-alt",
    text: "Experience",
  },
  {
    id: "certificates",
    icon: "bx-award",
    text: "Certificates",
  },
  {
    id: "references",
    icon: "bx-link-external",
    text: "References",
  },
];

const userName = { first: 'Smith'}

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
          {userName.first}
      </a>

        <div className={`nav__menu ${showMenu ? 'show-menu' : ''}`} id="nav-menu">
          <ul className="nav__list">
            {navLinks.map((item, i) => (
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
