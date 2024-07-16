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
      const filter = state.carts.filter((item) => item._id !== action.payload);
      state.carts = filter;
    },
    addQuantity: (state, action) => {
      state.carts = state.carts.map((item) =>
        item._id === action.payload
          ? { ...item, quantity: parseInt(item.quantity) + 1 }
          : item
      );
    },
    minusQuantity: (state, action) => {
      state.carts = state.carts.map((item) =>
        item._id === action.payload
          ? { ...item, quantity: parseInt(item.quantity) - 1 }
          : item
      );
    },
  },
});

export const { addToCart, removeFromCart, addQuantity, minusQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
