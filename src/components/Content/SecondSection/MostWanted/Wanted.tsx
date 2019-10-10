import React from "react";
import { Container, Header } from "./WantedStyle";
import { randomItems } from "../../../getTypes";
import { useSelector } from "react-redux";
interface ProductProps {
  storeProducts: {
    products: [];
  };
}

const Wanted: React.FC = () => {
  const products = useSelector(
    (state: ProductProps) => state.storeProducts.products
  );
  console.log(randomItems(products, 20));
  return (
    <Container>
      <Header>Most Search Items</Header>
    </Container>
  );
};

export default Wanted;
