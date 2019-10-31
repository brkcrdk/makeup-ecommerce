import React from "react";
import styled from "styled-components";
import { IFilter } from "../../../store/searchFilter/types";

interface Props {
  activeFilters: IFilter;
  tags: string[];
}

const Container = styled.div`
  display: flex;
`;

const Filters: React.FC<Props> = ({ activeFilters, tags }) => {
  const x = Object.entries(activeFilters);
  const values = x
    .filter((ent) => ent[1] !== "" && ent[1] !== 0 && ent[1] !== 100)
    .map((ent) => ent);
  return (
    <Container>
      {values.map((ent, i) => (
        <li key={i}>
          {ent[0]}= {ent[1]}
        </li>
      ))}
      {tags.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </Container>
  );
};

export default Filters;
