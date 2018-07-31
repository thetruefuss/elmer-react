import React, { Component } from 'react';
import './TrendingBoards.css';

class TrendingBoards extends Component {
  constructor(props) {
    super(props);

    this.state = {
      boards: [],
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
        this.setState({ boards: json });
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
                    <li class="list-group-item board-font-size" key={`trending-boards-key ${index}`}><span class="badge badge-pill badge-light"></span> <a href="#" class="card-link">b/{board.slug}</a></li>
                  );
            }) : <p>No Boards Found</p>}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default TrendingBoards;
