import { combineReducers } from "redux";
import {
  SELECT_SUBREDDIT,
  REQUEST_POSTS,
  RECEIVE_POSTS,
  INVALIDATE_REDDIT
} from "../actions/actionsType";
import { Object } from "core-js";

function selectReddit(state = "reactjs", action) {
  switch (action.type) {
    case SELECT_SUBREDDIT:
      return action.reddit;
    default:
      return state;
  }
}

function posts(
  state = {
    isFetching: false,
    didInvalidate: false,
    items: []
  },
  action
) {
  switch (action.type) {
    case INVALIDATE_REDDIT:
      return Object.assign({}, state, {
        didInvalidate: true
      });
    case REQUEST_POSTS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      });
    case RECEIVE_POSTS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.posts,
        lastUpdated: action.receivedAt
      });
    default:
      return state;
  }
}

function postsByReddit(state = {}, action) {
  switch (aciton.type) {
    case INVALIDATE_REDDIT:
    case REQUEST_POSTS:
    case RECEIVE_POSTS:
      return Object.assign({}, state, {
        [action.reddit]: posts(state[action.reddit], action)
      });
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  selectReddit,
  postsByReddit
});

export default rootReducer;
