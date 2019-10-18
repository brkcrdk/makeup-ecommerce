import React from "react";
import styled from "styled-components";
import device from "../../../../device";
import { IProducts } from "../../../../../store/fetchProducts/types";

interface Props {
  products: IProducts[][];
}
const Container = styled.div`
  @media ${device.mobileS} {
    display: none;
  }
  @media ${device.laptopL} {
    display: block;
  }
`;
const CardsDesktop: React.FC<Props> = ({ products }) => {
  return <Container>This is 4</Container>;
};

export default CardsDesktop;
