import React from "react";
import PropTypes from "prop-types";

const PageHeading = ({ text }) => (
  <h1 className="pageHeadingH1">
    <span className="pageHeadingSpan">{text}</span>
  </h1>
);

PageHeading.propTypes = {
  text: PropTypes.string.isRequired
};

export default PageHeading;
