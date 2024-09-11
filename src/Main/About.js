import React, { Component } from "react";
import "./About.css";
import html5logo from "../images/html5_logo.png";
import nodejs from "../images/nodejs_logo.png";

export default class About extends Component {
  render() {
    return (
      <div id="inclusive">
        <div id="upper-section">
          <div className="header">
            <h5>
              <span className="orange-text">A</span>bout Me
            </h5>
          </div>
          <br></br>
          <div id="text-about">
            <p>
              &nbsp;&nbsp;&nbsp;Hello! I'm James Black.<br></br>
              &nbsp;&nbsp;&nbsp;I am a developer working in the field of
              backhand and frontend. I have a lot of experience in web
              &nbsp;&nbsp;development &nbsp;&nbsp;&nbsp;and I still continue to
              learn new things. <br></br>
              <br></br>
              &nbsp;&nbsp;&nbsp;<span className="white-text">AGE</span>. . . . .
              .23&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span className="white-text">RESİDENCE</span>. . . . . .USA{" "}
              <br></br>
              &nbsp;&nbsp;&nbsp;<span className="white-text">FREELANCE</span>. .
              . . .
              .AVAİLABLE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span className="white-text">ADDRESS</span>. . . . . .	San Diego/USA
            </p>
          </div>
        </div>
        <div id="lower-section">
          <div className="header">
            <h5>
              <span className="orange-text">M</span>y Service
            </h5>
          </div>
          <div id="lower-section-lower">
            <div id="lower-section-left">
              <img src={html5logo} alt="html5" />
              <p>
                <span className="white-text" style={{ fontSize: 20 }}>
                  Front-end
                </span>
                <br></br>
                <br></br>
                Front-end software created by combining modern designs with easy
                usability
              </p>
            </div>
            <div id="lower-section-right">
              <img src={nodejs} alt="html5" />
              <p>
                <span className="white-text" style={{ fontSize: 20 }}>
                  Back-end
                </span>
                <br></br>
                <br></br>
                Software that will not cause any problems in heavy traffic and
                will facilitate subsequent changes.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
