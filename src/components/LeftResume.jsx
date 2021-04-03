import React from "react";
import TimelineContent from './TimelineContent.jsx'
import ItemslistData from './ItemslistData.jsx'

const avatar = require('../images/perfil.jpg')

const userName = {
    first: 'Smith',
    last: 'Matthew',
}

const homeInfo = [
    {
        icon: 'bx-map',
        text: 'Av. Bolivar #123 Lima - Peru',
    },
    {
        icon: 'bx-envelope',
        text: 'user@gmail.com',
    },
    {
        icon: 'bx-phone',
        text: '999-888-777',
    },
]

const socialLinks = [
    {
        icon: 'bxl-linkedin-square',
        text: '@smmithmat',
    },
    {
        icon: 'bxl-facebook-square',
        text: '@smmithmat',
    },
    {
        icon: 'bxl-instagram',
        text: '@smmithmat',
    },
]

const profile = "I am a person, reponsible with their work during working hours. Finish various technical and higher studies at universities. I have several years of experience and achievements in the labor field."

const education = [
    {
        title: 'MASTER OF DESIGN',
        studies: 'University of Studies',
        year: '2010 - 2015',
    },
    {
        title: 'WEB DEVELOPER',
        studies: 'Institute Studies',
        year: '2016 - 2019',
    },
    {
        title: 'MASTER IN UI/UX',
        studies: 'Institute Studies',
        year: '2019 - 2021',
    },
]

const skills = {
    programLanguages: [
        'Html',
        'Css',
        'Sass',
        'JavaScript',
    ],
    technique: [
        'Angular',
        'Firebase',
        'React',
    ],
}

const LeftResume = ({ lightTheme, onThemeChange }) => {
    return (
        <div className="resume__left">
            {/* ========== HOME ========== */}
            <section className="home" id="home">
                <div className="home__container section bd-grid">
                    <div className="home__data bd-grid">
                        <img src={avatar} alt="" className="home__img" />
                        <h1 className="home__tile">{userName.first} <b>{userName.last}</b></h1>
                        <h3 className="home__profession">Web developer</h3>

                        {/* Button to generate and download the pdf. Available for mobile. */}
                        <div>
                            <a download="" href="assets/pdf/ResumeCv.pdf" className="home__button-movil">
                                Download
                            </a>
                        </div>
                    </div>

                    <div className="home__address bd-grid">
                        {homeInfo.map((item, i) => (
                            <HomeInformation item={item} key={i} />
                        ))}
                    </div>
                </div>
                {/* Theme change button */}
                <i className={`bx ${lightTheme ? 'bx-moon' : 'bx-sun'} change-theme`} id="theme-button" onClick={onThemeChange}></i>

                {/* Button to generate and download the pdf. Available for desktop. */}
                <i className="bx bx-download generate-pdf" title="Generate PDF" id="resume-button"></i>
            </section>

            {/* ========== SOCIAL ========== */}
            <section className="social section">
                <h2 className="section-title">
                    SOCIAL
                </h2>

                <div className="social__container bd-grid">
                    {socialLinks.map((item, i) => (
                        <SocialLink item={item} key={i} />
                    ))}
                </div>
            </section>

            {/* ========== PROFILE ========== */}
            <section className="profile section" id="profile">
                <h2 className="section-title">PROFILE</h2>

                <p className="profile__description">
                    {profile}
                </p>
            </section>

            {/* ========== EDUCATION ========== */}
            <section className="education timeline section" id="education">
                <h2 className="section-title">EDUCATION</h2>

                <div className="timeline__container bd-grid">
                    {
                        education.map((item, i) => (
                            <TimelineContent isEducation key={i} item={item} isLast={i == (education.length - 1)} />
                        ))
                    }
                </div>
            </section>

            {/* ========== SKILLS  ========== */}
            <section className="skills itemslist section" id="skills">
                <h2 className="section-title">SKILLS</h2>

                <div className="itemslist__content bd-grid">
                    <ItemslistData isSkills list={skills.programLanguages} />
                    <ItemslistData isSkills list={skills.technique} />
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
