import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchComments } from "../reducers/commentSlice";
import { RootState } from "../reducers/rootReducer";
import { AppDispatch } from "../store/store";

const CommentList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const comments = useSelector((state: RootState) => state.comments.comments);

  useEffect(() => {
    const fetchAndDispatchComments = async () => {
      try {
        await dispatch(fetchComments());
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchAndDispatchComments();
  }, [dispatch]);
  return (
    <div>
      {comments.map((comment) => (
        <div key={comment.id}>{comment.text}</div>
      ))}
    </div>
  );
};

export default CommentList;
