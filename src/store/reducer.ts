import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { FlightDetails } from "../interface/FlightDetails.interface";
import { dataFlightTickets } from "./source/api";
import { AppState } from "../interface/Store.interface";

const initialState: AppState = {
  flightDetails: [],
  filterOption: [],
  sortOption: "price",
  loading: false,
  error: null,
};

export const fetchFlightsData = createAsyncThunk(
  "FlightTickets/fetchData",
  async () => {
    return await new Promise<FlightDetails[]>((resolve) =>
      setTimeout(() => resolve(dataFlightTickets), 500),
    );
  },
);
export const flightSlice = createSlice({
  name: "flights",
  initialState,
  reducers: {
    setSortMethod(state, action: PayloadAction<string>) {
      state.sortOption = action.payload;
    },
    setFilterMethod(state, action: PayloadAction<number[]>) {
      state.filterOption = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFlightsData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFlightsData.fulfilled, (state, action) => {
        state.flightDetails = action.payload;
        state.loading = false;
      })
      .addCase(fetchFlightsData.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export const { setFilterMethod, setSortMethod } = flightSlice.actions;
