import React from "react";
import { Provider } from "react-redux";
import PostList from "../components/PostList";
import store from "../store/store";

function posts() {
  return (
    <div>
      <Provider store={store}>
        <PostList />
      </Provider>
    </div>
  );
}

export default posts;
