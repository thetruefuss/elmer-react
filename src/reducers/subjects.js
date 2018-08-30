import { FETCH_SUBJECTS, SUBJECT_STARRED } from "../types";
import update from "immutability-helper";

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
    case SUBJECT_STARRED:
      return update(state, {
        subjects: {
          [action.id]: {
            is_starred: { $set: action.payload.is_starred },
            stars_count: { $set: action.payload.total_points }
          }
        }
      });
    default:
      return state;
  }
}
