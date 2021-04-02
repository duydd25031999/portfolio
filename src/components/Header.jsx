import React from "react";

const data = [
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

const Header = () => (
  <header className="l-header" id="header">
    <Nav />
  </header>
);

const Nav = () => {
  const [showMenu, setShowMenu] = React.useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <nav className="nav bd-container">
      <a href="#" className="nav__logo">
        Smmith
      </a>

      <div className={`nav__menu ${ showMenu ? 'show-menu' : ''}`} id="nav-menu">
        <ul className="nav__list">
          {data.map((item, i) => (
            <NavItem item={item} key={i} />
          ))}
        </ul>
      </div>

      <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
        <i className="bx bx-grid-alt nav__icon"></i>
      </div>
    </nav>
  );
};

const NavItem = ({ item }) => (
  <li className="nav__item">
    <a href={item.link} className="nav__link">
      <i className={`bx ${item.icon} nav__icon`}></i>
      {item.text}
    </a>
  </li>
);

export default Header;
