import { combineReducers } from "redux";
import selectedReddit from "./selectedReddit";
import postsByReddit from "./postsByReddit";

const rootReducer = combineReducers({
  selectedReddit,
  postsByReddit
});

export default rootReducer;
