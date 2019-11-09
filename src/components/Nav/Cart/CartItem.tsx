import React from "react";
import styled from "styled-components";
import { colours } from "../../utils";
import { IProducts } from "../../../store/fetchProducts/types";

const Container = styled.div`
  display: flex;
  margin-top: -1em;
  justify-content: space-evenly;
  align-items: center;
  overflow: hidden;
`;
const CartImg = styled.img`
  width: 3em;
  height: 3em;
`;
const CartInfo = styled.div`
  padding: 1em;
  font-size: 0.9em;
  display: grid;
  grid-gap: 0.2em;
`;
const CartName = styled.h4``;
const CartPrice = styled.p`
  margin-top: -1em;
  text-align: left;
`;
const CartRemove = styled.button`
  text-align: right;
`;
const Splitter = styled.hr`
  margin-top: -1em;
  width: 95%;
  border: 0.3px solid ${colours.secondaryText};
`;

interface Props {
  cart: { product: IProducts; count: number }[];
}

const CartItem: React.FC<Props> = ({ cart }) => {
  const totals = cart.map((item) => {
    const price = parseFloat(item.product.price);
    return price * item.count;
  });
  const totalPrice = totals.reduce((sum, next) => {
    return (sum = sum + next);
  });
  const renderCart = cart.map((item, key) => {
    const priceSign =
      item.product.price_sign === null ? "$" : item.product.price_sign;
    return (
      <>
        <Container>
          <CartImg
            src={item.product.api_featured_image}
            alt={`cart-${item.product.name}`}
          />
          <CartInfo>
            <CartName>{item.product.name}</CartName>
            <CartPrice>
              {item.count}x{priceSign}
              {item.product.price}
            </CartPrice>
          </CartInfo>
          <CartRemove>X</CartRemove>
        </Container>
        <Splitter />
      </>
    );
  });

  return <>{renderCart}</>;
};

export default CartItem;
