import React, { Component } from 'react';
import PropTypes from "prop-types";
import axios from 'axios';
import PageHeading from '../components/PageHeading';
import CenteredFooter from '../components/CenteredFooter';
import BoardForm from '../forms/BoardForm';

class CreateBoardPage extends Component {
  componentDidMount() {
    document.title = "New Board | Elmer"
  }

  submit = data => {
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('description', data.description);
    formData.append('cover', data.cover);
    // Display the key/value pairs
    for (var pair of formData.entries()) {
        console.log(pair[0]+ ', ' + pair[1]);
    }
    axios.post("http://127.0.0.1:8000/api/frontboard/boards/create/", formData)
    .then(res => this.goToBoard(res.data.slug));
  };

  goToBoard = slug => this.props.history.push(`/b/${slug}`);

  render() {
    return (
      <React.Fragment>
        <div className="container form_content_block">
          <div className="row">
            <div className="container" style={{margin: '0 auto', width: '50%'}}>
              <PageHeading text="Create new board" />
              <BoardForm submit={this.submit} />
              <CenteredFooter />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

CreateBoardPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
};

export default CreateBoardPage;
