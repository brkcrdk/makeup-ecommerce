import React, { useState } from "react";
import { Container } from "./FilterStyle";
interface Props {}

const Filter: React.FC<Props> = () => {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(100);
  const handleMin = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    if (value >= 0 && value <= 100) {
      setMin(value);
    } else {
      alert("value must be 0-100");
    }
  };

  const handleMax = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    if (value >= 0 && value <= 100) {
      setMin(value);
    } else {
      alert("value must be 0-100");
    }
  };
  const slider = React.createElement("input", {
    type: "range",
    max: "100",
    min: 0,
    step: 1,
    value: "10"
  });

  return (
    <Container>
      <h3>Filter By</h3>
      <hr />
      <div>
        <span className="multi-range">
          <input type="range" min="0" max="50" value="5" id="lower" />
          <input type="range" min="0" max="50" value="45" id="upper" />
        </span>
      </div>
    </Container>
  );
};

export default Filter;
