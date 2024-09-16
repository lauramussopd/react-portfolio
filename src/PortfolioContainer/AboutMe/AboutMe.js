import React, { useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./AboutMe.css";

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTANTS = {
    descriptions: "I'm an enthusiastic front-end developer with a keen eye for design, skilled in HTML, CSS, and JavaScript. I focus on creating user-friendly digital experiences and enjoy learning new front-end technologies. I excel in collaboration, clear communication, and creative problem-solving while effectively managing my time to meet deadlines. I am adaptable, dedicated, and fluent in English, Italian, Spanish, and Portuguese.",
    highlights: {
      bullets: [
        "Web Developer",
        "Front-End Development Expertise",
        "Technical Support Specialist Experience",
        "Certifications in Modern Technologies",
        "Advanced Design Skills",
        "Multilingual Communication",
      ],
      heading: "Here are a few highlights:",
    },
  };
  const renderHighlight = () => {
    return SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };

  return (
    <div className="about-me-container screen-container" id={props.id || ""}>
      <div className="about-me-parent">
        <ScreenHeading title={"About Me"} subHeading={"A Little Of Me"} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-descriptions">
              {SCREEN_CONSTANTS.descriptions}
            </span>
            <div className="about-me-highlight">
              <div className="highlight-heading">
                <span>{SCREEN_CONSTANTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <div className="about-me-options">
              <button className="btn highlighted-btn"> Hire Me </button>
              <a href="LauraMussoCV.pdf" download="Laura Musso LauraMussoCV.pdf">
                <button className="btn highlighted-btn"> Get Resume </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
