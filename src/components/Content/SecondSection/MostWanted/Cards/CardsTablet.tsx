import React from "react";
import styled from "styled-components";
import device from "../../../../device";
import Card from "../../../../UI/Card/Card";
import Carousel from "../../../../UI/Carousel/Carousel";
import { IProducts } from "../../../../../store/fetchProducts/types";

interface Props {
  products: IProducts[][];
}
const Container = styled.div`
  @media ${device.mobileS} {
    display: none;
  }
  @media ${device.mobileTablet} {
    display: flex;
  }
  @media ${device.laptopL} {
    display: none;
  }
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    @media ${device.mobileTablet} {
      height: 8em;
    }
  }
  .card-container {
    @media ${device.laptop} {
      width: 15em;
    }
  }
`;
const CardsTablet: React.FC<Props> = ({ products }) => {
  return (
    <Container>
      <Carousel display="hide">
        {products.map((arr, key) => (
          <CardContainer key={key}>
            {arr.map((slide, key) => (
              <Card key={key} />
            ))}
          </CardContainer>
        ))}
      </Carousel>
    </Container>
  );
};

export default CardsTablet;
