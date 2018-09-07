import React, { Component } from "react";
import { Link } from "react-router-dom";
import PageHeading from "../components/PageHeading";
import TrendingBoards from "../components/TrendingBoards";
import Footer from "../components/Footer";

class AboutPage extends Component {
  componentDidMount() {
    document.title = "About Us";
  }

  render() {
    return (
      <React.Fragment>
        <div className="container content_block">
          <div className="row">
            <div className="col-lg-8 col-md-8">
              <PageHeading text="Password Reset" />
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">
                    Reset password link has been sent.
                  </h4>
                  <h6>
                    Weve emailed you instructions for setting your password, if
                    an account exists with the email you entered. You should
                    receive them shortly.
                  </h6>
                  <h6>
                    If you don't receive an email, please make sure you've
                    entered the address you registered with, and check your spam
                    folder.
                  </h6>
                </div>
              </div>

              <div className="card text-center" style={{marginTop: '15px'}}>
                <div className="card-body">
                  Dont have an account?{" "}
                  <Link to="/signup" className="card-link">
                    Sign up
                  </Link>
                </div>
              </div>
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
export default AboutPage;
