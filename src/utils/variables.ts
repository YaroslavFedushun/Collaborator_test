import { FilterOptions, SortOption } from "../interface/Variables.interface";

export const filterOptionsVariable: FilterOptions[] = [
  {
    value: -1,
    title: "Всі",
  },
  {
    value: 0,
    title: "Без Пересадок",
  },
  {
    value: 1,
    title: "1 пересадка",
  },
  {
    value: 2,
    title: "2 пересадки",
  },
  {
    value: 3,
    title: "3 пересадки",
  },
];

export const sortOptions: SortOption[] = [
  {
    value: "price",
    title: "Найдешевший",
  },
  {
    value: "duration",
    title: "Найшвидший",
  },
  {
    value: "optimal",
    title: "Оптимальний",
  },
];
