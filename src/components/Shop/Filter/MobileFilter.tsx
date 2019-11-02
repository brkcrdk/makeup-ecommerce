import React, { useState } from "react";
import styled from "styled-components";
import { device } from "../../utils";
import Tags from "./FilterTypes/Tags";
import Price from "./FilterTypes/Price";
import Types from "./FilterTypes/Types";
import Categories from "./FilterTypes/Categories";
import Brands from "./FilterTypes/Brands";
interface ContainerProps {
  toggle: boolean;
}

const Container = styled.div`
  height: ${(p: ContainerProps) => (p.toggle ? "15em" : "2.5em")};
  overflow: hidden;
  position: relative;
  transition: height 0.5s;
  h5 {
    cursor: pointer;
  }
  @media ${device.mobileS} {
    display: block;
  }
  @media ${device.laptop} {
    display: none;
  }
`;
const Wrapper = styled.div`
  @media ${device.mobileS} {
    text-align: center;
    display: grid;
  }
  @media ${device.mobileTablet} {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
`;

interface Props {
  products: [];
  isLoading: boolean;
}

const MobileFilter: React.FC<Props> = ({ products, isLoading }) => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <Container toggle={toggle}>
      <h5 onClick={handleToggle}>Filter by</h5>
      <Wrapper>
        <Types products={products} isLoading={isLoading} />
        <Categories products={products} isLoading={isLoading} />
        <Brands products={products} isLoading={isLoading} />
        <Tags products={products} isLoading={isLoading} />
        <Price />
      </Wrapper>
    </Container>
  );
};

export default MobileFilter;
