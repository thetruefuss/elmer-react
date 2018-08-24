import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Linkify from 'react-linkify';
import './CommentDetail.css';

class CommentDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: this.props.comment
    };
  }

  render() {
    const { comment } = this.state;
    return (
          <li className="list-group-item">
            <p>{comment.body}
            <br /><a href="/" title="view profile" id="commenter" className="card-link">{comment.commenter.screen_name}</a> &#8212;
            <span>{comment.created_naturaltime}</span>
            {comment.is_commenter ?
              <a href="/" title="delete this comment" id="delete_comment"><i className="fa fa-trash-o"></i></a>
              :
              <React.Fragment>
                <a href="/" style={{ textDecoration: 'none' }} title="reply to this comment" id="reply_comment"><i className="fa fa-reply"></i> Reply</a> &bull; <a href="/" style={{textDecoration: 'none'}} title="report this comment" id="report_link"><i className="fa fa-flag-o"></i> Report</a>
              </React.Fragment>
            }
          </p></li>
    );
  }
}

export default CommentDetail;
