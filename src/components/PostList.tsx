import { useSelector } from "react-redux";
import { selectPosts } from "../reducers/postSlice";
import { selectComments } from "../reducers/commentSlice";

const Posts = () => {
  const posts = useSelector(selectPosts);
  const comments = useSelector(selectComments);
  return (
    <div>
      <h2>Posts</h2>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <p>{post.picture}</p>
          {comments.map((comment) => (
            <div key={comment.postId}>
              <p>{comment.text}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Posts;
