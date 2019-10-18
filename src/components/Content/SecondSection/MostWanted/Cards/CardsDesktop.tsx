import React from "react";
import styled from "styled-components";
import device from "../../../../device";
interface Props {}
const Container = styled.div`
  @media ${device.mobileS} {
    display: none;
  }
  @media ${device.laptopL} {
    display: block;
  }
`;
const CardsDesktop: React.FC<Props> = () => {
  return <Container>This is 4</Container>;
};

export default CardsDesktop;
