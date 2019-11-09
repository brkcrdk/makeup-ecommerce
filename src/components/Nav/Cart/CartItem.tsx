import React from "react";
import styled from "styled-components";
import { IProducts } from "../../../store/fetchProducts/types";

const Container = styled.div`
  display: flex;
  overflow: hidden;
`;
const CartImg = styled.img`
  width: 100%;
`;
const CartInfo = styled.div`
  display: grid;
`;
const CartName = styled.h5``;
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
    <Container>
      <CartImg
        src={item.product.api_featured_image}
        alt={`cart-${item.product.name}`}
      />
      <CartInfo>
        <CartName>{item.product.name}</CartName>
      </CartInfo>
    </Container>
  ));
  return <>{renderCart}</>;
};

export default CartItem;
