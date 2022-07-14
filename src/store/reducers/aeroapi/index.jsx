import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  flightlist: "",
  searchident: "",
};

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

export default aeroapiSlice.reducer;
export const testSelector = (state) => state.aeroapi;
export const { setFlightlists, setSearchident } = aeroapiSlice.actions;
