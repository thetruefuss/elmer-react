import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BoardInfo extends Component {
  render() {
    const { board_details } = this.props;
    console.log(board_details);
    return (
      <React.Fragment>
      <br />
        <div className="card border-light">
          <div className="card-header" style={{color: '#607d8b', borderBottom: '2px solid #1f89de', display: 'inline-block', fontSize: 16, fontWeight: 900, letterSpacing: '-.4px', margin: '3px 0', paddingBottom: 0, textTransform: 'uppercase', textAlign: 'center'}}>
            Get updates now
            <br />
            {board_details.is_subscribed === true ?
              <a href="/" className="btn btn-secondary btn-sm" id="subscribe_board" style={{marginBottom: 10}}>Unsubscribe</a> :
              <a href="/" className="btn btn-primary btn-sm" id="subscribe_board" style={{marginBottom: 10}}>Subscribe</a>
            }
          </div>
          <ul className="list-group list-group-flush" style={{fontSize: 14}}>
            <li className="list-group-item text-center text-muted">Board Info</li>
            <li className="list-group-item"><b>Title: </b>{ board_details.title }</li>
            <li className="list-group-item"><b>Description: </b>{ board_details.description }</li>
            <li className="list-group-item"><b>Total Posts: </b>{ board_details.total_posts }</li>
            <li className="list-group-item"><b>Admins: </b>
              Add Later
            </li>
            <li className="list-group-item"><b>Subscribers: </b><span id="board_subscribers">{ board_details.subscribers_count }</span></li>
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default BoardInfo;
