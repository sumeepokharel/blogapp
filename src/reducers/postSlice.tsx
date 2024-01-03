import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

const BASE_URL = "http://localhost:3001";
interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
  picture?: string;
}
interface PostsState {
  posts: Post[];
}

const initialState: PostsState = {
  posts: [],
};

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await fetch(`${BASE_URL}/posts`);
  const data = await response.json();
  return data;
});

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<Omit<Post, "id">>) => {
      // Generate a unique id for the new post
      const newId = state.posts.length + 1;

      // Create a new post object with the generated id
      const newPost: Post = {
        id: newId,
        ...action.payload,
      };

      // Push the new post to the state
      state.posts.push(newPost);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchPosts.fulfilled,
      (state, action: PayloadAction<Post[]>) => {
        state.posts = action.payload;
      }
    );
  },
});

export const { addPost } = postsSlice.actions;
export const selectPosts = (state: { posts: PostsState }) => state.posts.posts;
export default postsSlice.reducer;
