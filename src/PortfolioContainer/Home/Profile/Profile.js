import React from "react";
import { TypeAnimation } from "react-type-animation";
import "./Profile.css"

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          {/* <div className="colz">
            <div className="colz-icon">
              <a href="https://www.linkedin.com/in/laura-musso/">
                <i className="fa fa-linkedin"></i>
              </a>
            </div>
          </div> */}
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm <span className="highlighted-text">Laura</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                <TypeAnimation
                  sequence={[
                    "Enthusiastic Dev 🖥️",
                    1000,
                    "Javascript Developer 📱",
                    1000,
                    "Climber 🧗🏻‍♀️",
                    1000,
                    "UI/UX Designer 🎨",
                    1000,
                  ]}
                  cursor={true} // Blinking cursor
                  repeat={Infinity} // Loop animation infinitely
                  style={{ fontSize: "1em", color: "#E29578"}} // Custom stylerepeat={Infinity}
                />
              </h1>
              <span className="profile-role-tagline">
                Enthusiastic front-end developer with a keen eye for design
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn highlighted-btn"> Hire Me </button>
            <a
              href="CV-laura-musso.pdf"
              download="Laura Musso CV-laura-musso.pdf"
            >
              <button className="btn highlighted-btn"> Get Resume </button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
