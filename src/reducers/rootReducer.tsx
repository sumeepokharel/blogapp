import { combineReducers } from "@reduxjs/toolkit";
import postsReducer from "./postSlice";
import commentsReducer from "./commentSlice";

const rootReducer = combineReducers({
  posts: postsReducer,
  comments: commentsReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
