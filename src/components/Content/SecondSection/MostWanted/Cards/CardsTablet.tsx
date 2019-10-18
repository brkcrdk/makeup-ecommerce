import React from "react";
import styled from "styled-components";
import device from "../../../../device";
import Card from "../../../../UI/Card/Card";
import Carousel from "../../../../UI/Carousel/Carousel";

interface Props {}
const Container = styled.div`
  @media ${device.mobileS} {
    display: none;
  }
  @media ${device.mobileTablet} {
    display: block;
  }
  @media ${device.laptopL} {
    display: none;
  }
`;
const CardsTablet: React.FC<Props> = () => {
  return <Container>This is 3</Container>;
};

export default CardsTablet;
