import React from "react";
import { Container, TipContainer } from "./TipStyle";
import Tip from "../../../UI/TipCard/Tip";
interface Props {}

const Tips: React.FC<Props> = () => {
  return (
    <Container>
      <TipContainer>
        <Tip />
      </TipContainer>
      <TipContainer>
        <Tip />
      </TipContainer>
      <TipContainer>
        <Tip />
      </TipContainer>
    </Container>
  );
};

export default Tips;
