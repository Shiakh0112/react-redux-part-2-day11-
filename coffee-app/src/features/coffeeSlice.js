// src/features/coffeeSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// API endpoint
const API_URL =
  "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-coffee";

// Thunk for fetching coffee data
export const fetchCoffeeData = createAsyncThunk(
  "coffee/fetchCoffeeData",
  async (sort = "") => {
    const response = await axios.get(`${API_URL}?sort=${sort}`);
    return response.data.data;
  }
);

const coffeeSlice = createSlice({
  name: "coffee",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCoffeeData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCoffeeData.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchCoffeeData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default coffeeSlice.reducer;
