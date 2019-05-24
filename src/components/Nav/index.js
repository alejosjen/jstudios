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
      <div className="row top-row flex align-items-center">
        <div className="col-sm-12 col-md-6">
          <nav className="navbar mt-3 navbar-expand-lg">
            <div className="d-flex nav-items align-items-center">
              <span className="navbar-text navbar-title">
                <Link
                  onClick={this.toggleNav}
                  className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
                  to="/"
                >
                  <img src={logo} alt="logo" />
                </Link>
              </span>
              
              <ul className="navbar-nav">
                <li className="nav-item">
                  <span className="navbar-text">
                    <Link
                      onClick={this.toggleNav}
                      className={window.location.pathname === "/home" ? "nav-link active" : "nav-link"}
                      to="/home"
                    >
                      Home
              </Link>
                  </span>
                </li>
                <li>
                  <span className="navbar-text mx-3">
                    <Link
                      onClick={this.toggleNav}
                      className={window.location.pathname === "/services" ? "nav-link active" : "nav-link"}
                      to={`/services`}
                    >
                      Services
              </Link>
                  </span>
                </li>
                <li>
                  <span className="navbar-text">
                    <Link
                      onClick={this.toggleNav}
                      className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
                      to="/contact"
                    >
                      Contact
              </Link>
                  </span>
                </li>
              </ul>

            </div>

          </nav>
        </div>

      </div>

    );
  }
}

export default Nav;