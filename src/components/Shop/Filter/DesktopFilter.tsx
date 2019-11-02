import React from "react";
import styled from "styled-components";
import { device } from "../../utils";
import Tags from "./Tags";
import Price from "./Price";
const Container = styled.div`
  text-align: center;
  @media ${device.mobileS} {
    display: none;
  }
  @media ${device.laptop} {
    display: block;
  }
`;
interface Props {
  products: [];
  isLoading: boolean;
}

const DesktopFilter: React.FC<Props> = ({ products }) => {
  return (
    <Container>
      <h3>Filter By</h3>
      <hr />
      <Price />
      <Tags products={products} />
    </Container>
  );
};

export default DesktopFilter;
