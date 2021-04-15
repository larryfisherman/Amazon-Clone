import { configureStore } from "@reduxjs/toolkit";
import checkoutReducer from "./checkoutSlice";
import userReducer from "./userSlice";

export default configureStore({
  reducer: {
    checkout: checkoutReducer,
    user: userReducer,
  },
});
