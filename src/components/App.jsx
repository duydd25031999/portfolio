import React from "react";
import Header from "./Header.jsx";
import Footer from './Footer.jsx'
import LeftResume from './LeftResume.jsx';
import RightResume from './RightResume.jsx';

const App = () => {
  const [lightTheme, setLightTheme] = React.useState(true)
  const [scaleCv, setScaleCv] = React.useState(false)

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

  return (
    <>
      <Header />
      <main className="l-main bd-container">
        {/* All elements within this div, is generated in PDF */}
        <div className="resume" id="area-cv">
          <LeftResume onThemeChange={handleThemeChange} lightTheme={lightTheme} />
          <RightResume />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default App;
