import React from "react";
import Header from "./Header.jsx";
import Footer from './Footer.jsx'
import LeftResume from './LeftResume.jsx';
import RightResume from './RightResume.jsx';
import GlobalContext from '../contexts/GlobalContext.jsx'

const App = () => {
  const [lightTheme, setLightTheme] = React.useState(true)
  const areaCv = React.useRef()

  const handleThemeChange = () => {
    const changeLightTheme = !lightTheme

    if (!changeLightTheme) {
      document.body.classList.add('dark-theme')
    } else {
      document.body.classList.remove('dark-theme')
    }

    setLightTheme(changeLightTheme)
  }

  const handleGenerateCv = () => {
    const changeScaleCv = !scaleCv

    setScaleCv(changeScaleCv)
  }

  const [isMoblie, setIsMobile] = React.useState(window.innerWidth <= 968)

  const globalValue = React.useContext(GlobalContext)

  window.addEventListener('resize', () => setIsMobile(window.innerWidth <= 968))

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.pageYOffset;

      if (scrollY >= 200) {
        globalValue.scrollTopRef.current.classList.add('show-scroll')
      } else {
        globalValue.scrollTopRef.current.classList.remove('show-scroll')
      }

      globalValue.sectionRefs.current.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          globalValue.setActiveSection(current.id)
        }
      })
    }

    if (isMoblie) {
      window.addEventListener('scroll', handleScroll)
    } else {
      window.removeEventListener('scroll', handleScroll)
    }
  })
  return (
    <>
      <Header />
      <main className="l-main bd-container">
        {/* All elements within this div, is generated in PDF */}
        <div className="resume" id="area-cv" ref={areaCv}>
          <LeftResume 
            onThemeChange={handleThemeChange} 
            lightTheme={lightTheme} 
            areaCv={areaCv} 
          />
          <RightResume />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default App;
