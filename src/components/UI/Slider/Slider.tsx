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
  rangeMin: number;
  rangeMax: number;
  values: { min: number; max: number };
  // handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setValues: React.Dispatch<
    React.SetStateAction<{
      min: number;
      max: number;
    }>
  >;
}

const Slider: React.FC<Props> = ({ rangeMax, rangeMin, values, setValues }) => {
  const handleMin = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    if (e.target.id === "min" && value < values.max) Re;
  };

  const handleMax = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    if (e.target.id === "max" && value > values.min) setMax(value);
  };
  return (
    <Container>
      <div
        className="multi-range"
        data-lbound={`${rangeMin}`}
        data-ubound={`${rangeMax}`}>
        <hr />
        <input
          id="min"
          type="range"
          min={`${rangeMin}`}
          max={`${rangeMax}`}
          step="5"
          value={values.min}
          onChange={handleMin}
        />
        <input
          id="max"
          type="range"
          min={`${rangeMin}`}
          max={`${rangeMax}`}
          step="5"
          value={values.max}
          onChange={handleMax}
        />
      </div>
      <p>
        min{values.min} max{values.max}
      </p>
    </Container>
  );
};

export default Slider;
