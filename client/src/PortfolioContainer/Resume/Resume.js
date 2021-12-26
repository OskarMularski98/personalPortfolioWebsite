import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

export default function Resume(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programing Skills", logoSrc: "programming-skills.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  const programingSkillDetails = [
    { skill: "JavaScript", ratingPercentage: 60 },
    { skill: "React Js", ratingPercentage: 35 },
    { skill: "Node JS", ratingPercentage: 20 },
    { skill: "HTML", ratingPercentage: 80 },
    { skill: "CSS/SASS", ratingPercentage: 80 },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"THE STATE UNIVERSITY OF APPLIED SCIENCE IN ELBLAG"}
        subHeading={
          "Engineer degree in Computer Science (Database Design and Application Software)"
        }
        fromDate={"2017"}
        toDate={"2021"}
      />
      <ResumeHeading
        heading={"Asseco Academy"}
        subHeading={"Certificate in training course of AI"}
        fromDate={"2020"}
        toDate={"2021"}
      />
    </div>,
    <div className="resume-screen-container" key="work-experience">
      <ResumeHeading
        heading={"THE STATE UNIVERSITY OF APPLIED SCIENCE IN ELBLAG"}
        // subHeading={
        //   "Apprenticeships in the IT department - designing and developing web applications for use of the university, working in a team made of other students."
        // }
        fromDate={"10.2020"}
        toDate={"02.2021"}
      />
      <div className="experience-description">
        <b><span className="resume-description-text">
          Apprenticeships in the IT department - designing and developing web
          applications for use of the university, working in a team made of
          other students.
        </span></b>
        <br />
      </div>
    </div>,
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programingSkillDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Music  🎵"
        description="Listening to music that evokes emotions in me is something i can never compromise with. I can't imagine cleaning at home without letting go of my favorite playlist."
      />
      <ResumeHeading
        heading="Sport  💪"
        description="I try to spend my free time actively. I have been interested in basketball for many years. Nowadays I love to work out in the gym and when I do not have such an opportunity I do exercises at home."
      />
      <ResumeHeading
        heading="Travelling  🚆"
        description="I love to travel! exploring new places is amazing. one of my dreams is to fly to norway and see these fabulous landscapes and so much more."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;
    let newCarousalOffSet = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };
    setCarousalOffSetStyle(newCarousalOffSet);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`).default}
          alt="oops, no internet connection"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreen = () => {
    return (
      <div
        style={carousalOffSetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  return (
    <div className="resume-container screen-container fade-in" id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My Formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>
          <div className="resume-bullets-details">{getResumeScreen()}</div>
        </div>
      </div>
    </div>
  );
}
