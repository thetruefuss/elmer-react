import React, { Component } from 'react';
import PageHeading from '../components/PageHeading';
import CenteredFooter from '../components/CenteredFooter';
import LoginForm from '../forms/LoginForm';

class LoginPage extends Component {
  componentDidMount() {
    document.title = "Login | Elmer"
  }

  handle_login = (e, data) => {
    e.preventDefault();
    fetch('http://127.0.0.1:8000/api/auth/token/obtain/', {
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
        <div className="container form_content_block">
          <div className="row">
            <div className="container" style={{margin: '0 auto', width: '50%'}}>
              <PageHeading text="Login to Elmer" />
              <LoginForm handle_login={this.handle_login} />
              <CenteredFooter />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default LoginPage;
