import React from "react";
import { Container, Header, CardContainer } from "./WantedStyle";
import { randomItems } from "../../../getTypes";
import { useSelector } from "react-redux";
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
  console.log(randomItems(products, 10));
  return (
    <Container>
      <Header>Most Search Items</Header>
      <CardContainer>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
      </CardContainer>
    </Container>
  );
};

export default Wanted;
