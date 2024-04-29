import { configureStore } from "@reduxjs/toolkit";
import count from "../slices/counter";

export const store = configureStore({
  reducer: {
    count,
  },
});
