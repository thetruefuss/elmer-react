import { FETCH_COMMENTS, CREATE_COMMENTS } from "../types";

const initialState = {
  comments: [
    "This is just a mock data for comments.",
    "Just to show content placeholder twice."
  ],
  ready: false,
  comment: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_COMMENTS:
      return {
        ...state,
        comments: action.payload,
        ready: true
      };
    case CREATE_COMMENTS:
      return {
        ...state,
        comment: action.payload
      };
    default:
      return state;
  }
}
