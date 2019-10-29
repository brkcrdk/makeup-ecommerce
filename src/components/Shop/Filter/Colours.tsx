import React from "react";
import styled from "styled-components";
const Colour = styled.div`
  width: 1.5em;
  height: 1.5em;
  border-radius: 50%;
  background: blue;
`;
interface Props {}

const Colours: React.FC<Props> = () => {
  return <Colour />;
};

export default Colours;
