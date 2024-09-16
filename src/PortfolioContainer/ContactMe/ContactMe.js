import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./ContactMe";

export default function ContactMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [banner, setBanner] = useState("");
  const [bool, setBool] = useState("");

  return (
    <div className="contact-me-container" id={props.id || ""}>
      <ScreenHeading subHeading={"Let's keep in touch"} title={"Contact Me"} />
      <div className="central-form">
        <div className="col">
          <h2 className="title">
            <TypeAnimation
              sequence={["Get In Touch", 1000]}
              cursor={true} // Blinking cursor
              repeat={Infinity} // Loop animation infinitely
              style={{ fontSize: "1em", color: "#E29578" }} // Custom stylerepeat={Infinity}
            />
          </h2>
        </div>
        <div className="back-form">
          <h4>Send your Email here!</h4>
        </div>
        <form>
          <p>{banner}</p>
          <label htmlFor="name">Name</label>
          <input type="text"/>

          <label htmlFor="email">Email</label>
          <input type="email"/>

          <label htmlFor="message">Message</label>
          <textarea type="message"/>
        </form>
      </div>
    </div>
  );
}
