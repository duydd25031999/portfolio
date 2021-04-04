import React from "react";
import GlobalContext from '../contexts/GlobalContext.jsx'

const Footer = () => {
    const globalValue = React.useContext(GlobalContext)

    return (
        <footer >
            <a ref={globalValue.scrollTopRef} href="#" className="scrolltop" id="scroll-top">
                <i className="bx bx-up-arrow-alt scrolltop__icon"></i>
            </a>
        </footer>
    )
}

export default Footer;
