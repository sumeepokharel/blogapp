import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import data from "../api/db.json";

interface Comment {
  id: number;
  postId: number;
  text: string;
}

interface CommentsState {
  comments: Comment[];
}

const initialState: CommentsState = {
  comments: [],
};

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    addComment: (state, action: PayloadAction<Comment>) => {
      state.comments.push(action.payload);
    },
  },
});

export const { addComment } = commentsSlice.actions;
export const selectComments = (state: { comments: CommentsState }) =>
  state.comments.comments;
export default commentsSlice.reducer;
