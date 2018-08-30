import { FETCH_SUBJECTS, SUBJECT_STARRED } from "../types";
import api from "../api";

export const fetchSubjects = url => dispatch => {
  api.subjects.fetchSubjects(url).then(subjects =>
    dispatch({
      type: FETCH_SUBJECTS,
      payload: subjects
    })
  );
};

export const starSubject = (subject_index, slug) => dispatch => {
  api.subjects.starSubject(slug).then(data =>
    dispatch({
      type: SUBJECT_STARRED,
      id: subject_index,
      payload: data
    })
  );
};
