import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ReactPlaceholder from "react-placeholder";
import "react-placeholder/lib/reactPlaceholder.css";

class TrendingBoards extends Component {
  constructor(props) {
    super(props);

    this.state = {
      boards: [
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
      .get("http://127.0.0.1:8000/api/frontboard/top_five_boards/")
      .then(res => {
        this.setState({ boards: res.data, ready: true });
      });
  }

  render() {
    const { boards } = this.state;

    return (
      <React.Fragment>
        <div className="card border-light">
          <br />
          <div className="card-header text-center font-weight-bold trending-boards-header">
            Trending Boards
          </div>
          <ul className="list-group list-group-flush">
            {boards.length > 0 ? (
              boards.map((board, index) => {
                return (
                  <ReactPlaceholder
                    showLoadingAnimation
                    type="textRow"
                    delay={2000}
                    ready={this.state.ready}>
                    <li
                      className="list-group-item board-font-size"
                      key={`trending-boards-key ${index}`}>
                      <Link to={`/b/${board.slug}`} className="card-link">
                        b/{board.slug}
                      </Link>
                    </li>
                  </ReactPlaceholder>
                );
              })
            ) : (
              <p>No Boards Found</p>
            )}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default TrendingBoards;
