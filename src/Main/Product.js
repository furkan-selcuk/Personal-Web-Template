import React, { Component } from "react";
import firstFoto4 from "../images/product4.png";
import firstFoto3 from "../images/product5.png";
import firstFoto2 from "../images/product6.png";
import firstFoto1 from "../images/product7.png";
import "./Product.css";
import { NavItem, Nav, NavLink } from "reactstrap";

export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: firstFoto3,
      color: "bisque",
      bacroundcolor: "brown",
    };
  }

  changeBackground = (number) => {
    const foto = [firstFoto2, firstFoto1, firstFoto3, firstFoto4];
    const colors = ["white", "black", "bisque", "white"];
    const bacroundcolors = ["black", "white", "brown", "burlywood"];
    this.setState({ color: colors[number] });
    this.setState({ image: foto[number] });
    this.setState({ bacroundcolor: bacroundcolors[number] });
  };

  render() {
    return (
      <div
        id="inclusive"
        style={{ backgroundImage: `url(${this.state.image})` }}
      >
        <Nav>
          <NavItem>
            <NavLink active href="#" style={{ color: this.state.color }}>
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" style={{ color: this.state.color }}>
              Product
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled href="#" style={{ color: this.state.color }}>
              Works
            </NavLink>
          </NavItem>
        </Nav>
        <div id="product-text" style={{ color: this.state.color }}>
          <h5 style={{ backdropFilter: "blur(5px)", maxWidth: 100 }}>
            Good days
          </h5>
          <h2 style={{ backdropFilter: "blur(5px)", maxWidth: 300 }}>
            Margheall Design
          </h2>
          <p style={{ backdropFilter: "blur(5px)" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <button
            class="button"
            style={{
              color: this.state.color,
              backgroundColor: this.state.bacroundcolor,
            }}
          >
            <span>Contact</span>
          </button>
        </div>
        <div id="inclusive-project">
          <img
            className="img-1"
            src={firstFoto2}
            onClick={() => this.changeBackground(0)}
            alt="first"
          />
          <img
            className="img-1"
            src={firstFoto1}
            onClick={() => this.changeBackground(1)}
            alt="second"
          />
          <img
            className="img-1"
            src={firstFoto3}
            onClick={() => this.changeBackground(2)}
            alt="first"
          />
          <img
            className="img-1"
            src={firstFoto4}
            onClick={() => this.changeBackground(3)}
            alt="second"
          />
        </div>
      </div>
    );
  }
}
