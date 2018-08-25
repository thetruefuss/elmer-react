import { combineReducers } from "redux";
import subjects from "./reducers/subjects";
import comments from "./reducers/comments";
import user from "./reducers/user";

export default combineReducers({
  subjects,
  comments,
  user
});
