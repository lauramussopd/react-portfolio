import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Projects.css";

import React from "react";
import OwlCarousel from "react-owl-carousel";

import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";

export default function Projects(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const options = {
    loop: true,
    margin: 0,
    nav: true,
    animateIn: "bounceInRight",
    animateOut: "bounceOutRight",
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: { items: 1 },
      768: { items: 1 },
      1000: { items: 3 },
    },
  };

  return (
    <div>
      <ScreenHeading title={"Projects"} subHeading={"What do I do?"} />
      <section className="projects-section" id={props.id || ""}>
        <div className="container">
          <div className="row">
            <OwlCarousel
              className="owl-carousel"
              id="projects-carousel"
              {...options}
            >
              <div className="col-lg-12">
                <div className="projects-item">
                <iframe
                      src="https://pokemon-next-js-murex.vercel.app/"
                      title="Project Showcase"
                      className="project-iframe"
                      allowFullScreen
                    ></iframe>
                </div>
              </div>
              <div className="col-lg-12">
                <a
                  href="https://todolm.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="projects-item">
                    <img src="img/projects/todo.png" alt="todo"></img>
                  </div>
                </a>
              </div>
              <div className="col-lg-12">
                <a
                  href="https://pokemon-next-js-murex.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="projects-item">
                    <img src="img/projects/pokeapi2.png" alt="pokeapi"></img>
                  </div>
                </a>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
    </div>
  );
}
