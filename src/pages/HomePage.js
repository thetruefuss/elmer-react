import React, { Component } from 'react';

class HomePage extends Component {
  componentDidMount() {
    document.title = "Elmer - A social network inspired by reddit"
  }

  render() {
    return (
      <React.Fragment>
        <h1>HomePage</h1>
      </React.Fragment>
    );
  }
}
export default HomePage;
