import React, { Component } from "react";
import { Link } from "react-router-dom";
import PageHeading from "../components/PageHeading";
import SubjectList from "../components/SubjectList";
import TrendingBoards from "../components/TrendingBoards";
import Footer from "../components/Footer";

class TrendingPage extends Component {
  componentDidMount() {
    document.title = "Trending | Elmer";
  }

  render() {
    return (
      <React.Fragment>
        <div className="container content_block">
          <div className="row">
            <div className="col-lg-8 col-md-8">
              <PageHeading text="Top Subjects" />
              <SubjectList url="http://127.0.0.1:8000/api/frontboard/subjects/?trending=True" />
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
export default TrendingPage;
