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
              DailyNews
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
                    General
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/business"
                  >
                    Business
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/entertainment"
                  >
                    Entertainment
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/health"
                  >
                    Health
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/science"
                  >
                    Science
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/sports"
                  >
                    Sports
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/technology"
                  >
                    Technology
                  </Link>
                </li>
              </ul>
              <div className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  onChange={this.handleChange}
                  placeholder="Search"
                  aria-label="Search"
                  value={this.props.value}
                />
                <Link className="btn btn-outline-info" to="/search" >
                  Search
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
