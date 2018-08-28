import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import InlineError from "../messages/InlineError";

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
    const url = `http://127.0.0.1:8000/api/frontboard/subjects/${
      this.props.slug
    }`;
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
    const keyCode = e.which?e.which:e.keyCode;
    if (keyCode === 13) {
      const errors = this.validate(this.state.data);
      this.setState({ errors });
      if (Object.keys(errors).length === 0) {
        this.props.submit(this.state.data);
        this.setState({
          data: { ...this.state.data, body: "" }
        });
      }
    }
  };

  validate = data => {
    const errors = {};
    if (!data.body) errors.body = "This field is required.";
    return errors;
  };

  render() {
    const { data, errors } = this.state;

    return (
      <React.Fragment>
        <form>
          <textarea
            className="form-control"
            rows={3}
            name="body"
            maxLength={2000}
            placeholder="Leave a comment"
            value={data.body}
            onChange={this.onChange}
            onKeyDown={this.onSubmit}
          />
        {errors.body && <InlineError text={errors.body} />}
        </form>
        <br />
      </React.Fragment>
    );
  }
}

CommentForm.propTypes = {
  submit: PropTypes.func.isRequired,
  slug: PropTypes.string.isRequired
};

export default CommentForm;
