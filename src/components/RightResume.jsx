import React from "react";
import TimelineContent from './TimelineContent.jsx'
import ItemslistData from './ItemslistData.jsx'

const experience = [
    {
        title: 'MASTER OF DESIGN',
        company: 'From 2013 to 2015 | Tech Soft',
        description: 'Work in this company dedicating the best responsibility in the area that corresponds, delivering the best results for the company and improving productivity.',
    },
    {
        title: 'UI/UX DESIGN AREA',
        company: 'From 2017 to 2019 | Adobe Inc',
        description: 'Work in this company dedicating the best responsibility in the area that corresponds, delivering the best results for the company and improving productivity.',
    },
    {
        title: 'MOBILE APPLICATION DEVELOPER',
        company: 'From 2019 to 2021 | App Tech',
        description: 'Work in this company dedicating the best responsibility in the area that corresponds, delivering the best results for the company and improving productivity.',
    },
]

const certificates = [
    {
        title: 'Certified for compliance in the work area (2012)',
        description: 'For meeting the expectations of the leading the team to work the specifed tasks in the labor field.',
    },
    {
        title: 'Certified of attendance on computer technology',
        description: 'For meeting the expectations of the leading the team to work the specifed tasks in the labor field.',
    },
    {
        title: 'Achievement medal for productivity excellence during the year (2019)',
        description: 'For meeting the expectations of the leading the team to work the specifed tasks in the labor field.',
    },
]

const references = [
    {
        position: 'Sr. Director',
        name: 'Mr. Clay Doe',
        contacts: [
            'Phone: 999-888-777',
            'Email: user@gmail.com',
        ],
    },
    {
        position: 'Mag. Developer',
        name: 'Mr. Robbinson Bass',
        contacts: [
            'Phone: 999-888-777',
            'Email: user@gmail.com',
        ],
    },
]

const languages = [
    'Spanish',
    'English',
    'French',
]

const interests = [
    {
        icon: 'bx-headphone',
        name: 'Music',
    },
    {
        icon: 'bxs-plane-alt',
        name: 'Travel',
    },
    {
        icon: 'bx-book',
        name: 'Read',
    },
    {
        icon: 'bx-dumbbell',
        name: 'Fitness',
    },
]

const RightResume = () => (
    <div className="resume__right">
        {/* ========== EXPERIENCE ========== */}
        <section className="experience section" id="experience">
            <h2 className="section-title">EXPERIENCE</h2>

            <div className="experience__container bd-grid">
                {experience.map((item, i) => (
                    <TimelineContent isExperence item={item} key={i} isLast={i == (experience.length - 1)} />
                ))}
            </div>
        </section>

        {/* ========== CERTIFICATES ========== */}
        <section className="certificate section" id="certificates">
            <h2 className="section-title">CERTIFICATES</h2>

            <div className="certificate__container bd-grid">
                {certificates.map((item, i) => (
                    <CertificateContent item={item} key={i} />
                ))}
            </div>
        </section>

        {/* ========== REFERENCES ========== */}
        <section className="references section" id="references">
            <h2 className="section-title">REFERENCES</h2>

            <div className="references__container bd-grid">
                {references.map((item, i) => (
                    <ReferencesContent item={item} key={i} />
                ))}
            </div>
        </section>

        {/* ========== LANGUAGES ========== */}
        <section className="languages itemslist section">
            <h2 className="section-title">LANGUAGES</h2>

            <div className="itemslist__container">
                <ul className="itemslist__content bd-grid">
                    <ItemslistData list={languages} />
                </ul>
            </div>
        </section>

        {/* ========== INTERESTS ========== */}

        <section className="interests section">
            <h2 className="section-title">INTERESTS</h2>

            <div className="interests__container bd-grid">
                {interests.map((item, i) => (
                    <InterestsContent item={item} key={i} />
                ))}
            </div>
        </section>
    </div>
)

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
