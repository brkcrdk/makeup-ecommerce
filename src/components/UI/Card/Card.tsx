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
  currency: string;
}

const Card: React.FC<CardProps> = ({ title, image, name, price, currency }) => {
  return (
    // TODO: use card container class to style card
    <Container className="card-container">
      <Img src={image} alt={`${name}-image`} />
      <CardContent>
        <Title>{title}</Title>
        <Name>{name}</Name>
        <div>
          <Price>{`${price} ${currency}`}</Price>
          <Add>Add to Cart</Add>
        </div>
      </CardContent>
    </Container>
  );
};

export default Card;
