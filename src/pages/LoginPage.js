import React, { Component } from 'react';
import TopNavigation from '../components/TopNavigation';
import LoginForm from '../forms/LoginForm';

class LoginPage extends Component {
  componentDidMount() {
    document.title = "Login | Elmer"
  }

  handle_login = (e, data) => {
    e.preventDefault();
    fetch('http://127.0.0.1:8000/api/users/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(json => {
        localStorage.setItem('token', json.token);
        window.location.href = "/";
      });
  };

  render() {
    return (
      <React.Fragment>
        <LoginForm handle_login={this.handle_login} />
      </React.Fragment>
    );
  }
}
export default LoginPage;
