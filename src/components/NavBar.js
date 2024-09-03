import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'

export class NavBar extends Component {
  static propTypes = {
    value : PropTypes.any,
    onValueChange : PropTypes.any,
  }
  
  handleChange = (event) => {
    this.props.onValueChange(event.target.value);
  };

  render() {  
    return (
      <div>
        <nav className="navbar navbar-expand-lg  bg-dark navbar-dark fixed-top">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
               InviSecure
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/general"
                  >
                    DashBoard
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/form"
                  >
                    Request
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/about"
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/future"
                  >
                    Future Aspect
                  </Link>
                </li>
              </ul>
              <div className="d-flex" role="search">
                <Link className="btn btn-outline-info" to="/logout" >
                  LogOut
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
