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
  comments: [],
};

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    addComment: (
      state,
      action: PayloadAction<{ postId: number; text: string }>
    ) => {
      const { postId, text } = action.payload;
      const newComment: Comment = {
        id: state.comments.length + 1,
        postId,
        text,
      };
      state.comments.push(newComment);
    },
  },
});

export const { addComment } = commentsSlice.actions;
export const selectComments = (state: { comments: CommentsState }) =>
  state.comments.comments;
export default commentsSlice.reducer;
