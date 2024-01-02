import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Comment {
  id: number;
  postId: number;
  text: string;
}

interface CommentsState {
  comments: Comment[];
}

const initialState: CommentsState = {
  comments: [
    { id: 1, postId: 1, text: "Comment 1 for Post 1" },
    { id: 2, postId: 2, text: "Comment 2 for Post 2" },
    { id: 3, postId: 2, text: "Comment 1 for Post 3" },
  ],
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
