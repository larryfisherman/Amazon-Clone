import { createSlice } from "@reduxjs/toolkit";

const checkoutSlice = createSlice({
  name: "checkout",
  initialState: {
    items: [],
  },
  reducers: {
    pushItems: (state, action) => {
      state.items.push(action.payload.item);
    },
  },
});
export const { pushItems } = checkoutSlice.actions;
export const selectItems = (state) => state.checkout.items;

export default checkoutSlice.reducer;
