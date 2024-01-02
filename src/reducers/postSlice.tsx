import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ChildProcess } from "child_process";

interface Post {
  id: number;
  title: string;
  content: string;
  picture?: string;
}

interface PostsState {
  posts: Post[];
}

const initialState: PostsState = {
  posts: [
    {
      id: 1,
      title: "Post 1",
      content: "Content for post 1",
      picture: "src/post-Images\floral.jpg",
    },
    {
      id: 2,
      title: "Post 2",
      content: "Content post 2",
      picture: "src/post-Images\floral.jpg",
    },
  ],
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<Post>) => {
      state.posts.push(action.payload);
    },
  },
});

export const { addPost } = postsSlice.actions;
export const selectPosts = (state: { posts: PostsState }) => state.posts.posts;
export default postsSlice.reducer;
