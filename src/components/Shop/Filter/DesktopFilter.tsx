import React from "react";
import styled from "styled-components";
import { device } from "../../utils";
import Tags from "./FilterTypes/Tags";
import Price from "./FilterTypes/Price";
import Types from "./FilterTypes/Types";
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
      <Types products={products} />
      <Price />
      <Tags products={products} />
    </Container>
  );
};

export default DesktopFilter;
