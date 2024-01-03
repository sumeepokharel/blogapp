import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addComment } from "../reducers/commentSlice";
import { selectComments } from "../reducers/commentSlice";
import styles from "./CommentForm.module.css";

const CommentForm = ({ postId }: { postId: number }) => {
  const dispatch = useDispatch();
  const comments = useSelector(selectComments);

  const [newComment, setNewComment] = useState("");

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim() !== "") {
      dispatch(addComment({ postId, text: newComment }));
      setNewComment("");
    }
  };

  return (
    <div className={styles.commentFormContainer}>
      <h4 className={styles.commentHeading}>Comments</h4>
      <ul className={styles.commentsList}>
        {comments
          .filter((comment) => comment.postId === postId)
          .map((comment) => (
            <li key={comment.id} className={styles.comment}>
              {comment.text}
            </li>
          ))}
      </ul>
      <form onSubmit={handleCommentSubmit} className={styles.form}>
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment..."
          className={styles.commentInput}
        />
        <button type="submit" className={styles.commentButton}>
          Add Comment
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
