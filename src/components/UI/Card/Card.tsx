import React from "react";
import {
  CardContent,
  Container,
  Name,
  Title,
  Img,
  Price,
  Add
} from "./CardStyle";
interface Props {}

const Card: React.FC<Props> = () => {
  return (
    <Container>
      <Img src="https://picsum.photos/200/300" alt=".." />
      <CardContent>
        <Title>Product Title Product Titles</Title>
        <Name>Product Name Product Name</Name>
        <div>
          <Price>52323$</Price>
          <Add>Add to Cart</Add>
        </div>
      </CardContent>
    </Container>
  );
};

export default Card;
