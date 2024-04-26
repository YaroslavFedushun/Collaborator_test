import { configureStore } from "@reduxjs/toolkit";
import { flightSlice } from "./reducer";

const store = configureStore({
  reducer: {
    flights: flightSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
