import React, { useState } from "react";
import styled from "styled-components";
import { device } from "../../utils";

interface ContainerProps {
  toggle: boolean;
}
const Container = styled.div`
  cursor: pointer;
  height: ${(p: ContainerProps) => (p.toggle ? "10em" : "2.5em")};
  overflow: hidden;
  position: relative;
  transition: height 0.5s;
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
    <Container onClick={handleToggle} toggle={toggle}>
      <p>Mobile filter container</p>
      <p>Mobile filter container</p>
      <li>Burak</li>
      <li>Burak</li>
      <li>Burak</li>
    </Container>
  );
};

export default MobileFilter;
