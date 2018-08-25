import { FETCH_SUBJECTS } from "../types";

const initialState = {
  subjects: [
    "This is just a mock data for subjects.",
    "Just to show content placeholder twice."
  ],
  ready: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_SUBJECTS:
      return {
        ...state,
        subjects: action.payload,
        ready: true
      };
    default:
      return state;
  }
}
