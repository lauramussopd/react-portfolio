import React, { useState } from "react";

import "../Home.css";
import {
  TOTAL_SCREENS,
} from "../../../utilities/commonUtils";
//import ScrollService from "../../../utilities/ScrollService";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";

export default function Header() {
 // const [ setSelectedScreen] = useState(0);
  const [showHeaderOptions, setShowHeaderOptions] = useState(false);


  const getHeaderOptions = () => {
    return (
      TOTAL_SCREENS.map((screen, i) => (
      <div
        key={screen.screen_name}
        className={getHeaderOptionsClass(i)}
        onClick={() => switchScreen(i, screen)}
      >
        <span>{screen.screen_name}</span>
      </div>
    ))
  )
  };

  const getHeaderOptionsClass = (index) => {
    // let classes = "header-option";
    // if (index < TOTAL_SCREENS.length -1) 
    //   classes += "header-option-separetor";
    // if (selectedScreen === index) 
    //   classes += "selected-header-option";
    // return;
  };

  const switchScreen = (index, screen) => {
    let screenComponent = document.getElementById(screen.screen_name);
    if (!screenComponent) return;

    screenComponent.scrollIntoView({ behavior: "smooth" });
  //  setSelectedScreen(index);
    setShowHeaderOptions(false);
  };
  return (
    <div>
        <div className="header-container" onClick={() => setShowHeaderOptions(!showHeaderOptions)}>
            <div className="header-parent">
                <div className="header-hamburger" onClick={() => setShowHeaderOptions(!showHeaderOptions)}>
                    <FontAwesomeIcon className="header-hamburger-bars" icon={faBars}/>
                </div>
                <div className="header-logo">
                    {/* <span>~Laura~</span> */}
                </div>
                <div className={(showHeaderOptions) ? "header-options show-hamburger-options": "header-options"}>
                    {getHeaderOptions()}
                </div>
            </div>
        </div>
    </div>

  );
}
