import React from "react";
import { CardContent, Container, Name, Title, Img } from "./CardStyle";
interface Props {}

const Card: React.FC<Props> = () => {
  return (
    <Container>
      <Img src="https://picsum.photos/200/300" alt=".." />
      <CardContent>
        <Title>Product Title</Title>
        <Name>Product Name</Name>
      </CardContent>
    </Container>
  );
};

export default Card;
