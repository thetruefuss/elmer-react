import React from "react";
import PropTypes from "prop-types";

const Profile = ({ profile_info }) => (
  <div>
    <div
      className="card"
      style={{ width: 25 + "%", float: "left", border: "none" }}>
      <img className="card-img-top" src={profile_info.profile_picture_url} alt="Profile" />
    </div>

    <div
      className="card"
      style={{ width: 75 + "%", float: "right", border: "none" }}>
      <div className="card-body">
        <h4 className="card-title">
          {profile_info.screen_name} &nbsp;
          {!profile_info.is_requesters_profile &&
            !profile_info.requester_in_contact_list &&
            profile_info.requester_in_pending_list && (
              <a
                href="/"
                className="btn btn-primary btn-sm"
                style={{ marginRight: 10 }}>
                Request Sent
              </a>
            )}
          {!profile_info.is_requesters_profile &&
            !profile_info.requester_in_contact_list &&
            !profile_info.requester_in_pending_list && (
              <a
                href="/"
                className="btn btn-primary btn-sm"
                style={{ marginRight: 10 }}>
                Send Request
              </a>
            )}
          {!profile_info.is_requesters_profile &&
            profile_info.requester_in_contact_list && (
              <React.Fragment>
                <button
                  type="button"
                  className="btn btn-outline-primary btn-sm"
                  data-toggle="modal"
                  data-target="#blockUserModel">
                  Block
                </button>

                <div
                  className="modal fade"
                  id="blockUserModel"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="Block User"
                  aria-hidden="true">
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title">Are you sure?</h5>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <h5>
                          Once you block the user, you can not message him again
                          until he accepts your request.
                        </h5>
                        <br />
                        <p>
                          If user is being annoying to you, block him right
                          away.
                        </p>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary btn-sm"
                          data-dismiss="modal">
                          Cancel
                        </button>
                        <a
                          href="/"
                          className="btn btn-primary btn-sm"
                          id="block_spammer"
                          style={{ marginRight: 10 }}
                          title="Block this user">
                          Block
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  href="/"
                  className="btn btn-outline-primary btn-sm"
                  id="send_msg"
                  title="Send message to this user"
                  style={{ marginRight: 10 }}>
                  Message
                </a>
              </React.Fragment>
            )}
          {!profile_info.is_requesters_profile && profile_info.has_followed ? (
            <a href="/" className="btn btn-primary btn-sm">
              Unfollow
            </a>
          ) : (
            <a href="/" className="btn btn-outline-primary btn-sm">
              Follow
            </a>
          )}
        </h4>
        <p className="card-text">
          <strong>{profile_info.created_boards_count}</strong> boards created.
        </p>
        <p className="card-text">
          <strong>{profile_info.posted_subjects_count}</strong> subjects posted.
        </p>
        <p className="card-text">
          <strong>{profile_info.boards_subsribed_count}</strong> boards
          subscribed.
        </p>
        <p className="card-text">
          Member since <span>{profile_info.member_since}</span>
        </p>
        <br />
        <p id="profile_user_links" style={{ textAlign: "center" }}>
          <a href="/" className="card-link">
            View subscription list
          </a>
          <span> &middot; </span>
          {profile_info.is_requesters_profile && (
            <React.Fragment>
              <a href="/" className="card-link">
                Edit profile
              </a>
              <br />
              <br />
              <a href="/" className="card-link">
                Followers
              </a>
              <span> &middot; </span>
              <a href="/" className="card-link">
                Following
              </a>
              <br />
              <br />
              <a href="/" className="card-link">
                Message requests
              </a>
              <span> &middot; </span>
              <a href="/" className="card-link">
                Contact list
              </a>
            </React.Fragment>
          )}
        </p>
      </div>
    </div>
  </div>
);

Profile.propTypes = {
  profile_info: PropTypes.object.isRequired
};

export default Profile;
