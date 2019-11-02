import React from "react";
import styled from "styled-components";
interface Props {
  options: (string | number)[];
  label: string;
  defaultValue?: string;
}
const Container = styled.div`
  label {
    margin-bottom: 0.5em;
    font-weight: 600;
  }
  select {
    width: 100%;
    padding: 0.5em;
    margin-bottom: 1em;
    font-size: 1em;
  }
`;

const Selectbox: React.FC<Props> = ({
  defaultValue = "Choose here",
  options,
  label
}) => {
  return (
    <Container>
      <label>{label}</label>
      <hr />
      <select>
        <option value="">{defaultValue}</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </Container>
  );
};

export default Selectbox;
