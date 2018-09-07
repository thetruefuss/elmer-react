import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import InlineError from "../messages/InlineError";
import NonFieldError from "../messages/NonFieldError";

class PasswordResetForm extends Component {
  state = {
    data: {
      email: ""
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
    if (!data.email) errors.email = "This field is required.";
    return errors;
  };

  render() {
    const { data, errors, loading } = this.state;

    return (
      <React.Fragment>
        {errors.non_field_errors && (
          <NonFieldError text={errors.non_field_errors} />
        )}
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="text"
              className="form-control"
              id="email"
              name="email"
              value={data.email}
              onChange={this.onChange}
            />
            {!errors.email && (
              <p className="help-text">
                Enter your email address to get password reset link.
              </p>
            )}
            {errors.email && <InlineError text={errors.email} />}
          </div>
          <button
            type="submit"
            className="btn btn-primary btn-block"
            disabled={loading}>
            Submit
          </button>
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

PasswordResetForm.propTypes = {
  submit: PropTypes.func.isRequired
};

export default PasswordResetForm;
