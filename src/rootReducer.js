import { combineReducers } from 'redux';
import subjectReducer from './reducers/subjects';

export default combineReducers({
  subjectReducer: subjectReducer
});
