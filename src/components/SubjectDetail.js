import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Linkify from "react-linkify";
import { starSubject } from "../actions/subjects";

class SubjectDetail extends Component {
  render() {
    const { subject } = this.props;
    return (
      <div className="card card-styling">
        <div className="card-body card-body-styling">
          <div className="star-partition">
            <span
              className="pointer"
              onClick={() =>
                this.props.starSubject(this.props.subject_index, subject.slug)
              }>
              {subject.is_starred === true ? (
                <i
                  className="fa fa-star fa-lg"
                  aria-hidden="true"
                  id="star_icon"
                />
              ) : (
                <i
                  className="fa fa-star-o fa-lg"
                  aria-hidden="true"
                  id="star_icon"
                />
              )}
              <br />
              <span>{subject.stars_count}</span>
            </span>
          </div>

          <div className="body-partition">
            <p className="post-info text-muted">
              <Link
                to={`/b/${subject.board_slug}`}
                title="visit board"
                className="board-link">
                b/{subject.board_slug}
              </Link>{" "}
              &bull; Posted by{" "}
              <a href="/" title="view profile" className="profile-link">
                {subject.author.screen_name}
              </a>
              <span> {subject.created_naturaltime}</span>
            </p>
            <h5>
              <Link
                to={`/s/${subject.board_slug}/${subject.slug}`}
                className="card-link">
                {subject.title}
              </Link>
            </h5>
            <Linkify>
              <p>{subject.body}</p>
            </Linkify>

            {subject.photo !== null ? (
              <div className="card-photo-stlying">
                <img src={subject.photo} width="80%" alt={subject.title} />
              </div>
            ) : (
              ""
            )}

            <div className="card-bottom-area text-muted">
              <a href="/">
                <i className="fa fa-comment fa-md" aria-hidden="true" />{" "}
                {subject.comments_count} Comments
              </a>{" "}
              &bull;{" "}
              <a href="/" className="share_link" data-clipboard-text="">
                <i className="fa fa-share fa-md" aria-hidden="true" /> Share
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { starSubject }
)(SubjectDetail);
