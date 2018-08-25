import React, { Component } from 'react';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

class CommentForm extends Component {
  state = {
    data: {
      body: ""
    },
    errors: {}
  };

  onChange = e =>
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });

  onSubmit = e => {
    e.preventDefault();
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.props
        .submit(this.state.data)
        .catch(err =>
          this.setState({ errors: err.response.data })
        );
    }
  };

  validate = data => {
    const errors = {};
    if (!data.body) errors.body = "body required.";
    return errors;
  };

  render() {
    const { data, errors } = this.state;

    return (
      <React.Fragment>
      <form onSubmit={this.onSubmit}>
        <textarea className="form-control" rows={3} name="body" maxLength={2000} placeholder="Leave a comment" value={data.body} onChange={this.onChange}></textarea>
        <input type="submit" value="Comment" />
      </form>
      <br />
      {errors.body && <span>{errors.body}</span>}
      </React.Fragment>
    );
  }
}

CommentForm.propTypes = {
  submit: PropTypes.func.isRequired
};

export default CommentForm;
