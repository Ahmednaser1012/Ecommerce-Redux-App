import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addcart(state, action) {
      const findItem = state.find((item) => item.id === action.payload.id);
      if (findItem) {
        findItem.quantity += 1;
      } else {
        const ItemClone = { ...action.payload, quantity: 1 };
        state.push(ItemClone);
      }
    },
    removecart(state, action) {
      return state.filter((item) => item.id !== action.payload.id);
    },
    clearInterval(state, action) {
      return [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addcart, removecart, clearInterval } = cartSlice.actions;

export default cartSlice.reducer;
