import React, { useState } from "react";
import styles from "./GroupSortButtons.module.scss";
import { sortOptions } from "../../utils/variables";
import { SortOption } from "../../interface/Variables.interface";
import SortButton from "../SortButton";

function Index() {
  const [activeButton, setActiveButton] = useState("price"); // Default to 'price' being active

  return (
    <div className={styles.options}>
      {sortOptions.map((sort: SortOption) => (
        <SortButton
          key={sort.value}
          sort={sort}
          activeButton={activeButton}
          setActiveButton={setActiveButton}
        />
      ))}
    </div>
  );
}

export default Index;
