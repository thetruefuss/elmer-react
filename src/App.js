import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import TopNavigation from './components/TopNavigation';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';

const App = () => (
  <React.Fragment>
    <TopNavigation />
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/about' component={AboutPage} />
      <Route exact path='/login' component={LoginPage} />
    </Switch>
  </React.Fragment>
);

export default App;
