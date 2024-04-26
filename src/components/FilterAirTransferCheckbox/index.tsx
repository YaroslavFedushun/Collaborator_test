import React, { ChangeEvent } from "react";
import styles from "./FilterAirTransferCheckbox.module.scss";
import { FilterOptions } from "../../interface/Variables.interface";

interface Props {
  option: FilterOptions;
  handleFilter: (e:ChangeEvent<HTMLInputElement>, val: number) => void;
}
function Index({ option, handleFilter}: Props ) {
  return (
    <div key={option.title} className={styles.transfers__option}>
      <input
        id={option.title}
        type="checkbox"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          handleFilter(e, option.value)
        }
      />
      <label htmlFor={option.title} className={styles.transfers__label}>
        {option.title}
      </label>
    </div>
  );
}

export default Index;
