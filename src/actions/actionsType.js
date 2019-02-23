export const SELECT_SUBREDDIT = "SELECT_SUBREDDIT";
export const REQUEST_POSTS = "REQUEST_POSTS";
export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const INVALIDATE_REDDIT = "INVALIDATE_REDDIT";

export function selectReddit(reddit) {
  return {
    type: SELECT_SUBREDDIT,
    reddit
  };
}

export function requestPosts(reddit) {
  return {
    type: REQUEST_POSTS,
    reddit
  };
}

export function invalidateReddit(reddit) {
  return {
    type: INVALIDATE_REDDIT,
    reddit
  };
}

export function receivePosts(reddit) {
  return {
    type: RECEIVEPOSTS,
    reddit,
    posts: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  };
}
