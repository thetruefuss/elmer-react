import React, { Component } from "react";
import PropTypes from "prop-types";
import Recaptcha from "react-recaptcha";
import { Link } from "react-router-dom";
import Validator from "validator";
import InlineError from "../messages/InlineError";
import NonFieldError from "../messages/NonFieldError";

class SignUpForm extends Component {
  state = {
    data: {
      username: "",
      email: "",
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
    if (data.email) {
      if (!Validator.isEmail(data.email)) errors.email = "Invalid email";
    }
    if (!data.password) errors.password = "This field is required.";
    return errors;
  };

  verify_callback = response => {
    console.log(response);
  };

  onload_callback = () => {
    console.log("Recaptcha loaded successfully.");
  };

  render() {
    const { data, errors, loading } = this.state;

    return (
      <React.Fragment>
        {errors.non_field_errors && (
          <NonFieldError text={errors.non_field_errors} />
        )}
        <form onSubmit={this.onSubmit} id="register_form">
          <div className="form-group">
            <label htmlFor="username">
              <span id="required_inp">*</span>Username
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              aria-describedby="username_help"
              maxLength={30}
              value={data.username}
              onChange={this.onChange}
            />
            {errors.username && <InlineError text={errors.username} />}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              aria-describedby="email_help"
              value={data.email}
              onChange={this.onChange}
            />
          {errors.email && <InlineError text={errors.email} />}
          </div>
          <div className="form-group">
            <label htmlFor="password">
              <span id="required_inp">*</span>Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              aria-describedby="password_help"
              maxLength={150}
              value={data.password}
              onChange={this.onChange}
            />
            {errors.password && <InlineError text={errors.password} />}
          </div>
          <Recaptcha
            sitekey="6LcxazUUAAAAAJstEHfmrSDE5QFqSrPUHqozW9XQ"
            render="explicit"
            verifyCallback={this.verify_callback}
            onloadCallback={this.onload_callback}
          />
          <br />
          <button
            type="submit"
            className="btn btn-success btn-block"
            disabled={loading}>
            Sign Up
          </button>
          <small className="form-text text-muted">
            By signing up, you agree to our{" "}
            <Link to="/terms">terms of service</Link> &amp;{" "}
            <Link to="/privacy">privacy policy</Link>.
          </small>
        </form>
        <div className="card text-center mt-4">
          <div className="card-body">
            Already have an account?{" "}
            <Link to="/login" className="card-link">
              Login
            </Link>
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
