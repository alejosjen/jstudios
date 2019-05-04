import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from '../../jstudioslogo_medium.svg';
import "./style.css";

class Nav extends Component {

  state = {
    // open: false,
    width: window.innerWidth,
  };

  render() {
    return (
      <nav className="navbar">
        <div className="d-flex justify-content-center align-items-center">
          <span className="navbar-text navbar-title">
          <Link
              onClick={this.toggleNav}
              className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
              to="/"
            >
            <img src={logo} alt="logo"/>
              </Link>
          </span>
          <span className="navbar-text mx-3 homeLink">
            <Link
              onClick={this.toggleNav}
              className={window.location.pathname === "/home" ? "nav-link active" : "nav-link"}
              to="/home"
            >
              Home
              </Link>
          </span>
          <span className="navbar-text workLink">
            <Link
              onClick={this.toggleNav}
              className={window.location.pathname === "/services" ? "nav-link active" : "nav-link"}
              to={`/services`}
            >
              Examples
              </Link>
          </span>
          <span className="navbar-text contactLink">
            <Link
              onClick={this.toggleNav}
              className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
              to="/contact"
            >
              Contact
              </Link>
          </span>
        </div>
      </nav>
   

    );
  }
}

export default Nav;