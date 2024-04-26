import { FlightDetails } from "./FlightDetails.interface";

export interface AppState {
  flightDetails: FlightDetails[];
  filterOption: number[];
  sortOption: string;
  loading: boolean;
  error: any | null;
}
