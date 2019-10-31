import React from "react";
import { Container } from "./FilterStyle";
import Tags from "./Tags";
import Price from "./Price";
interface Props {
  products: [];
  isLoading: boolean;
}

const Filter: React.FC<Props> = ({ products }) => {
  return (
    <Container>
      <h3>Filter By</h3>
      <hr />
      <Price />
      <Tags products={products} />
    </Container>
  );
};

export default Filter;
