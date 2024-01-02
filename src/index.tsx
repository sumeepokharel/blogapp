// index.js
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "../src/store/store"; // Import your Redux store
import "./index.css";
import PostList from "./components/PostList";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PostList />
    </Provider>
  </React.StrictMode>
);
