import styled from "styled-components";

export const SlideWrapper = styled.div`
  display: flex;
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
    border: 1px solid #ddd;
    font-family: monospace;
  }
  .multi-range > hr {
    border: 1px solid red;
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
    -webkit-appearance: none;
    border-radius: 15px;
    appearance: none;
    width: 25px;
    height: 25px;
    background: #4caf50;
    cursor: pointer;
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
`;
