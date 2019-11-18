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
const SummaryInfo = styled.div`
  display: grid;
  text-align: center;
  box-shadow: ${colours.boxShadow};
  border-radius: 1em;
  padding: 0.5em 1em;
`;
const SummaryDetail = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 6fr);
  p {
    margin: 0 0.5em;
    font-family: ${fonts.aBeeZee};
    text-align: right;
    &:last-child {
      text-align: left;
    }
  }
`;

const Summary: React.FC<Props> = () => {
  return (
    <Container>
      <h3>Order Summary</h3>
      <hr />
      <SummaryInfo>
        <SummaryDetail>
          <p>Sub Total</p>
          <p>$123132</p>
        </SummaryDetail>
        <SummaryDetail>
          <p>Shipping Charge</p>
          <p>$123132</p>
        </SummaryDetail>
        <SummaryDetail>
          <p>Sale Tax</p>
          <p>$123132</p>
        </SummaryDetail>
      </SummaryInfo>
    </Container>
  );
};

export default Summary;
