import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectPosts,
  loveReact,
  likeReact,
  deletePost,
} from "../reducers/postSlice";
import styles from "./PostList.module.css";
import { FaThumbsUp, FaHeart } from "react-icons/fa";

const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);

  const handleLoveReact = (postId: number) => {
    dispatch(loveReact(postId));
  };

  const handleLikeReact = (postId: number) => {
    dispatch(likeReact(postId));
  };

  const handleDeletePost = (postId: number) => {
    dispatch(deletePost(postId));
  };

  return (
    <div className={styles.postsContainer}>
      <h2 className={styles.feedTitle}>Social Media Feed</h2>
      {posts.map((post) => (
        <div key={post.id} className={styles.post}>
          <div className={styles.postHeader}>
            <h3 className={styles.postAuthor}>{post.author}</h3>
          </div>
          <p className={styles.postContent}>
            {post.content}{" "}
            {post.link && (
              <a href={post.link} target="_blank" rel="noopener noreferrer">
                Read more
              </a>
            )}
          </p>
          {post.picture && (
            <img
              src={post.picture}
              alt={`Post by ${post.author}`}
              className={styles.postImage}
            />
          )}
          <div className={styles.postInfo}>
            <p>Likes: {post.likes}</p>
            <p>Loves: {post.loves}</p>
            <p>Dislikes: {post.dislikes}</p>
          </div>
          <div className={styles.postActions}>
            <button
              className={styles.likeButton}
              onClick={() => handleLikeReact(post.id)}
            >
              <FaThumbsUp className={styles.likeIcon} />
              Like
            </button>
            <button
              className={styles.loveButton}
              onClick={() => handleLoveReact(post.id)}
            >
              <FaHeart className={styles.loveIcon} />
              Love
            </button>
            <button
              className={styles.deleteButton}
              onClick={() => handleDeletePost(post.id)}
            >
              Delete
            </button>
          </div>
          <ul className={styles.commentsList}>
            {post.comments.map((comment) => (
              <li key={comment.id} className={styles.comment}>
                {comment.text}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PostList;
