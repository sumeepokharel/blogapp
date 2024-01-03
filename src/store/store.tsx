<<<<<<< HEAD
import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import rootReducer, { RootState } from "../reducers/rootReducer";
//import thunk, { ThunkMiddleware as ReduxThunkMiddleware } from "redux-thunk";
import { thunk } from "redux-thunk";
import { fetchComments } from "../reducers/commentSlice";

// Define your ThunkMiddleware type
import { ThunkDispatch } from "redux-thunk";
import { Middleware, MiddlewareAPI } from "redux";
import { Action as ReduxAction } from "@reduxjs/toolkit";

export type ThunkMiddleware = Middleware<
  ThunkDispatch<RootState, undefined, ReduxAction<string>>,
  RootState
>;
=======
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers/rootReducer";
>>>>>>> aa4b9aeadfcafd97002a94d59a6d3c01a3a5aa0d

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(thunk as unknown as ThunkMiddleware),
});

export default store;

export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
