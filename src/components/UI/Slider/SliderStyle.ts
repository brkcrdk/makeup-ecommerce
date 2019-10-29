import styled from "styled-components";

const thumbStyle = `
    transform: translateY(-14px);
    -webkit-appearance: none;
    appearance: none;
    cursor: pointer;
    height: 1em;
    width: 1em;
    background: red;
    border-radius: 50%;`;

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
    hr {
      border: 1px solid red;
      position: absolute;
      width: 100%;
      top: 50%;
    }
    input[type="range"] {
      -webkit-appearance: none;
      width: calc(100% - 16px);
      position: absolute;
      bottom: 5px;
      left: 0;
      &:last-of-type {
        margin-left: 16px;
      }

      &::-webkit-slider-thumb {
        ${thumbStyle}
      }
      &::-moz-range-thumb {
        ${thumbStyle}
      }
      &::-ms-thumb {
        ${thumbStyle}
      }
      &::-webkit-slider-runnable-track {
        -webkit-appearance: none;
        height: 0px;
      }
      &::-moz-range-track {
        -webkit-appearance: none;
        height: 0px;
      }
      &::-ms-track {
        -webkit-appearance: none;
        height: 0px;
      }
    }
  }
`;
