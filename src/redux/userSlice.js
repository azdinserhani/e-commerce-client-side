import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    loginStart: (stat) => {
      stat.isFetching = true;
    },
    loginSuccuss: (stat, action) => {
      stat.isFetching = false;
      stat.currentUser = action.payload;
    },
    loginError: (stat) => {
      stat.error = true;
      stat.isFetching = false;
    },
  },
});

export const { loginStart, loginSuccuss, loginError } = userSlice.actions;
export default userSlice.reducer;
