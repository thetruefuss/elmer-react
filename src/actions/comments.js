import { FETCH_COMMENTS, CREATE_COMMENTS } from "../types";
import api from "../api";

export const fetchComments = subject_slug => dispatch => {
  api.comments.getAll(subject_slug).then(comments =>
    dispatch({
      type: FETCH_COMMENTS,
      payload: comments
    })
  );
};

export const createComments = data => dispatch => {
  api.comments.create(data).then(comments =>
    dispatch({
      type: CREATE_COMMENTS,
      payload: comments
    })
  );
};
