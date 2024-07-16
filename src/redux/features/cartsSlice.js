import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: [],
};

export const cartSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.carts.push(action.payload);
    },
    removeFromCart: (state, action) => {
      console.log(action.payload);
      const filter = state.carts.filter((item) => item._id !== action.payload);
      state.carts = filter;
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
