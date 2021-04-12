import React from "react";
import TimelineContent from './TimelineContent.jsx'
import ItemslistData from './ItemslistData.jsx'
import GlobalContext from '../contexts/GlobalContext.jsx'
import html2pdf from 'html2pdf.js'

const data = require('../data.json')

const avatar = require(`../images/${data.avatar}`)

const LeftResume = ({ lightTheme, onThemeChange, areaCv }) => {
    const globalValue = React.useContext(GlobalContext)

    const clickGenerate = () => {
        document.body.classList.add('scale-cv')

        const opt = {
            margin: 0.1,
            filename: data.pdfName,
            html2canvas: { scale: 4 },
            jsPDF: { format: "a4", orientation: "portrait" },
        };

        html2pdf(areaCv.current, opt)

        setTimeout(() => {
            document.body.classList.remove('scale-cv')
        }, 5000)
    }

    return (
        <div className="resume__left">
            {/* ========== HOME ========== */}
            <section ref={globalValue.refSection} className="home" id="home">
                <div className="home__container section bd-grid">
                    <div className="home__data bd-grid">
                        <img src={avatar} alt="" className="home__img" />
                        <h1 className="home__tile">{data.userName.last} <b>{data.userName.first}</b></h1>
                        <h3 className="home__profession">Web developer</h3>

                        {/* Button to generate and download the pdf. Available for mobile. */}
                        <div>
                            <a download="" href="assets/pdf/ResumeCv.pdf" className="home__button-movil">
                                Download
                            </a>
                        </div>
                    </div>

                    <div className="home__address bd-grid">
                        {data.homeInfo.map((item, i) => (
                            <HomeInformation item={item} key={i} />
                        ))}
                    </div>
                </div>
                {/* Theme change button */}
                <i className={`bx ${lightTheme ? 'bx-moon' : 'bx-sun'} change-theme`} id="theme-button" onClick={onThemeChange}></i>

                {/* Button to generate and download the pdf. Available for desktop. */}
                <i className="bx bx-download generate-pdf" title="Generate PDF" id="resume-button" onClick={clickGenerate}></i>
            </section>

            {/* ========== SOCIAL ========== */}
            <section className="social section">
                <h2 className="section-title">
                    SOCIAL
                </h2>

                <div className="social__container bd-grid">
                    {data.socialLinks.map((item, i) => (
                        <SocialLink item={item} key={i} />
                    ))}
                </div>
            </section>

            {/* ========== OBJECTIVE ========== */}
            <section ref={globalValue.refSection} className="objective section" id="objective">
                <h2 className="section-title">OBJECTIVE</h2>

                <p className="objective__description">
                    {data.objective}
                </p>
            </section>

            {/* ========== SKILLS  ========== */}
            <section ref={globalValue.refSection} className="skills itemslist section" id="skills">
                <h2 className="section-title">SKILLS</h2>

                <div className="itemslist__content bd-grid">
                    {
                        data.skills.map((item, i) => (
                            <ItemslistData isSkills list={item} key={i} />
                        ))
                    }
                </div>
            </section>
        </div>
    )
}

const HomeInformation = ({ item }) => (
    <span className="home__information">
        <i className={`bx ${item.icon} home__icon`}></i>
        {item.text}
    </span>
)

const SocialLink = ({ item }) => (
    <a href="" className="social__link">
        <i className={`bx ${item.icon} social__icon`}></i>
        {item.text}
    </a>
)

export default LeftResume;
