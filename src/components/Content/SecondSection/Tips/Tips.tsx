import React from "react";
import { Container, TipContainer } from "./TipStyle";
interface Props {}

const Tips: React.FC<Props> = () => {
  return (
    <Container>
      <TipContainer>Tip1</TipContainer>
      <TipContainer>Tip2</TipContainer>
      <TipContainer>Tip3</TipContainer>
    </Container>
  );
};

export default Tips;
