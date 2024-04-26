import React from "react";
import "./App.css";
import Flights from "./pages/FlightTickets";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Flights />
      </Provider>
    </div>
  );
}

export default App;
