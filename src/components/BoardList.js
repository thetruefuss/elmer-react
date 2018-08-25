import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class BoardList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      boards: [],
      ready: false
    };
  }

  componentDidMount() {
    axios.get("http://127.0.0.1:8000/api/frontboard/boards/").then(res => {
      this.setState({ boards: res.data.results });
    });
  }

  subscribeOrUnsubscribe = slug => {
    axios.get(`http://127.0.0.1:8000/api/frontboard/boards/subscribe/?board_slug=${slug}`).then(res => {
      console.log(res.data);
    });
  }

  render() {
    const { boards } = this.state;

    return (
      <React.Fragment>
        <div className="alert alert-light text-center" role="alert">
          Click the <span className="font-weight-bold">Subscribe</span> button to populate your home feed with interesting boards subjects.
        </div>
        {boards.length > 0 ? boards.map((board, index) => {
              return (
                <div className="card" style={{border: 'none', borderBottom: '1px solid #dcd7d7', marginBottom: 5}}>
                  <div className="card-body" style={{padding: 10}}>
                    <div style={{float: 'left', width: '80%'}}>
                      <h5 style={{fontSize: 16}}>
                        <a href="/" className="card-link">{board.title}</a>
                      </h5>
                      <p>{board.description}</p>
                      <p className="text-muted">
                        <span title="c">{board.subscribers_count} subscribers</span>, created
                        <span>{board.created_naturaltime}</span>
                        {" "} • {" "}
                        <Link to="/report" className="text-muted">report</Link>
                      </p>
                    </div>
                    <div className="text-center" style={{float: 'right', width: '20%'}}>
                      {board.is_subscribed ?
                        <button className="btn btn-secondary btn-sm" onClick={() => this.subscribeOrUnsubscribe(board.slug)}>Unsubscribe</button>
                        :
                        <button className="btn btn-primary btn-sm" onClick={() => this.subscribeOrUnsubscribe(board.slug)}>Subscribe</button>
                      }
                    </div>
                  </div>
                </div>
              );
        }) : <p>No Boards Found</p>}
      </React.Fragment>
    );
  }
}

export default BoardList;
