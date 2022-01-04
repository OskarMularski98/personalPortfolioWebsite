import React from "react";
import Typical from "react-typical";
import ScrollService from "../../../utilities/ScrollService";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://github.com/OskarMularski98" target="_blank">
                <i className="fa fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/oskar-mularski/" target="_blank">
                <i className="fa fa-linkedin-square"></i>
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm <span className="highlighted-text">Oskar</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic Dev 😀",
                    1000,
                    "Front end Developer 💻",
                    1000,
                    "Engineer Degree 👨‍🎓",
                    1000,
                    "Looking for job 👀",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Knack of biulding applications with front end operations.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button
              className="btn primary-btn"
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            >
              Hire Me
            </button>
            <a
              href="OskarMularskiResume.pdf"
              download="OskarMularskiResume.pdf"
            >
              <button className="btn highlighted-btn">Get Resume</button>
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
