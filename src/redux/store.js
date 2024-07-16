import { configureStore } from "@reduxjs/toolkit";

import cartReducers from "./features/cartsSlice";

export const store = configureStore({
  reducer: {
    carts: cartReducers,
  },
});
