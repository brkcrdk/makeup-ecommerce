import React, { useState } from "react";
import styled from "styled-components";
import { device } from "../../utils";
import Tags from "./Tags";

interface ContainerProps {
  toggle: boolean;
}
const Container = styled.div`
  height: ${(p: ContainerProps) => (p.toggle ? "10em" : "2.5em")};
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
      <Tags products={products} />
    </Container>
  );
};

export default MobileFilter;
