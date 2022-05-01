import { configureStore } from "@reduxjs/toolkit";
import readingSlice from "./reading-slice";
import spreadsSlice from "./spreads-slice";
import deckSlice from "./deck-slice";

const store = configureStore({
  reducer: {
    reading: readingSlice.reducer,
    spreads: spreadsSlice.reducer,
    deck: deckSlice.reducer,
  },
});

export default store;
