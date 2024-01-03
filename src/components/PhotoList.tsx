import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../reducers/postSlice";
import { RootState } from "../reducers/rootReducer";
import { AppDispatch } from "../store/store";
import { FaThumbsUp, FaHeart } from "react-icons/fa";

import {
  selectPosts,
  loveReact,
  likeReact,
  deletePost,
} from "../reducers/postSlice";

const PhotoList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const posts = useSelector((state: RootState) => state.posts.posts);

  useEffect(() => {
    const fetchAndDispatchComments = async () => {
      try {
        await dispatch(fetchPosts());
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
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
    <div>
      <h2>Photo Uploads</h2>
      {posts.map((post) => (
        <div key={post.id}>
          {post.profilePic && (
            <img src={post.profilePic} alt={`${post.author}`} />
          )}
          {post.picture && (
            <img src={post.picture} alt={`Post by ${post.author}`} />
          )}
        </div>
      ))}
    </div>
  );
};

export default Photos;
