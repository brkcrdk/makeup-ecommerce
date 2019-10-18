import React from "react";
import styled from "styled-components";
import device from "../../../../device";
interface Props {}
const Container = styled.div`
  @media ${device.mobileL} {
    display: none;
  }
`;

const CardsMobile: React.FC<Props> = () => {
  return <Container>This is 1 </Container>;
};

export default CardsMobile;
