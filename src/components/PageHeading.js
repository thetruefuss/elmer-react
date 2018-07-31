import React from 'react';
import './PageHeading.css';

const PageHeading = (props) => {
  return (
    <h1 className="pageHeadingH1">
      <span className="pageHeadingSpan">{props.text}</span>
    </h1>
  );
}

export default PageHeading;
