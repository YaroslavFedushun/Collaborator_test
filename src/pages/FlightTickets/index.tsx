import React, { useEffect, useState } from "react";
import logo from "../../assets/images/logo.png";
import NumberOfTransfers from "../../components/FilterAirTransfersGroup";
import FlightCard from "../../components/FlightCard";
import Tabs from "../../components/SortButtonsGroup";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { FlightDetails } from "../../interface/FlightDetails.interface";
import { sortFlights } from "../../utils/sortUtil";
import { fetchFlightsData } from "../../store/reducer";
import { filterFlightsByAirTransfers } from "../../utils/filterUtil";
import styles from "./FlightTickets.module.scss";

const Index = () => {
  const dispatch = useDispatch<AppDispatch>();
  const data: FlightDetails[] = useSelector(
    (state: RootState) => state.flights.flightDetails,
  );
  const filterOption: number[] = useSelector(
    (state: RootState) => state.flights.filterOption,
  );
  const sortOption: string = useSelector(
    (state: RootState) => state.flights.sortOption,
  );
  const [maxItemsForPage, setMaxItemsForPage] = useState(5);

  useEffect(() => {
    dispatch(fetchFlightsData());
  }, [dispatch]);

  const sortAndFilterData = () => {
    const filteredData = filterFlightsByAirTransfers([...data], filterOption);
    return sortFlights(filteredData, sortOption);
  };

  const loadMoreTickets = () => {
    setMaxItemsForPage((prevState) => prevState + 5);
  };

  const filteredData: FlightDetails[] = sortAndFilterData();
  const loadMoreLength: number =
    filteredData.length - maxItemsForPage > 5
      ? 5
      : filteredData.length - maxItemsForPage;

  return (
    <div className={styles.list}>
      <a href={"/"}>
        <img alt={"AirLine For Europe"} src={logo} />
      </a>
      <div className={styles.list__body}>
        <NumberOfTransfers />
        <div>
          <Tabs />
          {filteredData
            .slice(0, maxItemsForPage)
            .map((flyPass: FlightDetails) => (
              <FlightCard key={flyPass.id} data={flyPass} />
            ))}
          {filteredData.length > maxItemsForPage && (
            <button
              className={styles.list__loadMoreBtn}
              type={"button"}
              onClick={loadMoreTickets}
            >
              показати ще {loadMoreLength} квитків
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
