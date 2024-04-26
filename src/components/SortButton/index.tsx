import React from "react";
import { setSortMethod } from "../../store/reducer";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { SortOption } from "../../interface/Variables.interface";
import styles from "./SortButton.module.scss";

interface Props {
  sort: SortOption;
  activeButton: string;
  setActiveButton: React.Dispatch<React.SetStateAction<string>>;
}

function Index({ sort, activeButton, setActiveButton }: Props) {
  const dispatch = useDispatch<AppDispatch>();
  const onClick = () => {
    dispatch(setSortMethod(sort.value));
    setActiveButton(sort.value);
  };

  return (
    <button
      type="button"
      className={activeButton === sort.value ? styles.active : ``}
      onClick={() => {
        onClick();
      }}
    >
      <span>{sort.title} </span>
    </button>
  );
}

export default Index;
