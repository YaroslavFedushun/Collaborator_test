import { FlightDetails } from "./FlightDetails.interface";

export interface AppState {
  flightDetails: FlightDetails[];
  filteredFlights: FlightDetails[];
  filterOption: number[];
  sortOption: string; // Array to store selected stop filters
  loading: boolean;
  error: any | null;
}
