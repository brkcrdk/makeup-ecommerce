import React from "react";
import styled from "styled-components";
import { device, fonts, colours } from "../../utils";
interface Props {}
const Container = styled.div`
  margin: 2em 0;
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
const Info = styled.div`
  display: grid;
  text-align: center;
  box-shadow: ${colours.boxShadow};
  border-radius: 1em;
  padding: 0.5em 1em;
  span {
    margin: 0 0.5em;
  }
`;
const Summary: React.FC<Props> = () => {
  return (
    <Container>
      <h3>Order Summary</h3>
      <hr />
      <Info>
        <p>
          Sub Total <span /> $ 123134
        </p>
        <p>
          Sub Total <span /> $ 123134
        </p>
      </Info>
    </Container>
  );
};

export default Summary;
