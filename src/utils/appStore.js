import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
const appStore = configureStore({
  //reducer to maintain different reducers of each slice
  reducer: {
    cart: cartReducer, //small reducers from different slices
  },
});
export default appStore;
