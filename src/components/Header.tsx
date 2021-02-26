import React from 'react';
import { HeaderProps, IconLinkProps } from './app.type'

const Header: React.FC<HeaderProps> = ({ name, nav }) => (
    <header className="header" id="header">
        <Navigation name={name} nav={nav} />
    </header>
)

const Navigation: React.FC<HeaderProps> = ({ name, nav }) => {
    const [toggle, setToggle] = React.useState<boolean>(false)
    const [menuClass, setMenuClass] = React.useState<string>('nav__menu')
    
    let clickToggle = (
        event: React.MouseEvent<HTMLElement, MouseEvent>
    ) => {
        setToggle(!toggle)
        setMenuClass(!toggle ? 'nav__menu show_menu' : 'nav__menu')
    }

    return (
        <nav className="nav bd__container">
            <a href="#" className="nav__logo">{name}</a>

            <div className={menuClass}  id="mav-menu">
                <ul className="nav__list">
                    {nav.map((item, index) => <NavItem
                        icon={item.icon}
                        text={item.text}
                        link={item.link}
                        clickToggle={clickToggle}
                        key={index}
                    />)}
                </ul>
            </div>

            <div
                className="nav__toggle" id="nav-toggle"
                onClick={clickToggle}
            >
                <i className='bx bx-grid-alt' ></i>
            </div>
        </nav >
    )
}



const NavItem: React.FC<IconLinkProps> = ({ icon, text, link, clickToggle }) => (
    <li className="nav__item">
        <a href={link} className="nav__link" onClick={clickToggle}>
            <i className={`${icon} nav__icon`}></i>
            {text}
        </a>
    </li>
)

export default Header;
