import React from "react";

const navLinks = [
  {
    link: "#home",
    icon: "bx-home",
    text: "Home",
  },
  {
    link: "#profile",
    icon: "bx-user",
    text: "Profile",
  },
  {
    link: "#education",
    icon: "bx-book",
    text: "Education",
  },
  {
    link: "#skills",
    icon: "bx-receipt",
    text: "Skills",
  },
  {
    link: "#experience",
    icon: "bx-briefcase-alt",
    text: "Experience",
  },
  {
    link: "#certificates",
    icon: "bx-award",
    text: "Certificates",
  },
  {
    link: "#references",
    icon: "bx-link-external",
    text: "References",
  },
];

const userName = { first: 'Smith'}

const Header = () => {
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
              <NavItem item={item} key={i} onClick={closeMenu} />
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

const NavItem = ({ item, onClick }) => (
  <li className="nav__item">
    <a href={item.link} className="nav__link" onClick={onClick}>
      <i className={`bx ${item.icon} nav__icon`}></i>
      {item.text}
    </a>
  </li>
);

export default Header;
