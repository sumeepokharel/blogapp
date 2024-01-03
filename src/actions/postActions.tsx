import { Dispatch } from "redux";
import { fetchPosts } from "../reducers/postSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";
import { addPost } from "../reducers/postSlice";

// Define additional actions if needed
export const loadPosts = () => async (dispatch: Dispatch) => {
  try {
    // You can dispatch other actions before or after fetchPosts if needed
    const dispatch = useDispatch<AppDispatch>();
    console.log("Loading posts...");
    dispatch(fetchPosts());
  } catch (error) {
    console.error("Error loading posts", error);
    // Handle errors or dispatch additional actions as needed
  }
};

// You can define other actions related to posts if needed
// For example, an action to add a new post
export const addNewPost =
  (post: { title: string; content: string; author: string; picture: string }) =>
  (dispatch: Dispatch) => {
    try {
      // You can dispatch other actions before or after adding a new post if needed
      console.log("Adding a new post...");
      // Dispatch the addPost action from your postSlice
      dispatch(addPost(post));
    } catch (error) {
      console.error("Error adding a new post", error);
      // Handle errors or dispatch additional actions as needed
    }
  };
