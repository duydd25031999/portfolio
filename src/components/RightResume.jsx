import React from "react";
import TimelineContent from './TimelineContent.jsx'
import ItemslistData from './ItemslistData.jsx'
import GlobalContext from '../contexts/GlobalContext.jsx'

const data = require('../data.json')

const RightResume = () => {
    const globalValue = React.useContext(GlobalContext)

    return (
        <div className="resume__right">
            {/* ========== EDUCATION ========== */}
            <section ref={globalValue.refSection} className="education timeline section" id="education">
                <h2 className="section-title">EDUCATION</h2>

                <div className="timeline__container bd-grid">
                    {
                        data.education.map((item, i) => (
                            <TimelineContent isEducation key={i} item={item} isLast={i == (data.education.length - 1)} />
                        ))
                    }
                </div>
            </section>

            {/* ========== EXPERIENCE ========== */}
            <section ref={globalValue.refSection} className="experience section" id="experience">
                <h2 className="section-title">EXPERIENCE</h2>

                <div className="experience__container bd-grid">
                    {data.experience.map((item, i) => (
                        <TimelineContent isExperence item={item} key={i} isLast={i == (data.experience.length - 1)} />
                    ))}
                </div>
            </section>

            {/* ========== INTERESTS ========== */}

            <section className="interests section">
                <h2 className="section-title">INTERESTS</h2>

                <div className="interests__container bd-grid">
                    {data.interests.map((item, i) => (
                        <InterestsContent item={item} key={i} />
                    ))}
                </div>
            </section>
        </div>
    )
}

const CertificateContent = ({ item }) => (
    <div className="certificate__content">
        <h3 className="certificate__title">
            {item.title}
        </h3>
        <p className="certificate__description">
            {item.description}
        </p>
    </div>
)

const ReferencesContent = ({ item }) => (
    <div className="references__content bd-grid">
        <span className="references__subtitle">
            {item.position}
        </span>
        <h3 className="references__title">
            {item.name}
        </h3>
        <ul className="references__contact">
            {item.contacts.map((contact, i) => (
                <li key={i}>{contact}</li>
            ))}
        </ul>
    </div>
)

const InterestsContent = ({ item }) => (
    <div className="interests__content">
        <i className={`bx ${item.icon} interests__icon`}></i>
        <span className="interests__name">{item.name}</span>
    </div>
)

export default RightResume;
