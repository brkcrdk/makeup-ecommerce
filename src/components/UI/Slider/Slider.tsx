import React, { useState } from "react";
import styled from "styled-components";
const Container = styled.div`
  div {
    .multi-range,
    .multi-range * {
      box-sizing: border-box;
      padding: 0;
      margin: 0;
    }
    .multi-range {
      position: relative;
      width: 100%;
      height: 28px;
      /* margin: 16px; */
      border: 1px solid #ddd;
      font-family: monospace;
    }
    .multi-range > hr {
      position: absolute;
      width: 100%;
      top: 50%;
    }
    .multi-range > input[type="range"] {
      width: calc(100% - 16px);
      position: absolute;
      bottom: 6px;
      left: 0;
    }
    .multi-range > input[type="range"]:last-of-type {
      margin-left: 16px;
    }
    .multi-range > input[type="range"]::-webkit-slider-thumb {
      transform: translateY(-18px);
    }
    .multi-range > input[type="range"]::-webkit-slider-runnable-track {
      -webkit-appearance: none;
      height: 0px;
    }
    .multi-range > input[type="range"]::-moz-range-thumb {
      transform: translateY(-18px);
    }
    .multi-range > input[type="range"]::-moz-range-track {
      -webkit-appearance: none;
      height: 0px;
    }
    .multi-range > input[type="range"]::-ms-thumb {
      transform: translateY(-18px);
    }
    .multi-range > input[type="range"]::-ms-track {
      -webkit-appearance: none;
      height: 0px;
    }
  }
`;

interface Props {
  minBound: number;
  maxValue: number;
}

const Slider: React.FC<Props> = ({ minBound, maxValue }) => {
  const [min, setMin] = useState(minBound);
  const [max, setMax] = useState(maxValue);
  const handleMin = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    if (e.target.id === "input1" && value < max) setMin(value);
  };

  const handleMax = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    if (e.target.id === "input2" && value > min) setMax(value);
  };
  return (
    <Container>
      <div
        className="multi-range"
        data-lbound={`${minBound}`}
        data-ubound={`${maxValue}`}>
        <hr />
        <input
          id="input1"
          type="range"
          min={`${minBound}`}
          max={`${maxValue}`}
          step="1"
          value={min}
          onChange={handleMin}
        />
        <input
          id="input2"
          type="range"
          min={`${minBound}`}
          max={`${maxValue}`}
          step="1"
          value={max}
          onChange={handleMax}
        />
      </div>
      <p>
        min{min} max{max}
      </p>
    </Container>
  );
};

export default Slider;
