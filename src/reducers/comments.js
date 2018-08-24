import { FETCH_COMMENTS } from '../types';

const initialState = {
  comments: [
    "This is just a mock data for comments.",
    "Just to show content placeholder twice."
  ],
  ready: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_COMMENTS:
      return {
        ...state,
        comments: action.payload,
        ready: true
      };
    default:
      return state;
  }
}
