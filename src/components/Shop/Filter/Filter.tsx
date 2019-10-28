import React, { useState } from "react";
import { Container } from "./FilterStyle";
import { setMaxListeners } from "cluster";
interface Props {}

const Filter: React.FC<Props> = () => {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(100);
  const handleMin = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    if (e.target.id === "input1") setMin(value);
  };

  const handleMax = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    if (e.target.id === "input2") setMax(value);
  };

  return (
    <Container>
      <h3>Filter By</h3>
      <hr />
      <div>
        <div className="multi-range" data-lbound="0" data-ubound="100">
          <hr />
          <input
            id="input1"
            type="range"
            min="0"
            max="99"
            step="5"
            value={min}
            onChange={handleMin}
          />
          <input
            id="input2"
            type="range"
            min="5"
            max="100"
            step="1"
            value={max}
            onChange={handleMax}
          />
        </div>
        <p>
          min{min} max{max}
        </p>
      </div>
    </Container>
  );
};

export default Filter;
