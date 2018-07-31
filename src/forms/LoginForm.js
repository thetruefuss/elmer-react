import React, { Component } from 'react';
import './LoginForm.css';

class LoginForm extends Component {
  state = {
    username: '',
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
        <form onSubmit={e => this.props.handle_login(e, this.state)} id="login_form">
          <div className="form-group">
            <label htmlFor="id_username">Username</label>
            <input type="text" className="form-control" id="id_username" name="username" value={this.state.username} onChange={this.handle_change} required />
          </div>
          <div className="form-group">
            <label htmlFor="id_password">Password</label>
            <input type="password" className="form-control" id="id_password" name="password" value={this.state.password} onChange={this.handle_change} required />
          </div>
          <button type="submit" className="btn btn-primary btn-block">Login</button>
          <div className="text-center" style={{marginTop: 10}}>
            <a href="/">Forgot password?</a>
          </div>
        </form>
        <div className="card text-center" style={{marginTop: 15}}>
          <div className="card-body">
            Dont have an account? <a href="/" className="card-link">Sign up</a>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default LoginForm;
