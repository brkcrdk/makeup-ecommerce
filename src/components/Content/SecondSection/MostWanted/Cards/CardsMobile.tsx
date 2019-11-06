import React from "react";
import styled from "styled-components";
import { device } from "../../../../utils";
import Card from "../../../../UI/Card/Card";
import Carousel from "../../../../UI/Carousel/Carousel";
import { IProducts } from "../../../../../store/fetchProducts/types";

const Container = styled.div`
  @media ${device.mobileL} {
    display: none;
  }
`;
interface Props {
  products: IProducts[];
}

const CardsMobile: React.FC<Props> = ({ products }) => {
  return (
    <Container>
      <Carousel display="hide">
        {products.map((slide, key) => (
          <Card
            id={slide.id}
            key={key}
            title={slide.brand}
            image={slide.api_featured_image}
            price={slide.price}
            priceSign={slide.price_sign}
            name={slide.name}
          />
        ))}
      </Carousel>
    </Container>
  );
};

export default CardsMobile;
