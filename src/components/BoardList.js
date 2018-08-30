import React, { Component } from "react";
import axios from "axios";
import BoardDetail from "./BoardDetail";

class BoardList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      boards: [],
      ready: false
    };
  }

  componentDidMount() {
    axios.get("/api/frontboard/boards/").then(res => {
      this.setState({ boards: res.data.results });
    });
  }

  render() {
    const { boards } = this.state;

    return (
      <React.Fragment>
        <div className="alert alert-light text-center" role="alert">
          Click the <span className="font-weight-bold">Subscribe</span> button
          to populate your home feed with interesting boards subjects.
        </div>
        {boards.length > 0 ? (
          boards.map((board, index) => {
            return <BoardDetail board={board} />;
          })
        ) : (
          <p>No Boards Found</p>
        )}
      </React.Fragment>
    );
  }
}

export default BoardList;
