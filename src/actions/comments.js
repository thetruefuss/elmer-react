import { FETCH_COMMENTS, NEW_COMMENT } from "../types";
import api from "../api";

export const fetchComments = subject_slug => dispatch => {
  api.comments.fetchComments(subject_slug).then(comments =>
    dispatch({
      type: FETCH_COMMENTS,
      payload: comments
    })
  );
};

export const newComment = data => dispatch => {
  api.comments.newComment(data).then(comments =>
    dispatch({
      type: NEW_COMMENT,
      payload: comments
    })
  );
};
