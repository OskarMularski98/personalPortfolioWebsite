import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Projects.css";
import portfolio from "../../../src/img/Project/portfolio.png";
import toDo from "../../../src/img/Project/todo.png";
import adventCalendar from "../../../src/img/Project/advent-calendar.png";
import tictactoe from "../../../src/img/Project/tictactoe.png"

export default function Projects(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
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
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <div className="project-container fade-in" id={props.id || ""}>
      <ScreenHeading title={"Projects"} subHeading={"My work"} />
      <section className="project-section">
        <div className="container">
          <div className="row">
            <OwlCarousel
              className="owl-carousel"
              id="project-carousel"
              {...options}
            >
              <div className="col-lg-12">
                <div className="project-item">
                  <div className="project-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      A Personal Portfolio website to showcase all my details
                      and projects at one place.
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star-half-alt"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                    </ul>
                  </div>
                  <div className="project-info">
                    <img src={portfolio} alt="no internet connection"></img>
                    <a
                      href="https://github.com/OskarMularski98/personalPortfolioWebsite"
                      target="_blank"
                    >
                      Personal Portfolio Website
                    </a>
                    <p>Technologies Used: React JS, Bootstrap</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="project-item">
                  <div className="project-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      Tic Tac Toe Game where user 'X' can play with computer
                      'O', who take turns making the spaces in a 3x3 grid.
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star-half-alt"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                    </ul>
                  </div>
                  <div className="project-info">
                    <img src={tictactoe} alt="no internet connection"></img>
                    <a
                      href="https://github.com/OskarMularski98/TicTacToeGame"
                      target="_blank"
                    >
                      Tic Tac Toe Game
                    </a>
                    <p>Technologies Used: Vanilla JS, CSS</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="project-item">
                  <div className="project-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      ToDo List with some decent animations where user can add
                      and delete inputs. Also there's possibility to mark added
                      record.
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star-half-alt"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                    </ul>
                  </div>
                  <div className="project-info">
                    <img src={toDo} alt="no internet connection"></img>
                    <a
                      href="https://github.com/OskarMularski98/ToDo"
                      target="_blank"
                    >
                      ToDo List
                    </a>
                    <p>Technologies Used: JS, CSS</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="project-item">
                  <div className="project-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      Simple project aimed at showing a picture after clicking
                      on all blocks with snow in the background made in
                      JavaScript.
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                      <li>
                        <i className="fa fa-star-half-alt"></i>
                      </li>
                      <li>
                        <i className="fa fa-star"></i>
                      </li>
                    </ul>
                  </div>
                  <div className="project-info">
                    <img
                      src={adventCalendar}
                      alt="no internet connection"
                    ></img>
                    <a
                      href="https://github.com/OskarMularski98/AdventCalendar"
                      target="_blank"
                    >
                      Advent Calendar
                    </a>
                    <p>Technologies Used: JS, SASS</p>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
    </div>
  );
}
