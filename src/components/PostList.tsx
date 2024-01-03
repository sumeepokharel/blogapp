<<<<<<< HEAD
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchComments } from "../reducers/commentSlice";
import { fetchPosts } from "../reducers/postSlice";
import { RootState } from "../reducers/rootReducer";
import { AppDispatch } from "../store/store";
import styles from "./PostList.module.css";

const PostList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const posts = useSelector((state: RootState) => state.posts.posts);
  const comments = useSelector((state: RootState) => state.comments.comments);

  useEffect(() => {
    const fetchAndDispatchComments = async () => {
      try {
        await dispatch(fetchPosts());

        await dispatch(fetchComments());
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchAndDispatchComments();
    console.log("Posts (after dispatch):", posts);
    console.log("Comments (after dispatch):", comments);
  }, [dispatch]);
=======
// Import necessary dependencies and components
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
import CommentForm from "./CommentForm";

// Define the PostList component
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

>>>>>>> aa4b9aeadfcafd97002a94d59a6d3c01a3a5aa0d
  return (
    <div className={styles.postsContainer}>
      <h2 className={styles.feedTitle}>Social Media Feed</h2>
      {posts.map((post) => (
<<<<<<< HEAD
        <div key={post.id} className={styles.postEdit}>
          <h2>{post.author}</h2>
          <p>{post.title}</p>
          <p>
            <img
              className={styles.postPic}
              src={`http://localhost:3001${post.picture}`}
              alt={`Post ${post.id}`}
            />
          </p>
          <p>{post.content}</p>

          <h3>Comments:</h3>
          <ul>
            {comments
              .filter((comment) => comment.postId === post.id)
              .map((comment) => (
                <li key={comment.id}>{comment.text}</li>
              ))}
          </ul>
=======
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
          <CommentForm postId={post.id} />{" "}
          {/* Render the CommentForm component */}
>>>>>>> aa4b9aeadfcafd97002a94d59a6d3c01a3a5aa0d
        </div>
      ))}
    </div>
  );
};

<<<<<<< HEAD
=======
// Export the PostList component
>>>>>>> aa4b9aeadfcafd97002a94d59a6d3c01a3a5aa0d
export default PostList;
