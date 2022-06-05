import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const CARDS_URL = "http://localhost:3000/api/v1/cards?ids=";

/**API calls related to reading*/
export const fetchInterpretation = createAsyncThunk(
  "fetchInterpretation",
  async (ids) => {
    try {
      const response = await axios.get(CARDS_URL + ids);

      return [...response.data.data.cards];
    } catch (err) {
      throw err;
    }
  }
);

const readingSlice = createSlice({
  name: "reading",
  initialState: {
    spread: {}, //chosen spread
    spreadName: "",
    spreadMeaning: [],
    spreadCardsQuantity: 0, //max
    currentCard: 0, //current card number
    question: "",
    cards: [], //chosen cards
    status: "idle", //'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {
    setQuestion(state, action) {
      state.question = action.payload;
    },
    setSpread(state, action) {
      state.spread = action.payload;
      state.spreadName = action.payload.layoutName;
      state.spreadCardsQuantity = action.payload.cardsQuantity;
      state.spreadMeaning = action.payload.layout.map((x) => x.meaning);
    },
    addChosenCard(state, action) {
      console.log("Chosen card added");
      state.cards.push({
        id: action.payload.id,
        name: action.payload.name,
        img: action.payload.img,
        spread_meaning: state.spreadMeaning[state.currentCard],
      });
      state.currentCard++;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchInterpretation.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchInterpretation.fulfilled, (state, action) => {
        state.status = "succeeded";
        //from array to hashmap
        const result = action.payload.reduce(function (map, obj) {
          map[obj._id] = obj;
          return map;
        }, {});
        //loop through array 2 and concat
        const arr = [];
        const cardsArrOrg = state.cards;
        for (let i = 0; i < cardsArrOrg.length; i++) {
          delete result[cardsArrOrg[i].id].img;
          const obj = { ...cardsArrOrg[i], ...result[cardsArrOrg[i].id] };
          delete obj._id;
          delete obj.__v;
          arr.push(obj);
        }
        //update cards arr
        state.cards = arr;
      })
      .addCase(fetchInterpretation.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const readingActions = readingSlice.actions;
export const getSpreadMeaningArr = (state) => state.reading.spreadMeaning;
export const getCardSpreadMax = (state) => state.reading.spreadCardsQuantity;
export const getCurrentCardCount = (state) => state.reading.currentCard;
export const getChosenSpreadLayoutName = (state) => state.reading.spreadName;
export const getChosenCard = (state) => state.reading.cards.slice(-1)[0];
export const getChosenCardsArr = (state) => state.reading.cards;
export const getInterpretationStatus = (state) => state.reading.status;
export const getQuestion = (state) => state.reading.question;
export const getListOfCardIds = (state) =>
  state.reading.cards.map((card) => card.id).toString();
export const getError = (state) => state.reading.error;

export default readingSlice;
