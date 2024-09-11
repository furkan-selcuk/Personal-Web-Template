import React, { Component } from "react";
import "./Personal.css";
import firstFoto from './images/person-foto.png';
import backround from './images/backround.webp';

export default class Personal extends Component {
  render() {
    return (
      
      <div id="personal-inclusive">
        <div id="Peronal-foto-inclusive" style={{ backgroundImage: `url(${backround})` }}>
          <div id="personal-foto" style={{ backgroundImage: `url(${firstFoto})` }}></div>
          <div id="social-media" >
            <p style={{ fontSize: "2vw", color: "white" }}>
              <b>James Black</b>
            </p>
            <p style={{ color: "orange" }}>freelancer</p>
            <div id="social-medya-button">
              <button className="btn-social-media">
                <i>
                  <i class="bi bi-instagram"></i>
                </i>
              </button>
              <button className="btn-social-media">
                <i>
                  <i class="bi bi-twitter-x"></i>
                </i>
              </button>
              <button className="btn-social-media">
                <i>
                  <i class="bi bi-stack-overflow"></i>
                </i>
              </button>
              <button className="btn-social-media">
                <i>
                  <i class="bi bi-linkedin"></i>
                </i>
              </button>
              <button className="btn-social-media">
                <i>
                  <i class="bi bi-github"></i>
                </i>
              </button>
            </div>
          </div>
        </div>
        <div id="personal-under">
          <button className="btn-under-foto">
            Download Cv  <i class="bi bi-cloud-download"></i>
          </button>
          <button className="btn-under-foto">
            Contact Me <i class="bi bi-send"></i>
          </button>
        </div>
      </div>
    );
  }
}
