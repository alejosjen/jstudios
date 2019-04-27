import React, { Component } from "react";
import {
  Link
} from "react-router-dom";
import "./style.css";

class Nav extends Component {
  state = {
    open: false
  }
  
  render() {

    return (
      <nav className="navbar navbar-expand-lg bg-light fixed-top navbar-light mb-2">
        <Link className="navbar-brand" to="/">
          Order Me This
        </Link>
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
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                onClick={this.toggleNav}
                className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={this.toggleNav}
                className={window.location.pathname === "/work" ? "nav-link active" : "nav-link"}
                to={`/work`}
              >
                Examples
              </Link>
            </li>
            <li className="nav-item">
              <Link
              onClick={this.logout}
              className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
              to="/contact"
            >
                Contact
              </Link>
            </li>




          </ul>
        </div>
      </nav >
    );
  }
}

export default Nav;


