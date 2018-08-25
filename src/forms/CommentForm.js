import React, { Component } from 'react';
import PropTypes from "prop-types";
import axios from 'axios';

class CommentForm extends Component {
  state = {
    data: {
      body: "",
      subject: null
    },
    errors: {}
  };

  componentDidMount() {
    /**
    * Change URL to get the <ID> only by passing <Slug>. 
    */
    const url = `http://127.0.0.1:8000/api/frontboard/subjects/${this.props.slug}`;
    axios.get(url).then(res => {
      this.setState({
        data: { ...this.state.data, subject: res.data.id }
      });
      console.log(this.state);
    });
  }

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
        .submit(this.state.data);
      this.setState({
        data: { ...this.state.data, body: "" }
      });
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
