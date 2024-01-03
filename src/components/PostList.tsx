import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchComments } from "../reducers/commentSlice";
import { fetchPosts } from "../reducers/postSlice";
import { RootState } from "../reducers/rootReducer";
import { AppDispatch } from "../store/store";
import styles from "./PostList.module.css";
import { FaThumbsUp, FaHeart } from "react-icons/fa";
import CommentForm from "./CommentForm";

import {
  selectPosts,
  loveReact,
  likeReact,
  deletePost,
} from "../reducers/postSlice";

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
        <div key={post.id} className={styles.postEdit}>
          {/* Post Details */}
          <div key={post.id} className={styles.post}>
            <div className={styles.profileSec}>
              {post.profilePic && (
                <img
                  src={post.profilePic}
                  alt={`${post.author}`}
                  className={styles.profilePic}
                />
              )}
              <div className={styles.postHeader}>
                <h3 className={styles.postAuthor}>{post.author}</h3>
                <p className={styles.dateTime}>
                  {post.date} , {post.time}
                </p>
              </div>
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
          </div>

          {/* Comments Section */}
          <div className={styles.commentsSection}>
            <h3>Comments:</h3>
            <ul>
              {post.comments.map((comment) => (
                <li key={comment.id}>{comment.text}</li>
              ))}
            </ul>
            <CommentForm postId={post.id} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostList;
