import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './TrendingBoards.css';
import ReactPlaceholder from 'react-placeholder';
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
    fetch('http://127.0.0.1:8000/api/frontboard/boards/trending/', {
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(res => res.json())
      .then(json => {
        this.setState({ boards: json, ready: true });
      });
  }

  render() {
    const { boards } = this.state;

    return (
      <React.Fragment>
        <br />
        <div class="card border-light">
          <div class="card-header text-center font-weight-bold trending-boards-header">
            Trending Boards
          </div>
          <ul class="list-group list-group-flush">
            {boards.length > 0 ? boards.map((board, index) => {
                  return (
                    <ReactPlaceholder showLoadingAnimation type="textRow" delay={2000} ready={this.state.ready}>
                      <li class="list-group-item board-font-size" key={`trending-boards-key ${index}`}><span class="badge badge-pill badge-light"></span> <Link to={`/b/${board.slug}`} class="card-link">b/{board.slug}</Link></li>
                    </ReactPlaceholder>
                  );
            }) : <p>No Boards Found</p>}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default TrendingBoards;
