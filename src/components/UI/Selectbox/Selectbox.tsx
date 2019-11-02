import React from "react";

interface Props {
  options: string[];
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
