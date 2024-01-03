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
  return (
    <div>
      <h2>Posts</h2>
      {posts.map((post) => (
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
        </div>
      ))}
    </div>
  );
};

export default PostList;
