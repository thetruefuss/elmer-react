import React, { Component } from 'react';
import { Link } from "react-router-dom";
import SearchInput from './SearchInput';
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
              <SearchInput {...this.props} />

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

            {this.props.logged_in ?
              <React.Fragment>
                <Link to="/messages" style={{marginRight: 15, position: 'relative'}} id="check_messages" title="Inbox"><i className="fa fa-inbox fa-lg" aria-hidden="true" /><span id="messages_count" /></Link>
                <Link to="/activities" style={{marginRight: 15, position: 'relative'}} id="check_activities" title="Notifications"><i className="fa fa-bell-o fa-lg" aria-hidden="true" /><span id="activities_count" /></Link>
                <Link to="/new_post" style={{marginRight: 15, position: 'relative'}} title="Post a new subject"><i className="fa fa-pencil fa-lg" aria-hidden="true" /></Link>
                <div className="dropdown">
                  <a href="#" role="button" id="user_dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" title="Profile and settings">
                    <img src={this.props.user_details.profile_picture} alt="Elmer Logo" style={{width: 36, height: 36, borderRadius: 50}} />
                  </a>
                  <div className="dropdown-menu" aria-labelledby="user_dropdown" style={{right: 0, left: 'auto'}}>
                    <Link className="dropdown-item font-weight-bold" to={`/u/${this.props.user_details.username}`}>{this.props.user_details.screen_name}</Link>
                    <div className="dropdown-divider" />
                    <Link className="dropdown-item" to={`/u/${this.props.user_details.username}`}>View profile</Link>
                    <Link className="dropdown-item" to="/following">Following</Link>
                    <Link className="dropdown-item" to="/subscriptions">Subscriptions</Link>
                    <div className="dropdown-divider" />
                    <Link className="dropdown-item" to="/new_board">Create Board</Link>
                    <Link className="dropdown-item" to="/my_boards">Your Boards</Link>
                    <div className="dropdown-divider" />
                    <Link className="dropdown-item" to="/settings">Account settings</Link>
                    <Link className="dropdown-item font-weight-light" to="feedback">Send Feedback</Link>
                    <a className="dropdown-item" href="#" onClick={this.props.handle_logout}>Sign out</a>
                  </div>
                </div>
              </React.Fragment> :
              <React.Fragment>
                <Link className="btn btn-primary btn-sm login_btn" to="/login">Login</Link>
                <Link className="btn btn-success btn-sm signup_btn" to="/signup">Sign Up</Link>
              </React.Fragment>
            }
          </div>
        </div>
      </nav>
    );
  }
}

export default TopNavigation;
