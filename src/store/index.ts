import { combineReducers, configureStore } from "@reduxjs/toolkit";
import serverReducer from "./serverReducer";

const rootReducer = combineReducers({
  stroke: serverReducer,
});

export type IRootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,
});
