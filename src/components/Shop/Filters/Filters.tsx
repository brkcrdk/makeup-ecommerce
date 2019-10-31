import React from "react";
import { IFilter } from "../../../store/searchFilter/types";

interface Props {
  activeFilters: IFilter;
  tags: string[];
}

const Filters: React.FC<Props> = ({ activeFilters }) => {
  const x = Object.entries(activeFilters);
  const values = x
    .filter((ent) => ent[1] !== "" && ent[1] !== 0 && ent[1] !== 100)
    .map((ent) => ent);
  console.log(values);
  return (
    <div>
      {values.map((ent, i) => (
        <li key={i}>
          {ent[0]}= {ent[1]}
        </li>
      ))}
    </div>
  );
};

export default Filters;
