import React from "react";
import { TextRow } from "react-placeholder/lib/placeholders";

const CommentPlaceholder = (
  <li className="list-group-item">
    <p style={{ width: "50%" }}>
      <TextRow color="#E0E0E0" style={{ marginBottom: 5 }} />
      <TextRow color="#E0E0E0" style={{ width: "50%" }} />
    </p>
  </li>
);

export default CommentPlaceholder;
