import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BoardList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      logged_in: localStorage.getItem('token') ? true : false,
      boards: [],
      ready: false
    };
  }

  componentDidMount() {
    const { url } = this.props;
    if (this.state.logged_in) {
      fetch(url, {
        headers: {
          Authorization: `JWT ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json'
        },
      })
        .then(res => res.json())
        .then(json => {
          this.setState({ boards: json.results });
        });
    } else {
      fetch(url, {
        headers: {
          'Content-Type': 'application/json'
        },
      })
        .then(res => res.json())
        .then(json => {
          this.setState({ boards: json.results });
        });
    }
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
                        <span>{board.created_naturaltime}</span> •
                        <a href="#" className="text-muted" title="report this board">report</a>
                      </p>
                    </div>
                    <div className="text-center" style={{float: 'right', width: '20%'}}>
                      {board.is_subscribed ?
                        <a href="{% url 'subscribe' board.slug %}" className="btn btn-secondary btn-sm" id="subscribe_board">Unsubscribe</a>
                        :
                        <a href="{% url 'subscribe' board.slug %}" className="btn btn-primary btn-sm" id="subscribe_board">Subscribe</a>
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
