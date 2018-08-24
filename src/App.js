import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Switch, Route, withRouter } from 'react-router-dom';
import './App.css';
import TopNavigation from './components/TopNavigation';
import HomePage from './pages/HomePage';
import TrendingPage from './pages/TrendingPage';
import BoardsListPage from './pages/BoardsListPage';
import BoardPage from './pages/BoardPage';
import SubjectPage from './pages/SubjectPage';
import SearchResultsPage from './pages/SearchResultsPage';
import CreateSubjectPage from './pages/CreateSubjectPage';
import CreateBoardPage from './pages/CreateBoardPage';
import AboutPage from './pages/AboutPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfUsePage from './pages/TermsOfUsePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import UserRoute from './routes/UserRoute';
import GuestRoute from './routes/GuestRoute';

const App = ({ location, isAuthenticated }) => (
  <React.Fragment>
    <TopNavigation />
    <Switch>
      <Route location={location} exact path='/' component={HomePage} />
      <Route location={location} exact path='/trending' component={TrendingPage} />
      <Route location={location} exact path='/boards' component={BoardsListPage} />
      <Route location={location} exact path='/b/:board_slug' component={BoardPage} />
      <Route location={location} exact path='/s/:board_slug/:subject_slug' component={SubjectPage} />
      <Route location={location} exact path='/about' component={AboutPage} />
      <Route location={location} exact path='/privacy' component={PrivacyPolicyPage} />
      <Route location={location} exact path='/terms' component={TermsOfUsePage} />
      <GuestRoute location={location} exact path='/login' component={LoginPage} />
      <GuestRoute location={location} exact path='/signup' component={SignUpPage} />
      <UserRoute location={location} exact path='/new_post' component={CreateSubjectPage} />
      <UserRoute location={location} exact path='/new_board' component={CreateBoardPage} />
      <Route location={location} exact path='/results' render={(props) => <SearchResultsPage {...props} />} />
    </Switch>
  </React.Fragment>
);

App.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.user.email
  };
}

export default connect(mapStateToProps)(App);
