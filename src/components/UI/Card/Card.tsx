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
import { Link } from "react-router-dom";

interface CardProps {
  title: string;
  image: string;
  name: string;
  price: string;
  priceSign: string;
  key: number;
  id: number;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  title,
  image,
  name,
  price,
  priceSign,
  onClick,
  id
}) => {
  return (
    // TODO: use card container class to style card
    <Container className="card-container">
      <Link to={`/product/${id}`}>
        <Img className="card-image" src={image} alt={`${name}-image`} />
      </Link>
      <CardContent>
        <Link to={`/product/${id}`}>
          <Title className="card-title">{title}</Title>
          <Name className="card-name">{name}</Name>
        </Link>
        <div className="card-content">
          <Price className="card-price">{`$ ${
            price === null ? "10" : price
          }`}</Price>
          <Add
            className="card-button"
            onClick={() => {
              alert("added");
            }}>
            Add to Cart
          </Add>
        </div>
      </CardContent>
    </Container>
  );
};

export default Card;
