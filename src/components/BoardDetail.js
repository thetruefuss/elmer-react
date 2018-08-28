import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class BoardDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      board: this.props.board,
    };
  }

  subscribeOrUnsubscribe = slug => {
    axios.get(`http://127.0.0.1:8000/api/frontboard/actions/subscribe/?board_slug=${slug}`).then(res => {
      let board = {...this.state.board};
      board.is_subscribed = res.data.is_subscribed;
      board.subscribers_count = res.data.total_subscribers;
      this.setState({ board });
    });
  }

  render() {
    const { board } = this.state;

    return (
      <React.Fragment>
        <div className="card" style={{border: 'none', borderBottom: '1px solid #dcd7d7', marginBottom: 5}}>
          <div className="card-body" style={{padding: 10}}>
            <div style={{float: 'left', width: '80%'}}>
              <h5 style={{fontSize: 16}}>
                <Link to={`/b/${board.slug}`} className="card-link">{board.title}</Link>
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
      </React.Fragment>
    );
  }
}

export default BoardDetail;
