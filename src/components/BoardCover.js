import React from "react";
import PropTypes from "prop-types";

const BoardCover = props => (
  <div
    style={{
      maxHeight: 250,
      height: 250,
      boxShadow: "0px 1px 5px 1px #e6e1e2"
    }}>
    <div style={{ width: "100%", height: "100%" }}>
      <div
        data-lazyload="undefined"
        data-bgfit="cover"
        data-bgposition="left top"
        data-bgrepeat="no-repeat"
        data-lazydone="undefined"
        data-src={props.cover_url}
        style={{
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${props.cover_url})`,
          backgroundSize: "cover",
          backgroundPosition: "left",
          width: "100%",
          height: "100%",
          opacity: 1,
          position: "relative"
        }}
      />
    </div>
  </div>
);

BoardCover.propTypes = {
  cover_url: PropTypes.string.isRequired
};

export default BoardCover;
