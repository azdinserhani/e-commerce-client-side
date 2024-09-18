import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    totalPrice: 0,
  },
  reducers: {
    addProduct: (stat, action) => {
      const product = action.payload;
      if (product && product.price && product.quantity) {
        stat.quantity += 1;
        stat.products.push(action.payload);
        stat.totalPrice += product.price * product.quantity;
      } else {
        console.error("Invalid product payload:", product);
      }
    },
    clearCart: (stat) => {
      stat.products = [];
      stat.quantity = 0;
      stat.totalPrice = 0;
    },
  },
});

export const { addProduct, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
