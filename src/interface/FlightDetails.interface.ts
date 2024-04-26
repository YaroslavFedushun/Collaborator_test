export interface FlightRoute {
  route: string;
  status: string;
  connections: string[];
  time: string;
  duration: string;
}

export interface FlightDetails {
  price: number;
  id: number;
  from: FlightRoute;
  to: FlightRoute;
}
