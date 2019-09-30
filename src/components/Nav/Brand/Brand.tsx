import React from "react";
import { Container, Image, Text } from "./BrandStyle";
import image from "./brand.png";
const Brand: React.FC = () => {
  return (
    <Container>
      <Image src={image} />
      <Text>Bellezza</Text>
    </Container>
  );
};

export default Brand;
