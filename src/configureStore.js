import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import rootReducer from "./reducers/index";
import { createStore, applyMiddleware } from "redux";
import { selectReddit } from "./reducers/selectedReddit";
import { fetchPosts, fetchPostsIsNeeded } from "./reducers/postsByReddit";

const loggerMiddleware = createLogger();

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, loggerMiddleware)
);

store.dispatch(selectReddit("reactjs"));
// store.dispatch(fetchPosts("reactjs")).then(() => console.log(store.getState()));

store
  .dispatch(fetchPostsIsNeeded("reactjs"))
  .then(() => console.log(store.getState()));
