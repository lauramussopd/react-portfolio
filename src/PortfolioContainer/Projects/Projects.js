import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Projects.css";

import React, {useEffect} from "react";
import OwlCarousel from "react-owl-carousel";

import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";

export default function Projects(props) {
  useEffect(() => {
    const fadeInScreenHandler = (screen) => {
      if (screen.fadeInScreen !== props.id) return;
      Animations.animations.fadeInScreen(props.id);
    };

    const fadeInSubscription =
      ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    return () => {
      fadeInSubscription.unsubscribe();
    };
  }, [props.id]);

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
    <div id={props.id || ""}>
      <ScreenHeading title={"Projects"} subHeading={"What do I do?"} />
      <section className="projects-section fade-in">
        <div className="container">
          <div className="row">
            <OwlCarousel
              className="owl-carousel"
              id="projects-carousel"
              {...options}
            >
              <div className="col-lg-12">
                <a
                  href="https://museumofcandybootstrap.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="projects-item">
                    <img src="img/projects/candy.png" alt="todo" />
                  </div>
                </a>
              </div>
              <div className="col-lg-12">
                <a
                  href="https://todolm.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="projects-item">
                    <img src="img/projects/todo.png" alt="todo" />
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
                    <img src="img/projects/pokeapi2.png" alt="pokeapi" />
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
