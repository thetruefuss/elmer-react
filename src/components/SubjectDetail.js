import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Linkify from "react-linkify";
import { starSubject } from "../actions/subjects";

const SubjectDetail = ({ subject, subject_index, starSubject }) => (
  <div className="card card-styling">
    <div className="card-body card-body-styling">
      <div className="star-partition">
        <span
          className="pointer"
          onClick={() => starSubject(subject_index, subject.slug)}>
          {subject.is_starred === true ? (
            <i className="fa fa-star fa-lg" aria-hidden="true" id="star_icon" />
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

SubjectDetail.propTypes = {
  subject: PropTypes.shape({
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    body: PropTypes.string,
    photo: PropTypes.string,
    board_slug: PropTypes.string.isRequired,
    author: PropTypes.shape({
      screen_name: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired
    }).isRequired,
    stars_count: PropTypes.number.isRequired,
    comments_count: PropTypes.number.isRequired,
    is_starred: PropTypes.bool.isRequired,
    created_naturaltime: PropTypes.string.isRequired
  }).isRequired,
  subject_index: PropTypes.number.isRequired,
  starSubject: PropTypes.func.isRequired
};

export default connect(
  null,
  { starSubject }
)(SubjectDetail);
