import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import PageHeading from '../components/PageHeading';
import CenteredFooter from '../components/CenteredFooter';
import LoginForm from '../forms/LoginForm';
import { login } from "../actions/auth";

class LoginPage extends Component {
  componentDidMount() {
    document.title = "Login | Elmer"
  }

  submit = data =>
    this.props.login(data).then(() => this.props.history.push("/"));

  render() {
    return (
      <React.Fragment>
        <div className="container form_content_block">
          <div className="row">
            <div className="container" style={{margin: '0 auto', width: '50%'}}>
              <PageHeading text="Login to Elmer" />
              <LoginForm submit={this.submit} />
              <CenteredFooter />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

LoginPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  login: PropTypes.func.isRequired
};

export default connect(null, { login })(LoginPage);
