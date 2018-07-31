import React, { Component } from 'react';
import SubjectDetail from './SubjectDetail';

class SubjectList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      logged_in: localStorage.getItem('token') ? true : false,
      subjects: [],
    };
  }

  componentDidMount() {
    if (this.state.logged_in) {
      fetch('http://127.0.0.1:8000/api/frontboard/subjects', {
        headers: {
          Authorization: `JWT ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json'
        },
      })
        .then(res => res.json())
        .then(json => {
          this.setState({ subjects: json.results });
        });
    } else {
      fetch('http://127.0.0.1:8000/api/frontboard/subjects', {
        headers: {
          'Content-Type': 'application/json'
        },
      })
        .then(res => res.json())
        .then(json => {
          this.setState({ subjects: json.results });
        });
    }
  }

  render() {
    const { subjects } = this.state;

    return (
      <React.Fragment>
        {subjects.length > 0 ? subjects.map((subject, index) => {
              return (
                <SubjectDetail subject={subject} key={`subject-list-key ${index}`} />
              );
        }) : <p>No Posts Found</p>}
      </React.Fragment>
    );
  }
}

export default SubjectList;
