import React from "react";

const GlobalContext = React.createContext()

export const GlobalProvider = ({ children }) => {
    const sectionRefs = React.useRef([])
    const refSection = (section) => {
        if (section && !sectionRefs.current.includes(section)) {
            sectionRefs.current.push(section)
        }
    }

    const [activeSection, setActiveSection] = React.useState('home');

    const scrollTopRef = React.useRef(null)
    
    const globalValue = {
        sectionRefs,
        refSection,
        activeSection,
        setActiveSection,
        scrollTopRef,
    }

    return (
        <GlobalContext.Provider value={globalValue}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContext
