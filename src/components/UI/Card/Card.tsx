import React from "react";
import { AddCart } from "../Cart/Carts";
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
import { IProducts } from "../../../store/fetchProducts/types";

interface CardProps {
  product: IProducts;
  // title: string;
  // image: string;
  // name: string;
  // price: string;
  // priceSign: string;
  // key: number;
  // id: number;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ product }) => {
  return (
    // TODO: use card container class to style card
    <Container className="card-container">
      <Link to={`/product/${product.id}`}>
        <Img
          className="card-image"
          src={product.api_featured_image}
          alt={`${product.name}-image`}
        />
      </Link>
      <CardContent>
        <Link to={`/product/${product.id}`}>
          <Title className="card-title">{product.brand}</Title>
          <Name className="card-name">{product.name}</Name>
        </Link>
        <div className="card-content">
          <Price className="card-price">{`$ ${
            product.price === null ? "10" : product.price
          }`}</Price>
          <AddCart product={product} />
          {/* <Add
            className="card-button"
            onClick={() => {
              alert("added");
            }}>
            Add to Cart
          </Add> */}
        </div>
      </CardContent>
    </Container>
  );
};

export default Card;
