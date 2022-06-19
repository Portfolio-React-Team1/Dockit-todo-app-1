import React from "react";
import { useNavigate } from "react-router-dom";
import "./Onboarding.css";
import Group183 from "../../assets/images/group183.png";
function Onboarding2() {
  const navigate = useNavigate();
  const backPage = () => {
    navigate("/Onboarding1");
  };
  const nextPage = () => {
    navigate("/Onboarding3");
  };
  return (
    <div className="container-center-horizontal">
      <div className="onboarding-screen">
        <div className="skip">
          <span> Skip</span>
        </div>
        <img className="group-image" src={Group183} alt="busy man" />
        <div className="navi">
          <div className="rectangle-10"> </div>
          <div className="rectangle-100"> </div>
          <div className="rectangle-10"> </div>
        </div>
        <h1 className="screen-title">
          <span> Create daily routine</span>
        </h1>
        <p className="app-text">
          {" "}
          <span>
            {" "}
            In Dockit you can create your personalized routine to stay
            productive
          </span>{" "}
        </p>
        <div className="flex-row">
          <div className="screen-end-links" onClick={backPage}>
            {" "}
            <span className="back">Back</span>{" "}
          </div>
          <div className="frame-121">
            <div className="next" onClick={nextPage}>
              <span> Next</span>
            </div>
          </div>
        </div>

        <div className="navi">
          <div className="rectangle-90"> </div>
        </div>
      </div>
    </div>
  );
}

export default Onboarding2;
