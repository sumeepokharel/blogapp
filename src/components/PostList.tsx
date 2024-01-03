import React from "react";
import { useSelector } from "react-redux";
import { selectPosts } from "../reducers/postSlice";
import { selectComments } from "../reducers/commentSlice";
import styles from "./PostList.module.css";

const Posts = () => {
  const posts = useSelector(selectPosts);
  const comments = useSelector(selectComments);

  return (
    <div className={styles.postsContainer}>
      <h2>Posts</h2>
      {posts.map((post) => (
        <div key={post.id} className={styles.postContainer}>
          <div className={styles.postHeader}>
            <h3 className={styles.postTitle}>{post.title}</h3>
          </div>
          <p className={styles.postContent}>{post.content}</p>
          <div className={styles.commentContainer}>
            {comments
              .filter((comment) => comment.postId === post.id)
              .map((comment) => (
                <div key={comment.id} className={styles.comment}>
                  <p>{comment.text}</p>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
