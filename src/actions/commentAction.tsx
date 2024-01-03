import { Dispatch } from "redux";
import { fetchComments } from "../reducers/commentSlice";
import { AppDispatch } from "../store/store";
import { useDispatch } from "react-redux";
import { addComment } from "../reducers/commentSlice";

// Define additional actions if needed
export const loadComments = () => async (dispatch: Dispatch) => {
  try {
    // You can dispatch other actions before or after fetchComments if needed
    console.log("Loading comments...");
    const dispatch = useDispatch<AppDispatch>();
    dispatch(fetchComments());
  } catch (error) {
    console.error("Error loading comments", error);
    // Handle errors or dispatch additional actions as needed
  }
};

// You can define other actions related to comments if needed
// For example, an action to add a new comment
export const addNewComment =
  (comment: { postId: number; text: string }) => (dispatch: Dispatch) => {
    try {
      // You can dispatch other actions before or after adding a new comment if needed
      console.log("Adding a new comment...");
      // Dispatch the addComment action from your commentSlice
      dispatch(addComment(comment));
    } catch (error) {
      console.error("Error adding a new comment", error);
      // Handle errors or dispatch additional actions as needed
    }
  };
