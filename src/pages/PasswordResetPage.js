import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import PasswordResetForm from "../forms/PasswordResetForm";
import { Link } from "react-router-dom";
import PageHeading from "../components/PageHeading";
import TrendingBoards from "../components/TrendingBoards";
import Footer from "../components/Footer";
import { reset_password } from "../actions/auth";

class PasswordResetPage extends Component {
  componentDidMount() {
    document.title = "Password Reset | Elmer";
  }

  submit = data =>
    this.props.reset_password(data).then(() => this.props.history.push("/"));

  render() {
    return (
      <React.Fragment>
        <div className="container content_block">
          <div className="row">
            <div className="col-lg-8 col-md-8">
              <PageHeading text="Password Reset" />
              <PasswordResetForm submit={this.submit} />
            </div>
            <div class="col-lg-4 col-md-4">
              <Link
                to="/new_post"
                className="btn btn-primary btn-block mt-4"
                role="button"
                title="Create new post"
                style={{ fontWeight: "bold", letterSpacing: "0.8px" }}>
                CREATE NEW POST
              </Link>
              <TrendingBoards />
              <Footer />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

PasswordResetPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  reset_password: PropTypes.func.isRequired
};

export default connect(
  null,
  { reset_password }
)(PasswordResetPage);
