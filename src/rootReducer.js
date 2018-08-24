import { combineReducers } from 'redux';
import subjectReducer from './reducers/subjects';
import commentReducer from './reducers/comments';
import user from './reducers/user';

export default combineReducers({
  subjectReducer,
  commentReducer,
  user
});
