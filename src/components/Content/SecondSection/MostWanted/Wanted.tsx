import React from "react";
import { Container, Header } from "./WantedStyle";
import { randomItems } from "../../../getTypes";
import handleProducts from "./handleProducts";
import { useSelector } from "react-redux";
import Carousel from "../../../UI/Carousel/Carousel";
import Card from "../../../UI/Card/Card";
interface ProductProps {
  storeProducts: {
    products: [];
  };
}

const Wanted: React.FC = () => {
  const products = useSelector(
    (state: ProductProps) => state.storeProducts.products
  );
  const randomProducts = randomItems(products);
  console.log(handleProducts(randomProducts, 2));
  return (
    <Container>
      <Header>Most Search Items</Header>
      <Carousel>
        <Card />
      </Carousel>
    </Container>
  );
};

export default Wanted;
