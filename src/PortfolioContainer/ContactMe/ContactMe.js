import React from "react";
import { TypeAnimation } from "react-type-animation";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import "./ContactMe.css";

export default function ContactMe(props) {

  return (
    <div className="contact-me-container" id={props.id || ""}>
      <ScreenHeading subHeading={"Let's keep in touch"} title={"Contact Me"} />
      <div className="central-form">
        <h2 className="title">
          <TypeAnimation
            sequence={["Get In Touch", 1000]}
            cursor={true} // Blinking cursor
            repeat={Infinity} // Loop animation infinitely
            style={{ fontSize: "1em", color: "#E29578" }} // Custom style
          />
        </h2>
        <footer>
          <div>
            <p>
              Email:{" "}
              <a href="mailto:lauramussopd@gmail.com">lauramussopd@gmail.com</a>
            </p>
            <p>
              Phone: <a href="tel:+34643849971">+34 643849971</a>
            </p>
            <p>
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/laura-musso/"
                target="_blank"
                rel="noreferrer"
              >
                https://www.linkedin.com/in/laura-musso/
              </a>
            </p>
            <p>
              GitHub:{" "}
              <a
                href="https://github.com/lauramussopd"
                target="_blank"
                rel="noreferrer"
              >
                https://github.com/lauramussopd
              </a>
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
