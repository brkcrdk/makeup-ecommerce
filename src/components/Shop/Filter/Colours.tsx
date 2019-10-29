import React from "react";
import styled from "styled-components";
const Colour = styled.div`
  cursor: pointer;
  width: 1.5em;
  height: 1.5em;
  margin: 0.2em;
  border-radius: 50%;
  background: blue;
  &:hover > span {
    visibility: visible;
    top: -2.5em;
  }
  span {
    cursor: text;
    visibility: hidden;
    position: relative;
    padding: 0.5em;
    color: #fff;
    background-color: #da362a;
    -webkit-border-radius: 0.5em;
    -moz-border-radius: 0.5em;
    border-radius: 0.5em;
    &:before {
      content: " ";
      height: 0;
      position: absolute;
      width: 0;
      bottom: -1em;
      border: 10px solid transparent;
      border-top-color: #da362a;
    }
  }
`;
interface Props {
  hexValue: string;
  colourName: string;
}

const Colours: React.FC<Props> = () => {
  return (
    <Colour>
      <span>Tooltip</span>
    </Colour>
  );
};

export default Colours;
