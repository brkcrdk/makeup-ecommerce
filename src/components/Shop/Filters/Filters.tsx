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

const Filter = styled.div`
  border: 1px solid grey;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2em;
  margin: 0.5em;
  p {
    padding: 0.5em;
  }
  button {
    height: 100%;
    margin-left: 0.5em;
    background-color: transparent;
    border: none;
    border-left: 1px double grey;
    cursor: pointer;
  }
`;

const Filters: React.FC<Props> = ({ activeFilters, tags }) => {
  const filters = Object.entries(activeFilters);
  const values = filters
    .filter((ent) => ent[1] !== "" && ent[1] !== 0 && ent[1] !== 100)
    .map((ent) => ent);
  return (
    <Container>
      {values.map((ent, i) => {
        const type = ent[0].replace("_", " ");
        const value = ent[1];
        return (
          <Filter key={i}>
            <p>
              {type}={value}
            </p>
            <button>X</button>
          </Filter>
        );
      })}
      {tags.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
      <Filter>
        <p>Filter Text</p>
        <button>X</button>
      </Filter>
    </Container>
  );
};

export default Filters;
