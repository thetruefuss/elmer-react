import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Linkify from 'react-linkify';
import './SubjectDetail.css';

class SubjectDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      logged_in: localStorage.getItem('token') ? true : false,
      subject: this.props.subject
    };
    this.star_subject = this.star_subject.bind(this);
  }

  star_subject = (e, slug) => {
    const url = `http://127.0.0.1:8000/api/frontboard/subjects/star/?subject_slug=${slug}`
    console.log(url);
    if (this.state.logged_in) {
      fetch(url, {
        headers: {
          Authorization: `JWT ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json'
        },
      })
        .then(res => res.json())
        .then(json => {
          let subject = {...this.state.subject};
          subject.stars_count = json.total_points;
          subject.is_starred = json.is_starred;
          this.setState({ subject });
        });
    }
  }

  render() {
    const { subject } = this.state;
    return (
      <div className="card card-styling">
        <div className="card-body card-body-styling">

        <div className="star-partition">
          <a href="#"
             style={{textDecoration: 'none'}}
             id="js-star-subject"
             onClick={e => this.star_subject(e, this.state.subject.slug)}>
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
              <Link to={`/b/${subject.board}`}
                    title="visit board"
                    className="board-link">b/{ subject.board }</Link> &bull; Posted by <a href="/"
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
              <img src={ subject.photo } width="80%" alt={ subject.title } />
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
