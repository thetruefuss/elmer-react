import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './TopNavigation.css';
import elmer_logo from '../images/elmer_logo.png';

class TopNavigation extends Component {
  render() {
    return (
      <nav className="navbar sticky-top navbar-expand-lg navbar-expand-md navbar-light extra_navbar_styling">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={elmer_logo} alt="Elmer" height="30px" style={{position:'relative', top:'-3px'}} />
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#topNavbar" aria-controls="topNavbar" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="topNavbar">

            <ul className="navbar-nav mr-auto">
              <form className="form-inline">
                <div className="form-group">
                  <label htmlFor="search" className="sr-only">Search</label>
                  <input type="text" className="form-control form-control-sm" id="search" name="query" placeholder="Search Elmer" style={{width:'360px', borderRadius: '3rem', textIndent:'10px', margin:'0px 15px'}} />
                </div>
              </form>

              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                  <Link className="nav-link" to="/trending">Trending</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/boards">Boards</Link>
              </li>
            </ul>

            <Link className="btn btn-primary btn-sm login_btn" to="/login">Login</Link>
            <Link className="btn btn-success btn-sm signup_btn" to="/signup">Sign Up</Link>

          </div>
        </div>
      </nav>
    );
  }
}

export default TopNavigation;
