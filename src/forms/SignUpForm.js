import React, { Component } from 'react';
import './SignUpForm.css';

class SignUpForm extends Component {
  state = {
    username: '',
    email: '',
    password: ''
  };

  handle_change = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(prevstate => {
      const newState = { ...prevstate };
      newState[name] = value;
      return newState;
    });
  };

  render() {
    return (
      <React.Fragment>
      <form onSubmit={e => this.props.handle_signup(e, this.state)} method="post" id="register_form">
        <div className="form-group">
          <label htmlFor="id_username"><span id="required_inp">*</span>Username</label>
          <input type="text" className="form-control" id="id_username" name="username" aria-describedby="username_help" maxLength={30} value={this.state.username} onChange={this.handle_change} required />
        </div>
        <div className="form-group">
          <label htmlFor="id_email">Email address</label>
          <input type="email" className="form-control" id="id_email" name="email" aria-describedby="email_help" value={this.state.email} onChange={this.handle_change} />
        </div>
        <div className="form-group">
          <label htmlFor="id_password"><span id="required_inp">*</span>Password</label>
          <input type="password" className="form-control" id="id_password" name="password" aria-describedby="password_help" maxLength={150} value={this.state.password} onChange={this.handle_change} required />
        </div>
        <button type="submit" className="btn btn-success btn-block">Sign Up</button>
        <small className="form-text text-muted">By signing up, you agree to our <a href="/">terms of service</a> &amp; <a href="/">privacy policy</a>.</small>
      </form>
      <div className="card text-center" style={{marginTop: 15}}>
        <div className="card-body">
          Already have an account? <a href="/" className="card-link">Login</a>
        </div>
      </div>
      </React.Fragment>
    );
  }
}

export default SignUpForm;
