import React from "react";
import { Container, Image, Text } from "./BranStyle";
import { Link } from "react-router-dom";
import image from "./brand.png";

const Brand: React.FC = () => {
  return (
    <Container>
      <Link to="/">
        <Image src={image} />
        <Text>Bellezza</Text>
      </Link>
    </Container>
  );
};

export default Brand;
