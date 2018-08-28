import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Recaptcha from "react-recaptcha";
import "./SubjectForm.css";

class SubjectForm extends Component {
  state = {
    data: {
      title: "",
      body: "",
      photo: null,
      board: null,
      board_options: []
    },
    errors: {}
  };

  componentDidMount() {
    axios
      .get("http://127.0.0.1:8000/api/frontboard/user_subscribed_boards/")
      .then(res =>
        this.setState({
          data: { ...this.state.data, board_options: res.data }
        })
      );
  }

  onChange = e =>
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });

  onChangePhoto = e =>
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.files[0] }
    });

  onChangeBoard = e =>
    this.setState({
      data: { ...this.state.data, board: e.target.value }
    });

  onSubmit = e => {
    e.preventDefault();
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.props.submit(this.state.data);
    }
  };

  validate = data => {
    const errors = {};
    if (!data.title) errors.title = "title required.";
    if (!data.board) errors.board = "board required.";
    return errors;
  };

  verify_callback = response => {
    console.log(response);
  };

  onload_callback = () => {
    console.log("Recaptcha loaded successfully.");
  };

  render() {
    const { data, errors } = this.state;
    const boardOptions = this.state.data.board_options.map(board => (
      <option key={board.id} value={board.id}>
        {board.title}
      </option>
    ));
    return (
      <React.Fragment>
        <form
          onSubmit={this.onSubmit}
          encType="multipart/form-data"
          id="subject_form">
          <div className="form-group">
            <label htmlFor="id_title">
              <span id="required_inp">*</span>Title
            </label>
            <input
              type="text"
              className="form-control"
              id="id_title"
              maxLength={150}
              name="title"
              value={data.title}
              onChange={this.onChange}
            />
            <small className="form-text text-muted">
              You can <b>u/mention</b> other members in your post anywhere.
            </small>
          </div>
          {errors.title && <span>{errors.title}</span>}
          <div className="form-group">
            <label htmlFor="id_description">Description</label>
            <textarea
              className="form-control"
              cols={40}
              rows={4}
              id="id_description"
              name="body"
              maxLength={2000}
              placeholder="Describe your subject verbosely"
              value={data.body}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="id_photo">Add image</label>
            <input
              type="file"
              className="form-control-file"
              id="id_photo"
              name="photo"
              accept="image/*"
              onChange={this.onChangePhoto}
            />
          </div>
          <div className="form-group">
            <label htmlFor="id_cover">
              <span id="required_inp">*</span>Choose a board
            </label>
            <select
              className="form-control"
              id="id_cover"
              value={data.board}
              onChange={this.onChangeBoard}>
              <option selected />
              {boardOptions}
            </select>
            <p className="text-muted">
              You need to <b>subscribe</b> a board, before posting in it.
            </p>
          </div>
          {errors.board && <span>{errors.board}</span>}
          <Recaptcha
            sitekey="6LcxazUUAAAAAJstEHfmrSDE5QFqSrPUHqozW9XQ"
            render="explicit"
            verifyCallback={this.verify_callback}
            onloadCallback={this.onload_callback}
          />
          <br />
          <button
            type="submit"
            className="btn btn-primary btn-block"
            id="submit_subject">
            Submit
          </button>
        </form>
      </React.Fragment>
    );
  }
}

SubjectForm.propTypes = {
  submit: PropTypes.func.isRequired
};

export default SubjectForm;
