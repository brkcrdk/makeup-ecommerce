import React from "react";
import styled from "styled-components";
import device from "../../../../device";
interface Props {}

const Container = styled.div`
  @media ${device.mobileS} {
    display: none;
  }
  @media ${device.mobileL} {
    display: block;
  }
  @media ${device.mobileTablet} {
    display: none;
  }
`;
const CardsMobileL: React.FC<Props> = () => {
  return <Container>this is 2</Container>;
};

export default CardsMobileL;
