import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Linkify from "react-linkify";
import "./CommentDetail.css";

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
        <p>
          <Linkify>{comment.body}</Linkify>
          <br />
          <Link
            to={`/u/${comment.commenter.username}`}
            title="view profile"
            id="commenter"
            className="card-link">
            {comment.commenter.screen_name}
          </Link>{" "}
          &#8212; <span>{comment.created_naturaltime}</span>{" "}
          {comment.is_commenter ? (
            <a href="/" title="delete this comment" id="delete_comment">
              <i className="fa fa-trash-o" />
            </a>
          ) : (
            <React.Fragment>
              <a
                href="/"
                style={{ textDecoration: "none" }}
                title="reply to this comment"
                id="reply_comment">
                <i className="fa fa-reply" /> Reply
              </a>{" "}
              &bull;
              <a
                href="/"
                style={{ textDecoration: "none" }}
                title="report this comment"
                id="report_link">
                <i className="fa fa-flag-o" /> Report
              </a>
            </React.Fragment>
          )}
        </p>
      </li>
    );
  }
}

CommentDetail.propTypes = {
  comment: PropTypes.shape({
    body: PropTypes.string.isRequired,
    commenter: PropTypes.shape({
      screen_name: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired
    }).isRequired,
    is_commenter: PropTypes.bool.isRequired,
    created: PropTypes.string.isRequired,
    created_naturaltime: PropTypes.string.isRequired,
  }).isRequired
};

export default CommentDetail;
