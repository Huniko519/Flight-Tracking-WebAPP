import { combineReducers } from "@reduxjs/toolkit";
import aeroapi from "./aeroapi";

const rootReducer = combineReducers({
  aeroapi: aeroapi,
});

export default rootReducer;
