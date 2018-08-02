import React, { Component } from 'react';
import PageHeading from '../components/PageHeading';
import CenteredFooter from '../components/CenteredFooter';
import SubjectForm from '../forms/SubjectForm';

class CreateSubjectPage extends Component {
  componentDidMount() {
    document.title = "New Subject | Elmer"
  }

  handle_subject_submission = (e, data) => {
    e.preventDefault();
    console.log(data);
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('body', data.body);
    formData.append('photo', data.photo);
    formData.append('board', data.board);
    // Display the key/value pairs
    for (var pair of formData.entries()) {
        console.log(pair[0]+ ', ' + pair[1]);
    }
    fetch('http://127.0.0.1:8000/api/frontboard/subjects/create/', {
      method: 'POST',
      headers: {
        Authorization: `JWT ${localStorage.getItem('token')}`
      },
      body: formData
    })
      .then(res => res.json())
      .then(json => {
        console.log(json);
        window.location.href = "/";
      });
  };

  render() {
    return (
      <React.Fragment>
        <div className="container form_content_block">
          <div className="row">
            <div className="container" style={{margin: '0 auto', width: '50%'}}>
              <PageHeading text="Compose a new post" />
              <SubjectForm handle_subject_submission={this.handle_subject_submission} />
              <CenteredFooter />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CreateSubjectPage;
