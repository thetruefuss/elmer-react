import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import InlineError from "../messages/InlineError";
import NonFieldError from "../messages/NonFieldError";

class LoginForm extends Component {
  state = {
    data: {
      username: "",
      password: ""
    },
    loading: false,
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
      this.setState({ loading: true });
      this.props
        .submit(this.state.data)
        .catch(err =>
          this.setState({ errors: err.response.data, loading: false })
        );
    }
  };

  validate = data => {
    const errors = {};
    if (!data.username) errors.username = "This field is required.";
    if (!data.password) errors.password = "This field is required.";
    return errors;
  };

  render() {
    const { data, errors, loading } = this.state;

    return (
      <React.Fragment>
        {errors.non_field_errors && (
          <NonFieldError text={errors.non_field_errors} />
        )}
        <form onSubmit={this.onSubmit} id="login_form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              value={data.username}
              onChange={this.onChange}
            />
            {errors.username && <InlineError text={errors.username} />}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={data.password}
              onChange={this.onChange}
            />
            {errors.password && <InlineError text={errors.password} />}
          </div>
          <button
            type="submit"
            className="btn btn-primary btn-block"
            disabled={loading}>
            Login
          </button>
          <div className="text-center mt-4">
            <a href="/">Forgot password?</a>
          </div>
        </form>
        <div className="card text-center mt-4">
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
