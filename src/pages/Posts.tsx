import React from "react";
import { Provider } from "react-redux";
import PostList from "../components/PostList";
import store from "../store/store";

function posts() {
  return (
    <Provider store={store}>
      <div>
        <PostList />
      </div>
    </Provider>
  );
}

export default posts;
