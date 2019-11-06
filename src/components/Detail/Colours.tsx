import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  user-select: none;
  display: inline-block;
  cursor: pointer;
`;
const Colour = styled.div`
  width: 2em;
  height: 2em;
  border-radius: 50%;
`;
const Name = styled.span`
  display: none;
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
