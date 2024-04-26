import {
  FlightDetails,
  FlightRoute,
} from "../interface/FlightDetails.interface";

export const parseDuration = (duration: string) => {
  const matches = duration.match(/(\d+)г (\d+)хв/);
  return matches ? parseInt(matches[1], 10) * 60 + parseInt(matches[2], 10) : 0;
};

export const getTotalFlightTime = (routes: FlightRoute[]) => {
  return routes.reduce((sum, route) => sum + parseDuration(route.duration), 0);
};

export const sortByPrice = (data: FlightDetails[]) => {
  return data.sort((a, b) => a.price - b.price);
};

export const sortByDuration = (data: FlightDetails[]) => {
  return data.sort((a, b) => {
    const totalDurationA = getTotalFlightTime([a.from, a.to]);
    const totalDurationB = getTotalFlightTime([b.from, b.to]);
    return totalDurationA - totalDurationB;
  });
};

export const sortByOptimal = (data: FlightDetails[]) => {
  return data.sort((a, b) => {
    const totalTimeA = getTotalFlightTime([a.from, a.to]);
    const totalTimeB = getTotalFlightTime([b.from, b.to]);
    if (totalTimeA === totalTimeB) {
      const stopsA = a.from.airTransfers.length + a.to.airTransfers.length;
      const stopsB = b.from.airTransfers.length + b.to.airTransfers.length;
      if (stopsA === stopsB) {
        return a.price - b.price;
      }
      return stopsA - stopsB;
    }
    return totalTimeA - totalTimeB;
  });
};

export const sortFlights = (data: FlightDetails[], sortOption: string) => {
  if (sortOption === "duration") return sortByDuration(data);
  if (sortOption === "optimal") return sortByOptimal(data);
  return sortByPrice(data);
};
