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

interface CardProps {
  title: string;
  image: string;
  name: string;
  price: string;
  priceSign: string;
  key: number;
}

const Card: React.FC<CardProps> = ({
  title,
  image,
  name,
  price,
  priceSign
}) => {
  return (
    // TODO: use card container class to style card
    <Container className="card-container">
      <Img className="card-image" src={image} alt={`${name}-image`} />
      <CardContent>
        <Title className="card-title">{title}</Title>
        <Name className="card-name">{name}</Name>
        <div className="card-content">
          <Price className="card-price">{`${price === null ? "10" : price}${
            priceSign === null ? "$" : priceSign
          }`}</Price>
          <Add className="card-button">Add to Cart</Add>
        </div>
      </CardContent>
    </Container>
  );
};

export default Card;
