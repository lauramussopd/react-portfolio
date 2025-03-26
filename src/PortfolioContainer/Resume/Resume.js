import React, { useState } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import "./Resume.css";

const Resume = (props) => {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carouselOffsetStyle, setCarouselOffsetStyle] = useState({});

  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading || ""}</span>
          {props.fromDate && props.toDate && (
            <div className="heading-date">
              {props.fromDate} - {props.toDate}
            </div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading || ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description || ""}</span>
        </div>
      </div>
    );
  };

  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  const programmingSkillsDetails = [
    { skill: "JavaScript" },
    { skill: "Vue.JS" },
    { skill: "React" },
    { skill: "HTML" },
    { skill: "CSS" },
    { skill: "SQL" },
  ];

  const projectDetails = [
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "2024", toDate: "2024" },
      description:
        "A Personal Portfolio website to showcase all my details and projects at one place",
      subHeading: "Technologies Used: React JS, Bootstrap",
    },
    {
      title: "TODO Website",
      duration: { fromDate: "2024", toDate: "2024" },
      description:
        "A simple To-do app that allows users to create an account, record tasks, edit them and mark them as complete. The app is linked to a database, where all the user and task data are stored.",
      subHeading: "Technologies Used: Vue.JS, Pinia, Supabase, Bootstrap",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading="Ironhack"
        subHeading="Front End Web Development"
        fromDate="2023"
        toDate="2024"
      />
      <ResumeHeading
        heading="42 Barcelona"
        subHeading="Computer Science"
        fromDate="2022"
        toDate="2023"
      />
      <ResumeHeading
        heading="Universita’ Ca’ Foscari Venice"
        subHeading="Master’s degree, Art History and Cultural Heritage"
        fromDate="2016"
        toDate="2019"
      />
    </div>,
    <div className="resume-screen-container" key="work-experience">
      <ResumeHeading
        heading="Front-end Developer & Technical Support Specialist"
        subHeading="Etnia Eyewear Culture"
        fromDate="2021"
        toDate="Present"
      />
      <div className="experience-description resume-description-text">
        - Develop and maintain front-end components with
Vue and Typescript for company websites, ensuring
a seamless user experience.
      </div>
      <div className="experience-description resume-description-text">
        - Website & Software Testing, identify software bugs, open detailed
        tickets, and follow up to ensure timely resolution.
      </div>
      <div className="experience-description resume-description-text">
        - Assist the sales team by responding to customer inquiries, processing
        orders, and maintaining sales databases (SAP, C4C, SQL).
      </div>
    </div>,
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
        </div>
      ))}
    </div>,
    <div className="resume-screen-container" key="projects">
      {projectDetails.map((project, index) => (
        <ResumeHeading
          key={index}
          heading={project.title}
          subHeading={project.subHeading}
          description={project.description}
          fromDate={project.duration.fromDate}
          toDate={project.duration.toDate}
        />
      ))}
    </div>,
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Travel"
        description="I love diving into the cultures of different countries. I've been lucky enough to live in Brazil and Ireland for a while, as well as in Italy. Now, I'm really enjoying my time in Catalonia and soaking up all the wonderful experiences it has to offer."
      />
      <ResumeHeading
        heading="Art"
        description="I have a deep passion for art, particularly contemporary and historical works. I frequently visit galleries and museums to stay inspired and connected with the latest trends in the art world. I also enjoy exploring different art forms and techniques, which often influences my design work."
      />
      <ResumeHeading
        heading="Sport"
        description="I have a great love for the sea, mountains, and all kinds of outdoor activities. In recent years, climbing has become more than just a sport for me; it’s turned into a lifestyle that I’m deeply passionate about."
      />
    </div>,
  ];

  const handleCarousel = (index) => {
    const offsetHeight = 360;
    const newCarouselOffset = {
      style: { transform: `translateY(${index * offsetHeight * -1}px)` },
    };
    setCarouselOffsetStyle(newCarouselOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousel(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt={bullet.label}
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carouselOffsetStyle.style}
        className="resume-details-carousel"
      >
        {resumeDetails.map((detail) => detail)}
      </div>
    );
  };

  return (
    <div className="resume-container screen-container" id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading title="Resume" subHeading="My Formal Bio Details" />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>
          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
