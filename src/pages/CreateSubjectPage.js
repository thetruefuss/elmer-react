import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import PageHeading from "../components/PageHeading";
import CenteredFooter from "../components/CenteredFooter";
import SubjectForm from "../forms/SubjectForm";

class CreateSubjectPage extends Component {
  componentDidMount() {
    document.title = "New Subject | Elmer";
  }

  submit = data => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("body", data.body);
    if (data.photo) {
      formData.append("photo", data.photo);
    }
    formData.append("board", data.board);
    // Display the key/value pairs
    for (var pair of formData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }
    axios
      .post("http://127.0.0.1:8000/api/frontboard/subjects/create/", formData)
      .then(res => console.log(res))
      .then(() => this.props.history.push("/"));
  };

  render() {
    return (
      <React.Fragment>
        <div className="container form_content_block">
          <div className="row">
            <div
              className="container"
              style={{ margin: "0 auto", width: "50%" }}
            >
              <PageHeading text="Compose a new post" />
              <SubjectForm submit={this.submit} />
              <CenteredFooter />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

CreateSubjectPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

export default CreateSubjectPage;
