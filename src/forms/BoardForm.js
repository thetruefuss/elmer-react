import React, { Component } from "react";
import PropTypes from "prop-types";
import Recaptcha from "react-recaptcha";
import "./BoardForm.css";

class BoardForm extends Component {
  state = {
    data: {
      title: "",
      description: "",
      cover: null
    },
    errors: {}
  };

  onChange = e =>
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });

  onChangeCover = e =>
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.files[0] }
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
    if (!data.description) errors.description = "description required.";
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

    return (
      <React.Fragment>
        <form
          onSubmit={this.onSubmit}
          encType="multipart/form-data"
          id="board_form">
          <div className="form-group">
            <label htmlFor="id_title">
              <span id="required_inp">*</span>Title
            </label>
            <input
              type="text"
              className="form-control"
              id="id_title"
              maxLength={500}
              name="title"
              value={data.title}
              onChange={this.onChange}
            />
          </div>
          {errors.title && <span>{errors.title}</span>}
          <div className="form-group">
            <label htmlFor="id_description">
              <span id="required_inp">*</span>Description
            </label>
            <textarea
              className="form-control"
              cols={40}
              rows={4}
              id="id_description"
              name="description"
              maxLength={2000}
              placeholder="Describe your board verbosely"
              value={data.description}
              onChange={this.onChange}
            />
          </div>
          {errors.description && <span>{errors.description}</span>}
          <div className="form-group">
            <label htmlFor="id_cover">Background cover</label>
            <input
              type="file"
              className="form-control-file"
              id="id_cover"
              name="cover"
              accept="image/*"
              onChange={this.onChangeCover}
            />
            <small id="cover_help" className="form-text text-muted">
              Image size should be <b>900 ✕ 300</b>.
            </small>
          </div>
          <Recaptcha
            sitekey="6LcxazUUAAAAAJstEHfmrSDE5QFqSrPUHqozW9XQ"
            render="explicit"
            verifyCallback={this.verify_callback}
            onloadCallback={this.onload_callback}
          />
          <br />
          <button
            type="submit"
            className="btn btn-success btn-block"
            id="submit_board">
            Submit
          </button>
        </form>
      </React.Fragment>
    );
  }
}

BoardForm.propTypes = {
  submit: PropTypes.func.isRequired
};

export default BoardForm;
