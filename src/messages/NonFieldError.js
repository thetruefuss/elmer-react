import React from "react";
import PropTypes from "prop-types";

const InlineError = ({ text }) => (
  <div className="alert alert-danger alert-dismissible fade show" role="alert">
    {text}
    <button
      type="button"
      className="close"
      data-dismiss="alert"
      aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
);

InlineError.propTypes = {
  text: PropTypes.string.isRequired
};

export default InlineError;
