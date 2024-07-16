import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: [],
};

export const cartSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      console.log(action.payload);
      state.carts.push(action.payload);
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
