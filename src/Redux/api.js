import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk("Get/Allproducts", async () => {
  const res = await axios.get("https://fakestoreapi.com/products");
  //   console.log(res.data);
  return res.data;
  // } catch (e) {
  //   return thunkAPI.rejectWithValue(e.message);
  // }
});
