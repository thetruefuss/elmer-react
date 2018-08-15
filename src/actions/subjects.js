import { FETCH_SUBJECTS } from '../types';
import api from '../api';

export const fetchSubjects = url => dispatch => {
  api.subjects.getAll(url)
  .then(subjects =>
    dispatch({
      type: FETCH_SUBJECTS,
      payload: subjects
    })
  );
};
