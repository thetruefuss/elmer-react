import React, { Component } from 'react';
import './SubjectDetail.css';
import Linkify from 'react-linkify';

class SubjectDetail extends Component {
  render() {
    const { subject } = this.props;
    return (
      <div className="card card-styling">
        <div className="card-body card-body-styling">

        <div className="star-partition">
          <a href="/"
             id="js-star-subject">
             {subject.is_starred === true ?
               <i className="fa fa-star fa-lg" aria-hidden="true" id="star_icon"></i> :
               <i className="fa fa-star-o fa-lg" aria-hidden="true" id="star_icon"></i>
             }
             <br />
             <span id="js-star-count">{ subject.stars_count }</span>
          </a>
        </div>

          <div className="body-partition">
            <p className="post-info text-muted">
              <a href="/"
                 title="visit board"
                 className="board-link">b/{ subject.board }</a> &bull; Posted by <a href="/"
                                                                                    title="view profile"
                                                                                    className="profile-link">{ subject.author.screen_name }</a>
                                                                                  <span> { subject.created_naturaltime }</span>
            </p>
            <h5><a href="/" className="card-link">{ subject.title}</a></h5>
            <Linkify>
              <p>{ subject.body }</p>
            </Linkify>

            {subject.photo !== null ?
            <div className="card-photo-stlying">
              <img src={ subject.photo } width="80%" />
            </div> : ""
            }

            <div className="card-bottom-area text-muted">
              <a href="/">
                 <i className="fa fa-comment fa-md" aria-hidden="true"></i> { subject.comments_count } Comments
              </a> &bull; <a href="/" className="share_link" data-clipboard-text="">
                 <i className="fa fa-share fa-md" aria-hidden="true"></i> Share
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SubjectDetail;
