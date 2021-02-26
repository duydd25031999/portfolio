import React from "react";
import {
  ResumeProps,
  CertificatesItemProps,
  ReferencesItemProps,
} from "./app.type";
import { Timeline, ListItem } from "./UtilComponents.tsx";

const ResumeRight: React.FC<ResumeProps> = ({ data }) => (
  <div className="resume__right">
    <ExperienceSection />
    <CertificatesSection />
    <ReferencesSection />
    <LanguageSection />
    <InterestSection />
  </div>
);

const ExperienceSection: React.FC = () => {
  const experience = [
    {
      title: "master of design",
      where: "Tech Soft",
      time: "From 2013 to 2015",
      description:
        "Work in this company dedicating the best responsibility in the area that corresponds , delivering the best results for the company and improving productivity.",
    },
    {
      title: "UI / UX design area",
      where: "Adobe Inc",
      time: "From 2017 to 2019",
      description:
        "Work in this company dedicating the best responsibility in the area that corresponds , delivering the best results for the company and improving productivity.",
    },
    {
      title: "Mobile application developer",
      where: "App Tech",
      time: "From 2019 to 2021",
      description:
        "Work in this company dedicating the best responsibility in the area that corresponds , delivering the best results for the company and improving productivity.",
    },
  ];
  return (
    <section className="experience section" id="experience">
      <h2 className="section__title">EDUCATION</h2>

      <div className="experience__container bd__grid">
        {experience.map((ex, index) => (
          <Timeline
            key={index}
            title={ex.title}
            where={ex.where}
            time={ex.time}
            experience
            description={ex.description}
            last={index === experience.length - 1}
          />
        ))}
      </div>
    </section>
  );
};

const CertificatesSection: React.FC = () => {
  const certificates = [
    {
      title: "Certified for compliance in the work area (2012)",
      description:
        "For meeting the expectations of leading the team to work the specified tasks in the labor field.",
    },
    {
      title: "Certificate of attendance on computer technology",
      description:
        "For meeting the expectations of leading the team to work the specified tasks in the labor field.",
    },
    {
      title:
        "Achievement medal for productivity excellence during the year (2019) ",
      description:
        "For meeting the expectations of leading the team to work the specified tasks in the labor field.",
    },
  ];

  return (
    <section className="certificates section" id="certificates">
      <h2 className="section__title">CERTIFICATES</h2>

      <div className="certificates__container bd__grid">
        {certificates.map((certi, index) => (
          <CertificatesItem
            key={index}
            title={certi.title}
            description={certi.description}
          />
        ))}
      </div>
    </section>
  );
};

const ReferencesSection: React.FC = () => {
  const references = [
    {
      title: "Mr. Clay Doe",
      subtitle: "Sr. Director",
      contact: [
        {
          type: "Phone",
          value: "999-888-777",
        },
        {
          type: "Email",
          value: "user@email.com ",
        },
      ],
    },
    {
      title: "Mr. Robbinson Bass",
      subtitle: "Mag. Developer",
      contact: [
        {
          type: "Phone",
          value: "999-888-777",
        },
        {
          type: "Email",
          value: "user@email.com ",
        },
      ],
    },
  ];

  return (
    <section className="references section" id="references">
      <h2 className="section__title">REFERENCES</h2>

      <div className="references__container bd__grid">
        {references.map((item, index) => (
          <ReferencesItem
            key={index}
            title={item.title}
            subtitle={item.subtitle}
            contact={item.contact}
          />
        ))}
      </div>
    </section>
  );
};

const LanguageSection: React.FC = () => {
  const languages = ["English", "Spanish", "French"];

  return (
    <section className="references section" id="references">
      <h2 className="section__title">LANGUAGES</h2>

      <div className="references__content bd__grid">
        <ul className="skills__data">
          {languages.map((item, index) => (
            <ListItem key={index} text={item} />
          ))}
        </ul>
      </div>
    </section>
  );
};

const InterestSection: React.FC = () => {
    const interest = [
        {
            icon: 'bx bx-headphone',
            text: 'Music',
        },
        {
            icon: 'bx bxs-plane-alt',
            text: 'Travel',
        },
        {
            icon: 'bx bx-book',
            text: 'Read',
        },
        {
            icon: 'bx bx-dumbbell',
            text: 'Fitness',
        },
    ];
  
    return (
      <section className="interest section" id="interest">
        <h2 className="section__title">INTEREST</h2>
  
        <div className="interest__container bd__grid">
            {interest.map((item, index) => (
                <div className="interest__content" key={index}>
                    <i className={`${item.icon} interest__icon`}></i>
                    <span className="interest__name">{item.text}</span>
                </div>
            ))}
        </div>
      </section>
    );
  };

const CertificatesItem: React.FC<CertificatesItemProps> = ({
  title,
  description,
}) => (
  <div className="certificates__content">
    <h3 className="certificates__title">{title}</h3>
    <p className="certificates__description">{description}</p>
  </div>
);

const ReferencesItem: React.FC<ReferencesItemProps> = ({
  title,
  subtitle,
  contact,
}) => (
  <div className="references__content">
    <span className="references__subtitle">{subtitle}</span>
    <h3 className="references__title">{title}</h3>
    <ul className="references__contact">
      {contact.map((item, index) => (
        <li key={index}>{`${item.type}: ${item.value}`}</li>
      ))}
    </ul>
  </div>
);

export default ResumeRight;
