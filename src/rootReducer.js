import { combineReducers } from 'redux';
import subjectReducer from './reducers/subjects';
import user from './reducers/user';

export default combineReducers({
  subjectReducer,
  user
});
