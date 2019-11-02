import React from "react";
import styled from "styled-components";
import { device } from "../../utils";
import Tags from "./FilterTypes/Tags";
import Price from "./FilterTypes/Price";
import Types from "./FilterTypes/Types";
import Categories from "./FilterTypes/Categories";
import Brands from "./FilterTypes/Brands";
const Container = styled.div`
  text-align: center;
  @media ${device.mobileS} {
    display: none;
  }
  @media ${device.laptop} {
    display: block;
  }
`;
const FilterWrapper = styled.div`
  display: grid;
  text-align: left;
  padding: 0 1em;
  label {
    margin-bottom: 0.5em;
  }
  select {
    margin-bottom: 1em;
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
      <FilterWrapper>
        <Types products={products} />
        <Categories products={products} />
        <Brands products={products} />
        <Price />
      </FilterWrapper>
      <Tags products={products} />
    </Container>
  );
};

export default DesktopFilter;
