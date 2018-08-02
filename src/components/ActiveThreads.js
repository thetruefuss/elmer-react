import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ActiveThreads extends Component {
  constructor(props) {
    super(props);

    this.state = {
      threads: [],
    };
  }

  componentDidMount() {
    fetch('http://127.0.0.1:8000/api/frontboard/subjects/active_threads/', {
      headers: {
        Authorization: `JWT ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      },
    })
      .then(res => res.json())
      .then(json => {
        this.setState({ threads: json });
      });
  }

  render() {
    const { threads } = this.state;

    return (
      <React.Fragment>
        <br />
        <div className="card border-light">
          <div className="card-header text-center font-weight-bold" style={{color: '#607d8b', borderBottom: '2px solid #1f89de', display: 'inline-block', fontSize: 16, fontWeight: 900, letterSpacing: '-.4px', margin: '3px 0', paddingBottom: 0, textTransform: 'uppercase'}}>
            Active Threads
          </div>
          <ul className="list-group list-group-flush">
            {threads.length > 0 ? threads.map((thread, index) => {
                  return (
                    <li className="list-group-item" style={{fontSize: 14}} key={`active-threads-key ${index}`}><Link to={`/s/${thread.board_slug}/${thread.slug}`} class="card-link">{thread.title}</Link></li>
                  );
            }) : <p>No threads Found</p>}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default ActiveThreads;
