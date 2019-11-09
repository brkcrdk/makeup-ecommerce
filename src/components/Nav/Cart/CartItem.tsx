import React from "react";
import styled from "styled-components";
import { IProducts } from "../../../store/fetchProducts/types";

const Container = styled.div`
  display: flex;
`;
const CartImg = styled.img``;
const CartInfo = styled.div``;
const CartPrice = styled.h5``;
const CartCount = styled.p``;
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
  return (
    <Container>
      {/* <CartImg src={img} alt={`cart-${name}`} />
      <CartInfo>
        <CartCount>{count}x </CartCount>
        <CartPrice>
          {priceSign}
          {price}
        </CartPrice>
        <CartRemove>X</CartRemove>
      </CartInfo>
      <Splitter /> */}
    </Container>
  );
};

export default CartItem;
