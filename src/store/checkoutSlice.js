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
    removeItems: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      let newItems = [...state.items];
      if (index >= 0) {
        newItems.splice(index, 1);
        state.items = newItems;
      } else {
        console.warn(`Can't remove an item!`);
      }
    },
    cleanItems: (state) => {
      state.items = [];
    },
  },
});
export const { pushItems, removeItems, cleanItems } = checkoutSlice.actions;
export const selectItems = (state) => state.checkout.items;
export const getBasketTotal = (items) =>
  items?.reduce((amount, item) => item.price + amount, 0);

export default checkoutSlice.reducer;
