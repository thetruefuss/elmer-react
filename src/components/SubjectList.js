import React, { Component } from 'react';
import SubjectDetail from './SubjectDetail';
import ReactPlaceholder from 'react-placeholder';
import "react-placeholder/lib/reactPlaceholder.css";
import SubjectPlaceholder from './SubjectPlaceholder';

class SubjectList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      logged_in: localStorage.getItem('token') ? true : false,
      subjects: [
        "This is just a mock data for subjects.",
        "Just to show content placeholder twice."
      ],
      ready: false
    };
  }

  componentDidMount() {
    const { url } = this.props;
    if (this.state.logged_in) {
      fetch(url, {
        headers: {
          Authorization: `JWT ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json'
        },
      })
        .then(res => res.json())
        .then(json => {
          if (json.results.length > 0) {
            this.setState({ subjects: json.results, ready: true });
          } else {
            this.setState({ subjects: [], ready: true });
          }
        });
    } else {
      fetch(url, {
        headers: {
          'Content-Type': 'application/json'
        },
      })
        .then(res => res.json())
        .then(json => {
          if (json.results.length > 0) {
            this.setState({ subjects: json.results, ready: true });
          } else {
            this.setState({ subjects: [], ready: true });
          }
        });
    }
  }

  render() {
    const { subjects } = this.state;

    return (
      <React.Fragment>
        {subjects.length > 0 ? subjects.map((subject, index) => {
              return (
                <ReactPlaceholder showLoadingAnimation delay={2000} ready={this.state.ready} customPlaceholder={SubjectPlaceholder}>
                  <SubjectDetail subject={subject} key={`subject-list-key ${index}`} />
                </ReactPlaceholder>
              );
        }) : <p>No Posts Found</p>}
      </React.Fragment>
    );
  }
}

export default SubjectList;
