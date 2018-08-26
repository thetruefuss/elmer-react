import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import "./ActiveThreads.css";
import ReactPlaceholder from "react-placeholder";
import "react-placeholder/lib/reactPlaceholder.css";

class ActiveThreads extends Component {
  constructor(props) {
    super(props);

    this.state = {
      threads: [
        "This is just",
        "a mock data",
        "for links.",
        "Just to show",
        "content placeholder."
      ],
      ready: false
    };
  }

  componentDidMount() {
    axios
      .get("http://127.0.0.1:8000/api/frontboard/subjects/active_threads/")
      .then(res => {
        this.setState({ threads: res.data, ready: true });
      });
  }

  render() {
    const { threads } = this.state;

    return (
      <React.Fragment>
        {this.props.isAuthenticated && (
          <div className="card border-light">
            <br />
            <div className="card-header text-center font-weight-bold active-threads-header">
              Active Threads
            </div>
            <ul className="list-group list-group-flush">
              {threads.length > 0 ? (
                threads.map((thread, index) => {
                  return (
                    <ReactPlaceholder
                      showLoadingAnimation
                      type="textRow"
                      delay={2000}
                      ready={this.state.ready}>
                      <li
                        className="list-group-item threads-font-size"
                        key={`active-threads-key ${index}`}>
                        <Link
                          to={`/s/${thread.board_slug}/${thread.slug}`}
                          class="card-link">
                          {thread.title}
                        </Link>
                      </li>
                    </ReactPlaceholder>
                  );
                })
              ) : (
                <p>No Threads Found</p>
              )}
            </ul>
          </div>
        )}
      </React.Fragment>
    );
  }
}

ActiveThreads.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.user.token
  };
}

export default connect(mapStateToProps)(ActiveThreads);
