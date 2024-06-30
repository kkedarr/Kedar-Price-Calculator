import { configureStore } from "@reduxjs/toolkit";
import watchesReducer from "./features/watches/watchesSlice";

export const store = configureStore({
  reducer: {
    watches: watchesReducer,
  },
});
