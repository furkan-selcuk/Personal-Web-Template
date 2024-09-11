import React, { useState } from "react";
import "./NaviPhone.css";
import { Link } from "react-router-dom";
function NaviPhone() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div id="İnclusive-phoneNavbar">
      
      <div className="navbar" style={{ padding: 0 }}>
        <button className="toggle-btn" onClick={toggleMenu}>
          <i className="bi bi-list"></i>
        </button>

        <div className={`menu ${menuOpen ? "show" : ""}`}>
          <Link to="/About" className="nav-btn">
            <i class="bi bi-person"></i> <h5 className="nav-bar-h5">About</h5>
          </Link>
          <Link to="/skill" className="nav-btn">
            <i class="bi bi-card-list"></i>{" "}
            <h5 className="nav-bar-h5">Skills</h5>
          </Link>
          <Link to="/Works" className="nav-btn">
            <i class="bi bi-pc-display-horizontal"></i>{" "}
            <h5 className="nav-bar-h5">Works</h5>
          </Link>
          <Link to="/Contact" className="nav-btn">
            <i class="bi bi-send"></i> <h5 className="nav-bar-h5">Contacts</h5>
          </Link>
          <Link to="/Product" className="nav-btn">
            <i class="bi bi-code-slash"></i>{" "}
            <h5 className="nav-bar-h5">Product</h5>
          </Link>
        </div>
      </div>
      
      
    </div>
  );
}

export default NaviPhone;
