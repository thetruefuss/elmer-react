import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactPlaceholder from 'react-placeholder';
import "react-placeholder/lib/reactPlaceholder.css";

class ActiveThreads extends Component {
  constructor(props) {
    super(props);

    this.state = {
      logged_in: localStorage.getItem('token') ? true : false,
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
    const url = 'http://127.0.0.1:8000/api/frontboard/subjects/active_threads/';
    if (this.state.logged_in) {
      fetch(url, {
        headers: {
          Authorization: `JWT ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json'
        },
      })
        .then(res => res.json())
        .then(json => {
          this.setState({ threads: json, ready: true });
        });
    }
  }

  render() {
    const { threads } = this.state;

    return (
      <React.Fragment>
        {this.state.logged_in ?
          <div className="card border-light">
            <div className="card-header text-center font-weight-bold" style={{color: '#607d8b', borderBottom: '2px solid #1f89de', display: 'inline-block', fontSize: 16, fontWeight: 900, letterSpacing: '-.4px', margin: '3px 0', paddingBottom: 0, textTransform: 'uppercase'}}>
              Active Threads
            </div>
            <ul className="list-group list-group-flush">
              {threads.length > 0 ? threads.map((thread, index) => {
                    return (
                      <ReactPlaceholder showLoadingAnimation type="textRow" delay={2000} ready={this.state.ready}>
                        <li className="list-group-item" style={{fontSize: 14}} key={`active-threads-key ${index}`}>
                          <Link to={`/s/${thread.board_slug}/${thread.slug}`} class="card-link">{thread.title}</Link>
                        </li>
                      </ReactPlaceholder>
                    );
              }) : <p>No Threads Found</p>}
            </ul>
          </div> : ""}
      </React.Fragment>
    );
  }
}

export default ActiveThreads;
