import React, { useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading"; // Usa PascalCase per i componenti
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
  const SCREEN_CONSTANTS = {
    descriptions: "lorem ipsum",
    highlights: {
      bullets: ["Web Developer", "Web Developer", "Web Developer"],
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
        {/* Usa ScreenHeading come un componente, non come una prop */}
        <ScreenHeading title={"About Me"} subHeading={"A little of me"} />
        <div className="about-me-card">
          <div className="about-me-profile">
            <div className="about-me-details">
              <span className="about-me-descriptions">
                {SCREEN_CONSTANTS.descriptions}
              </span>
              <div className="about-me-highlight">
                <div className="highlight-heading">
                <span>
                {SCREEN_CONSTANTS.highlights.heading}
              </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
