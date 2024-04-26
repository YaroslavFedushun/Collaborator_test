import { FlightDetails } from "../interface/FlightDetails.interface";

export const filterFlightsByAirTransfers = (
  data: FlightDetails[],
  stopsFilter: number[],
) => {
  if (stopsFilter.includes(-1) || !stopsFilter.length) {
    return data;
  } else {
    return data.filter((flight) => {
      const maxStops = [flight.from, flight.to].reduce(
        (max, route) => Math.max(max, route.airTransfers.length),
        0,
      );
      return stopsFilter.includes(maxStops);
    });
  }
};
