import React, { useState, useEffect } from "react";
import Navi from "./Navi";
import NaviPhone from "./NaviPhone";
import "./App.css";
import Personal from "./Personal";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "../src/Main/About";
import MainBackround from "./images/Divs-mother.png";
import Skill from "../src/Main/skill";
import Works from "../src/Main/Works";
import Contact from "../src/Main/Contact";
import Product from "../src/Main/Product";

function App() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div style={{ backgroundImage: `url(${MainBackround})`, marginTop: 0 }}>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      ></meta>
      <Router>
        <div className="grid-container">
          <div className="grid-item-personal-navi">
            <div className="grid-item-navi">
              {windowSize.width <= 992 ? (
                <div >
                  <NaviPhone></NaviPhone>
                  
                </div>
              ) : null}
              {windowSize.width > 992 ? (
                <div>
                  <Navi></Navi>
                  
                </div>
              ) : null}
            </div>
            <div className="grid-item-personal">
              {windowSize.width <= 992 && windowSize.height < 800 ? (
                <div>
                  <Routes>
                    <Route path="/" element={<Personal />} />
                    <Route path="/About" element={<Personal />} />
                  </Routes>
                </div>
              ) : null}
              {windowSize.width > 992 ? (
                <div>
                  <Personal />s
                </div>
              ) : null}
            </div>
          </div>
          <div className="grid-item-main">
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/About" element={<About />} />
              <Route path="/skill" element={<Skill />} />
              <Route path="/Works" element={<Works />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/Product" element={<Product />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
