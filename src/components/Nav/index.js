import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from '../../jstudioslogo_medium.svg';
import "./style.css";

class Nav extends Component {

  state = {
    open: false,
    width: window.innerWidth,
  };

  render() {
    return (
      <div className="row top-row">
        <nav className="navbar navbar-light navbar-expand-md">

          <span className="navbar-brand">
            <Link
              onClick={this.toggleNav}
              className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
              to="/"
            >
              <img src={logo} alt="logo" />
            </Link>
          </span>
          <button
            onClick={this.toggleNav}
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className={`${this.state.open ? "" : "collapse "}navbar-collapse`} id="navbarNav">
            <div className="navbar-nav">
              <div className="nav-item">
                <Link
                  onClick={this.toggleNav}
                  className={window.location.pathname === "/home" ? "nav-link active" : "nav-link"}
                  to="/home"
                >
                  Home
                 </Link>
              </div>
              <div className="nav-item mx-3">
                <Link
                  onClick={this.toggleNav}
                  className={window.location.pathname === "/services" ? "nav-link active" : "nav-link"}
                  to={`/consultation`}
                >
                  Consultation
                 </Link>
              </div>
              <div className="nav-item">
                <Link
                  onClick={this.toggleNav}
                  className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
                  to="/contact"
                >
                  Contact
                  </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>



    );
  }
}

export default Nav;