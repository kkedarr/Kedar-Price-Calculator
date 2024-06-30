import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  watches: [],
};

const watchesSlice = createSlice({
  name: "watches",
  initialState,
  reducers: {
    addWatch: (state, action) => {
      state.watches.push(action.payload);
    },
  },
});

export const { addWatch } = watchesSlice.actions;
export default watchesSlice.reducer;