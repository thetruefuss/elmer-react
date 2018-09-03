import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import PageHeading from "../components/PageHeading";
import SubjectList from "../components/SubjectList";
import Profile from "../components/Profile";
import TrendingBoards from "../components/TrendingBoards";
import ActiveThreads from "../components/ActiveThreads";
import Footer from "../components/Footer";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile_info: {}
    };
  }
  componentDidMount() {
    document.title = "Profile";
    axios
      .get(`/api/users/profile/${this.props.match.params.username}`)
      .then(res => {
        this.setState({
          profile_info: res.data
        });
      });
  }

  render() {
    return (
      <React.Fragment>
        <div className="container content_block">
          <div className="row">
            <div className="col-lg-8 col-md-8">
              <PageHeading text="Profile" />
              <Profile profile_info={this.state.profile_info} />
              <div style={{clear:'both'}}></div>
              <PageHeading text="Recent Posts" />
              <SubjectList
                url={`/api/frontboard/subjects/?user=${
                  this.props.match.params.username
                }`}
              />
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
              <ActiveThreads />
              <TrendingBoards />
              <Footer />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default HomePage;
