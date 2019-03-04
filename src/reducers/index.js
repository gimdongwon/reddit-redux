import { combineReducers } from "redux";
import selectedReddit from "./selectedReddit";
import postsByReddit from "./postsByReddit";
import visibilityFilter from "./visibilityFilter";
import todos from "./todos";

const rootReducer = combineReducers({
  selectedReddit,
  postsByReddit,
  todos,
  visibilityFilter
});

export default rootReducer;
