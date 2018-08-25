import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./LoginForm.css";

class LoginForm extends Component {
  state = {
    data: {
      username: "",
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
        .catch(err => this.setState({ errors: err.response.data }));
    }
  };

  validate = data => {
    const errors = {};
    if (!data.username) errors.username = "username required.";
    if (!data.password) errors.password = "password required.";
    return errors;
  };

  render() {
    const { data, errors } = this.state;

    return (
      <React.Fragment>
        {errors.non_field_errors && (
          <div
            className="alert alert-danger alert-dismissible fade show"
            role="alert">
            Please enter a correct username and password. Note that both fields
            are case-sensitive.
            <button
              type="button"
              className="close"
              data-dismiss="alert"
              aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        )}
        <form onSubmit={this.onSubmit} id="login_form">
          <div className="form-group">
            <label htmlFor="id_username">Username</label>
            <input
              type="text"
              className="form-control"
              id="id_username"
              name="username"
              value={data.username}
              onChange={this.onChange}
            />
          </div>
          {errors.username && <span>{errors.username}</span>}
          <div className="form-group">
            <label htmlFor="id_password">Password</label>
            <input
              type="password"
              className="form-control"
              id="id_password"
              name="password"
              value={data.password}
              onChange={this.onChange}
            />
          </div>
          {errors.password && <span>{errors.password}</span>}
          <button type="submit" className="btn btn-primary btn-block">
            Login
          </button>
          <div className="text-center" style={{ marginTop: 10 }}>
            <a href="/">Forgot password?</a>
          </div>
        </form>
        <div className="card text-center" style={{ marginTop: 15 }}>
          <div className="card-body">
            Dont have an account?{" "}
            <Link to="/signup" className="card-link">
              Sign up
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

LoginForm.propTypes = {
  submit: PropTypes.func.isRequired
};

export default LoginForm;
