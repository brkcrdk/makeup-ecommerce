import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  user-select: none;
  display: inline-block;
  cursor: pointer;
  &:hover > span {
    visibility: visible;
  }
`;
const Colour = styled.div`
  width: 2em;
  height: 2em;
  border-radius: 50%;
`;

const Name = styled.span`
  visibility: hidden;
  width: 160px;
  background-color: #555;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 8px 0;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -80px;
  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #555 transparent transparent transparent;
  }
`;
interface Props {}

const Colours: React.FC<Props> = () => {
  return (
    <Container>
      <Colour style={{ backgroundColor: `red` }} />
      <Name>Colour Name</Name>
    </Container>
  );
};

export default Colours;
