import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const CARDS_URL = "http://localhost:3000/api/v1/cards?fields=name,img";

const initialState = {
  cards: [],
  status: "idle", //'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

export const fetchCards = createAsyncThunk("fetchCards", async () => {
  try {
    const response = await axios.get(CARDS_URL);
    return [...response.data.data.cards];
  } catch (err) {
    throw err;
  }
});

const deckSlice = createSlice({
  name: "deck",
  initialState,
  reducers: {
    handleShuffle(state, action) {
      const array = [...state.cards];
      let currentIndex = array.length,
        temporaryValue,
        randomIndex;
      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
      state.cards = [...array];
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchCards.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchCards.fulfilled, (state, action) => {
        state.status = "succeeded";
        //adding fetched spreads to the array
        state.cards = [...action.payload];

        console.log("THIS IS ACTION CARDS", action);
      })
      .addCase(fetchCards.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
export const selectAllCards = (state) => state.deck.cards;
export const getCardsStatus = (state) => state.deck.status;
export const getError = (state) => state.deck.error;
export const deckActions = deckSlice.actions;
export default deckSlice;
