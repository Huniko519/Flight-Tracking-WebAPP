import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  flightlist: "",
  searchident: "",
};

// Slice
const aeroapiSlice = createSlice({
  name: "aeroapi",
  initialState,
  reducers: {
    setFlightlists: (state, { payload }) => {
      state.flightlist = payload;
    },
    setSearchident: (state, { payload }) => {
      state.searchident = payload;
    },
  },
});

// Reducers
export default aeroapiSlice.reducer;

// Selectors
export const testSelector = (state) => state.aeroapi;

// Actions
export const { setFlightlists, setSearchident } = aeroapiSlice.actions;
