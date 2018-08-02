import React, { Component } from 'react';
import PageHeading from '../components/PageHeading';
import CenteredFooter from '../components/CenteredFooter';
import BoardForm from '../forms/BoardForm';

class CreateBoardPage extends Component {
  componentDidMount() {
    document.title = "New Board | Elmer"
  }

  handle_board_submission = (e, data) => {
    e.preventDefault();
    console.log(data);
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('description', data.description);
    formData.append('cover', data.cover);
    // Display the key/value pairs
    for (var pair of formData.entries()) {
        console.log(pair[0]+ ', ' + pair[1]);
    }
    fetch('http://127.0.0.1:8000/api/frontboard/boards/create/', {
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
              <PageHeading text="Create new board" />
              <BoardForm handle_board_submission={this.handle_board_submission} />
              <CenteredFooter />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CreateBoardPage;
