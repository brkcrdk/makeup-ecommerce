import React from "react";
import styled from "styled-components";
import { device } from "../../utils";
const Container = styled.div`
  @media ${device.mobileS} {
    display: block;
  }
  @media ${device.laptop} {
    display: none;
  }
`;

interface Props {
  products: [];
  isLoading: boolean;
}

const MobileFilter: React.FC<Props> = ({ products, isLoading }) => {
  return (
    <Container>
      <p>Mobile filter container</p>
    </Container>
  );
};

export default MobileFilter;
