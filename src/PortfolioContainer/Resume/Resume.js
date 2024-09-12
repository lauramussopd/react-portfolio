import React, { useState } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) =>{
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carouselOffSetStyle, setCarouselOffSetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
     ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const ResumeHeading = (props) => {
    return(    
    <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet">
            <span>{props.heading ? props.heading : ""}</span>
            {props.fromDate && props.toDate ? (
              <div className="heading-date">
                {props.fromDate + "-" + props.toDate}
              </div>
            ) : (
              <div></div>
            )}
          </div>
          <div className="resume-sub-heading">
            <span>{props.subHeading ? props.subHeading : ""}</span>
          </div>
          <div className="resume-heading-description">
            <span>{props.description ? props.description : ""}</span>
          </div>
        </div>
      </div>
      )

  };

  const resumeBullets = [
    {label: "Education", logoSrc: "education.svg" },
    {label: "Work History", logoSrc: "work-history.svg" },
    {label: "Programming Skills", logoSrc: "programming-skills.svg" },
    {label: "Projects", logoSrc: "projects.svg" },
    {label: "Interests", logoSrc: "interests.svg" },
  ];

  const programmingSkillsDetails = [
    { skill: "Javascript"},
    { skill: "Vue.JS"},
    { skill: "React"},
    { skill: "HTML"},
    { skill: "CSS"},
  ];

  const projectDetails = [
    {
      skill: "Personal Portfolio Website",
      duration: {
        fromDate: "2024",
        toDate: "2024",
      },
      description:
        "A Personal Portfolio website to showcase all my details and projects at one place",
      subHeading: "Technologies Used: React JS",
    },
    {
      skill: "TODO Website",
      duration: {
        fromDate: "2024",
        toDate: "2024",
      },
      description:
        "A simple To-do app that allows users to create an account, record tasks, edit them and mark them as complete. The app is linked to a database, where all the user and task data are stored",
      subHeading: "Tecnologies Used: Vue. JS, Pinia, Supabase, Bootstrap",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"University1"}
        subHeading={"Bachelor in ......"}
        fromDate={"date"}
        toDate={"date"}
      />
      <ResumeHeading
        heading={"University1"}
        subHeading={"Bachelor in ......"}
        fromDate={"date"}
        toDate={"date"}
      />
      <ResumeHeading
        heading={"University1"}
        subHeading={"Bachelor in ......"}
        fromDate={"date"}
        toDate={"date"}
      />
    </div>,
    <div className="resume-screen-container" key="work-experience">
      <ResumeHeading
        heading={"WORK1"}
        subHeading={"Sale afvaldfhav"}
        fromDate={"date"}
        toDate={"present"}
      />
      <div className="experience-description">
        <span className="resume-description-text">
          -Develop and maintain front-end components for company websites,
          ensuring a seamless user experience. Identify software bugs, open
          detailed tickets, and follow up to ensure timely resolution.
        </span>
      </div>
      <div className="experience-description">
      <span className="resume-description-text">
          -Develop and maintain front-end components for company websites,
          ensuring a seamless user experience. Identify software bugs, open
          detailed tickets, and follow up to ensure timely resolution.
        </span>
        <br/>
      </div>
      
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
      </div>
      ,
      <div className="resume-screen-container" key={"projects"}>
        {projectDetails.map((projectDetails, index) => (
          <ResumeHeading
            key={index}
            heading={projectDetails.title}
            subHeading={projectDetails.subHeading}
            description={projectDetails.description}
            fromDate={projectDetails.duration.fromDate}
            toDate={projectDetails.duration.toDate}
          />
        ))}
      </div>
      ,
      <div className="resume-screen-container" key="interests">
        <ResumeHeading 
        heading="Art" 
        description="Art Lover" />
        <ResumeHeading 
        heading="Sport" 
        description="Art Lover" />
        <ResumeHeading 
        heading="Music" 
        description="Art Lover" />
      </div>
    </div>,
  ];

  const handleCarousel = (index) => {
    let offSetHeight = 360;
    let newCarouselOffSet = {
      style: { transform: "translateY(" + index * offSetHeight * -1 + "px)" }
    };
    setCarouselOffSetStyle(newCarouselOffSet);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousel(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"}
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="ops, not working"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreen = () => {
    return (
      <div
        style={carouselOffSetStyle.style}
        className="resume-details-carousel"
      >
        {resumeDetails.map((resumeDetail) => resumeDetail)}
      </div>
    );
  };

  return (
    <div className="resume-container screen-container" id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My Formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>
          <div className="resume-bullet-details">{getResumeScreen()}</div>
        </div>
      </div>
    </div>
  );
};
export default Resume;
