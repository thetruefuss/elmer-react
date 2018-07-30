import React, { Component } from 'react';

class AboutPage extends Component {
  componentDidMount() {
    document.title = "About Us"
  }

  render() {
    return (
      <React.Fragment>
        <h1>AboutPage</h1>
      </React.Fragment>
    );
  }
}
export default AboutPage;
