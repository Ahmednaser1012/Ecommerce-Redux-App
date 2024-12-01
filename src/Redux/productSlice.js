import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "./api";
const initialState = [{ id: 1, name: "John", age: 25 }];
export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      return [...action.payload];
    });
  },
});

// Action creators are generated for each case reducer function
export const {} = productSlice.actions;

export default productSlice.reducer;
