import React, { Component } from 'react';
import TopNavigation from '../components/TopNavigation';
import SignUpForm from '../forms/SignUpForm';

class LoginPage extends Component {
  componentDidMount() {
    document.title = "Sign Up | Elmer"
  }

  handle_signup = (e, data) => {
    e.preventDefault();
    fetch('http://127.0.0.1:8000/api/users/signup/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(json => {
        console.log(json);
        localStorage.setItem('token', json.token);
        window.location.href = "/";
      });
  };

  render() {
    return (
      <React.Fragment>
        <SignUpForm handle_signup={this.handle_signup} />
      </React.Fragment>
    );
  }
}
export default LoginPage;
