import React, { Component } from 'react';
import TopNavigation from '../components/TopNavigation';

class HomePage extends Component {
  componentDidMount() {
    document.title = "Elmer - A social network inspired by reddit"
  }

  render() {
    return (
      <React.Fragment>
        <TopNavigation />
        
      </React.Fragment>
    );
  }
}
export default HomePage;
