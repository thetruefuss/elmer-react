import React, { Component } from "react";
import axios from "axios";

class NotificationsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notifications: []
    };
  }
  componentDidMount() {
    axios.get("/api/users/notifications/").then(res => {
      this.setState({ notifications: res.data });
    });
  }

  render() {
    const { notifications } = this.state;

    return (
      <React.Fragment>
        {notifications.length > 0 ? (
          notifications.map((notification, index) => {
            return (
              <div
                className="card"
                style={{border:'none', borderBottom:1, marginBottom:5}}>
                <div className="card-body" style={{padding:10}}>
                  <h6>
                    <a href="/" className="card-link">{notification.notification_string}</a>
                  </h6>
                  <span className="text-muted">
                    <i className="fa fa-clock-o">{" "}{notification.created_naturaltime}</i>
                  </span>
                </div>
              </div>
            );
          })
        ) : (
          <div className="card">
            <div className="card-body text-center">
              <h4 className="card-title">No activities yet</h4>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default NotificationsList;
