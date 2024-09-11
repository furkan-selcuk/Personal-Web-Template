import React, { Component } from "react";
import "./Works.css";

export default class Works extends Component {
  render() {
    return (
      <div id="inclusive">
        <div id="header">
          <h5>
            {" "}
            <span className="orange-text">M</span>y professional experiences
          </h5>
        </div>
        <div className="works-row" style={{ marginTop: 15 }}>
          <div className="works-row-left">
            <div className="title">
              <div className="circle"></div> <b>UpWork</b>
            </div>
            <p>
              Remote <br></br>seb 2018-present
            </p>
          </div>
          <div className="works-row-right">
            <div className="title">
              <div className="circle"></div> <b>Senior Web Devoloper</b>
            </div>
            <p>
              I work to be worthy of my rapidly growing audience by using my
              previous experiences to help more people.
            </p>
          </div>
        </div>
        <div className="works-row">
          <div className="works-row-left">
            <div className="title">
              <div className="circle"></div> <b>Apple</b>
            </div>
            <p>
              Kaliforniya <br></br>jan 2015-seb2018
            </p>
          </div>
          <div className="works-row-right">
            <div className="title">
              <div className="circle"></div> <b>Front-End Devoloper(Remote)</b>
            </div>
            <p>
              Apple is a well-established company and I played an important role
              in their front-end development stages and worked on the front-end
              of the website they are still using.
            </p>
          </div>
        </div>
        <div className="works-row">
          <div className="works-row-left">
            <div className="title">
              <div className="circle"></div> <b>Selo entegration</b>
            </div>
            <p>
              Dallas <br></br>feb 2011-jan 2015
            </p>
          </div>
          <div className="works-row-right">
            <div className="title">
              <div className="circle"></div> <b>Full-stack Devoloper</b>
            </div>
            <p>
              Selo Integration is a company where I discovered the direction I
              wanted to move forward while working for me and where I worked
              very happily and had fun during my time.
            </p>
          </div>
        </div>
        <div className="works-row">
          <div className="works-row-left">
            <div className="title">
              <div className="circle"></div> <b>Black Software</b>
            </div>
            <p>
              San Diego <br></br>aug 2009-feb 2011
            </p>
          </div>
          <div className="works-row-right">
            <div className="title">
              <div className="circle"></div> <b>Junior developer</b>
            </div>
            <p>
              Thanks to the basic knowledge I learned at Selçuklu Software and
              the network I developed, I shed light on my path, knowing that I
              will do great things in the future.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
