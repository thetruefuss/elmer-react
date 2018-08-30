import { FETCH_SUBJECTS, SUBJECT_STARRED } from "../types";

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
      const new_subjects = [ ...state.subjects ];
      new_subjects[action.id].is_starred = action.payload.is_starred;
      new_subjects[action.id].stars_count = action.payload.total_points;
      // state changing but UI not updating
      return {
        ...state,
        subjects: new_subjects
      };
    default:
      return state;
  }
}
