import React from "react";
import styled from "styled-components";
import { IProducts } from "../../../store/fetchProducts/types";

const Container = styled.div`
  border: 1px solid red;
  display: flex;
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
  border: 1px solid yellow;
`;
const CartName = styled.h4``;
const CartPrice = styled.p``;
const CartRemove = styled.button``;
const Splitter = styled.hr``;

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
  const renderCart = cart.map((item, key) => (
    <>
      <Container>
        <CartImg
          src={item.product.api_featured_image}
          alt={`cart-${item.product.name}`}
        />
        <CartInfo>
          <CartName>{item.product.name}</CartName>
          <CartPrice>
            {item.count}x{item.product.price_sign}
            {item.product.price}
          </CartPrice>
        </CartInfo>
        <CartRemove />
      </Container>
      <Splitter />
    </>
  ));

  return <>{renderCart}</>;
};

export default CartItem;
