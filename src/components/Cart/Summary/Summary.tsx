import React from "react";
import styled from "styled-components";
import { device, fonts } from "../../utils";
interface Props {}
const Container = styled.div`
  margin: 2em;
  @media ${device.mobileS} {
    padding: 0;
  }
  @media ${device.tablet} {
    padding: 2em;
  }

  h3 {
    font-family: ${fonts.raleway};
  }
`;
const Summary: React.FC<Props> = () => {
  return <Container>Summary goes here..</Container>;
};

export default Summary;
