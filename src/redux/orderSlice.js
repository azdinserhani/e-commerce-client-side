import { createSlice } from "@reduxjs/toolkit";

export const orderSlice = createSlice({
  name: "orders",
  initialState: {
    order: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    getOrderStart: (stats) => {
      stats.isFetching = true;
    },
    getOrderSuccuss: (stats, action) => {
      (stats.isFetching = false), (stats.order = action.payload);
    },
    getOrderError: (stats) => {
      (stats.error = true), (stats.isFetching = false);
    },
    deleteOrderStart: (stats) => {
      stats.isFetching = true;
    },
    deleteOrderSuccuss: (stats, action) => {
      (stats.isFetching = false),
        stats.order.splice(
          stats.order.findIndex((item) => item._id === action.payload),
          1
        );
    },
    deleteOrderError: (stats) => {
      (stats.error = true), (stats.isFetching = false);
    },
    
  },
});

export const {
  getOrderStart,
  getOrderError,
  getOrderSuccuss,
  deleteOrderStart,
  deleteOrderError,
  deleteOrderSuccuss,
  
} = orderSlice.actions;
export default orderSlice.reducer;
