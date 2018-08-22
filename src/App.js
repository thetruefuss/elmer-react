import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import './App.css';
import TopNavigation from './components/TopNavigation';
import HomePage from './pages/HomePage';
import TrendingPage from './pages/TrendingPage';
import BoardsListPage from './pages/BoardsListPage';
import BoardPage from './pages/BoardPage';
import SearchResultsPage from './pages/SearchResultsPage';
import CreateSubjectPage from './pages/CreateSubjectPage';
import CreateBoardPage from './pages/CreateBoardPage';
import AboutPage from './pages/AboutPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfUsePage from './pages/TermsOfUsePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <TopNavigation {...this.props} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/trending' component={TrendingPage} />
          <Route exact path='/boards' component={BoardsListPage} />
          <Route exact path='/b/:board_slug' component={BoardPage} />
          <Route exact path='/about' component={AboutPage} />
          <Route exact path='/privacy' component={PrivacyPolicyPage} />
          <Route exact path='/terms' component={TermsOfUsePage} />
          <Route exact path='/login' component={LoginPage} />
          <Route exact path='/signup' component={SignUpPage} />
          <Route exact path='/new_post' component={CreateSubjectPage} />
          <Route exact path='/new_board' component={CreateBoardPage} />
          <Route exact path='/results' render={(props) => <SearchResultsPage {...props} />} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default withRouter(App);
