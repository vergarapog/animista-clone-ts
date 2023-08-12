import { configureStore } from "@reduxjs/toolkit";

import animationsReducer from "./reducers/animationsReducer";
import optionsReducer from "./reducers/optionsReducer";

const store = configureStore({
  reducer: {
    animationsReducer: animationsReducer,
    optionsReducer: optionsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
