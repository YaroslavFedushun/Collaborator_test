import React, { ChangeEvent } from "react";
import styles from "./FilterConnectionCheckbox.module.scss";
import { FilterOptions } from "../../interface/Variables.interface";

function Index({
  option,
  handleFilterTransfer,
}: {
  option: FilterOptions;
  handleFilterTransfer: any;
}) {
  return (
    <div key={option.title} className={styles.transfers__option}>
      <input
        id={option.title}
        type="checkbox"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          handleFilterTransfer(e, option.value)
        }
      />
      <label htmlFor={option.title} className={styles.transfers__label}>
        {option.title}
      </label>
    </div>
  );
}

export default Index;
