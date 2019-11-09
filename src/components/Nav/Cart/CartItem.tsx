import React from "react";
import styled from "styled-components";
import { IProducts } from "../../../store/fetchProducts/types";

const Container = styled.div`
  display: flex;
`;
const CartImg = styled.img``;
const CartInfo = styled.div``;
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
  const totalPrice = totals.reduce((sum = 0, next) => {
    return (sum = sum + next);
  });
  const renderCart = cart.map((item, key) => (
    <Container>
      <CartImg
        src={item.product.api_featured_image}
        alt={`cart-${item.product.name}`}
      />
    </Container>
  ));
  return <>{renderCart}</>;
};

export default CartItem;
