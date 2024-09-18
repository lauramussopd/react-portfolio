import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
// import ScrollService from "../../utilities/ScrollService";
// import Animations from "../../utilities/Animations";
import axios from "axios";
import { toast } from "react-toastify";
import "./ContactMe.css";

export default function ContactMe(props) {
  // let fadeInScreenHandler = (screen) => {
  //   if (screen.fadeInScreen !== props.id) return;
  //   Animations.animations.fadeInScreen(props.id);
  // };
  // const fadeInSubscription =
  //   ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [banner, setBanner] = useState("");

  const handleName = (e) =>{
    setName(e.target.value);
  };

  const handleEmail = (e) =>{
    setEmail(e.target.value);
  };

  const handleMessage = (e) =>{
    setMessage(e.target.value);
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
        let data = {
            name,
            email,
            message,
        };
        const res = await axios.post(`/contact`, data);
        if(name.length === 0 || email.length === 0 || message.length === 0)
            {
            setBanner(res.data.msg)
            toast.error(res.data.msg)
        } else if (res.status === 200){
            setBanner(res.data.msg)
            toast.success(res.data.msg)
        }
    } catch (error) {
        console.log(error);
    }
  }

  return (
    <div className="contact-me-container" id={props.id || ""}>
      <ScreenHeading subHeading={"Let's keep in touch"} title={"Contact Me"} />
      <div className="central-form">
          <h2 className="title">
            <TypeAnimation
              sequence={["Get In Touch", 1000]}
              cursor={true} // Blinking cursor
              repeat={Infinity} // Loop animation infinitely
              style={{ fontSize: "1em", color: "#E29578" }} // Custom stylerepeat={Infinity}
            />
          </h2>
        <div className="back-form">
          <h4>Send your Email here!</h4>
        </div>
        <form onSubmit={submitForm}>
          <p>{banner}</p>
          <label htmlFor="name">Name</label>
          <input type="text"
          onChange={handleName}
          value={name}/>

          <label htmlFor="email">Email</label>
          <input type="email"
          onChange={handleEmail}
          value={email}/>

          <label htmlFor="message">Message</label>
          <textarea type="message"
          onChange={handleMessage}
          value={message}/>

          <div className="send-btn">
            <button type="submit">Send    <i className="fa fa-paper-plane"/></button>
          </div>
        </form>
      </div>
    </div>
  );
}
