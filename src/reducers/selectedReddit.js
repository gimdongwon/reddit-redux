export const SELECT_SUBREDDIT = "SELECT_SUBREDDIT";

export function selectReddit(reddit) {
  return {
    type: SELECT_SUBREDDIT,
    reddit
  };
}

export default function selectedReddit(state = "reactjs", action) {
  switch (action.type) {
    case SELECT_SUBREDDIT:
      return action.reddit;
    default:
      return state;
  }
}
