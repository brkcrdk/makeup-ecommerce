import React from "react";
import styled from "styled-components";
interface Props {
  options: (string | number)[];
  label: string;
  defaultValue?: string;
}

const Selectbox: React.FC<Props> = ({
  defaultValue = "Choose here",
  options,
  label
}) => {
  return (
    <>
      <label>{label}</label>
      <select>
        <option value="">{defaultValue}</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </>
  );
};

export default Selectbox;
