import React, { Component } from "react";
import { Progress, Container } from "reactstrap";
import "./skill.css";

export default class skill extends Component {
  render() {
    return (
      <div id="inclusive">
        <Container>
          <div className="header1">
            <h5>
              <span className="orange-text">M</span>y Software
            </h5>
          </div>
          <div className="header">
            <h5>
              <span className="orange-text">J</span>avascript
            </h5>
          </div>
          <div className="bar-skill">
            <Progress animated color="danger" value={79}>
              79%
            </Progress>
          </div>
          <div className="header">
            <h5>
              <span className="orange-text">C</span>ss
            </h5>
          </div>
          <div className="bar-skill">
            <Progress animated color="succes" value={72}>
              72%
            </Progress>
          </div>
          <div className="header">
            <h5>
              <span className="orange-text">H</span>tml
            </h5>
          </div>
          <div className="bar-skill">
            <Progress animated color="warning" value={80}>
              80%
            </Progress>
          </div>
          <div className="header1" style={{ marginTop: 20 }}>
            <h5>
              <span className="orange-text">M</span>y Language
            </h5>
          </div>
          <div className="header">
            <h5>
              <span className="orange-text">E</span>nglish
            </h5>
          </div>
          <div className="bar-skill">
            <Progress animated color="info" value={72}>
              72%
            </Progress>
          </div>
          <div className="header">
            <h5>
              <span className="orange-text">G</span>erman
            </h5>
          </div>
          <div className="bar-skill">
            <Progress animated color="secondary" value={42}>
              42%
            </Progress>
          </div>
        </Container>
      </div>
    );
  }
}
