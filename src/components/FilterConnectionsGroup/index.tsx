import React, { ChangeEvent, useState } from "react";
import styles from "./FilterConnectionsGroup.module.scss";
import { useDispatch } from "react-redux";
import { setFilterMethod } from "../../store/reducer";
import { filterOptionsVariable } from "../../utils/variables";
import { FilterOptions } from "../../interface/Variables.interface";
import FlightConnectionCheckbox from "../FilterConnectionCheckbox";

function Index() {
  const dispatch = useDispatch();
  const [filterOptions, setFilterOptions] = useState<number[]>([]);
  React.useEffect(() => {
    dispatch(setFilterMethod(filterOptions));
  }, [dispatch, filterOptions]);

  const handleFilterTransfer = (
    e: ChangeEvent<HTMLInputElement>,
    value: number,
  ) => {
    if (filterOptions.includes(value)) {
      setFilterOptions((current) => current.filter((item) => item !== value));
    } else {
      setFilterOptions((current) => [...current, value]);
    }
  };

  return (
    <div className={styles.transfers}>
      <form className={styles.transfers__form}>
        <span className={styles.transfers__title}>кількість пересадок</span>
        {filterOptionsVariable.map((option: FilterOptions) => (
          <FlightConnectionCheckbox
            key={option.value}
            option={option}
            handleFilterTransfer={handleFilterTransfer}
          />
        ))}
      </form>
    </div>
  );
}

export default Index;
