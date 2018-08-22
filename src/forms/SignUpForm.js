import React, { Component } from 'react';
import PropTypes from "prop-types";
import Recaptcha from 'react-recaptcha';
import { Link } from 'react-router-dom';
import './SignUpForm.css';

class SignUpForm extends Component {
  state = {
    data: {
      username: "",
      email: "",
      password: ""
    },
    errors: {}
  };

  onChange = e =>
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });

  onSubmit = e => {
    e.preventDefault();
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.props
        .submit(this.state.data)
        .catch(err =>
          this.setState({ errors: err.response.data })
        );
    }
  };

  validate = data => {
    const errors = {};
    if (!data.username) errors.username = "username required.";
    if (!data.password) errors.password = "password required.";
    return errors;
  };

  verify_callback = response => {
    console.log(response);
  }

  onload_callback = () => {
    console.log('Recaptcha loaded successfully.');
  }

  render() {
    const { data, errors } = this.state;

    return (
      <React.Fragment>
      {errors.non_field_errors && (
        <div className="alert alert-danger alert-dismissible fade show" role="alert">
          This username is already taken.
          <button type="button" className="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
          </button>
        </div>
      )}
      <form onSubmit={this.onSubmit} id="register_form">
        <div className="form-group">
          <label htmlFor="id_username"><span id="required_inp">*</span>Username</label>
          <input type="text" className="form-control" id="id_username" name="username" aria-describedby="username_help" maxLength={30} value={data.username} onChange={this.onChange} />
        </div>
        {errors.username && <span>{errors.username}</span>}
        <div className="form-group">
          <label htmlFor="id_email">Email address</label>
          <input type="email" className="form-control" id="id_email" name="email" aria-describedby="email_help" value={data.email} onChange={this.onChange} />
        </div>
        <div className="form-group">
          <label htmlFor="id_password"><span id="required_inp">*</span>Password</label>
          <input type="password" className="form-control" id="id_password" name="password" aria-describedby="password_help" maxLength={150} value={data.password} onChange={this.onChange} />
        </div>
        {errors.password && <span>{errors.password}</span>}
        <Recaptcha
          sitekey="6LcxazUUAAAAAJstEHfmrSDE5QFqSrPUHqozW9XQ"
          render="explicit"
          verifyCallback={this.verify_callback}
          onloadCallback={this.onload_callback}
        />
        <br />
        <button type="submit" className="btn btn-success btn-block">Sign Up</button>
        <small className="form-text text-muted">By signing up, you agree to our <Link to="/terms">terms of service</Link> &amp; <Link to="/privacy">privacy policy</Link>.</small>
      </form>
      <div className="card text-center" style={{marginTop: 15}}>
        <div className="card-body">
          Already have an account? <Link to="/login" className="card-link">Login</Link>
        </div>
      </div>
      </React.Fragment>
    );
  }
}

SignUpForm.propTypes = {
  submit: PropTypes.func.isRequired
};

export default SignUpForm;
