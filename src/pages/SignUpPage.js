import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import PageHeading from '../components/PageHeading';
import CenteredFooter from '../components/CenteredFooter';
import SignUpForm from '../forms/SignUpForm';
import { signup } from "../actions/users";

class SignUpPage extends Component {
  componentDidMount() {
    document.title = "Sign Up | Elmer"
  }
  submit = data =>
    this.props.signup(data).then(() => this.props.history.push("/"));

  render() {
    return (
      <React.Fragment>
        <div className="container form_content_block">
          <div className="row">
            <div className="container" style={{margin: '0 auto', width: '50%'}}>
              <PageHeading text="Register to Elmer" />
              <SignUpForm submit={this.submit} />
              <CenteredFooter />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

SignUpPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  signup: PropTypes.func.isRequired
};

export default connect(null, { signup })(SignUpPage);
