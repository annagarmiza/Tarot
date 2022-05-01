import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const SPREADS_URL = "http://localhost:3000/api/v1/spreads";

const initialState = {
  spreads: [],
  status: "idle", //'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

export const fetchSpreads = createAsyncThunk("fetchSpreads", async () => {
  try {
    const response = await axios.get(SPREADS_URL);

    return [...response.data.data.card_spreads];
  } catch (err) {
    throw err;
  }
});

const spreadsSlice = createSlice({
  name: "spreads",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchSpreads.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchSpreads.fulfilled, (state, action) => {
        state.status = "succeeded";
        //adding fetched spreads to the array
        state.spreads = [...action.payload];
        //console.log("THIS IS ACTION", action);
      })
      .addCase(fetchSpreads.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectAllSpreads = (state) => state.spreads.spreads;
export const getSpreadsStatus = (state) => state.spreads.status;
export const getError = (state) => state.spreads.error;

export default spreadsSlice;
