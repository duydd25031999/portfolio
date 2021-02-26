import React from "react";
import {
  ResumeProps,
  HomeProps,
  SocialProps,
  ProfileProps,
  IconLinkProps,
  EducationProps,
  SkillsProps,
} from "./app.type";
import { Timeline, ListItem } from './UtilComponents.tsx'

const ResumeLeft: React.FC<ResumeProps> = ({ data }) => (
  <div className="resume__left">
    <HomeSection
      first_name={data.first_name}
      last_name={data.last_name}
      img={data.img}
      infor={data.infor}
      professtion={data.professtion}
    />
    <SocialSection social={data.social} />
    <ProfileSection description={data.description} />
    <EducationSection education={data.education} />
    <SkillsSection languages={data.languages} frameworks={data.frameworks} />
  </div>
);

const HomeSection: React.FC<HomeProps> = ({
  first_name,
  last_name,
  img,
  infor,
  professtion,
}) => (
  <section className="home" id="home">
    <div className="home__container section bd__grid">
      <div className="home__data bd__grid">
        <img src={img} alt="" className="home__img" />
        <h1 className="home__title">
          {first_name} <b>{last_name}</b>
        </h1>
        <h3 className="home__professtion">{professtion}</h3>
        <div>
          <a
            download=""
            href="../pdf/ResumeCv.pdf"
            className="home__button-movil"
          >
            Download
          </a>
        </div>
      </div>

      <div className="home__address bd__grid">
        {infor.map((item, index) => (
          <HomeInformation icon={item.icon} text={item.text} key={index} />
        ))}
      </div>
    </div>
  </section>
);

const SocialSection: React.FC<SocialProps> = ({ social }) => (
  <section className="social section" id="social">
    <h2 className="section__title">SOCIAL</h2>

    <div className="social__container bd__grid">
      {social.map((item, index) => (
        <SocialLink icon={item.icon} text={item.text} link={item.link} key={index} />
      ))}
    </div>
  </section>
);

const ProfileSection: React.FC<ProfileProps> = ({ description }) => (
  <section className="profile section" id="profile">
    <h2 className="section__title">PROFILE</h2>

    <p className="profile__description">{description}</p>
  </section>
);

const EducationSection: React.FC<EducationProps> = ({ education }) => (
  <section className="education section" id="education">
    <h2 className="section__title">EDUCATION</h2>

    <div className="education__container bd__grid">
      {education.map((item, index) => (
        <Timeline
          title={item.title}
          where={item.where}
          time={item.time}
          last={index === education.length - 1}
          key={index}
        />
      ))}
    </div>
  </section>
);

const SkillsSection: React.FC<SkillsProps> = ({ languages, frameworks }) => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">SKILLS</h2>

      <div className="skills__content bd__grid">
        <ul className="skills__data">
          {languages.map((skill, index) => (
            <ListItem text={skill} key={index} />
          ))}
        </ul>
        <ul className="skills__data">
          {frameworks.map((skill, index) => (
            <ListItem text={skill} key={index} />
          ))}
        </ul>
      </div>
    </section>
  );
};

const HomeInformation: React.FC<IconLinkProps> = ({ icon, text }) => (
  <span className="home__information">
    <i className={`${icon} home__icon`}></i>
    {text}
  </span>
);

const SocialLink: React.FC<IconLinkProps> = ({ icon, text, link }) => (
  <a href={link} className="social__link" target="_blank">
    <i className={`${icon} social__icon`}></i>
    {text}
  </a>
);

export default ResumeLeft;
